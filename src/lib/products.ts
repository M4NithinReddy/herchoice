import featureStraps from "@/assets/feature-straps.jpg";
import featurePocket from "@/assets/feature-pocket.jpg";
import featureHead from "@/assets/feature-head.jpg";
import featureSeat from "@/assets/feature-seat.jpg";
import positionFront from "@/assets/position-front.jpg";
import positionOut from "@/assets/position-out.jpg";
import positionCradle from "@/assets/position-cradle.jpg";
import positionBack from "@/assets/position-back.jpg";

export type ProductColor = {
  name: string;
  swatch: string;
  image: string;
  images?: string[];
};

export type FeatureCard = {
  title: string;
  description: string;
  image?: string;
};

export type CarryingPosition = {
  title: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviewCount: number;
  description: string;
  longDescription: string;
  images: string[];
  featureImages: FeatureCard[];
  colors: ProductColor[];
  features: string[];
  carryingPositions: CarryingPosition[];
  specifications: string[];
  available: boolean;
};

const sharedFeatureImages: FeatureCard[] = [
  {
    title: "Head & Neck Support",
    description: "Comfort-focused support around baby's head and neck.",
    image: featureHead,
  },
  {
    title: "Wide Cushioned Shoulder Straps",
    description: "Designed for comfortable everyday carrying.",
    image: featureStraps,
  },
  {
    title: "Adjustable Support",
    description: "Flexible adjustment for different users.",
    image: featureStraps,
  },
  {
    title: "Storage Pocket",
    description: "Convenient space for small essentials.",
    image: featurePocket,
  },
  {
    title: "Cushioned Seat",
    description: "Designed for comfortable baby positioning.",
    image: featureSeat,
  },
  {
    title: "Adjustable Buckles",
    description: "Easy adjustment for a flexible fit.",
    image: featureStraps,
  },
];

const sharedPositions: CarryingPosition[] = [
  {
    title: "Baby Facing Parent",
    description: "Keep your little one close and facing you.",
    image: positionFront,
  },
  {
    title: "Baby Facing Out",
    description: "Let baby take in the view while staying supported.",
    image: positionOut,
  },
  {
    title: "Horizontal Feeding Position",
    description: "A horizontal hold for calm, close moments.",
    image: positionCradle,
  },
  {
    title: "Piggy Back Position",
    description: "Carry on the back when your hands are busy.",
    image: positionBack,
  },
];

const sharedSpecifications = [
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

const sharedFeatures = [
  "Padded shoulder straps",
  "Head and neck support",
  "Adjustable side opening buckle",
  "Cushioned seating",
  "Leg support",
  "Storage pocket",
  "Adjustable support straps",
];

export const burgundyColor: ProductColor = {
  name: "Burgundy + Cream",
  swatch: "#641F3A",
  image: "/burgandy1.png",
  images: [
    "/burgandy1.png",
    "/burgandy2.png",
    "/burgandy3.png",
    "/burgandy4.png",
    "/burgandy5.png",
  ],
};

export const blackColor: ProductColor = {
  name: "Black + Cream",
  swatch: "#111111",
  image: "/black1.png",
  images: [
    "/black1.png",
    "/black2.png",
    "/black3.png",
    "/black4.png",
    "/black5.png",
    "/black6.png",
  ],
};

export const blueColor: ProductColor = {
  name: "Ocean Blue + Cream",
  swatch: "#1E3A8A",
  image: "/blue1.png",
  images: [
    "/blue1.png",
    "/blue2.png",
    "/blue3.png",
    "/blue4.png",
    "/blue5.png",
    "/blue6.png",
  ],
};

export const redColor: ProductColor = {
  name: "Ruby Red + Cream",
  swatch: "#B91C1C",
  image: "/red1.png",
  images: [
    "/red1.png",
    "/red2.png",
    "/red3.png",
    "/red4.png",
  ],
};

export const allColors: ProductColor[] = [
  burgundyColor,
  blackColor,
  blueColor,
  redColor,
];

export const products: Product[] = [
  {
    id: "herchoice-classic-burgundy",
    name: "HerChoice Classic Burgundy Carrier",
    price: 499,
    oldPrice: 1200,
    rating: 4.8,
    reviewCount: 142,
    description:
      "A softly structured everyday carrier in signature burgundy and cream.",
    longDescription:
      "The HerChoice Classic Burgundy Carrier is made for everyday closeness — padded shoulder straps, supportive head and neck panel and a cushioned seat, with adjustable buckles so the fit works for you.",
    images: [
      "/burgandy1.png",
      "/burgandy2.png",
      "/burgandy3.png",
      "/burgandy4.png",
      "/burgandy5.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [burgundyColor, blackColor, blueColor, redColor],
    features: sharedFeatures,
    carryingPositions: sharedPositions,
    specifications: sharedSpecifications,
    available: true,
  },
  {
    id: "herchoice-everyday-black",
    name: "HerChoice Everyday Black Carrier",
    price: 499,
    oldPrice: 1200,
    rating: 4.7,
    reviewCount: 189,
    description:
      "Understated black and cream carrier with a practical front storage pocket.",
    longDescription:
      "The HerChoice Everyday Black Carrier pairs a quiet black and cream palette with the practical details parents reach for daily — a front storage pocket, cushioned seat and adjustable straps and buckles.",
    images: [
      "/black1.png",
      "/black2.png",
      "/black3.png",
      "/black4.png",
      "/black5.png",
      "/black6.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [blackColor, burgundyColor, blueColor, redColor],
    features: sharedFeatures,
    carryingPositions: sharedPositions,
    specifications: sharedSpecifications,
    available: true,
  },
  {
    id: "herchoice-comfort-blue",
    name: "HerChoice Comfort Blue Carrier",
    price: 499,
    oldPrice: 1200,
    rating: 4.6,
    reviewCount: 96,
    description:
      "Vibrant ocean blue carrier designed for active days and comfortable support.",
    longDescription:
      "The HerChoice Comfort Blue Carrier features a striking ocean blue hue with cushioned leg support, ergonomic weight distribution, and durable adjustable buckles.",
    images: [
      "/blue1.png",
      "/blue2.png",
      "/blue3.png",
      "/blue4.png",
      "/blue5.png",
      "/blue6.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [blueColor, burgundyColor, blackColor, redColor],
    features: sharedFeatures,
    carryingPositions: sharedPositions,
    specifications: sharedSpecifications,
    available: true,
  },
  {
    id: "herchoice-signature-red",
    name: "HerChoice Signature Red Carrier",
    price: 499,
    oldPrice: 1200,
    rating: 4.5,
    reviewCount: 114,
    description:
      "Bold ruby red baby carrier crafted with soft padding and breathable fabric.",
    longDescription:
      "The HerChoice Signature Red Carrier offers high visibility, elegant ruby red styling, and ergonomic head & back support for long walks and daily chores.",
    images: [
      "/red1.png",
      "/red2.png",
      "/red3.png",
      "/red4.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [redColor, burgundyColor, blackColor, blueColor],
    features: sharedFeatures,
    carryingPositions: sharedPositions,
    specifications: sharedSpecifications,
    available: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const carrierBurgundy = "/burgandy1.png";
export const carrierBlack = "/black1.png";
export { featurePocket, sharedPositions };
