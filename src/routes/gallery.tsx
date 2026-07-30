import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { PageHero } from "@/components/site/SiteShell";
import galleryHero from "@/assets/hero-factory.jpg?w=1600&format=webp";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Factory Floor & Product Range | ASPL Global" },
      {
        name: "description",
        content:
          "Browse the ASPL Global gallery: sewing floors, knits units, quality inspection and packing, plus menswear, womenswear, kidswear, denim and uniform ranges.",
      },
      { property: "og:title", content: "Factory & Product Gallery — ASPL Global LLP" },
      {
        property: "og:description",
        content:
          "A filterable look inside our manufacturing units and across every apparel category we produce.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside our factories and across our product range"
        subtitle="Filter by category and open any frame for a full-size preview — from sewing floors and quality inspection to the garments we deliver to global brands."
        image={galleryHero}
        imageAlt="ASPL Global partner garment manufacturing facility"
      />

      <section className="bg-background py-24">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
