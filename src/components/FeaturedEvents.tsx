import EventCard from "@/components/EventCard";
import { featuredEvents } from "@/data/events";

export default function FeaturedEvents() {
  return (
    <section id="featured" className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Featured</p>
            <h2 className="mt-3 text-3xl font-semibold text-pearl sm:text-4xl">오늘과 이번 주에 보기 좋은 추천</h2>
          </div>
          <a
            href="#"
            className="inline-flex w-fit rounded-full border border-gold/30 px-5 py-3 text-sm font-semibold text-gold transition hover:bg-gold hover:text-night"
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
