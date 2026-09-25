import Header from "@/components/layout/Header";
import PageHero from "@/components/shared/PageHero";

const galleryImages = [
  {
    category: "Hotel",
    image:
      "/images/47.png",
  },
  {
    category: "Rooms",
    image:
      "/images/46.png",
  },
  {
    category: "Pool",
    image:
      "/images/44.png",
  },
  {
    category: "Rooms",
    image:
      "/images/45.png",
  },
  {
    category: "Hotel",
    image:
      "/images/50.jpg",
  },
  {
    category: "Facilities",
    image:
      "/images/24.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main>
      <Header />

      <PageHero
        eyebrow="CEDAR GALLERY"
        title="Take a glimpse into the Cedar experience."
        description="Explore the spaces, rooms and experiences that make Cedar Hotel special."
        image="/images/47.png"
      />

      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-wrap gap-3">
            {["All", "Rooms", "Facilities", "Pool", "Studio Apartment"].map(
              (category, index) => (
                <button
                  key={category}
                  className={`rounded-full px-5 py-2.5 text-sm transition ${
                    index === 0
                      ? "bg-[#173f35] text-white"
                      : "bg-[#f8f5ef] text-[#173f35] hover:bg-[#c9a45c]"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="mb-5 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt={`Cedar Hotel ${item.category}`}
                  className="w-full transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}