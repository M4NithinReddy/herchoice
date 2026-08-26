import { Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart";
import type { Product } from "@/lib/products";
import { formatINR } from "@/lib/site-config";

export function ProductCard({ product }: { product: Product }) {
  const { add, setDrawerOpen } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const activeColor = selectedColor || product.colors[0] || { name: "Standard", swatch: "#000000", image: product.images[0] };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <Link
        to="/product/$productId"
        params={{ productId: product.id }}
        className="block overflow-hidden bg-background"
      >
        <img
          src={activeColor.image}
          alt={`${product.name} in ${activeColor.name}`}
          width={1200}
          height={1200}
          loading="lazy"
          className="h-72 w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105 sm:h-80"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-1.5 text-accent" aria-label={`Rating ${product.rating}`}>
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-accent" />
            ))}
          </div>
          <span className="text-xs font-semibold text-foreground">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        <h3 className="mt-2 text-xl">{product.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground">{product.description}</p>

        <div className="mt-4 flex items-center gap-2">
          {product.colors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setSelectedColor(c)}
              aria-label={c.name}
              title={c.name}
              className={`h-6 w-6 rounded-full border-2 transition-all ${
                c.name === activeColor.name ? "border-primary" : "border-border"
              }`}
              style={{ backgroundColor: c.swatch }}
            />
          ))}
          <span className="text-xs text-muted-foreground">{activeColor.name}</span>
        </div>

        <div className="mt-4 flex items-baseline gap-2">
          <span className="text-2xl font-semibold text-primary">
            {formatINR(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatINR(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            to="/product/$productId"
            params={{ productId: product.id }}
            className="flex-1 rounded-full border border-primary px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            View Details
          </Link>
          <button
            type="button"
            onClick={() => {
              add(product.id, activeColor.name, 1);
              setDrawerOpen(true);
            }}
            className="flex-1 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lift"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
