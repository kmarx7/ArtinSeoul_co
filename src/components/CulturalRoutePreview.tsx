import { ArrowRight, Route } from "lucide-react";
import type { LandingContent } from "@/data/content";

export default function CulturalRoutePreview({ content }: { content: LandingContent["routes"] }) {
  return (
    <section id="routes" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-16">
          <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxGray">{content.eyebrow}</p>
          <h2 className="relative z-10 mt-3 font-display text-[13vw] font-black uppercase leading-[0.86] text-fluxDark md:text-[8vw]">
            {content.titleLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <h3 className="pointer-events-none absolute -top-8 left-0 font-display text-[14vw] font-black uppercase leading-none text-stroke opacity-20 md:text-[9vw]">
            {content.stroke}
          </h3>
          <p className="mt-6 max-w-xl text-lg font-bold leading-snug text-fluxDark/70">
            {content.description}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {content.items.map((route) => (
            <article
              key={route.title}
              className="border-2 border-fluxDark bg-white p-6 shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-fluxNeon hover:shadow-brutalSm"
            >
              <div className="mb-8 inline-flex border-2 border-fluxDark bg-fluxDark p-3 text-fluxNeon">
                <Route size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-4xl font-black uppercase leading-none text-fluxDark">{route.title}</h3>
              <p className="mt-5 text-base font-black leading-7 text-fluxDark">{route.path}</p>
              <p className="mt-5 border-2 border-fluxDark bg-fluxBg p-4 text-sm font-bold leading-6 text-fluxDark/72">
                {content.targetLabel}: {route.target}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 border-2 border-fluxDark bg-fluxDark px-4 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-fluxDark"
              >
                {content.cta}
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
