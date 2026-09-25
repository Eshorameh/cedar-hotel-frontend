export interface Moment {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export const moments: Moment[] = [
  {
    id: "family",
    category: "FAMILY",
    title: "Moments together",
    description:
      "From playful afternoons to quiet evenings, Cedar gives families space to enjoy time together.",
    image:
      "/images/24.jpg",
  },
  {
    id: "couples",
    category: "TIME TOGETHER",
    title: "Time for two",
    description:
      "Slow down, reconnect and enjoy beautiful moments in a setting designed for comfort.",
    image:
      "/images/22.jpg",
  },
  {
    id: "dining",
    category: "DINING",
    title: "Good food. Good company.",
    description:
      "Gather around the table and enjoy memorable dining experiences with the people who matter.",
    image:
      "/images/31.jpg",
  },
  {
    id: "environment",
    category: "THE CEDAR EXPERIENCE",
    title: "A place to breathe",
    description:
      "Discover calm surroundings, beautiful green spaces and room to simply slow down.",
    image:
      "/images/49.png",
  },
  {
    id: "pool",
    category: "LEISURE",
    title: "Make a splash",
    description:
      "Refresh, relax and enjoy a little time by the water during your stay.",
    image:
      "/images/16.jpg",
  },
];