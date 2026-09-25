import Header from "@/components/layout/Header";
import PageHero from "@/components/shared/PageHero";
import { ArrowRight, BedDouble, Users } from "lucide-react";
import { rooms } from "@/config/rooms";
import RoomCard from "@/components/rooms/RoomCard";
import Link from "next/link";


 
export default function RoomsPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="OUR ROOMS"
        title="Comfort designed around you."
        description="Discover thoughtfully designed rooms and suites created for rest, privacy and an exceptional stay."
        image="/images/45.png"
      />


          <section className="bg-[#f8f5ef] px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {rooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            </div>
          </section>
        </main>
  );
}