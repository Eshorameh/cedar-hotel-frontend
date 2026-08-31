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
      "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "couples",
    category: "TIME TOGETHER",
    title: "Time for two",
    description:
      "Slow down, reconnect and enjoy beautiful moments in a setting designed for comfort.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "dining",
    category: "DINING",
    title: "Good food. Good company.",
    description:
      "Gather around the table and enjoy memorable dining experiences with the people who matter.",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "environment",
    category: "THE CEDAR EXPERIENCE",
    title: "A place to breathe",
    description:
      "Discover calm surroundings, beautiful green spaces and room to simply slow down.",
    image:
      "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=2000&q=90",
  },
  {
    id: "pool",
    category: "LEISURE",
    title: "Make a splash",
    description:
      "Refresh, relax and enjoy a little time by the water during your stay.",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=90",
  },
];