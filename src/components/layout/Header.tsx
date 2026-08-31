"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Rooms", href: "/rooms" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="group">
          <div className="font-display text-2xl font-semibold tracking-wide">
            CEDAR
          </div>

          <div className="text-[9px] tracking-[0.35em] text-white/70">
            SETRACO
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/90 transition hover:text-[#c9a45c]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/booking"
            className="rounded-full bg-[#c9a45c] px-6 py-3 text-sm font-semibold text-[#173f35] transition hover:bg-white"
          >
            Book Your Stay
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-full border border-white/30 p-2 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-white/10 bg-[#173f35]/95 px-6 py-6 backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/booking"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#c9a45c] px-5 py-3 text-center text-sm font-semibold text-[#173f35]"
            >
              Book Your Stay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}