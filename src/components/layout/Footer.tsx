import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Home", href: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#173f35] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="font-display text-2xl tracking-wide">
                CEDAR
              </div>

              <div className="text-[9px] tracking-[0.35em] text-white/60">
                SETRACO
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/60">
              Experience refined hospitality, thoughtful comfort and memorable
              stays at CEDAR SETRACO.
            </p>

          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Explore
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#c9a45c]"
                />

                <p className="text-sm leading-6 text-white/60">
                  CEDAR SETRACO
                  <br />
                  Abuja, Nigeria
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-1 shrink-0 text-[#c9a45c]"
                />

                <p className="text-sm text-white/60">
                  +234 XXX XXX XXXX
                </p>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="mt-1 shrink-0 text-[#c9a45c]"
                />

                <p className="text-sm text-white/60">
                  reservations@cedarhotel.com
                </p>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c9a45c]">
              Your Stay
            </h3>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Ready to experience Cedar? Check availability and plan your next
              stay with us.
            </p>

            <Link
              href="/booking"
              className="mt-6 inline-flex rounded-full bg-[#c9a45c] px-6 py-3 text-sm font-semibold text-[#173f35] transition hover:bg-white"
            >
              Book Your Stay
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 text-xs text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} CEDAR SETRACO. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}