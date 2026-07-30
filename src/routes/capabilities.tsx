import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-factory.jpg";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead } from "@/components/site/SiteShell";
import { capabilities, certifications, process } from "@/lib/site-data";

export const Route = createFileRoute("/capabilities")({
  component: Capabilities,
  head: () => ({
    meta: [
      { title: "Capabilities & Manufacturing — ASPL Global LLP" },
      {
        name: "description",
        content:
          "Design, sampling, production, fabrics, WIP visibility and quality compliance — how ASPL Global manufactures for global fashion brands.",
      },
      { property: "og:title", content: "Manufacturing Capabilities — ASPL Global LLP" },
      {
        property: "og:description",
        content:
          "Plug n' Play model, 25+ partner factories, ERP-based order tracking and international certifications.",
      },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
});

const pnp = [
  "Pre-decided base quality and colours basis client's projection",
  "Design creation basis client's projection",
  "Production in shorter lead times",
  "In-house quality checks and inspections",
  "Shipping and delivery to client's warehouse",
];

function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="Manufacturing built on visibility and control"
        subtitle="Sampling and production across categories, dedicated tech teams for fit development, and real-time status at every stage of the project."
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="surface-card surface-card-hover h-full p-8">
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-accent">
                  0{i + 1}
                </p>
                <h2 className="mt-3 text-xl text-primary">{c.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
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
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="grid lg:grid-cols-2">
          <div className="px-6 py-20 sm:px-14 lg:py-28">
            <Reveal>
              <SectionHead
                light
                eyebrow="Plug n' Play Model"
                title="Small MOQs, basic silhouettes, fast turnarounds"
                body="Well-suited to D2C and fast fashion brands. Base quality fabric and colours are pre-decided, and multiple styles are generated through minor cosmetic changes like digital prints, over-dye and other applications."
              />
              <ul className="mt-10 space-y-4">
                {pnp.map((p, i) => (
                  <li key={p} className="flex gap-4 text-sm text-primary-foreground/80">
                    <span className="font-[family-name:var(--font-display)] text-xs font-bold text-accent">
                      0{i + 1}
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <img
            src={heroImg}
            alt="Production floor at an ASPL partner manufacturing facility"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Production Journey"
              title="Every stage tracked, every stage owned"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 70}>
                <article className="surface-card surface-card-hover h-full p-7">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-accent/35">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-base text-primary">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Certifications"
              title="Compliance held at our manufacturing facilities"
              body="Social audits, quality systems and material standards maintained across our own unit and partner network."
            />
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
    </>
  );
}
