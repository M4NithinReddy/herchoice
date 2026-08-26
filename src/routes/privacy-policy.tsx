import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/site-config";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | HerChoice" },
      {
        name: "description",
        content: "HerChoice Privacy Policy — Learn how we collect, use, and protect your personal information.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container-hc max-w-4xl">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-primary" />
          <p className="eyebrow">Legal & Security</p>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: August 26, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>
              When you browse our store, inquire about products, or place an order through WhatsApp or our website, we may collect personal details such as:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Your full name and contact information (phone number, email address).</li>
              <li>Delivery and billing address details (including Pincode and landmark).</li>
              <li>Order details, product preferences, and communication logs.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>
              We use the information we collect solely to provide and improve our services to you, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Processing and fulfilling your baby carrier orders.</li>
              <li>Communicating order status, delivery tracking, and updates via WhatsApp or email.</li>
              <li>Responding to customer support questions and product inquiries.</li>
              <li>Ensuring compliance with local delivery and tax regulations in India.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">3. Information Sharing & Security</h2>
            <p>
              We prioritize your privacy. HerChoice does NOT sell, rent, or trade your personal information to third-party marketers. We only share necessary delivery information with trusted logistics partners strictly for shipping your items.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">4. WhatsApp Communication</h2>
            <p>
              By contacting us or placing an order via WhatsApp, you consent to receive direct messages from HerChoice regarding your order confirmation, shipping updates, and customer support. You may opt out at any time by messaging us.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">5. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or data security, please reach out to us:
            </p>
            <div className="mt-3 text-sm space-y-1 text-foreground font-medium">
              <p>Email: {CONTACT.email}</p>
              <p>WhatsApp / Phone: {CONTACT.whatsappDisplay}</p>
              <p>Address: {CONTACT.address}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Return to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
