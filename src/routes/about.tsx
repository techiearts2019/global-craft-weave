import { createFileRoute } from "@tanstack/react-router";
import studioImg from "@/assets/design-studio.jpg";
import aboutHero from "@/assets/gallery-quality-check.jpg?w=1600&format=webp";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead } from "@/components/site/SiteShell";
import { leadership, stats, valueProps } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About ASPL Global LLP — Design to Delivery Manufacturer" },
      {
        name: "description",
        content:
          "ASPL Global LLP is an apparel manufacturer and exporter in Tirupur, India, with an in-house knits factory, 25+ partner units and 70+ years of leadership expertise.",
      },
      { property: "og:title", content: "About ASPL Global LLP" },
      {
        property: "og:description",
        content:
          "Our vision, D2D model, leadership team and manufacturing network across India.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Design to Delivery, under one accountable partner"
        subtitle="ASPL Global LLP drives product design, development and manufacturing through a robust D2D model — an own knits/jersey factory plus a network of 25+ partner factories."
        image={aboutHero}
        imageAlt="Quality inspector checking a finished garment under inspection lighting"
      />

      <section className="bg-background py-24">
        <div className="container-x grid items-start gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Company Overview"
              title="Built for fast fashion and D2C businesses"
              body="Our supply chain is designed for smaller MOQs and shorter lead times, without compromising on the finish global brands expect. From trend analysis and tech-packs to sampling, production, quality control and shipping, one team owns the outcome."
            />
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-lg text-primary">Vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To be the most dependable design-to-delivery partner for
                  fashion brands sourcing from India.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-primary">Mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Combine creative services with commercial design sense,
                  transparent WIP visibility and on-time delivery on every order.
                </p>
              </div>
              <div>
                <h3 className="text-lg text-primary">Core Values</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Craftsmanship, transparency, ethical manufacturing, sustained
                  partnerships and accountability at every stage.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <img
              src={studioImg}
              alt="ASPL design studio with fabric swatches, colour cards and 3D garment software"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-xl shadow-[var(--shadow-lift)]"
            />
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label} className="surface-card p-6">
                  <p className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary">
                    {s.value}
                    {s.suffix}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Leadership"
              title="Co-founders with 70+ years of combined apparel expertise"
              body="Our leadership drives innovation through collaborative problem-solving and delivering exceptional results."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {leadership.map((l, i) => (
              <Reveal key={l.name} delay={i * 100}>
                <article className="surface-card surface-card-hover h-full p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-navy)] font-[family-name:var(--font-display)] text-lg font-bold text-accent">
                    {l.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <h3 className="mt-6 text-lg text-primary">{l.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {l.role}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Who We Serve"
              title="Value delivered across the chain"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {valueProps.map((v, i) => (
              <Reveal key={v.audience} delay={i * 80}>
                <article className="surface-card surface-card-hover h-full p-8">
                  <h3 className="text-base text-primary">{v.audience}</h3>
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
    </>
  );
}
