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
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=90",
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
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1600&q=90",
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
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=1600&q=90",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=90",
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