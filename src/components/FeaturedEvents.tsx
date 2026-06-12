import EventCard from "@/components/EventCard";
import { featuredEvents } from "@/data/events";

export default function FeaturedEvents() {
  return (
    <section id="featured" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b-2 border-fluxDark pb-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxGray">Featured</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none text-fluxDark sm:text-6xl">
              이번 주 추천
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex w-fit border-2 border-fluxDark bg-fluxNeon px-5 py-3 text-sm font-black uppercase tracking-widest text-fluxDark shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutalSm"
          >
            추천 공연/전시 둘러보기
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventCard key={`${event.genre}-${event.title}`} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
