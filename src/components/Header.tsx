import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/herchoice-logo.png.asset.json";
import { useCart } from "@/lib/cart";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "Shop", to: "/shop" as const },
  { label: "Features", to: "/" as const, hash: "features" },
  { label: "Why HerChoice", to: "/" as const, hash: "why" },
  { label: "FAQ", to: "/faq" as const },
  { label: "Contact", to: "/contact" as const },
];

export function Header() {
  const { count, setDrawerOpen } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md shadow-soft"
          : "border-transparent bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-hc grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center" aria-label="HerChoice home">
          <img
            src="/logo.png"
            alt="HerChoice"
            className="h-9 w-auto object-contain lg:h-11"
          />
        </Link>

        <div className="flex items-center gap-1 lg:gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open cart"
            className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-semibold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <Link
            to="/shop"
            className="hidden shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift lg:inline-flex"
          >
            Order Now
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="container-hc flex flex-col py-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-base font-medium text-foreground last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/shop"
              onClick={() => setOpen(false)}
              className="mt-3 mb-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Order Now
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
