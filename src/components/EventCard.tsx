import { ArrowUpRight, MapPin, Ticket } from "lucide-react";
import type { EventItem } from "@/data/events";

const genreTone: Record<EventItem["genre"], string> = {
  연극: "border-wine/40 bg-wine/14 text-rose-100",
  클래식: "border-gold/35 bg-gold/12 text-gold",
  전시: "border-blue-300/30 bg-blue-500/12 text-blue-100",
};

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="glass-panel group flex h-full flex-col rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
      <div className="flex items-start justify-between gap-4">
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${genreTone[event.genre]}`}>
          {event.genre}
        </span>
        <span className="text-xs text-pearl/45">{event.period}</span>
      </div>

      <h3 className="mt-5 text-2xl font-semibold text-pearl">{event.title}</h3>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-pearl/62">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={15} />
          {event.area} · {event.venue}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Ticket size={15} />
          {event.price}
        </span>
      </div>

      <p className="mt-5 flex-1 text-sm leading-7 text-pearl/68">{event.reason}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-white/8 px-3 py-1 text-xs text-pearl/60">
            {tag}
          </span>
        ))}
      </div>

      <a
        href="#"
        className="mt-6 inline-flex items-center justify-between rounded-full border border-white/12 px-4 py-3 text-sm font-semibold text-pearl transition group-hover:border-gold/45 group-hover:text-gold"
      >
        자세히 보기
        <ArrowUpRight size={16} />
      </a>
    </article>
  );
}
