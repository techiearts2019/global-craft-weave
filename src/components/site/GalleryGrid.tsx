import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { galleryFilters, galleryItems, type GalleryItem } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [filter, setFilter] = useState<string>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items: GalleryItem[] = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((i) => i.category === filter),
    [filter],
  );

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (dir: number) =>
      setActiveIndex((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, step]);

  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="flex flex-wrap gap-2.5">
        {galleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => {
              setFilter(f.id);
              setActiveIndex(null);
            }}
            aria-pressed={filter === f.id}
            className={cn(
              "rounded-full border px-5 py-2.5 text-xs font-semibold tracking-wide uppercase transition-all duration-300",
              filter === f.id
                ? "border-transparent bg-[image:var(--gradient-gold)] text-accent-foreground shadow-[var(--shadow-soft)]"
                : "border-border bg-background text-muted-foreground hover:border-accent/60 hover:text-primary",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-12 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
        {items.map((item, i) => (
          <Reveal key={item.src} delay={(i % 6) * 70}>
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group surface-card surface-card-hover mb-6 block w-full overflow-hidden text-left break-inside-avoid p-0"
              aria-label={`Open ${item.title} in lightbox`}
            >
              <span
                className="relative block overflow-hidden bg-muted"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <img
                  src={item.src}
                  srcSet={item.srcSet}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  loading={i < 3 ? "eager" : "lazy"}
                  fetchPriority={i < 3 ? "high" : "low"}
                  decoding="async"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute inset-0 bg-[image:var(--gradient-navy)] opacity-0 transition-opacity duration-500 group-hover:opacity-70" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span>
                    <span className="eyebrow">{item.categoryLabel}</span>
                    <span className="mt-1.5 block font-[family-name:var(--font-display)] text-base font-semibold text-primary-foreground">
                      {item.title}
                    </span>
                  </span>
                  <Expand size={20} className="shrink-0 text-accent" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-primary/95 p-4 backdrop-blur-sm md:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close preview"
            className="absolute top-6 right-6 rounded-full border border-primary-foreground/20 p-3 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
            className="absolute left-4 rounded-full border border-primary-foreground/20 p-3 text-primary-foreground transition-colors hover:border-accent hover:text-accent md:left-8"
          >
            <ChevronLeft size={22} />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="animate-scale-in max-h-full w-full max-w-4xl"
          >
            <img
              src={active.src}
              alt={active.alt}
              decoding="async"
              fetchPriority="high"
              width={active.width}
              height={active.height}
              className="mx-auto max-h-[72vh] w-auto rounded-xl object-contain shadow-[var(--shadow-lift)]"
            />
            <figcaption className="mt-6 text-center">
              <p className="eyebrow">{active.categoryLabel}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-lg font-semibold text-primary-foreground">
                {active.title}
              </p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                {activeIndex! + 1} / {items.length}
              </p>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
            className="absolute right-4 rounded-full border border-primary-foreground/20 p-3 text-primary-foreground transition-colors hover:border-accent hover:text-accent md:right-8"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      )}
    </>
  );
}
