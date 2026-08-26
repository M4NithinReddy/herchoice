import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import logo from "@/assets/herchoice-logo.png.asset.json";
import { CONTACT, GENERAL_ENQUIRY, waLink } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-hc grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="inline-flex rounded-2xl bg-background px-4 py-3">
            <img src="/logo.png" alt="HerChoice" className="h-9 w-auto object-contain" />
          </div>
          <p className="mt-5 max-w-xs text-sm text-navy-foreground/70">
            Thoughtfully designed baby carriers for everyday connection, comfort and
            freedom of movement.
          </p>
        </div>

        <div>
          <h3 className="text-lg text-navy-foreground">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/shop" className="hover:text-accent">Shop</Link></li>
            <li><Link to="/" hash="features" className="hover:text-accent">Features</Link></li>
            <li><Link to="/faq" className="hover:text-accent">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-navy-foreground">Customer Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0 text-accent" />
              <a href={waLink(GENERAL_ENQUIRY)} className="hover:text-accent">
                WhatsApp {CONTACT.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${CONTACT.phoneDisplay.replace(/\s/g, "")}`} className="hover:text-accent">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-accent">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-5">
        <div className="container-hc flex flex-col items-center justify-between gap-4 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© 2026 HerChoice. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/return-policy" className="hover:text-accent transition-colors">
              Return & Replacement Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
