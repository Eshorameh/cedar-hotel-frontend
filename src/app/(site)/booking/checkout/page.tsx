"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { format, parseISO } from "date-fns";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { rooms } from "@/config/rooms";

const guestSchema = z.object({
  firstName: z.string().min(2, "Enter your first name."),
  lastName: z.string().min(2, "Enter your last name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Enter a valid phone number."),
  specialRequests: z.string().optional(),
});

type GuestFormData = z.infer<typeof guestSchema>;

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const roomSlug = searchParams.get("room");
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");

  const adults = Number(searchParams.get("adults")) || 2;
  const children = Number(searchParams.get("children")) || 0;
  const roomCount = Number(searchParams.get("rooms")) || 1;

  const room = rooms.find((item) => item.slug === roomSlug);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GuestFormData>({
    resolver: zodResolver(guestSchema),
  });

  /*
   * Validate booking information before continuing.
   */
  if (!room || !checkIn || !checkOut) {
    return (
      <main className="min-h-screen bg-[#f8f5ef] px-6 py-32">
        <div className="mx-auto max-w-xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            CEDAR HOTEL
          </p>

          <h1 className="font-display mt-4 text-4xl text-[#173f35]">
            Booking information missing
          </h1>

          <p className="mt-4 leading-7 text-[#6b746f]">
            Please return to the booking page and select your room and dates
            before continuing.
          </p>

          <Link
            href="/booking"
            className="mt-8 inline-flex rounded-full bg-[#173f35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#c9a45c] hover:text-[#173f35]"
          >
            Return to Booking
          </Link>
        </div>
      </main>
    );
  }

  /*
   * From this point onward TypeScript knows that these values exist.
   * We capture them as validated constants so nested functions such as
   * onSubmit can safely use them.
   */
  const selectedRoom = room;
  const selectedCheckIn = checkIn;
  const selectedCheckOut = checkOut;

  const nights = Math.max(
    1,
    Math.ceil(
      (parseISO(selectedCheckOut).getTime() -
        parseISO(selectedCheckIn).getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const roomSubtotal =
    selectedRoom.pricePerNight * nights * roomCount;

  const serviceFee = Math.round(roomSubtotal * 0.05);

  const total = roomSubtotal + serviceFee;

  function onSubmit(data: GuestFormData) {
    console.log({
      guest: data,
      room: selectedRoom.slug,
      checkIn: selectedCheckIn,
      checkOut: selectedCheckOut,
      adults,
      children,
      roomCount,
      nights,
      total,
    });

    alert("Reservation details captured successfully.");
  }

  return (
    <main className="min-h-screen bg-[#f8f5ef]">

      {/* Header */}
      <section className="bg-[#173f35] px-6 pb-20 pt-32 text-white">
        <div className="mx-auto max-w-7xl">

          <Link
            href="/booking"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to rooms
          </Link>

          <p className="mt-10 text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            CEDAR HOTEL
          </p>

          <h1 className="font-display mt-4 text-5xl sm:text-6xl">
            Complete your reservation
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-white/70">
            You're almost there. Enter your details to complete your
            reservation.
          </p>

        </div>
      </section>

      {/* Checkout */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">

          {/* Form */}
          <div className="rounded-2xl bg-white p-7 shadow-sm lg:p-10">

            <p className="text-xs font-semibold tracking-[0.25em] text-[#c9a45c]">
              GUEST DETAILS
            </p>

            <h2 className="font-display mt-3 text-3xl text-[#173f35]">
              Tell us about yourself
            </h2>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-6"
            >

              <div className="grid gap-6 sm:grid-cols-2">

                <Field
                  label="First Name"
                  error={errors.firstName?.message}
                >
                  <input
                    {...register("firstName")}
                    placeholder="First name"
                    className="input"
                  />
                </Field>

                <Field
                  label="Last Name"
                  error={errors.lastName?.message}
                >
                  <input
                    {...register("lastName")}
                    placeholder="Last name"
                    className="input"
                  />
                </Field>

              </div>

              <Field
                label="Email Address"
                error={errors.email?.message}
              >
                <input
                  {...register("email")}
                  type="email"
                  placeholder="you@example.com"
                  className="input"
                />
              </Field>

              <Field
                label="Phone Number"
                error={errors.phone?.message}
              >
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="+234 800 000 0000"
                  className="input"
                />
              </Field>

              <Field
                label="Special Requests"
                error={errors.specialRequests?.message}
              >
                <textarea
                  {...register("specialRequests")}
                  rows={5}
                  placeholder="Anything you'd like us to know?"
                  className="input resize-none"
                />
              </Field>

              <div className="flex gap-3 rounded-xl bg-[#f8f5ef] p-4">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-[#173f35]"
                />

                <p className="text-xs leading-6 text-[#6b746f]">
                  Your information will be used to process your reservation.
                  Payment processing will be connected when the backend and
                  payment gateway are implemented.
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#173f35] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c9a45c] hover:text-[#173f35]"
              >
                Continue Reservation
              </button>

            </form>
          </div>

          {/* Summary */}
          <aside className="h-fit overflow-hidden rounded-2xl bg-white shadow-sm">

            <img
              src={selectedRoom.images[0]}
              alt={selectedRoom.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-7">

              <p className="text-xs font-semibold tracking-[0.25em] text-[#c9a45c]">
                YOUR STAY
              </p>

              <h2 className="font-display mt-3 text-3xl text-[#173f35]">
                {selectedRoom.name}
              </h2>

              <div className="mt-7 space-y-4">

                <Summary
                  label="Check In"
                  value={format(
                    parseISO(selectedCheckIn),
                    "dd MMM yyyy"
                  )}
                />

                <Summary
                  label="Check Out"
                  value={format(
                    parseISO(selectedCheckOut),
                    "dd MMM yyyy"
                  )}
                />

                <Summary
                  label="Duration"
                  value={`${nights} ${
                    nights === 1 ? "Night" : "Nights"
                  }`}
                />

                <Summary
                  label="Guests"
                  value={`${adults} Adults · ${children} Children`}
                />

                <Summary
                  label="Rooms"
                  value={roomCount.toString()}
                />

              </div>

              <div className="my-7 border-t border-[#e5e0d7]" />

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-[#6b746f]">
                    Room
                  </span>

                  <span className="font-medium text-[#173f35]">
                    ₦{roomSubtotal.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#6b746f]">
                    Service fee
                  </span>

                  <span className="font-medium text-[#173f35]">
                    ₦{serviceFee.toLocaleString()}
                  </span>
                </div>

              </div>

              <div className="my-6 border-t border-[#e5e0d7]" />

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-xs text-[#9a9d99]">
                    Total
                  </p>

                  <p className="mt-1 font-display text-3xl text-[#173f35]">
                    ₦{total.toLocaleString()}
                  </p>
                </div>

              </div>

            </div>
          </aside>

        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#173f35]">
        {label}
      </label>

      {children}

      {error && (
        <p className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

function Summary({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-6 text-sm">
      <span className="text-[#9a9d99]">
        {label}
      </span>

      <span className="text-right font-medium text-[#173f35]">
        {value}
      </span>
    </div>
  );
}