export interface RoomAmenity {
  name: string;
  icon?: string;
}

export interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;

  images: string[];

  roomSize: number;
  maxGuests: number;
  bedType: string;

  pricePerNight: number;
  currency: string;

  amenities: RoomAmenity[];

  featured: boolean;
  available: boolean;
}