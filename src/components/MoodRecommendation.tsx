import { Heart, Moon, Sparkles, Users } from "lucide-react";
import type { LandingContent } from "@/data/content";

const icons = [Moon, Sparkles, Heart, Users];

export default function MoodRecommendation({ content }: { content: LandingContent["mood"] }) {
  return (
    <section className="border-y-2 border-fluxDark bg-fluxDark px-4 py-24 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxNeon">{content.eyebrow}</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none sm:text-7xl">
              {content.title}
            </h2>
          </div>
          <p className="max-w-lg text-lg font-bold leading-snug text-white/70">
            {content.description}
          </p>
        </div>

        <div className="grid gap-0 border-2 border-white md:grid-cols-2 xl:grid-cols-4">
          {content.items.map(({ title, recommendation, description }, index) => {
            const Icon = icons[index] ?? Moon;
            return (
            <article
              key={title}
              className="border-b-2 border-white bg-fluxDark p-6 transition hover:bg-fluxNeon hover:text-fluxDark md:border-r-2 xl:border-b-0"
            >
              <Icon className="text-current" size={30} strokeWidth={2.5} />
              <h3 className="mt-8 text-xl font-black leading-snug">{title}</h3>
              <p className="mt-4 font-display text-3xl font-black uppercase leading-none">{recommendation}</p>
              <p className="mt-4 text-sm font-bold leading-7 opacity-75">{description}</p>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
