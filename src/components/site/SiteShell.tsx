import { useEffect, useState, type ReactNode } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { company } from "@/lib/site-data";


export function SiteShell({ children }: { children: ReactNode }) {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />

      <a
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 left-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-success p-3.5 text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle size={22} />
      </a>

      {showTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="animate-fade-in fixed right-6 bottom-6 z-40 rounded-full bg-primary p-3.5 text-primary-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[image:var(--gradient-navy)] pt-36 pb-20 text-primary-foreground">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl"
      />
      <div className="container-x relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          {subtitle}
        </p>
        <span className="gold-rule mt-8" />
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  body,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={`mt-4 text-3xl leading-tight md:text-4xl ${
          light ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
