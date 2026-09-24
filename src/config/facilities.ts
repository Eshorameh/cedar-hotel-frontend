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
      "/images/16.jpg",
  },
  {
    id: "pool-game",
    name: "Sport Games",
    category: "RECREATION",
    description:
      "Enjoy a friendly game of pool in a relaxed and welcoming setting.",
    image:
      "/images/17.jpg",
  },
  {
    id: "children-playground",
    name: "Hit The Gym",
    category: "Sport",
    description:
      "A Healthy Body Equals a Healthy Mind..",
    image:
      "/images/19.jpg",
  },
  {
    id: "gym",
    name: "Fitness Centre",
    category: "WELLNESS",
    description:
      "Keep up with your routine with our dedicated fitness facilities.",
    image:
      "/images/20.jpg",
  },
  {
    id: "basketball",
    name: "Basketball Court",
    category: "SPORTS",
    description:
      "Get active and enjoy a game on our basketball court.",
    image:
      "/images/17.jpg",
  },
  {
    id: "football",
    name: "Football",
    category: "SPORTS",
    description:
      "Bring your game and enjoy outdoor football with friends and family.",
    image:
      "/images/26.jpg",
  },
];