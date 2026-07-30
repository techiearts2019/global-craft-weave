import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company, nav } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl font-bold">
            ASPL <span className="text-accent">Global</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            {company.tagline} Design to delivery services for global fashion
            brands — apparels, accessories and uniforms.
          </p>
          <span className="gold-rule mt-6" />
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-accent">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/70 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-accent">
            Capabilities
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/70">
            <li>Design &amp; Tech-pack</li>
            <li>Sampling &amp; Production</li>
            <li>Fabric Sourcing</li>
            <li>Denim Solutions</li>
            <li>Uniform Programmes</li>
            <li>Quality &amp; Compliance</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.18em] uppercase text-accent">
            Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-primary-foreground/70">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-accent" />
              <a href={`mailto:${company.email}`} className="hover:text-accent">
                {company.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-accent" />
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="hover:text-accent"
              >
                {company.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-primary-foreground/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>{company.website}</p>
        </div>
      </div>
    </footer>
  );
}
