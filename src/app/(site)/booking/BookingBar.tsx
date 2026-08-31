"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown, Search, Users } from "lucide-react";
import { addDays, format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleCheckIn = (date: Date | undefined) => {
    setCheckIn(date);

    // Clear checkout if it is no longer valid
    if (date && checkOut && checkOut <= date) {
      setCheckOut(undefined);
    }
  };

  const handleSearch = () => {
    if (!checkIn) {
      alert("Please select your check-in date.");
      return;
    }

    if (!checkOut) {
      alert("Please select your check-out date.");
      return;
    }

    const params = new URLSearchParams({
      checkIn: format(checkIn, "yyyy-MM-dd"),
      checkOut: format(checkOut, "yyyy-MM-dd"),
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString(),
    });

    window.location.href = `/booking?${params.toString()}`;
  };

  return (
    <section className="relative z-20 mx-auto -mt-10 w-full max-w-6xl px-6">
      <div className="rounded-2xl bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
        <div className="grid items-stretch gap-2 md:grid-cols-[1fr_1fr_1fr_auto]">

          {/* =========================
              CHECK IN
          ========================== */}
          <Popover>
            <PopoverTrigger
              type="button"
              className="group flex items-center gap-4 rounded-xl px-5 py-4 text-left transition hover:bg-[#f8f5ef]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35] transition group-hover:bg-[#173f35] group-hover:text-white">
                <CalendarDays size={19} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9d99]">
                  Check In
                </p>

                <p className="mt-1 text-sm font-medium text-[#173f35]">
                  {checkIn
                    ? format(checkIn, "dd MMM yyyy")
                    : "Select Date"}
                </p>
              </div>
            </PopoverTrigger>

            <PopoverContent
              className="w-auto border border-[#e5e0d7] bg-white p-0 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              align="start"
            >
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={handleCheckIn}
                disabled={{
                  before: new Date(),
                }}
              />
            </PopoverContent>
          </Popover>

          {/* =========================
              CHECK OUT
          ========================== */}
          <Popover>
            <PopoverTrigger
              type="button"
              className="group flex items-center gap-4 rounded-xl px-5 py-4 text-left transition hover:bg-[#f8f5ef]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35] transition group-hover:bg-[#173f35] group-hover:text-white">
                <CalendarDays size={19} strokeWidth={1.7} />
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9d99]">
                  Check Out
                </p>

                <p className="mt-1 text-sm font-medium text-[#173f35]">
                  {checkOut
                    ? format(checkOut, "dd MMM yyyy")
                    : "Select Date"}
                </p>
              </div>
            </PopoverTrigger>

            <PopoverContent
                className="w-auto border border-[#e5e0d7] bg-white p-0 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                align="start"
              >
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                disabled={{
                  before: checkIn
                    ? addDays(checkIn, 1)
                    : new Date(),
                }}
              />
            </PopoverContent>
          </Popover>

          {/* =========================
              GUESTS
          ========================== */}
          <Popover>
            <PopoverTrigger
              type="button"
              className="group flex items-center gap-4 rounded-xl px-5 py-4 text-left transition hover:bg-[#f8f5ef]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35] transition group-hover:bg-[#173f35] group-hover:text-white">
                <Users size={19} strokeWidth={1.7} />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a9d99]">
                  Guests
                </p>

                <p className="mt-1 text-sm font-medium text-[#173f35]">
                  {adults} Adults · {rooms} Room
                </p>
              </div>

              <ChevronDown
                size={16}
                className="text-[#9a9d99]"
              />
            </PopoverTrigger>

            <PopoverContent
              className="w-80 border border-[#e5e0d7] bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
              align="end"
            >
              <GuestRow
                label="Adults"
                description="Age 13+"
                value={adults}
                onDecrease={() =>
                  setAdults((value) => Math.max(1, value - 1))
                }
                onIncrease={() =>
                  setAdults((value) => value + 1)
                }
              />

              <GuestRow
                label="Children"
                description="Age 0–12"
                value={children}
                onDecrease={() =>
                  setChildren((value) => Math.max(0, value - 1))
                }
                onIncrease={() =>
                  setChildren((value) => value + 1)
                }
              />

              <GuestRow
                label="Rooms"
                description="Number of rooms"
                value={rooms}
                onDecrease={() =>
                  setRooms((value) => Math.max(1, value - 1))
                }
                onIncrease={() =>
                  setRooms((value) => value + 1)
                }
              />
            </PopoverContent>
          </Popover>

          {/* =========================
              SEARCH
          ========================== */}
          <button
            type="button"
            onClick={handleSearch}
            className="flex min-h-[72px] items-center justify-center gap-3 rounded-xl bg-[#173f35] px-7 text-sm font-semibold text-white transition hover:bg-[#c9a45c] hover:text-[#173f35]"
          >
            <Search size={18} />
            <span>Check Availability</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* =================================
   GUEST ROW
================================= */

function GuestRow({
  label,
  description,
  value,
  onDecrease,
  onIncrease,
}: {
  label: string;
  description: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#eeeae2] py-4 last:border-0">
      <div>
        <p className="text-sm font-medium text-[#173f35]">
          {label}
        </p>

        <p className="mt-1 text-xs text-[#9a9d99]">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onDecrease}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8d3c9] text-[#173f35] transition hover:bg-[#173f35] hover:text-white"
        >
          −
        </button>

        <span className="w-5 text-center text-sm font-medium text-[#173f35]">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8d3c9] text-[#173f35] transition hover:bg-[#173f35] hover:text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}