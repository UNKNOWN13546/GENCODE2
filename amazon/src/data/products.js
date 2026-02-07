// Sample product data for Amazon MVP
const products = [
  // Electronics
  {
    id: 1,
    name: "Samsung Galaxy M14 5G",
    category: "Electronics",
    price: 14990,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    description: "6GB RAM, 128GB Storage, 50MP Camera",
    rating: 4.2,
    reviews: 1523
  },
  {
    id: 2,
    name: "boAt Airdopes 131",
    category: "Electronics",
    price: 1299,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
    description: "Wireless Earbuds with Mic, 42H Playback",
    rating: 4.0,
    reviews: 8932
  },
  {
    id: 3,
    name: "Fire TV Stick 4K",
    category: "Electronics",
    price: 4999,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
    description: "Streaming Device with Alexa Voice Remote",
    rating: 4.5,
    reviews: 45632
  },
  {
    id: 4,
    name: "HP 15s Laptop",
    category: "Electronics",
    price: 42990,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
    description: "Intel Core i5, 8GB RAM, 512GB SSD",
    rating: 4.3,
    reviews: 2341
  },
  {
    id: 5,
    name: "Sony Alpha ILCE-6100Y",
    category: "Electronics",
    price: 75990,
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
    description: "Mirrorless Camera with 16-50mm Lens",
    rating: 4.6,
    reviews: 543
  },

  // Groceries
  {
    id: 6,
    name: "Tata Tea Gold",
    category: "Groceries",
    price: 265,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400",
    description: "Premium Tea Leaves, 1kg Pack",
    rating: 4.4,
    reviews: 12453
  },
  {
    id: 7,
    name: "Fortune Sunflower Oil",
    category: "Groceries",
    price: 180,
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400",
    description: "Refined Oil, 1L Pouch",
    rating: 4.3,
    reviews: 8764
  },
  {
    id: 8,
    name: "Nestle Maggi Noodles",
    category: "Groceries",
    price: 144,
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
    description: "Masala Instant Noodles, Pack of 12",
    rating: 4.5,
    reviews: 23421
  },
  {
    id: 9,
    name: "Amul Butter",
    category: "Groceries",
    price: 56,
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400",
    description: "Salted Butter, 100g",
    rating: 4.6,
    reviews: 15432
  },
  {
    id: 10,
    name: "Britannia Good Day Cookies",
    category: "Groceries",
    price: 40,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400",
    description: "Butter Cookies, 200g Pack",
    rating: 4.2,
    reviews: 9876
  },

  // Fresh
  {
    id: 11,
    name: "Fresh Apple Shimla",
    category: "Fresh",
    price: 180,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400",
    description: "Premium Quality Apples, 1kg",
    rating: 4.3,
    reviews: 3421
  },
  {
    id: 12,
    name: "Fresh Bananas",
    category: "Fresh",
    price: 50,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400",
    description: "Organic Bananas, 1 Dozen",
    rating: 4.4,
    reviews: 5632
  },
  {
    id: 13,
    name: "Fresh Tomatoes",
    category: "Fresh",
    price: 40,
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400",
    description: "Farm Fresh Tomatoes, 500g",
    rating: 4.1,
    reviews: 2341
  },
  {
    id: 14,
    name: "Fresh Milk",
    category: "Fresh",
    price: 62,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400",
    description: "Full Cream Milk, 1L",
    rating: 4.5,
    reviews: 8765
  },

  // Pharmacy
  {
    id: 15,
    name: "Dettol Antiseptic Liquid",
    category: "Pharmacy",
    price: 125,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400",
    description: "Disinfectant Liquid, 250ml",
    rating: 4.6,
    reviews: 6543
  },
  {
    id: 16,
    name: "Himalaya Neem Face Wash",
    category: "Pharmacy",
    price: 150,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
    description: "Purifying Face Wash, 150ml",
    rating: 4.4,
    reviews: 12345
  },
  {
    id: 17,
    name: "Paracetamol 500mg",
    category: "Pharmacy",
    price: 15,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    description: "Pain Relief Tablets, Strip of 15",
    rating: 4.7,
    reviews: 4532
  },
  {
    id: 18,
    name: "Band-Aid Adhesive Bandages",
    category: "Pharmacy",
    price: 75,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400",
    description: "Flexible Fabric Bandages, Pack of 30",
    rating: 4.5,
    reviews: 3421
  },
  {
    id: 19,
    name: "Vicks VapoRub",
    category: "Pharmacy",
    price: 95,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400",
    description: "Cough Suppressant Ointment, 50ml",
    rating: 4.6,
    reviews: 8765
  },

  // Fashion
  {
    id: 20,
    name: "Levi's Men's Jeans",
    category: "Fashion",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
    description: "511 Slim Fit Mid Rise Jeans",
    rating: 4.4,
    reviews: 5432
  },
  {
    id: 21,
    name: "Puma Men's T-Shirt",
    category: "Fashion",
    price: 799,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    description: "Regular Fit Cotton T-Shirt",
    rating: 4.2,
    reviews: 3241
  },
  {
    id: 22,
    name: "Nike Running Shoes",
    category: "Fashion",
    price: 4995,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    description: "Revolution 6 Running Shoes",
    rating: 4.5,
    reviews: 7654
  },
  {
    id: 23,
    name: "Fossil Men's Watch",
    category: "Fashion",
    price: 6995,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    description: "Analog Stainless Steel Watch",
    rating: 4.6,
    reviews: 2341
  },

  // Home & Kitchen
  {
    id: 24,
    name: "Prestige Pressure Cooker",
    category: "Home & Kitchen",
    price: 1299,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400",
    description: "Aluminium Pressure Cooker, 5L",
    rating: 4.5,
    reviews: 9876
  },
  {
    id: 25,
    name: "Milton Thermosteel Bottle",
    category: "Home & Kitchen",
    price: 449,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    description: "Vacuum Insulated Flask, 1L",
    rating: 4.4,
    reviews: 6543
  },
  {
    id: 26,
    name: "Cello Water Bottle Set",
    category: "Home & Kitchen",
    price: 299,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
    description: "Plastic Bottle Set of 6, 1L Each",
    rating: 4.2,
    reviews: 4321
  },
  {
    id: 27,
    name: "Pigeon Induction Cooktop",
    category: "Home & Kitchen",
    price: 2199,
    image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400",
    description: "1800W Induction Cooker",
    rating: 4.3,
    reviews: 5432
  },

  // Bazaar (Low price items)
  {
    id: 28,
    name: "Cleaning Brush Set",
    category: "Bazaar",
    price: 99,
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400",
    description: "Multipurpose Cleaning Brushes",
    rating: 4.0,
    reviews: 120
  },
  {
    id: 29,
    name: "USB Cable Type-C",
    category: "Bazaar",
    price: 149,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400",
    description: "Fast Charging Cable, 1m",
    rating: 3.8,
    reviews: 450
  },

  // MX Player (Dummy subscriptions/content)
  {
    id: 30,
    name: "MX Gold Subscription",
    category: "MX Player",
    price: 499,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
    description: "1 Year Ad-Free Streaming",
    rating: 4.8,
    reviews: 2300
  },

  // Pay (Gift Cards)
  {
    id: 31,
    name: "Amazon Pay Gift Card",
    category: "Pay",
    price: 1000,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=400",
    description: "Email Delivery Gift Voucher",
    rating: 5.0,
    reviews: 9999
  }
];

export default products;
