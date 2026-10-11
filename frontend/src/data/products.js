export const categories = [
  { id: "all", name: "All Products" },
  { id: "wheat", name: "Wheat Atta" },
  { id: "multigrain", name: "Multigrain Atta" },
  { id: "besan-rice", name: "Besan & Rice Flour" }
];

export const products = [
  {
    id: "shuddh-sharbati-atta",
    name: "Shuddh Sharbati Wheat Atta",
    category: "wheat",
    tagline: "100% Authentic MP Sharbati Wheat",
    description: "Milled from Madhya Pradesh's finest golden Sharbati wheat grains using traditional slow stone grinding. Makes soft, fluffy, aromatic rotis that remain fresh for hours.",
    features: [
      "100% Pure MP Sharbati Grains",
      "Cold-Pressed Stone Milling",
      "Rich in Natural Bran & Fiber",
      "Zero Maida & No Preservatives"
    ],
    nutrition: {
      protein: "12.5 g",
      fiber: "11.2 g",
      carbs: "71 g",
      calories: "340 kcal / 100g"
    },
    sizes: [
      { weight: "1 kg", price: 60, originalPrice: 70 },
      { weight: "5 kg", price: 280, originalPrice: 320, recommended: true },
      { weight: "10 kg", price: 540, originalPrice: 600 }
    ],
    rating: 4.9,
    reviewsCount: 148,
    isBestseller: true,
    badgeText: "Bestseller",
    colorTheme: "#4A2C11"
  },
  {
    id: "traditional-chakki-atta",
    name: "Traditional Chakki Fresh Atta",
    category: "wheat",
    tagline: "Authentic Stone Ground Natural Taste",
    description: "Prepared from hand-picked heavy wheat grains for daily family meals. Retains natural bran fiber which promotes healthy digestion and natural taste.",
    features: [
      "Traditional Stone Wheel Milling",
      "High Fiber Natural Whole Wheat",
      "Ideal Choice for Daily Rotis",
      "Soft & Spongy Roti Guarantee"
    ],
    nutrition: {
      protein: "11.8 g",
      fiber: "12.0 g",
      carbs: "72 g",
      calories: "335 kcal / 100g"
    },
    sizes: [
      { weight: "1 kg", price: 45, originalPrice: 50 },
      { weight: "5 kg", price: 210, originalPrice: 240 },
      { weight: "10 kg", price: 410, originalPrice: 460, recommended: true }
    ],
    rating: 4.8,
    reviewsCount: 92,
    isBestseller: false,
    badgeText: "Fresh Ground",
    colorTheme: "#3D230D"
  },
  {
    id: "multigrain-atta",
    name: "Multigrain Atta",
    category: "multigrain",
    tagline: "Nutritious 7-Grain Superfood Power Blend",
    description: "Scientifically balanced mix of Whole Wheat, Chana Dal, Barley (Jau), Soybean, Maize (Makka), Ragi & Flaxseeds. Rich in plant protein, dietary fiber, and low glycemic index.",
    features: [
      "Blend of 7 Superfood Grains",
      "High Protein & Omega-3 Rich",
      "Low Glycemic Index (Low GI)",
      "Supports Immune & Digestive Health"
    ],
    nutrition: {
      protein: "16.4 g",
      fiber: "14.5 g",
      carbs: "64 g",
      calories: "355 kcal / 100g"
    },
    sizes: [
      { weight: "1 kg", price: 75, originalPrice: 85 },
      { weight: "5 kg", price: 350, originalPrice: 400, recommended: true },
      { weight: "10 kg", price: 680, originalPrice: 750 }
    ],
    rating: 5.0,
    reviewsCount: 215,
    isBestseller: true,
    badgeText: "Super Health",
    colorTheme: "#D59B2D"
  },
  {
    id: "besan",
    name: "Pure Chana Dal Besan",
    category: "besan-rice",
    tagline: "100% Pure Stone-Ground Gram Flour",
    description: "Freshly stone-ground from premium unpolished chana dal with zero color, zero pea mixing, and zero adulteration. Imparts rich golden color and authentic nutty aroma to dhoklas, pakodas, and sweets.",
    features: [
      "100% Pure Unpolished Chana Dal",
      "Zero Added Colors or Pea Flour",
      "High Protein & Naturally Gluten-Free",
      "Rich Natural Golden Aroma"
    ],
    nutrition: {
      protein: "22.4 g",
      fiber: "10.8 g",
      carbs: "57 g",
      calories: "387 kcal / 100g"
    },
    sizes: [
      { weight: "500 g", price: 65, originalPrice: 75 },
      { weight: "1 kg", price: 120, originalPrice: 140, recommended: true },
      { weight: "5 kg", price: 580, originalPrice: 650 }
    ],
    rating: 4.9,
    reviewsCount: 164,
    isBestseller: true,
    badgeText: "100% Pure Chana",
    colorTheme: "#C68212"
  },
  {
    id: "chawal-ka-atta",
    name: "Chawal Ka Pisa Hua Atta",
    category: "besan-rice",
    tagline: "Fine Stone-Ground Fresh Rice Flour",
    description: "Prepared from selected whole white rice grains, cleaned and finely stone-ground into a silky smooth powder. Ideal for crispy dosas, idlis, traditional rice rotis, and festive delicacies.",
    features: [
      "100% Cleaned Premium Whole Rice",
      "Silky Smooth Ultra-Fine Milling",
      "Naturally 100% Gluten-Free",
      "Perfect for Rotis, Dosas & Festive Snacks"
    ],
    nutrition: {
      protein: "6.8 g",
      fiber: "2.4 g",
      carbs: "79 g",
      calories: "360 kcal / 100g"
    },
    sizes: [
      { weight: "1 kg", price: 55, originalPrice: 65 },
      { weight: "2 kg", price: 105, originalPrice: 120, recommended: true },
      { weight: "5 kg", price: 250, originalPrice: 290 }
    ],
    rating: 4.8,
    reviewsCount: 88,
    isBestseller: false,
    badgeText: "Fresh Ground",
    colorTheme: "#2E7D46"
  }
];
