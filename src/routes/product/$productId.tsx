import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  ChevronRight,
  Heart,
  MessageCircle,
  Minus,
  Plus,
  Ruler,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart";
import { getProduct, products, type ProductColor } from "@/lib/products";
import { formatINR, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/product/$productId")({
  head: ({ params }) => {
    const product = getProduct(params.productId);
    const title = product
      ? `${product.name} | HerChoice Baby Carrier`
      : "Product Details | HerChoice";
    const description =
      product?.description ||
      "View details of HerChoice ergonomic baby carriers.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `/product/${params.productId}` },
      ],
      links: [{ rel: "canonical", href: `/product/${params.productId}` }],
    };
  },
  component: ProductDetails,
});

function ProductDetails() {
  const { productId } = Route.useParams();
  const product = getProduct(productId);
  const { add, setDrawerOpen } = useCart();

  if (!product) {
    return (
      <div className="container-hc py-20 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-3 text-muted-foreground">
          Sorry, the product you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const [colorState, setColorState] = useState<ProductColor>(product.colors[0]!);
  const activeColor: ProductColor = colorState || product.colors[0] || { name: "Standard", swatch: "#000000", image: product.images[0]! };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  // Combine product main images + selected color images
  const galleryImages: string[] = activeColor.images && activeColor.images.length > 0
    ? activeColor.images
    : Array.from(new Set([activeColor.image, ...product.images]));
  const mainImage = galleryImages[selectedImageIndex] || activeColor.image || product.images[0];

  const handleColorChange = (color: typeof product.colors[0]) => {
    if (!color) return;
    setColorState(color);
    setSelectedImageIndex(0);
  };

  const handleAddToCart = () => {
    add(product.id, activeColor.name, quantity);
    setAddedToast(true);
    setDrawerOpen(true);
    setTimeout(() => setAddedToast(false), 3000);
  };

  const whatsappMessage = `Hello HerChoice, I would like to order the ${product.name} in ${activeColor.name} (Quantity: ${quantity}).`;

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="py-8 lg:py-16">
      <div className="container-hc">
        {/* BREADCRUMB */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* MAIN PRODUCT GRID */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* IMAGE GALLERY */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-soft transition-all duration-300">
              <img
                src={galleryImages[selectedImageIndex] || mainImage}
                alt={`${product.name} in ${activeColor.name}`}
                width={1200}
                height={1200}
                className="mx-auto h-[22rem] sm:h-[30rem] w-full object-contain transition-all duration-300"
              />
              {product.oldPrice && (
                <span className="absolute top-4 left-4 rounded-full bg-accent px-3.5 py-1 text-xs font-semibold text-accent-foreground shadow-sm">
                  SAVE {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                </span>
              )}
            </div>

            {/* THUMBNAILS */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {galleryImages.map((img: string, idx: number) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 bg-card p-1.5 transition-all ${
                    selectedImageIndex === idx
                      ? "border-primary ring-2 ring-primary/20 scale-105"
                      : "border-border opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT DETAILS PANEL */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              {/* TAG / EYEBROW */}
              <p className="eyebrow">HerChoice Collection</p>
              <h1 className="mt-2 text-3xl font-semibold sm:text-4xl text-foreground">
                {product.name}
              </h1>

              {/* REVIEWS & RATING */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent" />
                  ))}
                </div>
                <span className="text-xs font-medium text-foreground">
                  {product.rating} / 5.0
                </span>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewCount} verified parent reviews)
                </span>
              </div>

              {/* PRICE DISPLAY */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  {formatINR(product.price)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatINR(product.oldPrice)}
                  </span>
                )}
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                  Inclusive of all taxes
                </span>
              </div>

              {/* SHORT DESCRIPTION */}
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {product.longDescription}
              </p>

              <hr className="my-6 border-border" />

              {/* COLOR SELECTOR */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>Select Color: <span className="text-primary font-bold">{activeColor.name}</span></span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => handleColorChange(c)}
                      className={`group relative flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-medium transition-all ${
                        c.name === activeColor.name
                          ? "border-primary bg-secondary/50 text-primary shadow-sm"
                          : "border-border bg-card hover:border-primary/50 text-muted-foreground"
                      }`}
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-black/10"
                        style={{ backgroundColor: c.swatch }}
                      />
                      <span>{c.name}</span>
                      {c.name === activeColor.name && (
                        <Check className="h-3.5 w-3.5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* QUANTITY SELECTOR */}
              <div className="mt-6 space-y-3">
                <label className="text-sm font-semibold text-foreground">
                  Quantity
                </label>
                <div className="flex items-center w-36 rounded-full border border-border bg-card p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                    className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="flex-1 text-center font-semibold text-foreground">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    aria-label="Increase quantity"
                    className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>
                <a
                  href={waLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border-2 border-emerald-600 bg-emerald-600/10 px-7 py-4 text-base font-semibold text-emerald-700 transition-all hover:bg-emerald-600 hover:text-white"
                >
                  <MessageCircle className="h-5 w-5" />
                  Buy on WhatsApp
                </a>
              </div>
            </div>

            {/* TRUST BADGES */}
            <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl bg-card p-4 border border-border text-center">
              <div className="flex flex-col items-center gap-1.5 p-2">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-xs font-medium text-foreground">Free Shipping</span>
                <span className="text-[10px] text-muted-foreground">Pan-India delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-xs font-medium text-foreground">100% Ergonomic</span>
                <span className="text-[10px] text-muted-foreground">Safe & supported</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 p-2">
                <RotateCcw className="h-5 w-5 text-accent" />
                <span className="text-xs font-medium text-foreground">Easy Support</span>
                <span className="text-[10px] text-muted-foreground">Help on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* DETAILED INFORMATION TABS/SECTIONS */}
        <div className="mt-16 space-y-16">
          {/* FEATURES CHECKLIST & OVERVIEW */}
          <section className="rounded-3xl bg-card p-8 lg:p-12 shadow-soft">
            <h2 className="text-2xl font-semibold sm:text-3xl text-foreground">
              Key Features & Comfort
            </h2>
            <p className="mt-2 text-muted-foreground">
              Built with premium materials and ergonomic care to support both baby and parent.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl bg-background p-4 shadow-sm border border-border"
                >
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CARRYING POSITIONS */}
          <section>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="eyebrow">Versatility</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl lg:text-4xl">
                4 Ergonomic Carrying Positions
              </h2>
              <p className="mt-3 text-muted-foreground">
                Adapt your carrier as your baby grows and your routine changes.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {product.carryingPositions.map((pos, idx) => (
                <article
                  key={idx}
                  className="overflow-hidden rounded-3xl bg-card shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <img
                    src={pos.image}
                    alt={pos.title}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-56 w-full bg-background object-contain"
                  />
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">{pos.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                      {pos.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* DESIGN DETAILS & SPECIFICATIONS GRID */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* FEATURED HIGHLIGHT CARDS */}
            <section className="rounded-3xl bg-card p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Designed in Detail
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.featureImages.slice(0, 4).map((f, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl bg-background border border-border p-4"
                  >
                    {f.image && (
                      <img
                        src={f.image}
                        alt={f.title}
                        className="h-32 w-full object-cover rounded-xl mb-3"
                      />
                    )}
                    <h3 className="font-semibold text-sm text-foreground">{f.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{f.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* TECHNICAL SPECIFICATIONS */}
            <section className="rounded-3xl bg-card p-8 shadow-soft flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">
                  Technical Specifications
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Comprehensive component list engineered for durability and balance.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.specifications.map((spec, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 rounded-xl bg-background px-3.5 py-3 text-xs font-medium text-foreground border border-border"
                    >
                      <Ruler className="h-4 w-4 shrink-0 text-accent" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-secondary/60 p-5 border border-primary/20">
                <div className="flex items-center gap-3">
                  <Heart className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-primary">Need help choosing?</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Chat directly with our team on WhatsApp for personalized recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RELATED PRODUCTS */}
          {relatedProducts.length > 0 && (
            <section className="pt-8 border-t border-border">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="eyebrow">Explore More</p>
                  <h2 className="text-2xl font-semibold sm:text-3xl text-foreground">
                    You Might Also Like
                  </h2>
                </div>
                <Link
                  to="/shop"
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  View All Products <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-7 sm:grid-cols-2">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
