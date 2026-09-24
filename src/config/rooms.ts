import { Room } from "@/types/room";

export const rooms: Room[] = [
  {
    id: "room-001",
    name: "Deluxe Room",
    slug: "deluxe-room",
    shortDescription:
      "A beautifully appointed room designed for comfort and relaxation.",
    description:
      "Our Deluxe Room combines contemporary design, thoughtful amenities and a peaceful atmosphere to give you a comfortable and memorable stay.",
    images: [
      "/images/2.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
    ],
    roomSize: 32,
    maxGuests: 2,
    bedType: "King Bed",
    pricePerNight: 150000,
    currency: "NGN",
    amenities: [
      { name: "Free Wi-Fi" },
      { name: "Air Conditioning" },
      { name: "Smart TV" },
      { name: "Mini Fridge" },
      { name: "Room Service" },
      { name: "Work Desk" },
    ],
    featured: true,
    available: true,
  },

  {
    id: "room-002",
    name: "Executive Room",
    slug: "executive-room",
    shortDescription:
      "A refined room offering additional space and comfort.",
    description:
      "Designed for business and leisure travellers, the Executive Room provides an elegant environment with everything you need for a productive and relaxing stay.",
    images: [
      "/images/11.jpg",
      "/images/12.jpg",
    ],
    roomSize: 40,
    maxGuests: 2,
    bedType: "King Bed",
    pricePerNight: 200000,
    currency: "NGN",
    amenities: [
      { name: "Free Wi-Fi" },
      { name: "Air Conditioning" },
      { name: "Smart TV" },
      { name: "Mini Bar" },
      { name: "Work Desk" },
      { name: "Room Service" },
    ],
    featured: true,
    available: true,
  },

  {
    id: "room-003",
    name: "Premium Suite",
    slug: "premium-suite",
    shortDescription:
      "A spacious suite created for guests seeking an elevated experience.",
    description:
      "Our Premium Suite offers generous living space, refined interiors and enhanced amenities for guests who want a little more from their stay.",
    images: [
      "/images/45.png",
      "/images/48.png",
      "/images/44.png",
    ],
    roomSize: 65,
    maxGuests: 4,
    bedType: "King Bed",
    pricePerNight: 300000,
    currency: "NGN",
    amenities: [
      { name: "Free Wi-Fi" },
      { name: "Air Conditioning" },
      { name: "Smart TV" },
      { name: "Mini Bar" },
      { name: "Living Area" },
      { name: "Room Service" },
      { name: "Work Desk" },
      { name: "Premium Bathroom" },
    ],
    featured: true,
    available: true,
  },
];