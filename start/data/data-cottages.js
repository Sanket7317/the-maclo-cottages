import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cottage-images/`;

export const cottages = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "cottage-001.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden cottage 001. Nestled in a picturesque forest, this stunning cottage offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "cottage-002.jpg",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy cottage 002. Perfect for couples, this cottage offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "cottage-003.jpg",
    description:
      "Experience luxury family living in our medium-sized wooden cottage 003. Perfect for families of up to 4 people, this cottage offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cottage has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "cottage-004.jpg",
    description:
      "Indulge in the ultimate luxury family vacation in this medium-sized cottage 004. Designed for families of up to 4, this cottage offers a sumptuous retreat for the discerning traveler. Inside, the cottage boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "cottage-005.jpg",
    description:
      "Enjoy a comfortable and cozy getaway with your group or family in our spacious cottage 005. Designed to accommodate up to 6 people, this cottage offers a secluded retreat in the heart of nature. Inside, the cottage features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "cottage-006.jpg",
    description:
      "Experience the epitome of luxury with your group or family in our spacious wooden cottage 006. Designed to comfortably accommodate up to 6 people, this cottage offers a lavish retreat in the heart of nature. Inside, the cottage features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "cottage-007.jpg",
    description:
      "Accommodate your large group or multiple families in the spacious and grand wooden cottage 007. Designed to comfortably fit up to 8 people, this cottage offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cottage features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cottage has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
];
