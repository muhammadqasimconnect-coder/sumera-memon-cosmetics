// Sumera Memon Cosmetics product catalogue
const PRODUCTS = [
  {
    id: 1,
    name: "Morphe Highlighter Pencil",
    category: "makeup",
    type: "Highlighter Pencil",
    tag: "BEST VALUE",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "morphe-highlighter",
    shades: ["Oh Brow Baby", "So Worth It"],
    description: "A precise highlighter pencil that adds soft brightness and definition wherever you want it. Easy to control, quick to blend and perfect for everyday makeup.",
    image: "assets/morphe-highlighter.jpg?v=20260903-3"
  },
  {
    id: 2,
    name: "Lilybyred Glassy Layer Fixing Tint",
    category: "makeup",
    type: "Korean Lip Tint",
    tag: "K-BEAUTY",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "lilybyred-glassy-tint",
    shades: ["One Colour"],
    description: "A Korean-inspired lip tint with a lightweight feel and glossy, glass-like finish. Gives lips an easy polished pop of colour and shine.",
    image: "assets/lily-product-clean.webp?v=1"
  },
  {
    id: 3,
    name: "2 in 1 Two Tone Bitten Lip",
    category: "makeup",
    type: "Two-Tone Lip Colour",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "two-tone-bitten-lip",
    shades: ["Pink Two Tone"],
    description: "Create a soft gradient bitten-lip effect in one swipe. The two-tone stick blends complementary shades for a cute, effortless everyday lip look.",
    image: "assets/two-tone-product-clean.webp?v=1"
  },
  {
    id: 4,
    name: "Nashami Big Eyes 3 in 1 Effect Mascara",
    category: "makeup",
    type: "Mascara",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "nashami-big-eyes-mascara",
    shades: ["One Colour"],
    description: "A 3-in-1 effect mascara for a fuller, longer-looking and more defined lash look. Its sleek design makes it an easy everyday pick for polished eye makeup.",
    image: "assets/nashami-mascara-product.webp?v=1"
  },
  {
    id: 5,
    name: "Wardabeauty Shiny Liquid Eyeliner",
    category: "makeup",
    type: "Liquid Eyeliner",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "wardabeauty-shiny-eyeliner",
    shades: ["One Colour"],
    description: "A shiny liquid eyeliner made for crisp, defined eye looks with a touch of glamour. Its fine applicator style makes it easy to create clean lines for everyday or party makeup.",
    image: "assets/wardabeauty-eyeliner-final-binary.jpg?v=20260904-1"
  }
  ,{
    id: 6,
    name: "Kylie Matte Charm Lipstick",
    category: "makeup",
    type: "Matte Lipstick",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "kylie-matte-charm-lipstick",
    shades: ["Dark Pink", "Brown", "Maroon", "Nude Pink", "Nude Brown", "Purple"],
    description: "A bold matte red lipstick with rich colour payoff and a smooth, glamorous finish. Perfect for everyday glam or party looks.",
    image: "data:image/jpeg;base64,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"
  }
  ,{
    id: 7,
    name: "Charmrouse Waterproof Eyeliner",
    category: "makeup",
    type: "Waterproof Eyeliner",
    tag: "NEW",
    price: 150,
    bundleQty: 2,
    bundlePrice: 250,
    bundleGroup: "charmrouse-waterproof-eyeliner",
    shades: ["Black"],
    description: "A sleek waterproof eyeliner for clean, defined eye looks. Easy to use for everyday lining or a sharper glam finish.",
    image: "assets/charmrouse-waterproof-eyeliner-fixed.jpg?v=20260918-2"
  }
  ,{
    id: 8,
    name: "Makeup Combo Deal",
    category: "makeup",
    type: "Full Makeup Combo",
    tag: "DEAL",
    price: 1000,
    shades: ["Complete Combo"],
    optionLabel: "Deal",
    offer: "Special deal: 1 complete makeup combo for Rs. 1000",
    description: "A value-packed makeup combo featuring a highlighter palette, two-tone bitten lip, mascara, highlighter pencil and eyeliner in one ready-to-order deal.",
    image: "assets/makeup-combo-deal-generated-hq.jpg?v=20260919-1115"
  }
];