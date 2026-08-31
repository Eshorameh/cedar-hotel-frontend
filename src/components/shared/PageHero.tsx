import Link from "next/link";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  showBreadcrumb?: boolean;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  showBreadcrumb = true,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[#173f35]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 lg:px-8">
        {showBreadcrumb && (
          <div className="mb-6 flex items-center gap-2 text-xs text-white/60">
            <Link href="/" className="transition hover:text-[#c9a45c]">
              Home
            </Link>

            <span>/</span>

            <span className="text-white/90">{eyebrow}</span>
          </div>
        )}

        <p className="text-xs font-semibold tracking-[0.35em] text-[#c9a45c]">
          {eyebrow}
        </p>

        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[1.08] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>

        {description && (
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}