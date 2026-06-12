import { ArrowUpRight, MapPin, Ticket } from "lucide-react";
import type { EventItem } from "@/data/events";

const genreTone: Record<EventItem["genre"], string> = {
  theater: "bg-fluxWine text-white",
  classic: "bg-fluxNeon text-fluxDark",
  exhibition: "bg-white text-fluxDark",
};

export default function EventCard({ event, detailsCta }: { event: EventItem; detailsCta: string }) {
  return (
    <article className="group flex h-full flex-col border-2 border-fluxDark bg-fluxBg p-5 shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-white hover:shadow-brutalSm">
      <div className="flex items-start justify-between gap-4">
        <span className={`border-2 border-fluxDark px-3 py-1 text-xs font-black uppercase tracking-wider ${genreTone[event.genre]}`}>
          {event.genreLabel}
        </span>
        <span className="max-w-[9rem] text-right font-mono text-xs font-black uppercase text-fluxDark/55">{event.period}</span>
      </div>

      <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none text-fluxDark">{event.title}</h3>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-fluxDark/70">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={15} />
          {event.area} · {event.venue}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Ticket size={15} />
          {event.price}
        </span>
      </div>

      <p className="mt-5 flex-1 text-base font-bold leading-7 text-fluxDark/78">{event.reason}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <span key={tag} className="border-2 border-fluxDark bg-fluxNeon px-2 py-1 text-xs font-black uppercase text-fluxDark">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-flex items-center justify-between border-2 border-fluxDark bg-fluxDark px-4 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-fluxNeon hover:text-fluxDark"
      >
        {detailsCta}
        <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
