import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";
import { formatINR } from "@/lib/site-config";

export function CartDrawer() {
  const { items, subtotal, count, drawerOpen, setDrawerOpen, remove, setQuantity } =
    useCart();

  return (
    <div
      className={`fixed inset-0 z-[60] ${drawerOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!drawerOpen}
    >
      <div
        onClick={() => setDrawerOpen(false)}
        className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-card shadow-lift transition-transform duration-300 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-xl">Your Bag ({count})</h2>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close cart"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="mt-16 text-center">
              <ShoppingBag className="mx-auto h-10 w-10 text-accent" />
              <p className="mt-4 text-sm text-muted-foreground">
                Your bag is empty.
              </p>
              <Link
                to="/shop"
                onClick={() => setDrawerOpen(false)}
                className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.productId);
                if (!product) return null;
                const color =
                  product.colors.find((c) => c.name === item.color) ??
                  product.colors[0] ??
                  { name: item.color, swatch: "#000000", image: product.images[0] };
                return (
                  <li
                    key={`${item.productId}-${item.color}`}
                    className="flex gap-3 rounded-2xl bg-background p-3"
                  >
                    <img
                      src={color.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-20 w-20 shrink-0 rounded-xl bg-card object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{item.color}</p>
                      <p className="mt-1 text-sm font-semibold text-primary">
                        {formatINR(product.price * item.quantity)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center rounded-full border border-border bg-card">
                          <button
                            type="button"
                            aria-label="Decrease quantity"
                            onClick={() =>
                              setQuantity(item.productId, item.color, item.quantity - 1)
                            }
                            className="grid h-8 w-8 place-items-center rounded-full"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <button
                            type="button"
                            aria-label="Increase quantity"
                            onClick={() =>
                              setQuantity(item.productId, item.color, item.quantity + 1)
                            }
                            className="grid h-8 w-8 place-items-center rounded-full"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          type="button"
                          aria-label="Remove item"
                          onClick={() => remove(item.productId, item.color)}
                          className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:text-primary"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-lg font-semibold text-primary">
                {formatINR(subtotal)}
              </span>
            </div>
            <Link
              to="/checkout"
              onClick={() => setDrawerOpen(false)}
              className="mt-4 block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Proceed to Checkout
            </Link>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="mt-2 w-full rounded-full border border-border px-5 py-3 text-sm font-medium"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
