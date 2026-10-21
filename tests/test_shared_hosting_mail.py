import json
import os
import subprocess
import tempfile
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
HANDLER = PROJECT_ROOT / "deploy/shared-hosting/contact.php"


class SharedHostingMailTest(unittest.TestCase):
    def run_handler(self, mail_exit_code: int) -> tuple[int, dict]:
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = Path(temp_dir)
            sendmail = temp_path / "sendmail-stub"
            sendmail.write_text(
                "#!/bin/sh\ncat >/dev/null\nexit \"${TEST_SENDMAIL_EXIT_CODE:-0}\"\n",
                encoding="utf-8",
            )
            sendmail.chmod(0o755)

            runner = temp_path / "run-handler.php"
            runner.write_text(
                "<?php\n"
                "$_SERVER['REQUEST_METHOD'] = 'POST';\n"
                "$_POST = [\n"
                "  'name' => 'Jordan Buyer',\n"
                "  'company' => 'Example Apparel',\n"
                "  'email' => 'buyer@example.test',\n"
                "  'phone' => '+1 555 0100',\n"
                "  'category' => 'Menswear',\n"
                "  'message' => 'Please share a production quotation.',\n"
                "];\n"
                "require getenv('CONTACT_HANDLER');\n",
                encoding="utf-8",
            )

            environment = os.environ.copy()
            environment["CONTACT_HANDLER"] = str(HANDLER)
            environment["TEST_SENDMAIL_EXIT_CODE"] = str(mail_exit_code)
            result = subprocess.run(
                ["php", "-d", f"sendmail_path={sendmail}", str(runner)],
                check=False,
                capture_output=True,
                text=True,
                env=environment,
            )
            return result.returncode, json.loads(result.stdout)

    def test_success_depends_on_mail_service_accepting_the_message(self) -> None:
        accepted_status, accepted_payload = self.run_handler(mail_exit_code=0)
        self.assertEqual(accepted_status, 0)
        self.assertTrue(accepted_payload["success"])

        rejected_status, rejected_payload = self.run_handler(mail_exit_code=1)
        self.assertEqual(rejected_status, 0)
        self.assertFalse(rejected_payload["success"])
        self.assertIn("unavailable", rejected_payload["message"])


if __name__ == "__main__":
    unittest.main()