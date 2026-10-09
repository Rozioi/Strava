import type { IVenue, ICategory, IProduct } from "./types";

export const venues: IVenue[] = [
  {
    id: "mak1",
    name: "Mak.by",
    description: "Легендарная франшиза в городе • Доставка 30 мин",
    logo: "https://galileomall.by/assets/components/site/img/restaurants/logos/vit-logo-large-green.png",
    location: "minsk",
    images: [
      { id: 1, url: "https://avatars.mds.yandex.net/get-altay/10470901/2a0000018e00a9b32d466fbbac1fe79a575c/orig" },
      { id: 2, url: "https://avatars.mds.yandex.net/get-altay/16338459/2a0000019b632c5a94976a6680d0aa6762ee/L_height" },
      { id: 3, url: "https://avatars.mds.yandex.net/get-altay/13611210/2a0000019348ff969fb6210f84ffbc0c2ebc/orig" }
    ]
  },
  {
    id: "kfc1",
    name: "KFC",
    description: "Хрустящая курочка • Быстро и вкусно",
    logo: "https://pbs.twimg.com/profile_images/1131468756893491201/nGQQHxj7_400x400.jpg",
    location: "minsk",
    images: [
      { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwGJaBvtys4_8CfzdKC44Fxl7v5ztOhBDjctpZvGgxzFSQ4AqPU-cHowZ0&s=10" },
      { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWgFNcWdCDoRvW4CPjv2VEWZ59WkxwVMPfAQ3LKrqLA&s=10" },
      { id: 3, url: "https://avatars.mds.yandex.net/get-altay/217470/2a000001882675643e7315a7fdcc3eb0e77a/orig" },
      { id: 4, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyl_rsClXvY48-gVUzahOZt1xFhC3Ywwg2L2uJ2WNy8cZmXQRiGrC45c&s=10" }
    ]
  },
  {
    id: "bk1",
    name: "Burger King",
    description: "Король бургеров • Огонь!",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnxGcu1byec8vs7t5ZPuNdQaUE_6nCwaIicHlzpN4fwQ&s",
    location: "brest",
    images: [
      { id: 1, url: "https://avatars.mds.yandex.net/get-altay/5235220/2a0000017e551e52d7fc6e804e76a8eac544/orig" },
      { id: 2, url: "https://blisch.by/wp-content/uploads/2018/06/03-IMG_7135-700x467.jpg" },
      { id: 3, url: "https://avatars.mds.yandex.net/get-altay/6406681/2a0000017fd7be63c9ef93c89c5494852ad2/L_height" }
    ]
  },
  {
    id: "pd1",
    name: "Papa Doner",
    description: "Сочная шаурма и донер • Топ выбор",
    logo: "https://play-lh.googleusercontent.com/xH-fasZsCjkJi__z7jn9tvU9OReLKvAuEydqY9R7DH4m8RG6Zk4YiPWSKneFL9cay3C4xUbDXluw9K0vRP1oqw",
    location: "minsk",
    images: [
      { id: 1, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUFD4cawj4iaGshow5oPb_v3gpihFmIptFnqW6AYKPo_1yPMFvMIPhvka&s=10" },
      { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Ii6XM_X7XggymaoY2GD6Djt2I4CjBH3etEqSUQrvZnJhxSUhqHk3ZP4&s=10" },
      { id: 3, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0jlZWdaKrFVtINBfdcyWqO4E3F-45FUVw_WYZIBWwE4V9X_z_5rAqic&s=10" }
    ]
  },
];

export const categories: ICategory[] = [
  { id: "cat_mak_burgers", name: "Бургеры", venueId: "mak1", iconUrl: "", sortOrder: 1 },
  { id: "cat_mak_chicken", name: "Курица", venueId: "mak1", iconUrl: "", sortOrder: 2 },
  { id: "cat_mak_drinks", name: "Напитки", venueId: "mak1", iconUrl: "", sortOrder: 3 },

  { id: "cat_kfc_buckets", name: "Баскеты", venueId: "kfc1", iconUrl: "", sortOrder: 1 },
  { id: "cat_kfc_wraps", name: "Роллы", venueId: "kfc1", iconUrl: "", sortOrder: 2 },

  { id: "cat_bk_classic", name: "Классика", venueId: "bk1", iconUrl: "", sortOrder: 1 },

  { id: "cat_pd_sticks", name: "Стики", venueId: "pd1", iconUrl: "", sortOrder: 1 },
  { id: "cat_pd_doners", name: "Донеры", venueId: "pd1", iconUrl: "", sortOrder: 2 },
];

export const products: IProduct[] = [
  {
    id: "prod_mak_bigmac",
    categoryId: "cat_mak_burgers",
    venueId: "mak1",
    name: "Биг Мак",
    description: "Два рубленых бифштекса, сыр чеддер, салат айсберг, соус Биг Мак",
    imageUrl: "https://mak.by/upload/iblock/d33/bpsqz9wsbiem3ed23nb7muwhsbl654l2.png.webp",
    basePrice: 8.50,
    variants: [
      { id: "v_standard", name: "Стандарт", price: 8.50, isAvailable: true },
      { id: "v_double", name: "Двойной", price: 11.90, isAvailable: true },
    ],
    isAvailable: true,
    sortOrder: 1,
  },
  {
    id: "prod_mak_nuggets",
    categoryId: "cat_mak_chicken",
    venueId: "mak1",
    name: "Чикен Наггетс",
    description: "Нежное куриное мясо в хрустящей панировке",
    imageUrl: "https://mak.by/upload/iblock/036/d734shv3ejh4k8mt9r758hp9an2bnv3f.png.webp",
    basePrice: 4.20,
    variants: [
      { id: "v_6pcs", name: "6 шт", price: 4.20, isAvailable: true },
      { id: "v_9pcs", name: "9 шт", price: 5.80, isAvailable: true },
      { id: "v_20pcs", name: "20 шт", price: 10.50, isAvailable: false }, // Проверка unavailable
    ],
    isAvailable: true,
    sortOrder: 1,
  },
  {
    id: "prod_mak_cola",
    categoryId: "cat_mak_drinks",
    venueId: "mak1",
    name: "Кока-Кола",
    imageUrl: "https://mak.by/upload/iblock/944/mbumntigtgxpjmht8zbphfkfb2zkqqyp.png.webp",
    basePrice: 2.50,
    variants: [
      { id: "v_0.4", name: "0.4 л", price: 2.50, isAvailable: true },
      { id: "v_0.6", name: "0.6 л", price: 3.20, isAvailable: true },
    ],
    isAvailable: true,
    sortOrder: 1,
  },

  {
    id: "prod_kfc_bucket_s",
    categoryId: "cat_kfc_buckets",
    venueId: "kfc1",
    name: "Баскет S",
    description: "Баскет S",
    imageUrl: "https://kfc.by/wp-content/uploads/2025/12/БАСКЕТ-L-С-СОУСАМИ-1.png",
    basePrice: 14.90,
    variants: [],
    isAvailable: true,
    sortOrder: 1,
  },
  {
    id: "prod_kfc_twister",
    categoryId: "cat_kfc_wraps",
    venueId: "kfc1",
    name: "Твистер Оригинальный",
    description: "Острое филе, овощи, соус в пшеничной лепешке",
    imageUrl: "https://kfc-burgers.ru/wp-content/uploads/2019/03/tvister.png",
    basePrice: 6.90,
    variants: [
      { id: "v_original", name: "Оригинальный", price: 6.90, isAvailable: true },
      { id: "v_cheese", name: "С сыром", price: 7.90, isAvailable: true },
    ],
    isAvailable: true,
    sortOrder: 1,
  },

  {
    id: "prod_bk_whopper",
    categoryId: "cat_bk_classic",
    venueId: "bk1",
    name: "Воппер",
    description: "Фирменная булочка с кунжутом, говядина гриль, томаты, лук",
    imageUrl: "https://just-eat.by/image/data/shops/12294/22375.jpg",
    basePrice: 9.90,
    variants: [
      { id: "v_single", name: "Одинарный", price: 9.90, isAvailable: true },
      { id: "v_double", name: "Двойной", price: 13.50, isAvailable: true },
    ],
    isAvailable: true,
    sortOrder: 1,
  },
  {
    id: "prod_bk_king_menu",
    categoryId: "cat_bk_classic",
    venueId: "bk1",
    name: "Баскет S",
    description: "Баскет курочка , луковые кольца и кортошка фри",
    imageUrl: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1000098_7492A89F013308D24EC02CEFF0F0DC59.webp",
    basePrice: 14.90,
    variants: [],
    isAvailable: true,
    sortOrder: 1,
  },

  {
    id: "prod_pd_classic",
    categoryId: "cat_pd_doners",
    venueId: "pd1",
    name: "Донер из говядины",
    description: "Курица гриль, свежие овощи, фирменный чесночный соус",
    imageUrl: "https://papadoner.by/resource/images/2026/09/1152h800_doner_sayt.webp",
    basePrice: 5.50,
    variants: [
      { id: "v_small", name: "Маленькая (250г)", price: 5.50, isAvailable: true },
      { id: "v_large", name: "Большая (400г)", price: 7.90, isAvailable: true },
      { id: "v_xl", name: "XXL (600г)", price: 10.50, isAvailable: true },
    ],
    isAvailable: true,
    sortOrder: 1,
  },
  {
    id: "prod_pd_beef_doner",
    categoryId: "cat_pd_sticks",
    venueId: "pd1",
    name: "Стик классический",
    description: "Говядина, маринованный лук, острый соус, лаваш",
    imageUrl: "https://papadoner.by/resource/images/2026/01/stik_chiz-2-1.webp",
    basePrice: 7.50,
    variants: [
      { id: "v_std", name: "Стандарт", price: 7.50, isAvailable: true },
      { id: "v_spicy", name: "Острый", price: 7.50, isAvailable: true },
    ],
    isAvailable: true,
    sortOrder: 2,
  },
];
