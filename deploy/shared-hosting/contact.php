<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function readField(string $name, int $maxBytes): ?string
{
    $value = $_POST[$name] ?? '';
    if (!is_string($value)) {
        return null;
    }

    $value = trim($value);
    if (strlen($value) > $maxBytes) {
        return null;
    }

    return $value;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Please submit the inquiry form.']);
}

// Quietly discard simple bot submissions without confirming a real inquiry.
if (readField('website', 200) !== '') {
    respond(200, ['success' => true]);
}

$name = readField('name', 120);
$business = readField('company', 160);
$email = readField('email', 254);
$phone = readField('phone', 60);
$category = readField('category', 100);
$message = readField('message', 8000);

if (
    $name === null || $name === '' ||
    $business === null ||
    $email === null || filter_var($email, FILTER_VALIDATE_EMAIL) === false ||
    $phone === null ||
    $category === null ||
    $message === null || $message === ''
) {
    respond(422, ['success' => false, 'message' => 'Please check the required fields and try again.']);
}

$recipient = 'dilshad@aspiglobal.com';
$subject = 'New website inquiry - ASPL Global LLP';
$body = implode("\n", [
    'A new inquiry was submitted on aspiglobal.com.',
    '',
    'Name: ' . $name,
    'Company: ' . ($business !== '' ? $business : 'Not provided'),
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Product category: ' . ($category !== '' ? $category : 'Not provided'),
    '',
    'Requirement:',
    $message,
]);
$headers = implode("\r\n", [
    'From: ASPL Global LLP <' . $recipient . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!mail($recipient, $subject, $body, $headers)) {
    respond(503, [
        'success' => false,
        'message' => 'Email delivery is unavailable right now. Please contact ASPL Global directly.',
    ]);
}

respond(200, ['success' => true]);