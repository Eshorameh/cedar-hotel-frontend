import HeroSlider from "@/components/shared/HeroSlider";
import BookingBar from "./(site)/booking/BookingBar";
import RoomCarousel from "@/components/rooms/RoomCarousel";
import Header from "@/components/layout/Header";
import MomentsSlider from "@/components/shared/MomentsSlider";
import Footer from "@/components/layout/Footer";
import FacilitiesSlider from "@/components//shared/FacilitiesSlider";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSlider />

      <BookingBar />

      {/* Welcome */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            WELCOME TO CEDAR
          </p>

          <h2 className="font-display mt-4 text-4xl text-[#173f35] sm:text-5xl">
            A refined stay, thoughtfully designed
          </h2>

          <p className="mt-6 leading-8 text-[#6b746f]">
            Cedar Hotel brings together contemporary comfort, serene
            surroundings and warm hospitality to create an experience that
            feels effortlessly yours.
          </p>
        </div>
      </section>

      {/* Featured Rooms */}
      <section id="rooms" className="bg-white px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            STAY WITH US
          </p>

          <h2 className="font-display mt-3 text-4xl text-[#173f35] sm:text-5xl">
            Featured Rooms
          </h2>

          <div className="mt-10">
            <RoomCarousel />
          </div>
        </div>
      </section>

            {/* Facilities */}
      <section id="facilities" className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            DISCOVER CEDAR
          </p>

          <h2 className="font-display mt-3 text-4xl text-[#173f35] sm:text-5xl">
            Everything you need
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6b746f]">
            From relaxation and recreation to fitness and family experiences,
            everything you need for a memorable stay is right here.
          </p>

          <FacilitiesSlider />
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-white px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#c9a45c]">
            CEDAR GALLERY
          </p>

          <h2 className="font-display mt-3 text-4xl text-[#173f35] sm:text-5xl">
            Moments worth remembering
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#6b746f]">
            A glimpse into the experiences, people and moments that make a stay at
            Cedar special.
          </p>

          <MomentsSlider />
        </div>
      </section>
      <Footer/>
    </main>
  );
}