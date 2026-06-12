import EventCard from "@/components/EventCard";
import type { LandingContent } from "@/data/content";
import type { EventItem } from "@/data/events";

export default function FeaturedEvents({ content, events }: { content: LandingContent["featured"]; events: EventItem[] }) {
  return (
    <section id="featured" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b-2 border-fluxDark pb-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxGray">{content.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none text-fluxDark sm:text-6xl">
              {content.title}
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex w-fit border-2 border-fluxDark bg-fluxNeon px-5 py-3 text-sm font-black uppercase tracking-widest text-fluxDark shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutalSm"
          >
            {content.cta}
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {events.map((event) => (
            <EventCard key={`${event.genre}-${event.title}`} event={event} detailsCta={content.detailsCta} />
          ))}
        </div>
      </div>
    </section>
  );
}
