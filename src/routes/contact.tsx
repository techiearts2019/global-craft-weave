import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead } from "@/components/site/SiteShell";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact ASPL Global LLP — Tirupur, India" },
      {
        name: "description",
        content:
          "Send your apparel manufacturing brief to ASPL Global LLP, Tirupur, Tamil Nadu. Email dilshad@aspiglobal.com or call +91 8810663100.",
      },
      { property: "og:title", content: "Contact ASPL Global LLP" },
      {
        property: "og:description",
        content:
          "Request a quote, sampling or the company profile from our Tirupur team.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const fieldClass =
  "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/25";

function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next collection"
        subtitle="Share your brief — categories, quantities and timelines — and our team will respond with fabric options, costing and a delivery plan."
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <SectionHead eyebrow="Inquiry Form" title="Send us your requirement" />
            <form
              className="mt-10 grid gap-6 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                const form = e.currentTarget;
                setTimeout(() => {
                  setSending(false);
                  form.reset();
                  toast.success("Thank you — your inquiry has been recorded.", {
                    description: `Our team will reply to you shortly. For urgent requirements, call ${company.phone}.`,
                  });
                }, 700);
              }}
            >
              <label className="text-sm font-medium text-primary">
                Full name
                <input required name="name" className={fieldClass} placeholder="Your name" />
              </label>
              <label className="text-sm font-medium text-primary">
                Company
                <input name="company" className={fieldClass} placeholder="Brand / company" />
              </label>
              <label className="text-sm font-medium text-primary">
                Email
                <input required type="email" name="email" className={fieldClass} placeholder="you@company.com" />
              </label>
              <label className="text-sm font-medium text-primary">
                Phone
                <input name="phone" className={fieldClass} placeholder="+00 000 000 0000" />
              </label>
              <label className="text-sm font-medium text-primary sm:col-span-2">
                Product category
                <select name="category" className={fieldClass} defaultValue="">
                  <option value="" disabled>
                    Select a category
                  </option>
                  {["Menswear", "Womenswear", "Kidswear", "Denim", "Outerwear", "Uniforms", "Accessories"].map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
              <label className="text-sm font-medium text-primary sm:col-span-2">
                Your requirement
                <textarea
                  required
                  name="message"
                  rows={5}
                  className={fieldClass}
                  placeholder="Styles, quantities, fabric preferences and target delivery window"
                />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="rounded-lg bg-[image:var(--gradient-gold)] px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
              >
                {sending ? "Sending…" : "Submit Inquiry"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="surface-card p-8">
              <h2 className="text-lg text-primary">Factory &amp; office</h2>
              <span className="gold-rule mt-4" />
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3 text-muted-foreground">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                  {company.address}
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <Mail size={18} className="shrink-0 text-accent" />
                  <a href={`mailto:${company.email}`} className="hover:text-primary">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <Phone size={18} className="shrink-0 text-accent" />
                  <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                  Monday – Saturday, 9:30 AM – 6:30 PM IST
                </li>
              </ul>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-success px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>

            <div className="surface-card mt-6 overflow-hidden">
              <iframe
                title="ASPL Global LLP location map"
                loading="lazy"
                className="h-72 w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Nochipalayam,+Veerapandi,+Tirupur+641605,+Tamil+Nadu,+India&output=embed"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
