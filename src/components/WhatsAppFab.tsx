import { MessageCircle } from "lucide-react";
import { GENERAL_ENQUIRY, waLink } from "@/lib/site-config";

export function WhatsAppFab() {
  return (
    <a
      href={waLink(GENERAL_ENQUIRY)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-primary p-4 text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:px-5 sm:py-3.5"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  );
}
