import { createFileRoute } from "@tanstack/react-router";
import fabricImg from "@/assets/fabric.jpg";
import susHero from "@/assets/gallery-knitting-unit.jpg?w=1600&format=webp";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead } from "@/components/site/SiteShell";
import { certifications, sustainability } from "@/lib/site-data";

export const Route = createFileRoute("/sustainability")({
  component: Sustainability,
  head: () => ({
    meta: [
      { title: "Sustainability — Recycled, Ethical & Carbon Neutral | ASPL Global" },
      {
        name: "description",
        content:
          "Recycled yarns and trims, eco chemicals, carbon neutral partner factories and sustainable vendor collaboration at ASPL Global LLP.",
      },
      { property: "og:title", content: "Sustainable Solutions — ASPL Global LLP" },
      {
        property: "og:description",
        content:
          "How ASPL Global builds responsible sourcing and recycled product ranges into every programme.",
      },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
});

function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Sustainable solutions, built into the programme"
        subtitle="Recycled materials, green chemistry and carbon neutral partner factories — sustainability as a sourcing decision, not an afterthought."
        image={susHero}
        imageAlt="Knitting machinery producing cotton jersey fabric rolls"
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sustainability.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="surface-card surface-card-hover h-full p-8">
                <h2 className="text-base text-primary">{s.title}</h2>
                <span className="gold-rule mt-4" />
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <img
              src={fabricImg}
              alt="Sustainable fabric swatches sourced through certified mills"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-xl shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHead
              eyebrow="Compliance"
              title="Certified sources, audited factories"
              body="Certified sources bring sustainable, innovative fabrics to market through expert R&D, while social and quality audits are maintained across the network."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-primary"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
