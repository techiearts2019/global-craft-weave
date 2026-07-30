export const company = {
  name: "ASPL Global LLP",
  tagline: "Think Fashion. Think ASPL Global.",
  address:
    "No. 1/75 F, Nochipalayam, Veerapandi Post, Tirupur – 641605, Tamil Nadu, India",
  email: "dilshad@aspiglobal.com",
  phone: "+91 8810663100",
  whatsapp: "918810663100",
  website: "www.aspiglobal.com",
};

export const stats = [
  { value: 70, suffix: "+", label: "Years of leadership expertise" },
  { value: 25, suffix: "+", label: "Partner manufacturing units" },
  { value: 19, suffix: "+", label: "Global brands served" },
  { value: 13, suffix: "", label: "Product categories" },
];

export const capabilities = [
  {
    title: "Design to Delivery",
    body: "Designers from retail backgrounds co-create finished products with global fashion brands, from concept to tech-pack.",
    points: ["AI & tech-enabled trend analysis", "CLO 3D enabled processes", "Union of creative and commercial design"],
  },
  {
    title: "Sampling & Production",
    body: "High-quality sampling and production across categories, backed by a dedicated tech team for fit development.",
    points: ["Partner facilities across India", "Shortened production cycles", "Financial support to vendors"],
  },
  {
    title: "Fabrics & Catalogue",
    body: "CAD and fabric design solutions with a digital fabric catalogue drawn from mills in India and globally.",
    points: ["Strategic mill partnerships", "Certified sustainable sources", "Expert R&D on innovative fabrics"],
  },
  {
    title: "Status Visibility (WIP)",
    body: "Real-time, accurate visibility at every stage of the project through our ERP-driven control tower.",
    points: ["Stage-wise WIP tracking", "Timely de-bottlenecking", "Order tracking through ERP"],
  },
];

export const categories = [
  {
    name: "Menswear",
    items: ["Graphic Tee", "Polo", "Shirt", "Innerwear", "Woven Bottom", "Sportswear"],
  },
  {
    name: "Womenswear",
    items: ["Tops", "Dresses", "Jackets", "Ethnicwear", "Fashion Wear", "Corporate Wear"],
  },
  {
    name: "Kidswear",
    items: ["Boys", "Girls", "Tops & Bottoms", "School Wear", "Infant Wear", "Kids Jacket"],
  },
  {
    name: "Denim",
    items: ["Jeans", "Denim Jacket", "Wash Library", "Fit Library", "Fabric Library", "Sustainable Denim"],
  },
  {
    name: "Outerwear",
    items: ["Bomber", "Varsity", "Fleece", "Down Jacket", "Reversible", "Heat-Tech"],
  },
  {
    name: "Uniforms & Accessories",
    items: ["Corporate", "Industrial", "School", "Hotel & Hospital", "Caps & Bags", "Scarves & Belts"],
  },
];

export const process = [
  { step: "Discussion", body: "Initial discussion to understand the requirement in depth." },
  { step: "Alignment", body: "Alignment on scope of work and commercial terms." },
  { step: "Agreement", body: "Formal agreement and project brief." },
  { step: "Design", body: "Design development, 3D rendering and feedback loops." },
  { step: "Sampling", body: "Sampling and final design selection with fit correction." },
  { step: "Production", body: "Seamless manufacturing of approved designs at partner facilities." },
  { step: "Quality", body: "In-house quality checks, inspection and total quality management." },
  { step: "Delivery", body: "Packing, shipping and delivery to the brand's warehouse." },
];

export const sustainability = [
  { title: "Recycled Yarn & Trims", body: "Working with recycled fabrics, yarns and trims across programmes." },
  { title: "Eco Chemicals", body: "Green chemicals and eco-finishes throughout wet processing." },
  { title: "Carbon Neutral Factories", body: "Working with zero-discharge, carbon neutral factories." },
  { title: "Sustainable Vendors", body: "Collaborating with vendors who create sustainable products." },
  { title: "Recycled Product", body: "Creating a growing range of fully recycled products." },
];

export const certifications = [
  "SMETA", "Sedex", "BSCI", "ISO 9001", "GOTS", "OEKO-TEX Made in Green",
  "Better Cotton Initiative", "Fair Trade Certified", "IAF", "EGAC Accredited",
  "Otabu Certification (UK)", "PVH Approved",
];

export const brands = [
  "Brooks Brothers", "Van Heusen", "IZOD", "FILA", "Lucky Brand", "Tefron",
  "Hanes", "Sam's Club", "U.S. Polo Assn.", "Tiffosi", "2Tall.com", "LPP",
  "Champion", "Basic Resources", "Liquorish", "Alexanders of London",
  "Crew Clothing Company", "Dollar General", "House of Holland",
];

export const valueProps = [
  {
    audience: "For Brands",
    points: ["Design to Delivery services", "Product development and innovation", "Vast design library across categories", "Competitive cost, on-time deliveries"],
  },
  {
    audience: "For Manufacturers",
    points: ["Faster turnaround times", "Surety of payment", "Rotation of funds for business", "Design solutions to buyers"],
  },
  {
    audience: "For Garment Units",
    points: ["Uninterrupted operations", "Continuous feeding of orders", "Minimised production loss", "Dedicated QC and technical support"],
  },
  {
    audience: "For Distributors",
    points: ["Seamless sourcing of fabric", "Shorter timelines", "Reliable partner network", "Transparent commercials"],
  },
];

export const leadership = [
  { name: "Laiqur Rahman", role: "Director — Strategic leadership & vision" },
  { name: "Sahdev Sundi", role: "Director — Operations & manufacturing excellence" },
  { name: "Dilshad Ahmad", role: "Director — Business development & sales" },
];

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact", to: "/contact" },
] as const;
