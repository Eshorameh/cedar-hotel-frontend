import Header from "@/components/layout/Header";
import PageHero from "@/components/shared/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="GET IN TOUCH"
        title="We're here to make your stay effortless."
        description="Have a question, need assistance or planning your next stay? We'd love to hear from you."
        image="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90"
      />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {/* Contact information */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
              CONTACT CEDAR
            </p>

            <h2 className="font-display mt-4 text-4xl text-[#173f35] sm:text-5xl">
              Let's talk
            </h2>

            <p className="mt-6 max-w-lg leading-8 text-[#6b746f]">
              Our team is available to help with reservations, enquiries and
              anything else you may need during your Cedar experience.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35]">
                  <MapPin size={19} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173f35]">Visit Us</h3>
                  <p className="mt-1 text-sm text-[#6b746f]">
                    Cedar Hotel, Abuja, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35]">
                  <Phone size={19} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173f35]">Call Us</h3>
                  <p className="mt-1 text-sm text-[#6b746f]">
                    +234 XXX XXX XXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8f5ef] text-[#173f35]">
                  <Mail size={19} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173f35]">Email Us</h3>
                  <p className="mt-1 text-sm text-[#6b746f]">
                    reservations@cedarhotel.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl bg-[#f8f5ef] p-8 sm:p-10">
            <h3 className="font-display text-3xl text-[#173f35]">
              Send us a message
            </h3>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-[#e5e0d7] bg-white px-4 py-3.5 outline-none transition focus:border-[#c9a45c]"
              />

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-[#e5e0d7] bg-white px-4 py-3.5 outline-none transition focus:border-[#c9a45c]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-[#e5e0d7] bg-white px-4 py-3.5 outline-none transition focus:border-[#c9a45c]"
              />

              <textarea
                rows={5}
                placeholder="How can we help?"
                className="w-full resize-none rounded-xl border border-[#e5e0d7] bg-white px-4 py-3.5 outline-none transition focus:border-[#c9a45c]"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-[#173f35] px-6 py-4 font-semibold text-white transition hover:bg-[#102f28]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}