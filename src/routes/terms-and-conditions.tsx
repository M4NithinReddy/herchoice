import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { CONTACT } from "@/lib/site-config";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | HerChoice" },
      {
        name: "description",
        content: "HerChoice Terms & Conditions — Guidelines governing store usage, product purchasing, and services.",
      },
    ],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <div className="py-12 lg:py-20">
      <div className="container-hc max-w-4xl">
        <div className="flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          <p className="eyebrow">Terms of Service</p>
        </div>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl text-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: August 26, 2026
        </p>

        <div className="mt-10 space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">1. Introduction & Acceptance</h2>
            <p>
              Welcome to HerChoice. By accessing our website, browsing our product catalog, or placing an order through WhatsApp or our website, you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">2. Product Pricing & Descriptions</h2>
            <p>
              We endeavor to display accurate product photos, color swatches, prices, and specifications for all HerChoice baby carriers. All prices listed are in Indian Rupees (₹) and include applicable taxes unless specified otherwise. Promotional pricing (e.g. ₹499 offer price) is subject to availability and may change at any time.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">3. Orders & Payment Options</h2>
            <p>
              Orders can be placed via our website or directly through WhatsApp. Payments can be processed via UPI, Bank Transfer, Online Payment Gateway, or Cash on Delivery (COD) as confirmed during WhatsApp order processing.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">4. Ergonomic Safety & Usage Disclaimer</h2>
            <p>
              HerChoice baby carriers are engineered for safety and comfortable weight distribution. Parents and caregivers are advised to follow all instructions regarding weight limits, buckle adjustments, and carrying positions (e.g., facing parent, facing out, cradle position, piggy back) to ensure baby safety and comfort.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">5. Intellectual Property</h2>
            <p>
              All content, images, branding logos, text, and design elements on HerChoice are the intellectual property of HerChoice. Reproduction or unauthorized use without written permission is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3 bg-card p-6 sm:p-8 rounded-3xl shadow-soft">
            <h2 className="text-xl font-semibold text-foreground">6. Contact & Disputes</h2>
            <p>
              For questions regarding these terms, please contact:
            </p>
            <div className="mt-3 text-sm space-y-1 text-foreground font-medium">
              <p>Email: {CONTACT.email}</p>
              <p>Phone/WhatsApp: {CONTACT.whatsappDisplay}</p>
              <p>Address: {CONTACT.address}</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
