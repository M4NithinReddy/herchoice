import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DELIVERY_POLICY } from "@/lib/site-config";

const faqs = [
  {
    q: "What age is the carrier suitable for?",
    a: "Please refer to the product-specific instructions or contact HerChoice for suitability guidance.",
  },
  {
    q: "How many carrying positions are available?",
    a: "The carrier is designed for four carrying positions: baby facing parent, baby facing out, a horizontal feeding position and a piggy back position.",
  },
  {
    q: "Is the carrier adjustable?",
    a: "Yes. Adjustable shoulder straps, a chest strap and side opening buckles allow the fit to be adjusted for different users.",
  },
  {
    q: "Does the carrier have storage?",
    a: "Yes. A practical front storage pocket keeps small everyday essentials within easy reach.",
  },
  {
    q: "How do I place an order?",
    a: "Add your carrier to the cart, proceed to checkout, fill in your name, phone numbers and delivery address, then tap Place Order on WhatsApp. Your order details open pre-filled in WhatsApp — just press send.",
  },
  {
    q: "Do you deliver across India?",
    a: DELIVERY_POLICY,
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | HerChoice Baby Carriers" },
      {
        name: "description",
        content:
          "Answers about HerChoice baby carriers: carrying positions, adjustability, storage pocket, ordering on WhatsApp and delivery.",
      },
      { property: "og:title", content: "FAQ | HerChoice Baby Carriers" },
      {
        property: "og:description",
        content: "Common questions about HerChoice baby carriers and ordering.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Faq,
});

function Faq() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-hc max-w-3xl">
        <p className="eyebrow">Support</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">Frequently Asked Questions</h1>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f) => (
            <AccordionItem
              key={f.q}
              value={f.q}
              className="mb-3 rounded-2xl border-0 bg-card px-5 shadow-soft"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
