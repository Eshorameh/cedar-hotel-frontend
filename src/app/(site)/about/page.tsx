import Header from "@/components/layout/Header";
import PageHero from "@/components/shared/PageHero";

export default function AboutPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="ABOUT CEDAR HOTEL"
        title="More Than a Stay. An Experience."
        description="Discover the story, philosophy and hospitality behind Cedar Hotel."
        image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2200&q=90"
      />

      {/* Introduction */}
      <section className="px-6 py-28 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
              OUR STORY
            </p>

            <h2 className="font-display mt-4 text-4xl leading-tight text-[#173f35] sm:text-5xl">
              A place created for comfort, connection and memorable stays.
            </h2>
          </div>

          <div className="space-y-6 leading-8 text-[#6b746f]">
            <p>
              Cedar Hotel is designed around a simple idea: hospitality should
              feel personal.
            </p>

            <p>
              From the moment you arrive, every detail is thoughtfully
              considered to create an environment where guests can relax,
              reconnect and enjoy their stay.
            </p>

            <p>
              Our spaces combine contemporary comfort with a warm and welcoming
              atmosphere, giving every guest a place they can truly feel at
              home.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#f8f5ef] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            OUR PHILOSOPHY
          </p>

          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl text-[#173f35] sm:text-5xl">
            Hospitality built around you
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Comfort",
                text: "Thoughtfully designed spaces that make every stay relaxing.",
              },
              {
                title: "Hospitality",
                text: "Warm, attentive service designed around our guests.",
              },
              {
                title: "Excellence",
                text: "A commitment to quality in every part of your experience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-10 text-left"
              >
                <h3 className="font-display text-2xl text-[#173f35]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-[#6b746f]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#173f35] px-6 py-28 text-center">
        <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
          EXPERIENCE CEDAR
        </p>

        <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl text-white sm:text-5xl">
          Your next memorable stay begins here.
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