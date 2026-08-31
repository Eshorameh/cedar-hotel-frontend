"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import RoomCard from "@/components/rooms/RoomCard";
import { rooms } from "@/config/rooms";

export default function RoomCarousel() {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-5">
          {rooms.map((room) => (
            <CarouselItem
              key={room.id}
              className="pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <RoomCard room={room} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 border-[#d8d3c9] text-[#173f35] hover:bg-[#173f35] hover:text-white" />

            <CarouselNext className="static translate-y-0 border-[#d8d3c9] text-[#173f35] hover:bg-[#173f35] hover:text-white" />
          </div>

          <Link
            href="/rooms"
            className="flex items-center gap-2 text-sm font-semibold text-[#173f35] transition hover:text-[#c9a45c]"
          >
            View All Rooms
            <ArrowRight size={16} />
          </Link>
        </div>
      </Carousel>
    </div>
  );
}