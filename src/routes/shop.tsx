import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Baby Carriers | HerChoice" },
      {
        name: "description",
        content:
          "Shop HerChoice baby carriers in burgundy and black. Adjustable straps, cushioned seat, storage pocket and multiple carrying positions.",
      },
      { property: "og:title", content: "Shop Baby Carriers | HerChoice" },
      {
        property: "og:description",
        content:
          "Thoughtfully designed HerChoice baby carriers for everyday comfort and connection.",
      },
      { property: "og:url", content: "/shop" },
    ],
    links: [{ rel: "canonical", href: "/shop" }],
  }),
  component: Shop,
});

function Shop() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-hc">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Choose Your HerChoice</h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Thoughtfully designed baby carriers for everyday connection and comfort.
        </p>
        <div className="mt-12 grid gap-7 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
