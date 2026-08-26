/**
 * HerChoice site configuration — edit these values freely.
 */

// Business WhatsApp number in international format, digits only.
export const WHATSAPP_NUMBER = "918328046519";

export const CONTACT = {
  whatsappDisplay: "+91 83280 46519",
  phoneDisplay: "+91 83280 46519",
  email: "thetinyproductions@gmail.com",
  address: "9-96, Sanjay Gandhi Nagar, Gajularamaram Road, Hyderabad, Telangana 500055",
};

// Editable delivery statement shown in the FAQ.
export const DELIVERY_POLICY =
  "Delivery coverage and timelines are confirmed on WhatsApp at the time of ordering. Message us with your PIN code and we'll confirm availability for your location.";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const GENERAL_ENQUIRY =
  "Hello HerChoice, I would like to know more about your baby carriers.";

export const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;
