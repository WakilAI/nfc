// Registre public. Les URL sont dérivées de category + slug : les garder stables.
// Renseigner commune et wilaya après confirmation du propriétaire du commerce.
window.STORE_DIRECTORY = {
  categories: [
    { slug: "food", name: "Restauration" },
    { slug: "clothing-store", name: "Mode & maison" },
    { slug: "perfume-store", name: "Parfumerie" },
    { slug: "computer-store", name: "Informatique" },
    { slug: "phone-store", name: "Téléphonie" }
  ],
  stores: [
    { name: "Ino Burger", category: "food", slug: "ino-burger", commune: null, wilaya: null, logo: "food/ino-burger/references/logo.jpg" },
    { name: "Maison Allure", category: "clothing-store", slug: "maison-allure", commune: null, wilaya: null, logo: "clothing-store/maison-allure/assets/logo.jpg" },
    { name: "Sallon d’or", category: "clothing-store", slug: "sallon-dor", commune: null, wilaya: null, logo: "clothing-store/sallon-dor/assets/logo-web.webp" },
    { name: "Midho Privé", category: "perfume-store", slug: "midho-prive", commune: null, wilaya: null, logo: "perfume-store/midho-prive/images/logo.png" },
    { name: "MYB Hardware", category: "computer-store", slug: "myb-hardware", commune: null, wilaya: null, logo: "computer-store/myb-hardware/public/MYB-Hardware-logo.svg" },
    { name: "Vegas Phone", category: "phone-store", slug: "vegas-phone", commune: null, wilaya: null, logo: "phone-store/vegas-phone/images/logo.png" }
  ]
};
