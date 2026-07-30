import denimImg from "@/assets/denim.jpg";
import designStudioImg from "@/assets/design-studio.jpg";
import fabricImg from "@/assets/fabric.jpg";
import kidswearImg from "@/assets/gallery-kidswear.jpg";
import knittingImg from "@/assets/gallery-knitting-unit.jpg";
import menswearImg from "@/assets/gallery-menswear.jpg";
import packingImg from "@/assets/gallery-packing.jpg";
import qualityImg from "@/assets/gallery-quality-check.jpg";
import sewingImg from "@/assets/gallery-sewing-floor.jpg";
import uniformsImg from "@/assets/gallery-uniforms.jpg";
import womenswearImg from "@/assets/gallery-womenswear.jpg";
import factoryImg from "@/assets/hero-factory.jpg";

export type GalleryItem = {
  src: string;
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
    src: sewingImg,
    alt: "Sewing floor with rows of industrial machines at an ASPL partner unit",
    title: "Sewing Floor",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 1500,
  },
  {
    src: factoryImg,
    alt: "ASPL Global partner garment manufacturing facility",
    title: "Manufacturing Unit",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 800,
  },
  {
    src: qualityImg,
    alt: "Quality inspector checking a finished shirt under inspection lighting",
    title: "Quality Inspection",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 900,
  },
  {
    src: knittingImg,
    alt: "Knitting machinery producing cotton jersey fabric rolls",
    title: "Knits Unit",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 1500,
  },
  {
    src: packingImg,
    alt: "Finished garments packed into export cartons in a warehouse",
    title: "Packing & Despatch",
    category: "factory",
    categoryLabel: "Factory",
    width: 1200,
    height: 900,
  },
  {
    src: fabricImg,
    alt: "Premium fabric swatches from the ASPL fabric library",
    title: "Fabric Library",
    category: "fabric",
    categoryLabel: "Fabric & Design",
    width: 1200,
    height: 900,
  },
  {
    src: designStudioImg,
    alt: "Designers developing tech-packs in the ASPL design studio",
    title: "Design Studio",
    category: "fabric",
    categoryLabel: "Fabric & Design",
    width: 1200,
    height: 800,
  },
  {
    src: menswearImg,
    alt: "Folded men's polo shirts and graphic tees",
    title: "Polos & Graphic Tees",
    category: "menswear",
    categoryLabel: "Menswear",
    width: 1200,
    height: 1400,
  },
  {
    src: womenswearImg,
    alt: "Women's dresses and blouses on a studio clothing rack",
    title: "Dresses & Tops",
    category: "womenswear",
    categoryLabel: "Womenswear",
    width: 1200,
    height: 900,
  },
  {
    src: kidswearImg,
    alt: "Children's tees, dungarees and jackets arranged as a flat lay",
    title: "Kids Essentials",
    category: "kidswear",
    categoryLabel: "Kidswear",
    width: 1200,
    height: 1500,
  },
  {
    src: denimImg,
    alt: "Denim jeans and jackets from the ASPL denim programme",
    title: "Denim Programme",
    category: "denim",
    categoryLabel: "Denim",
    width: 1200,
    height: 900,
  },
  {
    src: uniformsImg,
    alt: "Corporate and industrial uniforms displayed on mannequins",
    title: "Uniform Programmes",
    category: "uniforms",
    categoryLabel: "Uniforms",
    width: 1200,
    height: 900,
  },
];
