import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CONTACT, GENERAL_ENQUIRY, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact HerChoice | Baby Carrier Support" },
      {
        name: "description",
        content:
          "Contact HerChoice on WhatsApp, phone or email for help choosing a baby carrier, order support or delivery questions.",
      },
      { property: "og:title", content: "Contact HerChoice" },
      {
        property: "og:description",
        content: "Reach the HerChoice team on WhatsApp, phone or email.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container-hc max-w-3xl">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-3 text-4xl sm:text-5xl">We're Here to Help</h1>
        <p className="mt-4 text-muted-foreground">
          Questions about a carrier, an order or delivery? Message us — WhatsApp is the
          fastest way to reach the HerChoice team.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={waLink(GENERAL_ENQUIRY)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
          >
            <MessageCircle className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg">Chat on WhatsApp</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {CONTACT.whatsappDisplay}
            </p>
          </a>
          <a
            href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`}
            className="rounded-3xl bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
          >
            <Phone className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg">Call Us</h2>
            <p className="mt-1 text-sm text-muted-foreground">{CONTACT.phoneDisplay}</p>
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="rounded-3xl bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
          >
            <Mail className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg">Email</h2>
            <p className="mt-1 text-sm break-words text-muted-foreground">
              {CONTACT.email}
            </p>
          </a>
          <div className="rounded-3xl bg-card p-6 shadow-soft">
            <MapPin className="h-6 w-6 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 text-lg">Address</h2>
            <p className="mt-1 text-sm text-muted-foreground">{CONTACT.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
