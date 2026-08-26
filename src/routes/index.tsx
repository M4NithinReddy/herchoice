import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Baby,
  Heart,
  MessageCircle,
  Move,
  Package,
  Ruler,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import {
  carrierBurgundy,
  featurePocket,
  products,
  sharedPositions,
} from "@/lib/products";
import lifestyle from "@/assets/lifestyle-mother.jpg";
import { GENERAL_ENQUIRY, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HerChoice | Premium Baby Carriers for Comfortable Parenting" },
      {
        name: "description",
        content:
          "Discover HerChoice baby carriers designed for comfort, connection and everyday convenience. Adjustable support, multiple carrying positions and practical features.",
      },
      {
        property: "og:title",
        content: "HerChoice | Premium Baby Carriers for Comfortable Parenting",
      },
      {
        property: "og:description",
        content:
          "Thoughtfully designed baby carriers for everyday connection, comfort and freedom of movement.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const benefits = [
  {
    icon: Heart,
    title: "Comfortable Support",
    text: "Designed for everyday carrying.",
  },
  {
    icon: SlidersHorizontal,
    title: "Adjustable Fit",
    text: "Flexible straps for a comfortable fit.",
  },
  {
    icon: Move,
    title: "Multiple Positions",
    text: "Designed for different carrying positions.",
  },
  {
    icon: Package,
    title: "Everyday Convenience",
    text: "Storage and practical features for parents.",
  },
];

const whyPoints = [
  {
    icon: Baby,
    title: "Close Connection",
    text: "Keep your baby close throughout everyday moments.",
  },
  {
    icon: Heart,
    title: "Everyday Comfort",
    text: "Designed with supportive and comfortable features.",
  },
  {
    icon: Move,
    title: "Freedom to Move",
    text: "Stay active while keeping your little one close.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful Design",
    text: "Practical details created around real parenting needs.",
  },
];

const specifications = [
  "Padded Shoulder Strap",
  "Padded Head Support",
  "Hard Board Back Support",
  "Comfortable Cushioned Seat",
  "Extra Strap for Grip",
  "Cushioned Leg Support",
  "Chest Strap",
  "Shoulder Strap Buckle",
  "Shoulder Strap Webbing",
  "Arm Hole",
];

function Home() {
  const featureCards = products[0]!.featureImages;

  return (
    <>
      {/* HERO */}
      <section className="overflow-hidden bg-background">
        <div className="container-hc grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="reveal">
            <p className="eyebrow">Comfort. Connection. Freedom.</p>
            <h1 className="mt-4 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Carry Them Close.
              <br />
              <span className="text-primary">Live Life Freely.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
              Designed to keep your little one close while giving you the comfort and
              freedom to move through everyday life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="rounded-full bg-primary px-7 py-4 text-center text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
              >
                Shop Baby Carriers
              </Link>
              <a
                href={waLink(GENERAL_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-card p-6 shadow-lift">
              <img
                src={carrierBurgundy}
                alt="HerChoice burgundy and cream baby carrier"
                width={1200}
                height={1200}
                className="mx-auto h-[22rem] w-full object-contain sm:h-[28rem]"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2 lg:absolute lg:-left-6 lg:bottom-8 lg:mt-0 lg:flex-col">
              {["Comfortable Support", "Adjustable Fit", "Multiple Carrying Positions"].map(
                (badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-card px-4 py-2 text-xs font-semibold text-primary shadow-soft"
                  >
                    {badge}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-card">
        <div className="container-hc grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-3">
              <b.icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" strokeWidth={1.5} />
              <div className="min-w-0">
                <h3 className="text-lg">{b.title}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section id="shop" className="py-16 lg:py-24">
        <div className="container-hc">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The Collection</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Choose Your HerChoice
            </h2>
            <p className="mt-4 text-muted-foreground">
              Thoughtfully designed baby carriers for everyday connection and comfort.
            </p>
          </div>
          <div className="mt-12 grid gap-7 sm:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="bg-card py-16 lg:py-24">
        <div className="container-hc">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Designed in Detail</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Every Detail, Considered
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f) => (
              <article
                key={f.title}
                className="overflow-hidden rounded-3xl bg-background shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                {f.image && (
                  <img
                    src={f.image}
                    alt={f.title}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="h-52 w-full object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-lg">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POSITIONS */}
      <section className="py-16 lg:py-24">
        <div className="container-hc">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Ways to Carry</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              One Carrier. Multiple Ways to Carry.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sharedPositions.map((p) => (
              <article
                key={p.title}
                className="overflow-hidden rounded-3xl bg-card shadow-soft"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="h-56 w-full bg-background object-contain"
                />
                <div className="p-5">
                  <h3 className="text-lg">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="bg-card py-16 lg:py-24">
        <div className="container-hc grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Specifications</p>
            <h2 className="mt-3 text-3xl sm:text-4xl">Built Around Real Parenting</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Specifications may vary by product variant.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {specifications.map((spec) => (
              <li
                key={spec}
                className="flex items-center gap-2.5 rounded-2xl bg-background px-4 py-3 text-sm"
              >
                <Ruler className="h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                {spec}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STORAGE */}
      <section className="py-16 lg:py-24">
        <div className="container-hc grid items-center gap-10 lg:grid-cols-2">
          <img
            src={featurePocket}
            alt="Storage pocket on the HerChoice carrier holding a phone"
            width={900}
            height={900}
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-soft"
          />
          <div>
            <p className="eyebrow">Everyday Convenience</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Everything You Need, Close at Hand.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A practical storage pocket keeps everyday essentials within easy reach while
              you're on the move.
            </p>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="bg-card py-16 lg:py-24">
        <div className="container-hc">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Why HerChoice</p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Made for the Moments That Matter.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Parenthood moves fast. HerChoice helps you stay close to your little one
              while keeping your hands free for everything else life brings.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyPoints.map((p) => (
              <div key={p.title} className="rounded-3xl bg-background p-6 shadow-soft">
                <p.icon className="h-7 w-7 text-accent" strokeWidth={1.25} />
                <h3 className="mt-4 text-lg">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMOTIONAL */}
      <section className="py-16 lg:py-24">
        <div className="container-hc grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl leading-tight text-primary sm:text-4xl lg:text-5xl">
              Closer to You.
              <br />
              Closer to What Matters.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Softly structured, quietly elegant and made for real days — school runs,
              market walks, and the quiet moments in between.
            </p>
            <Link
              to="/shop"
              className="mt-8 inline-flex rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              Shop Now
            </Link>
          </div>
          <img
            src={lifestyle}
            alt="Mother carrying her baby in a burgundy HerChoice carrier"
            width={1600}
            height={1104}
            loading="lazy"
            className="order-1 w-full rounded-3xl object-cover shadow-lift lg:order-2"
          />
        </div>
      </section>
    </>
  );
}
