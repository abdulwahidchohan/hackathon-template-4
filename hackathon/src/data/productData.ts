// Define the Product interface
export interface Product {
    id: number; // Unique numeric identifier
    name: string; // Product name
    imagePath: string; // URL for the product image
    price: number; // Price as a numeric value
    description: string; // Product description
    discountPercentage: number; // Discount percentage as a number
    isFeaturedProduct: boolean; // Flag for featured product
    stockLevel: number; // Stock level as a numeric value
  }
  
  // Structured product data
  export const products: Product[] = [
    {
      id: 1,
      name: "Tribù Elio Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (5).png",
      price: 1200,
      description: "A sleek outdoor chair with natural wooden elements and a modern look.",
      discountPercentage: 10,
      isFeaturedProduct: true,
      stockLevel: 25,
    },
    {
      id: 2,
      name: "Armchair Tortuga",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (35).png",
      price: 850,
      description: "An elegant armchair with plush cushions and a curved design for comfort.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 10,
    },
    {
      id: 3,
      name: "Uchiwa Quilted Lounge Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (6).png",
      price: 1600,
      description: "A spacious lounge chair with a quilted back and soft cushioning.",
      discountPercentage: 20,
      isFeaturedProduct: true,
      stockLevel: 5,
    },
    {
      id: 4,
      name: "Stylish Golden Metal Legs Mint Blue Fabric Velvet Sofa Leisure Armchair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (3).png",
      price: 780,
      description: "A luxurious armchair with velvet fabric and golden metal legs.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 12,
    },
    {
      id: 5,
      name: "Hans Wegner Style Three-Legged Shell Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (4).png",
      price: 990,
      description: "Iconic three-legged chair with faux leather and ash plywood frame.",
      discountPercentage: 10,
      isFeaturedProduct: false,
      stockLevel: 8,
    },
    {
      id: 6,
      name: "Rapson Thirty-Nine Guest Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (7).png",
      price: 1300,
      description: "A mid-century modern chair with clean lines and durable materials.",
      discountPercentage: 15,
      isFeaturedProduct: true,
      stockLevel: 20,
    },
    {
      id: 7,
      name: "Nautilus Lounge Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (8).png",
      price: 1450,
      description: "A lounge chair with a shell-inspired design and premium upholstery.",
      discountPercentage: 12,
      isFeaturedProduct: true,
      stockLevel: 10,
    },
    {
      id: 8,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (9).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 50,
    },
    {
      id: 9,
      name: "Cozy Armchair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (10).png",
      price: 520,
      description: "Compact armchair with a cozy design for small spaces.",
      discountPercentage: 8,
      isFeaturedProduct: false,
      stockLevel: 15,
    },
    {
      id: 10,
      name: "Alpha Chair – Solid Ebonised Oak",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (11).png",
      price: 900,
      description: "A sturdy oak chair with a sleek and minimalist design.",
      discountPercentage: 10,
      isFeaturedProduct: false,
      stockLevel: 18,
    },
    {
      id: 11,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (12).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 50,
    },
    {
      id: 12,
      name: "Futuristic Sleek Modern Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (14).png",
      price: 2000,
      description: "A modern chair with a carbon fiber frame and bold red accents.",
      discountPercentage: 0,
      isFeaturedProduct: true,
      stockLevel: 10,
    },
    {
      id: 13,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (15).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 50,
    },
    {
        id: 14,
      name: "Futuristic Sleek Modern Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (16).png",
      price: 2000,
      description: "A modern chair with a carbon fiber frame and bold red accents.",
      discountPercentage: 0,
      isFeaturedProduct: true,
      stockLevel: 10,
    },
    {
      id: 15,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (17).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 50,
    },
    {
      id: 16,
      name: "Futuristic Sleek Modern Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (18).png",
      price: 2000,
      description: "A modern chair with a carbon fiber frame and bold red accents.",
      discountPercentage: 0,      
      isFeaturedProduct: true,
      stockLevel: 10,
    },
    {
      id: 17,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (19).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 50,
    },
    {
      id: 18,
      name: "Futuristic Sleek Modern Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (20).png",
      price: 2000,
      description: "A modern chair with a carbon fiber frame and bold red accents.",
      discountPercentage: 0,      
      isFeaturedProduct: true,
      stockLevel: 10,   
    },
    {
      id: 19,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (21).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false,
      stockLevel: 50,
    },
    {
      id: 20,
      name: "Futuristic Sleek Modern Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (22).png",
      price: 2000,
      description: "A modern chair with a carbon fiber frame and bold red accents.",
      discountPercentage: 0,      
      isFeaturedProduct: true,
      stockLevel: 10,
    },
    {
      id: 21,
      name: "High Quality Modern Customized Plastic Chair",
      imagePath: "https://next-ecommerce-template-4.vercel.app/product/Chair (23).png",
      price: 150,
      description: "A simple and lightweight chair ideal for dining or casual use.",
      discountPercentage: 0,
      isFeaturedProduct: false, 
      stockLevel: 50,
    }
  ];
  
  export default products;
  