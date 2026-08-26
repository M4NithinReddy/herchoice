import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, MessageCircle, ShoppingBag, Truck } from "lucide-react";
import { useCart } from "@/lib/cart";
import { products } from "@/lib/products";
import { formatINR, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | HerChoice" },
      { name: "description", content: "Complete your HerChoice order." },
    ],
  }),
  component: Checkout,
});

function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const cartDetails = items
    .map((i) => {
      const p = products.find((prod) => prod.id === i.productId);
      return p ? `${p.name} (${i.color}) x${i.quantity} - ${formatINR(p.price * i.quantity)}` : "";
    })
    .filter(Boolean)
    .join("\n");

  const buildWhatsAppMessage = () => {
    return `*New HerChoice Order Request*\n\n*Customer Details:*\nName: ${name || "N/A"}\nPhone: ${phone || "N/A"}\nPincode: ${pincode || "N/A"}\nAddress: ${address || "N/A"}\n\n*Items Ordered:*\n${cartDetails}\n\n*Total Amount:* ${formatINR(subtotal)}`;
  };

  const handleWhatsAppCheckout = () => {
    const message = buildWhatsAppMessage();
    window.open(waLink(message), "_blank");
    setSubmitted(true);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="container-hc py-20 text-center">
        <ShoppingBag className="mx-auto h-12 w-12 text-accent" />
        <h1 className="mt-4 text-3xl font-bold">Your Bag is Empty</h1>
        <p className="mt-2 text-muted-foreground">Add products to your cart before proceeding to checkout.</p>
        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container-hc py-20 text-center max-w-xl mx-auto">
        <CheckCircle2 className="mx-auto h-16 w-16 text-emerald-600" />
        <h1 className="mt-4 text-3xl font-bold">Order Initiated!</h1>
        <p className="mt-3 text-muted-foreground">
          Thank you for ordering with HerChoice! Your order details have been forwarded via WhatsApp. Our support team will confirm your order and delivery address shortly.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/shop"
            onClick={() => clear()}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="container-hc max-w-4xl">
        <p className="eyebrow">Direct Delivery Order</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Checkout</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* SHIPPING FORM */}
          <div className="lg:col-span-7 space-y-6 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">Delivery Details</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Pincode</label>
                  <input
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="e.g. 500055"
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Delivery Address</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  placeholder="House/Flat No, Street Name, Area, City, State"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppCheckout}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-base font-semibold text-white shadow-soft hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Complete Order on WhatsApp ({formatINR(subtotal)})
            </button>
          </div>

          {/* ORDER SUMMARY */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card p-6 rounded-3xl shadow-soft">
              <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>

              <ul className="divide-y divide-border space-y-3 pb-4">
                {items.map((i) => {
                  const p = products.find((prod) => prod.id === i.productId);
                  if (!p) return null;
                  const color = p.colors.find((c) => c.name === i.color) ?? p.colors[0];
                  return (
                    <li key={`${i.productId}-${i.color}`} className="pt-3 flex gap-3 items-center">
                      <img
                        src={color?.image || p.images[0]}
                        alt={p.name}
                        className="h-14 w-14 rounded-xl object-contain bg-background"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">{p.name}</p>
                        <p className="text-xs text-muted-foreground">{i.color} × {i.quantity}</p>
                      </div>
                      <p className="text-sm font-bold text-primary">{formatINR(p.price * i.quantity)}</p>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-4 border-t border-border flex justify-between items-center text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">{formatINR(subtotal)}</span>
              </div>
            </div>

            <div className="bg-secondary/60 p-5 rounded-2xl border border-primary/20 flex gap-3 items-center">
              <Truck className="h-6 w-6 text-primary shrink-0" />
              <p className="text-xs text-muted-foreground">
                Free shipping on all orders. Delivery details and tracking will be sent directly via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
