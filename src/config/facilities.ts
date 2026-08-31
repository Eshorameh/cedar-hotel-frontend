export interface Facility {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    id: "swimming-pool",
    name: "Swimming Pool",
    category: "LEISURE",
    description:
      "Relax, refresh and enjoy a peaceful afternoon by the pool.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "pool-game",
    name: "Pool Game",
    category: "RECREATION",
    description:
      "Enjoy a friendly game of pool in a relaxed and welcoming setting.",
    image:
      "https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "children-playground",
    name: "Children's Play Area",
    category: "FAMILY",
    description:
      "A fun space where younger guests can play, explore and make memories.",
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "gym",
    name: "Fitness Centre",
    category: "WELLNESS",
    description:
      "Keep up with your routine with our dedicated fitness facilities.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "basketball",
    name: "Basketball Court",
    category: "SPORTS",
    description:
      "Get active and enjoy a game on our basketball court.",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1800&q=90",
  },
  {
    id: "football",
    name: "Football",
    category: "SPORTS",
    description:
      "Bring your game and enjoy outdoor football with friends and family.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1800&q=90",
  },
];