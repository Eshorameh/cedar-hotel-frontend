"use client";

import { Suspense } from "react";
import Link from "next/link";
import {
  BedDouble,
  Users,
  Maximize,
  SlidersHorizontal,
  CalendarDays,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { format, parseISO } from "date-fns";

import { rooms } from "@/config/rooms";
import BookingBar from "./BookingBar";

export default function BookingPage() {
  return (
    <Suspense fallback={<BookingLoading />}>
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();

  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const adults = Number(searchParams.get("adults")) || 2;
  const children = Number(searchParams.get("children")) || 0;
  const roomCount = Number(searchParams.get("rooms")) || 1;

  const hasSearch = Boolean(checkIn && checkOut);

  const nights =
    checkIn && checkOut
      ? Math.max(
          1,
          Math.ceil(
            (new Date(checkOut).getTime() -
              new Date(checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 1;

  return (
    <main className="min-h-screen bg-[#f8f5ef]">

      {/* =========================
          PAGE HEADER
      ========================== */}
      <section className="bg-[#173f35] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            CEDAR HOTEL
          </p>

          <h1 className="font-display mt-4 text-5xl sm:text-6xl">
            Find your stay
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
            Choose from our thoughtfully designed rooms and suites and
            create a stay that feels entirely yours.
          </p>

        </div>
      </section>

      {/* =========================
          SEARCH BAR
      ========================== */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-6">
        <BookingBar />
      </section>

      {/* =========================
          SEARCH SUMMARY
      ========================== */}
      <section className="mx-auto max-w-7xl px-6 pt-14 lg:px-8">

        {hasSearch ? (
          <div className="rounded-2xl border border-[#e5e0d7] bg-white p-5 shadow-sm">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">

                {/* Dates */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35]">
                    <CalendarDays size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9d99]">
                      Stay
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#173f35]">
                      {format(parseISO(checkIn!), "dd MMM yyyy")}
                      {" — "}
                      {format(parseISO(checkOut!), "dd MMM yyyy")}
                    </p>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9d99]">
                    Guests
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#173f35]">
                    {adults} Adults · {children} Children ·{" "}
                    {roomCount} {roomCount === 1 ? "Room" : "Rooms"}
                  </p>
                </div>

                {/* Nights */}
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9d99]">
                    Duration
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#173f35]">
                    {nights} {nights === 1 ? "Night" : "Nights"}
                  </p>
                </div>

              </div>

              <a
                href="#search"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8d3c9] px-5 py-3 text-sm font-medium text-[#173f35] transition hover:bg-[#f8f5ef]"
              >
                <SlidersHorizontal size={16} />
                Modify Search
              </a>

            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-[#e5e0d7] bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-[#6b746f]">
              Select your dates and guests above to find available rooms.
            </p>
          </div>
        )}

      </section>

      {/* =========================
          RESULTS
      ========================== */}
      <section
        id="search"
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
      >

        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#c9a45c]">
              AVAILABLE ROOMS
            </p>

            <h2 className="font-display mt-3 text-4xl text-[#173f35]">
              Choose your room
            </h2>

            <p className="mt-3 text-sm text-[#6b746f]">
              Select a room that suits your stay.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 self-start rounded-full border border-[#d8d3c9] bg-white px-5 py-3 text-sm font-medium text-[#173f35] transition hover:bg-[#f8f5ef]"
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>

        </div>

        {/* Room Results */}
        <div className="space-y-6">
          {rooms.map((room) => (
            <RoomResultCard
            key={room.slug}
            room={room}
            nights={nights}
            checkIn={checkIn}
            checkOut={checkOut}
            adults={adults}
            children={children}
            roomCount={roomCount}
          />
          ))}
        </div>

      </section>
    </main>
  );
}

/* =================================
   ROOM RESULT CARD
================================= */

function RoomResultCard({
  room,
  nights,
  checkIn,
  checkOut,
  adults,
  children,
  roomCount,
}: {
  room: (typeof rooms)[number];
  nights: number;
  checkIn: string | null;
  checkOut: string | null;
  adults: number;
  children: number;
  roomCount: number;
}) {
  const total = room.pricePerNight * nights;

  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">

      <div className="grid md:grid-cols-[320px_1fr_auto]">

        {/* IMAGE */}
        <div className="h-64 md:h-full">
          <img
            src={room.images[0]}
            alt={room.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* INFORMATION */}
        <div className="p-7 lg:p-9">

          <p className="text-xs font-semibold tracking-[0.2em] text-[#c9a45c]">
            CEDAR HOTEL
          </p>

          <h3 className="font-display mt-3 text-3xl text-[#173f35]">
            {room.name}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#6b746f]">
            {room.description}
          </p>

          {/* FEATURES */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#6b746f]">

            <span className="flex items-center gap-2">
              <BedDouble size={17} />
              {room.bedType}
            </span>

            <span className="flex items-center gap-2">
              <Users size={17} />
              {room.maxGuests} Guests
            </span>

            <span className="flex items-center gap-2">
              <Maximize size={17} />
              {room.roomSize} m²
            </span>

          </div>

        </div>

        {/* PRICE */}
        <div className="flex min-w-[210px] flex-col justify-between border-t border-[#eeeae2] p-7 md:border-l md:border-t-0 lg:p-9">

          <div>

            <p className="text-xs text-[#9a9d99]">
              From
            </p>

            <p className="font-display mt-1 text-2xl text-[#173f35]">
              ₦{room.pricePerNight.toLocaleString()}
            </p>

            <p className="mt-1 text-xs text-[#9a9d99]">
              per night
            </p>

            <div className="mt-4 border-t border-[#eeeae2] pt-4">

              <p className="text-xs text-[#9a9d99]">
                {nights} {nights === 1 ? "night" : "nights"}
              </p>

              <p className="mt-1 text-lg font-semibold text-[#173f35]">
                ₦{total.toLocaleString()}
              </p>

              <p className="text-xs text-[#9a9d99]">
                estimated room total
              </p>

            </div>

          </div>

        <Link
          href={{
            pathname: `/rooms/${room.slug}`,
            query: {
              ...(checkIn ? { checkIn } : {}),
              ...(checkOut ? { checkOut } : {}),
              adults,
              children,
              rooms: roomCount,
            },
          }}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#173f35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a45c] hover:text-[#173f35]"
        >
          View Room
        </Link>
        </div>

      </div>

    </article>
    
  );
  
}
function BookingLoading() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] px-6 py-32">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
          CEDAR HOTEL
        </p>

        <h1 className="font-display mt-4 text-4xl text-[#173f35]">
          Loading booking...
        </h1>
      </div>
    </main>
  );
}