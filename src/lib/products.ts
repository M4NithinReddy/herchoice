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
    title: "Head & Neck Support Pillow",
    description: "Comfort-focused support pillow around baby's head and neck.",
    image: "/headneck.jpeg",
  },
  {
    title: "Wide Cushioned Shoulder Straps",
    description: "Wide padded shoulder straps designed for comfortable everyday carrying.",
    image: "/shoulderstraps.jpeg",
  },
  {
    title: "Hard Board Support with Air Holes",
    description: "Ergonomic hard board back support featuring breathable air holes.",
    image: "/hardboard.jpeg",
  },
  {
    title: "Arm Holes",
    description: "Softly padded arm holes for baby's natural arm positioning and comfort.",
    image: "/armholes.jpeg",
  },
  {
    title: "Front Storage Pouch",
    description: "Convenient front storage pouch to keep everyday essentials within easy reach.",
    image: "/storagepouch.jpeg",
  },
  {
    title: "Adjustable Side Opening Buckle",
    description: "Flexible side opening buckle for an easy, customized, and secure fit.",
    image: "/adjustableside.jpeg",
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
  "Head & neck support pillow",
  "Wide cushioned shoulder straps",
  "Hard board support with air holes",
  "Arm holes for baby comfort",
  "Front storage pouch for essentials",
  "Adjustable side opening buckle",
];

export const purpleColor: ProductColor = {
  name: "Purple + Cream",
  swatch: "#6B21A8",
  image: "/11burgandy.png",
  images: [
    "/11burgandy.png",
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
  image: "/11black.png",
  images: [
    "/11black.png",
    "/black1.png",
    "/black2.png",
    "/black3.png",
    "/black5.png",
    "/black6.png",
  ],
};

export const blueColor: ProductColor = {
  name: "Ocean Blue + Cream",
  swatch: "#1E3A8A",
  image: "/11blue.png",
  images: [
    "/11blue.png",
    "/blue2.png",
    "/blue3.png",
    "/blue4.png",
    "/blue5.png",
    "/blue6.png",
  ],
};

export const maroonColor: ProductColor = {
  name: "Maroon + Cream",
  swatch: "#800000",
  image: "/11red.png",
  images: [
    "/11red.png",
    "/red1.png",
    "/red2.png",
    "/red3.png",
  ],
};

export const allColors: ProductColor[] = [
  purpleColor,
  blackColor,
  blueColor,
  maroonColor,
];

export const products: Product[] = [
  {
    id: "herchoice-classic-purple",
    name: "HerChoice Classic Purple Carrier",
    price: 499,
    oldPrice: 1200,
    rating: 4.8,
    reviewCount: 142,
    description:
      "A softly structured everyday carrier in signature purple and cream.",
    longDescription:
      "The HerChoice Classic Purple Carrier is made for everyday closeness — padded shoulder straps, supportive head and neck panel and a cushioned seat, with adjustable buckles so the fit works for you.",
    images: [
      "/11burgandy.png",
      "/burgandy1.png",
      "/burgandy2.png",
      "/burgandy3.png",
      "/burgandy4.png",
      "/burgandy5.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [purpleColor, blackColor, blueColor, maroonColor],
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
      "/11black.png",
      "/black1.png",
      "/black2.png",
      "/black3.png",
      "/black5.png",
      "/black6.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [blackColor, purpleColor, blueColor, maroonColor],
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
      "/11blue.png",
      "/blue2.png",
      "/blue3.png",
      "/blue4.png",
      "/blue5.png",
      "/blue6.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [blueColor, purpleColor, blackColor, maroonColor],
    features: sharedFeatures,
    carryingPositions: sharedPositions,
    specifications: sharedSpecifications,
    available: true,
  },
  {
    id: "herchoice-signature-maroon",
    name: "HerChoice Signature Maroon Carrier",
    price: 499,
    oldPrice: 1200,
    rating: 4.5,
    reviewCount: 114,
    description:
      "Bold maroon baby carrier crafted with soft padding and breathable fabric.",
    longDescription:
      "The HerChoice Signature Maroon Carrier offers high visibility, elegant maroon styling, and ergonomic head & back support for long walks and daily chores.",
    images: [
      "/11red.png",
      "/red1.png",
      "/red2.png",
      "/red3.png",
    ],
    featureImages: sharedFeatureImages,
    colors: [maroonColor, purpleColor, blackColor, blueColor],
    features: sharedFeatures,
    carryingPositions: sharedPositions,
    specifications: sharedSpecifications,
    available: true,
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const carrierBurgundy = "/11burgandy.png";
export const carrierBlack = "/11black.png";
export { featurePocket, sharedPositions };
