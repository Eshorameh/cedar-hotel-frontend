import Header from "@/components/layout/Header";
import PageHero from "@/components/shared/PageHero";
import {
  Dumbbell,
  Wifi,
  Waves,
  Utensils,
  Baby,
  Trees,
} from "lucide-react";

const facilities = [
  {
    title: "Swimming Pool",
    description:
      "Take a refreshing break and enjoy a peaceful moment by the pool.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Fully Equipped Gym",
    description:
      "Stay active with modern fitness equipment and a comfortable workout environment.",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Restaurant & Dining",
    description:
      "Enjoy delicious meals and a welcoming dining experience throughout your stay.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "High-Speed Internet",
    description:
      "Stay connected with reliable internet access throughout the property.",
    icon: Wifi,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Children's Playground",
    description:
      "A welcoming space where younger guests can play, explore and have fun.",
    icon: Baby,
    image:
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Serene Green Spaces",
    description:
      "Relax and unwind in peaceful outdoor spaces surrounded by greenery.",
    icon: Trees,
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function FacilitiesPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="OUR FACILITIES"
        title="Everything you need for an exceptional stay."
        description="From relaxation and fitness to dining and family experiences, discover the facilities designed to make your Cedar stay complete."
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2200&q=90"
      />

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            THE CEDAR EXPERIENCE
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#173f35] sm:text-5xl">
            Designed for comfort beyond your room
          </h2>

          <p className="mt-6 leading-8 text-[#6b746f]">
            At Cedar Hotel, your experience extends beyond where you sleep.
            Explore our range of facilities created to help you relax, stay
            active, connect and enjoy every moment of your stay.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#f8f5ef] px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.title}
                  className="group overflow-hidden rounded-2xl bg-white"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#173f35] shadow-lg">
                      <Icon size={19} />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-display text-2xl text-[#173f35]">
                      {facility.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#6b746f]">
                      {facility.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#173f35] px-6 py-24 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
          EXPERIENCE CEDAR
        </p>

        <h2 className="font-display mx-auto mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
          Everything is ready for your arrival.
        </h2>

        <a
          href="/booking"
          className="mt-8 inline-flex rounded-full bg-[#c9a45c] px-8 py-4 text-sm font-semibold text-[#173f35] transition hover:bg-white"
        >
          Book Your Stay
        </a>
      </section>
    </main>
  );
}