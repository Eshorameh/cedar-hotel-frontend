import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, BedDouble, Users, Ruler } from "lucide-react";

import { rooms } from "@/config/rooms";

interface RoomDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    checkIn?: string;
    checkOut?: string;
    adults?: string;
    children?: string;
    rooms?: string;
  }>;
}

export default async function RoomDetailsPage({
  params,
  searchParams,
}: RoomDetailsPageProps) {
  const { slug } = await params;
  const bookingParams = await searchParams;

  const checkIn = bookingParams.checkIn;
  const checkOut = bookingParams.checkOut;
  const adults = bookingParams.adults ?? "2";
  const children = bookingParams.children ?? "0";
  const roomCount = bookingParams.rooms ?? "1";

  const room = rooms.find((room) => room.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="bg-white">
      {/* Back */}
      <section className="mx-auto max-w-7xl px-6 pb-6 pt-10 lg:px-8">
        <Link
          href="/rooms"
          className="inline-flex items-center gap-2 text-sm text-[#6b746f] transition hover:text-[#173f35]"
        >
          <ArrowLeft size={16} />
          Back to Rooms
        </Link>
      </section>

      {/* Gallery */}
      <section className="mx-auto grid max-w-7xl gap-4 px-6 lg:grid-cols-2 lg:px-8">
        <div className="h-[500px] overflow-hidden rounded-2xl">
          <img
            src={room.images[0]}
            alt={room.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {room.images.slice(1, 3).map((image, index) => (
            <div
              key={index}
              className="h-[242px] overflow-hidden rounded-2xl"
            >
              <img
                src={image}
                alt={`${room.name} ${index + 2}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
              CEDAR HOTEL
            </p>

            <h1 className="font-display mt-4 text-5xl text-[#173f35] sm:text-6xl">
              {room.name}
            </h1>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#6b746f]">
              <span className="flex items-center gap-2">
                <Users size={17} />
                {room.maxGuests} Guests
              </span>

              <span className="flex items-center gap-2">
                <BedDouble size={17} />
                {room.bedType}
              </span>

              <span className="flex items-center gap-2">
                <Ruler size={17} />
                {room.roomSize} m²
              </span>
            </div>

            <div className="mt-10 max-w-2xl">
              <h2 className="font-display text-3xl text-[#173f35]">
                About this room
              </h2>

              <p className="mt-5 leading-8 text-[#6b746f]">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mt-12">
              <h2 className="font-display text-3xl text-[#173f35]">
                Room amenities
              </h2>
              
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {room.amenities.map((amenity) => (
                  <div
                    key={amenity.name}
                    className="rounded-xl bg-[#f8f5ef] px-4 py-4 text-sm text-[#173f35]"
                  >
                    {amenity.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <aside className="h-fit rounded-2xl bg-[#f8f5ef] p-8">
            <p className="text-sm text-[#6b746f]">Starting from</p>

            <p className="mt-2 text-3xl font-semibold text-[#173f35]">
              ₦{room.pricePerNight.toLocaleString()}
              <span className="text-sm font-normal text-[#6b746f]">
                {" "}
                / night
              </span>
            </p>

            <div className="my-7 border-t border-[#e5e0d7]" />

           <Link
            href={`/booking/checkout?room=${room.slug}&checkIn=${checkIn ?? ""}&checkOut=${checkOut ?? ""}&adults=${adults}&children=${children}&rooms=${roomCount}`}
            className="flex w-full items-center justify-center rounded-full bg-[#173f35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c9a45c] hover:text-[#173f35]"
          >
            Check Availability
          </Link>

            <p className="mt-4 text-center text-xs leading-5 text-[#6b746f]">
              Select your dates to check availability and continue with your
              reservation.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}