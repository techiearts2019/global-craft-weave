import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import denimImg from "@/assets/denim.jpg";
import fabricImg from "@/assets/fabric.jpg";
import productsHero from "@/assets/gallery-womenswear.jpg?w=1600&format=webp";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, SectionHead } from "@/components/site/SiteShell";
import { categories } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Products — Apparel, Denim, Kidswear & Uniforms | ASPL Global" },
      {
        name: "description",
        content:
          "One-stop sourcing across menswear, womenswear, kidswear, denim, outerwear, uniforms and fashion accessories from ASPL Global LLP.",
      },
      { property: "og:title", content: "Product Categories — ASPL Global LLP" },
      {
        property: "og:description",
        content:
          "Graphic tees, polos, shirts, innerwear, ethnicwear, denim, outerwear, kidswear and complete uniform programmes.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
});

const outerwear = [
  "Denim Jacket", "Cotton Jacket", "Reversible", "Fleece Jacket", "Heat-Tech Jacket",
  "Kids Jacket", "Down Jacket", "Varsity Jacket", "Leather Jacket", "Bomber Jacket",
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One-stop sourcing across every apparel category"
        subtitle="Fabric to finished garment — men, women and kids, plus uniforms and fashion accessories, produced across our own knits unit and partner facilities."
        image={productsHero}
        imageAlt="Women's dresses and tops on a studio clothing rack"
      />

      <section className="bg-background py-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 80}>
              <article className="surface-card surface-card-hover group h-full p-8">
                <h2 className="text-lg text-primary">{cat.name}</h2>
                <span className="gold-rule mt-4" />
                <ul className="mt-6 space-y-2.5">
                  {cat.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <img
              src={denimImg}
              alt="Denim jeans and jackets from the ASPL denim programme"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-xl shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHead
              eyebrow="Outerwear Range"
              title="Ten jacket constructions, one supply chain"
              body="From denim and bomber to down, heat-tech and varsity — developed with our fit library and produced to your fit block."
            />
            <div className="mt-8 flex flex-wrap gap-2.5">
              {outerwear.map((o) => (
                <span
                  key={o}
                  className="rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-primary"
                >
                  {o}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Fabrics"
              title="A digital fabric catalogue backed by mill partnerships"
              body="CAD and fabric design solutions, strategic partnerships with mills in India and globally, and certified sources bringing sustainable, innovative fabrics to market through expert R&D."
            />
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-gold)] px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-1"
            >
              Request the catalogue <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={fabricImg}
              alt="Premium fabric swatches from the ASPL fabric library"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-xl shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
