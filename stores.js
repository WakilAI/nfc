// Registre public. Les URL sont dérivées de category + slug : les garder stables.
// Renseigner commune et wilaya après confirmation du propriétaire du commerce.
window.STORE_DIRECTORY = {
  categories: [
    { slug: "food", name: "Food" },
    { slug: "clothing-store", name: "Clothing Store" },
    { slug: "perfume-store", name: "Perfume Store" },
    { slug: "computer-store", name: "Computer Store" },
    { slug: "phone-store", name: "Phone Store" },
    { slug: "home-goods", name: "Home Goods" },
    { slug: "travel-agency", name: "Travel Agency" },
    { slug: "cosmetic-store", name: "Cosmetic Store" },
    { slug: "shoes-store", name: "Shoes Store" },
    { slug: "dental-clinic", name: "Dental Clinic" },
    { slug: "jewelry-store", name: "Jewelry Store" }
  ],
  stores: [
    { name: "Ino Burger", category: "food", slug: "ino-burger", commune: null, wilaya: null, logo: "food/ino-burger/references/logo.jpg" },
    { name: "Maison Allure", category: "clothing-store", slug: "maison-allure", commune: null, wilaya: null, logo: "clothing-store/maison-allure/assets/logo.jpg" },
    { name: "Sallon d’or", category: "home-goods", slug: "sallon-dor", commune: null, wilaya: null, logo: "home-goods/sallon-dor/assets/logo-web.webp" },
    { name: "Midho Privé", category: "perfume-store", slug: "midho-prive", commune: null, wilaya: null, logo: "perfume-store/midho-prive/images/logo.png" },
    { name: "MYB Hardware", category: "computer-store", slug: "myb-hardware", commune: null, wilaya: null, logo: "computer-store/myb-hardware/public/MYB-Hardware-logo.svg" },
    { name: "Vegas Phone", category: "phone-store", slug: "vegas-phone", commune: null, wilaya: null, logo: "phone-store/vegas-phone/images/logo.png" },
    { name: "Pixel Store", category: "phone-store", slug: "pixel-store", commune: null, wilaya: null, logo: "phone-store/pixel-store/assets/pixel-store-card.webp" },
    { name: "COSMABENT", category: "cosmetic-store", slug: "cosmabent", commune: null, wilaya: null, logo: "cosmetic-store/cosmabent/assets/logo.webp" }
  ]
};
