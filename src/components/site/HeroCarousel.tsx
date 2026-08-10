import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroImg from "@/assets/hero-factory.jpg";
import denimImg from "@/assets/denim.jpg";
import knitImg from "@/assets/gallery-knitting-unit.jpg";
import taglineAsset from "@/assets/aspl-tagline.png.asset.json";

type Slide = {
  image: string;
  alt: string;
  eyebrow?: string;
  eyebrowImage?: { url: string; alt: string; width: number; height: number };
  title: React.ReactNode;
  body: string;
};

const slides: Slide[] = [
  {
    image: heroImg,
    alt: "Skilled workers stitching garments inside the ASPL Global apparel manufacturing facility",
    eyebrowImage: { url: taglineAsset.url, alt: "Think Fashion · Think ASPL Global", width: 720, height: 48 },
    title: (
      <>
        Manufacturing Excellence for <span className="text-accent">Global Fashion Brands</span>
      </>
    ),
    body: "Premium Apparel and Accessories buying house with own & operated Knit Factory plus more than 25 dedicated vendors making robust supply chain.",
  },
  {
    image: knitImg,
    alt: "Circular knitting machines running jersey fabric at the ASPL knits unit",
    eyebrow: "Design to Delivery",
    title: (
      <>
        Own Knit Factory. <span className="text-accent">25+ Partner Units.</span>
      </>
    ),
    body: "A vertically supported supply chain built for smaller MOQs, shorter lead times and consistent quality across every programme.",
  },
  {
    image: denimImg,
    alt: "Denim jeans and jackets from the ASPL wash and fit library",
    eyebrow: "ASPL Denim Solutions",
    title: (
      <>
        Wash, Fabric and Fit <span className="text-accent">Libraries in One Studio</span>
      </>
    ),
    body: "Seasonal shades backed by market research, sustainable trims and the right commercial sense for fast fashion and D2C brands.",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section className="relative min-h-[92vh] overflow-hidden" aria-roledescription="carousel">
      {slides.map((s, i) => (
        <img
          key={s.alt}
          src={s.image}
          alt={s.alt}
          width={1920}
          height={1088}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-[image:var(--gradient-navy)] opacity-72" />

      <div className="container-x relative flex min-h-[92vh] flex-col justify-center py-32 text-primary-foreground">
        {slides.map((s, i) =>
          i === index ? (
            <div key={s.eyebrow}>
              <Reveal>
                <p className="eyebrow">{s.eyebrow}</p>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-7xl">{s.title}</h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                  {s.body}
                </p>
              </Reveal>
            </div>
          ) : null,
        )}

        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-[image:var(--gradient-gold)] px-7 py-4 text-sm font-semibold text-accent-foreground shadow-[var(--shadow-lift)] transition-transform duration-300 hover:-translate-y-1"
            >
              Request a Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 bg-primary-foreground/5 px-7 py-4 text-sm font-semibold text-primary-foreground backdrop-blur-md transition-colors hover:bg-primary-foreground/15"
            >
              Explore Our Strength
            </Link>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="mt-14 flex items-center gap-5">
          <div className="flex gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.alt}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-10 bg-accent" : "w-4 bg-primary-foreground/35 hover:bg-primary-foreground/60"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="rounded-full border border-primary-foreground/25 p-2.5 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="rounded-full border border-primary-foreground/25 p-2.5 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
