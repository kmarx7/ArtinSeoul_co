import { Drama, Frame, Music2 } from "lucide-react";
import type { LandingContent } from "@/data/content";

const icons = [Frame, Music2, Drama];

export default function CategoryCards({ content }: { content: LandingContent["categories"] }) {
  return (
    <section className="border-y-2 border-fluxDark bg-fluxNeon px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b-2 border-fluxDark pb-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxDark/60">{content.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none text-fluxDark sm:text-6xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-xl text-lg font-bold leading-snug text-fluxDark">
            {content.description}
          </p>
        </div>

        <div className="grid gap-0 border-2 border-fluxDark md:grid-cols-3">
          {content.items.map(({ title, description, tags }, index) => {
            const Icon = icons[index] ?? Frame;
            return (
            <article
              key={title}
              className={`group cursor-pointer bg-fluxBg p-8 transition hover:bg-fluxDark hover:text-fluxNeon md:p-10 ${
                index < 2 ? "border-b-2 border-fluxDark md:border-b-0 md:border-r-2" : ""
              }`}
            >
              <div className="mb-10 text-fluxDark transition group-hover:text-fluxNeon">
                <Icon size={48} strokeWidth={2.3} />
              </div>
              <h3 className="font-display text-5xl font-black uppercase leading-none">{title}</h3>
              <p className="mt-5 min-h-20 text-lg font-bold leading-snug opacity-80">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="border-2 border-current px-2 py-1 text-xs font-black uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
