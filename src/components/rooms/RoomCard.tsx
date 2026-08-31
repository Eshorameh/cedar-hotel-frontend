import Link from "next/link";
import { ArrowRight, BedDouble, Users } from "lucide-react";
import { Room } from "@/types/room";

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm">
      {/* Image */}
      <Link href={`/rooms/${room.slug}`}>
        <div className="relative h-[280px] overflow-hidden">
          <img
            src={room.images[0]}
            alt={room.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {room.featured && (
            <span className="absolute left-5 top-5 rounded-full bg-[#c9a45c] px-4 py-2 text-xs font-semibold text-[#173f35]">
              Featured
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-display text-3xl text-[#173f35]">
          {room.name}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#6b746f]">
          {room.shortDescription}
        </p>

        {/* Details */}
        <div className="mt-6 flex gap-5 border-y border-[#e5e0d7] py-4 text-sm text-[#6b746f]">
          <span className="flex items-center gap-2">
            <Users size={16} />
            {room.maxGuests} Guests
          </span>

          <span className="flex items-center gap-2">
            <BedDouble size={16} />
            {room.bedType}
          </span>
        </div>

        {/* Price + link */}
        <div className="mt-6 flex items-center justify-between">
          <div>
            <span className="text-xs text-[#6b746f]">From</span>

            <p className="font-semibold text-[#173f35]">
              ₦{room.pricePerNight.toLocaleString()}
              <span className="ml-1 text-xs font-normal text-[#6b746f]">
                / night
              </span>
            </p>
          </div>

          <Link
            href={`/rooms/${room.slug}`}
            className="flex items-center gap-2 text-sm font-semibold text-[#173f35] transition hover:text-[#c9a45c]"
          >
            Explore
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}