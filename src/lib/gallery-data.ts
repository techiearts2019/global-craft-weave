// Thumbnails are generated at build time as responsive WebP sets (imagetools);
// lightbox images load a single larger WebP only when opened.
import denimFull from "@/assets/denim.jpg?w=1600&format=webp";
import denimSet from "@/assets/denim.jpg?w=400;700;1000&format=webp&as=srcset";
import designStudioFull from "@/assets/design-studio.jpg?w=1600&format=webp";
import designStudioSet from "@/assets/design-studio.jpg?w=400;700;1000&format=webp&as=srcset";
import fabricFull from "@/assets/fabric.jpg?w=1600&format=webp";
import fabricSet from "@/assets/fabric.jpg?w=400;700;1000&format=webp&as=srcset";
import kidswearFull from "@/assets/gallery-kidswear.jpg?w=1600&format=webp";
import kidswearSet from "@/assets/gallery-kidswear.jpg?w=400;700;1000&format=webp&as=srcset";
import knittingFull from "@/assets/gallery-knitting-unit.jpg?w=1600&format=webp";
import knittingSet from "@/assets/gallery-knitting-unit.jpg?w=400;700;1000&format=webp&as=srcset";
import menswearFull from "@/assets/gallery-menswear.jpg?w=1600&format=webp";
import menswearSet from "@/assets/gallery-menswear.jpg?w=400;700;1000&format=webp&as=srcset";
import packingFull from "@/assets/gallery-packing.jpg?w=1600&format=webp";
import packingSet from "@/assets/gallery-packing.jpg?w=400;700;1000&format=webp&as=srcset";
import qualityFull from "@/assets/gallery-quality-check.jpg?w=1600&format=webp";
import qualitySet from "@/assets/gallery-quality-check.jpg?w=400;700;1000&format=webp&as=srcset";
import sewingFull from "@/assets/gallery-sewing-floor.jpg?w=1600&format=webp";
import sewingSet from "@/assets/gallery-sewing-floor.jpg?w=400;700;1000&format=webp&as=srcset";
import uniformsFull from "@/assets/gallery-uniforms.jpg?w=1600&format=webp";
import uniformsSet from "@/assets/gallery-uniforms.jpg?w=400;700;1000&format=webp&as=srcset";
import womenswearFull from "@/assets/gallery-womenswear.jpg?w=1600&format=webp";
import womenswearSet from "@/assets/gallery-womenswear.jpg?w=400;700;1000&format=webp&as=srcset";
import factoryFull from "@/assets/hero-factory.jpg?w=1600&format=webp";
import factorySet from "@/assets/hero-factory.jpg?w=400;700;1000&format=webp&as=srcset";

export type GalleryItem = {
  /** Full-size WebP used by the lightbox and as the <img> fallback src. */
  src: string;
  /** Responsive thumbnail candidates for the masonry grid. */
  srcSet: string;
  alt: string;
  title: string;
  category: string;
  categoryLabel: string;
  width: number;
  height: number;
};

export const galleryFilters = [
  { id: "all", label: "All" },
  { id: "factory", label: "Factory" },
  { id: "fabric", label: "Fabric & Design" },
  { id: "menswear", label: "Menswear" },
  { id: "womenswear", label: "Womenswear" },
  { id: "kidswear", label: "Kidswear" },
  { id: "denim", label: "Denim" },
  { id: "uniforms", label: "Uniforms" },
] as const;

export const galleryItems: GalleryItem[] = [
  {
    src: sewingFull,
    srcSet: sewingSet,
    alt: "Sewing floor with rows of industrial machines at an ASPL partner unit",
    title: "Sewing Floor",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 1500,
  },
  {
    src: factoryFull,
    srcSet: factorySet,
    alt: "ASPL Global partner garment manufacturing facility",
    title: "Manufacturing Unit",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 800,
  },
  {
    src: qualityFull,
    srcSet: qualitySet,
    alt: "Quality inspector checking a finished shirt under inspection lighting",
    title: "Quality Inspection",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 900,
  },
  {
    src: knittingFull,
    srcSet: knittingSet,
    alt: "Knitting machinery producing cotton jersey fabric rolls",
    title: "Knits Unit",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 1500,
  },
  {
    src: packingFull,
    srcSet: packingSet,
    alt: "Finished garments packed into export cartons in a warehouse",
    title: "Packing & Despatch",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 900,
  },
  {
    src: fabricFull,
    srcSet: fabricSet,
    alt: "Premium fabric swatches from the ASPL fabric library",
    title: "Fabric Library",
    category: "fabric",
    categoryLabel: "Fabric & Design",
    width: 1200,
    height: 900,
  },
  {
    src: designStudioFull,
    srcSet: designStudioSet,
    alt: "Designers developing tech-packs in the ASPL design studio",
    title: "Design Studio",
    category: "fabric",
    categoryLabel: "Fabric & Design",
    width: 1200,
    height: 800,
  },
  {
    src: menswearFull,
    srcSet: menswearSet,
    alt: "Folded men's polo shirts and graphic tees",
    title: "Polos & Graphic Tees",
    category: "menswear",
    categoryLabel: "Menswear",
    width: 1200,
    height: 1400,
  },
  {
    src: womenswearFull,
    srcSet: womenswearSet,
    alt: "Women's dresses and blouses on a studio clothing rack",
    title: "Dresses & Tops",
    category: "womenswear",
    categoryLabel: "Womenswear",
    width: 1200,
    height: 900,
  },
  {
    src: kidswearFull,
    srcSet: kidswearSet,
    alt: "Children's tees, dungarees and jackets arranged as a flat lay",
    title: "Kids Essentials",
    category: "kidswear",
    categoryLabel: "Kidswear",
    width: 1200,
    height: 1500,
  },
  {
    src: denimFull,
    srcSet: denimSet,
    alt: "Denim jeans and jackets from the ASPL denim programme",
    title: "Denim Programme",
    category: "denim",
    categoryLabel: "Denim",
    width: 1200,
    height: 900,
  },
  {
    src: uniformsFull,
    srcSet: uniformsSet,
    alt: "Corporate and industrial uniforms displayed on mannequins",
    title: "Uniform Programmes",
    category: "uniforms",
    categoryLabel: "Uniforms",
    width: 1200,
    height: 900,
  },
];
