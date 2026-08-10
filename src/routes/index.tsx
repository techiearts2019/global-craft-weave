import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Boxes, Gauge, Layers, Leaf, Palette, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-factory.jpg";
import fabricImg from "@/assets/fabric.jpg";
import denimImg from "@/assets/denim.jpg";
import studioImg from "@/assets/design-studio.jpg";
import { Counter, Reveal } from "@/components/site/Reveal";
import { SectionHead } from "@/components/site/SiteShell";
import {
  brands,
  capabilities,
  categories,
  certifications,
  process,
  stats,
  sustainability,
  valueProps,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ASPL Global LLP — Apparel Manufacturing for Global Brands" },
      {
        name: "description",
        content:
          "Design-to-delivery apparel manufacturing and export from Tirupur, India. Knits, denim, outerwear, kidswear and uniforms for global fashion brands.",
      },
      {
        property: "og:title",
        content: "ASPL Global LLP — Apparel Manufacturing for Global Brands",
      },
      {
        property: "og:description",
        content:
          "Design to Delivery services, 25+ partner factories, small MOQs and short lead times for fast fashion and D2C brands.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const whyUs = [
  {
    icon: Palette,
    title: "Retail-Grade Design",
    body: "Designers from retail backgrounds co-create collections from concept to tech-pack.",
  },
  { icon: Gauge, title: "Short Lead Times", body: "A supply chain built for fast fashion and D2C with smaller MOQs." },
  { icon: Layers, title: "One-Stop Sourcing", body: "Knits, wovens, denim, outerwear, kidswear, ethnic and uniforms." },
  {
    icon: ShieldCheck,
    title: "Total Quality Management",
    body: "Dedicated QC and manufacturing supervision teams at every facility.",
  },
  { icon: Boxes, title: "25+ Partner Factories", body: "Own knits/jersey factory plus a vetted network across India." },
  {
    icon: Leaf,
    title: "Sustainable Sourcing",
    body: "Recycled yarns, eco chemicals and carbon neutral partner units.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <HeroCarousel />


      {/* Stats */}
      <section className="border-b border-border bg-background">
        <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-primary md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-background py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={studioImg}
                alt="ASPL designer developing a collection with fabric swatches and 3D garment software"
                width={1200}
                height={900}
                loading="lazy"
                className="rounded-xl shadow-[var(--shadow-lift)]"
              />
              <div className="absolute -right-4 -bottom-8 hidden max-w-56 rounded-xl bg-primary p-6 text-primary-foreground shadow-[var(--shadow-lift)] sm:block">
                <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-accent">D2D</p>
                <p className="mt-2 text-xs leading-relaxed text-primary-foreground/70">
                  Design to Delivery — one accountable partner from concept to warehouse.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <SectionHead
              eyebrow="About ASPL Global"
              title="A design-led manufacturer built for fast fashion and D2C"
              body="We drive product design, development and manufacturing through our robust D2D model. Our Strength include our own knits/jersey factory and a network of over 25 partner factories — a supply chain built for smaller MOQs and shorter lead times."
            />
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "AI & tech-enabled trend analysis",
                "CLO 3D enabled design processes",
                "Dedicated fit development tech team",
                "Real-time WIP visibility via ERP",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm text-foreground">
                  <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              More about the company <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Our Strength */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Our Core Strength"
              title="Everything from trend to trans-shipment"
              body="Four pillars carry every programme we run for brands, distributors and retail chains."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <article className="surface-card surface-card-hover h-full p-8">
                  <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-accent">0{i + 1}</p>
                  <h3 className="mt-3 text-xl text-primary">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {c.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-background py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="One-Stop Sourcing"
              title="Product categories across men, women and kids"
              body="From graphic tees and polos to denim, outerwear, ethnicwear and complete uniform programmes."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 80}>
                <Link to="/products" className="surface-card surface-card-hover group block h-full overflow-hidden p-8">
                  <h3 className="text-lg text-primary">{cat.name}</h3>
                  <span className="gold-rule mt-4" />
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-md bg-secondary px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:bg-accent/12 group-hover:text-primary"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore category
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Denim split */}
      <section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2">
          <img
            src={denimImg}
            alt="Denim jeans and jackets from the ASPL wash and fit library"
            width={1200}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="px-6 py-20 sm:px-14 lg:py-28">
            <Reveal>
              <SectionHead
                light
                eyebrow="ASPL Denim Solutions"
                title="Wash, fabric and fit libraries in one studio"
                body="Our sample library carries the trendiest seasonal shades, backed by market research and the right commercial sense."
              />
              <dl className="mt-10 grid gap-8 sm:grid-cols-2">
                {[
                  ["Wash & Design Library", "Seasonal shades backed by market research."],
                  ["Fabric Library", "Vast base and design library optimised to your brief."],
                  ["Fit Library", "Fits and silhouettes built on the latest references."],
                  ["Sustainable Story", "Best-in-class trims via expert R&D and vendor network."],
                ].map(([t, b]) => (
                  <div key={t}>
                    <dt className="font-[family-name:var(--font-display)] text-sm font-semibold text-accent">{t}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{b}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Why Choose ASPL" title="A partner brands keep coming back to" />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <article className="surface-card surface-card-hover h-full p-7">
                  <span className="inline-flex rounded-lg bg-accent/12 p-3 text-accent">
                    <w.icon size={22} />
                  </span>
                  <h3 className="mt-5 text-base text-primary">{w.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-background py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Our Process"
              title="From first conversation to your warehouse"
              body="Tailored service plans that get designs and samples made exactly to your requirement."
            />
          </Reveal>
          <ol className="relative mt-14 border-l border-border pl-8 sm:pl-12">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 60}>
                <li className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-accent bg-background text-[10px] font-semibold text-accent sm:-left-[57px]">
                    {i + 1}
                  </span>
                  <h3 className="text-lg text-primary">{p.step}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Value Proposition" title="Built to serve every side of the supply chain" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => (
              <Reveal key={v.audience} delay={i * 80}>
                <article className="surface-card surface-card-hover h-full p-7">
                  <h3 className="text-base text-primary">{v.audience}</h3>
                  <span className="gold-rule mt-4" />
                  <ul className="mt-5 space-y-3">
                    {v.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-background py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHead eyebrow="Sustainable Solutions" title="Responsible sourcing across every programme" />
            <div className="mt-10 space-y-6">
              {sustainability.map((s) => (
                <div key={s.title} className="border-l-2 border-accent/40 pl-5">
                  <h3 className="text-base text-primary">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={fabricImg}
              alt="Close-up of premium cotton fabric swatches used in ASPL programmes"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-xl shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-secondary py-20">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Certifications" title="Compliance at our manufacturing facilities" />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {certifications.map((c, i) => (
              <Reveal key={c} delay={i * 40}>
                <span className="surface-card surface-card-hover inline-block px-5 py-3 text-sm font-medium text-primary">
                  {c}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section className="overflow-hidden bg-background py-20">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Clients" title="Brands that we are associated with" />
          </Reveal>
        </div>
        <div className="relative mt-12 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex w-max gap-4">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={`${b}-${i}`}
                className="surface-card whitespace-nowrap px-8 py-5 font-[family-name:var(--font-display)] text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-navy)] py-24 text-primary-foreground">
        <div aria-hidden className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
        <div className="container-x relative text-center">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl leading-tight md:text-5xl">
              Ready to manufacture your next collection?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/75">
              Share your brief and our team will come back with fabric options, costing and a delivery plan.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-gold)] px-8 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
            >
              Request a Free Consultation <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
