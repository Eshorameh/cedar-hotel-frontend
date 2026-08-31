import Header from "@/components/layout/Header";
import PageHero from "@/components/shared/PageHero";

const galleryImages = [
  {
    category: "Hotel",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Rooms",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Pool",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Rooms",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Hotel",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=85",
  },
  {
    category: "Facilities",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1200&q=85",
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
        image="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2200&q=90"
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