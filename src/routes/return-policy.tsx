import { createFileRoute, Link } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { CONTACT, GENERAL_ENQUIRY, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/return-policy")({
  head: () => ({
    meta: [
      { title: "Return & Refund Policy | HerChoice" },
      {
        name: "description",
        content: "HerChoice Return & Replacement Policy — 3-day easy returns and exchanges for baby carriers.",
      },
    ],
  }),
  component: ReturnPolicy,
});

function ReturnPolicy() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container-hc max-w-4xl">
        <div className="flex items-center gap-3">
          <RotateCcw className="h-8 w-8 text-primary" />
          <p className="eyebrow">Hassle-Free Support</p>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl text-foreground">
          Return & Replacement Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: August 26, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">1. 3-Day Easy Return / Exchange Window</h2>
            <p>
              We want you and your baby to feel 100% comfortable with your HerChoice carrier. If you receive a product with manufacturing defects or damage during shipping, you can request an exchange or return within <strong>3 days</strong> of delivery.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">2. Return Eligibility Criteria</h2>
            <p>To be eligible for a return or replacement:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>The carrier must be unused, unwashed, and in original condition.</li>
              <li>The item must include original tags, packaging, and buckles intact.</li>
              <li>Proof of purchase (order confirmation via WhatsApp/Email or invoice) must be provided.</li>
            </ul>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">3. How to Request a Return or Replacement</h2>
            <p>
              Initiating a return is quick and simple:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>
                Contact our customer support team on WhatsApp at{" "}
                <a href={waLink(GENERAL_ENQUIRY)} className="text-primary font-semibold underline">
                  {CONTACT.whatsappDisplay}
                </a>{" "}
                or email <strong>{CONTACT.email}</strong>.
              </li>
              <li>Share your order details along with a short photo/video showing the issue or reason for exchange.</li>
              <li>Our team will verify the details and schedule a pickup or provide shipping instructions within 24–48 hours.</li>
            </ol>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">4. Refund Processing</h2>
            <p>
              Once the returned item is received at our facility and verified, your refund will be processed to your original payment method or UPI bank account within <strong>5 to 7 business days</strong>.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Explore Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
