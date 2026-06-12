"use client";

import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import type { LandingContent } from "@/data/content";

export default function NewsletterForm({ content }: { content: LandingContent["newsletter"] }) {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>([content.defaultInterest]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelected((current) =>
      current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="newsletter" className="border-y-2 border-fluxDark bg-fluxNeon px-4 py-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[.9fr_1.1fr]">
        <div>
          <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxDark/60">{content.eyebrow}</p>
          <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none text-fluxDark sm:text-7xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-lg text-lg font-bold leading-snug text-fluxDark">
            {content.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="border-2 border-fluxDark bg-fluxBg p-5 shadow-brutal">
          <label htmlFor="email" className="text-sm font-black uppercase tracking-wider text-fluxDark">
            {content.emailLabel}
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-h-12 flex-1 border-2 border-fluxDark bg-white px-5 text-sm font-bold text-fluxDark outline-none transition placeholder:text-fluxDark/35 focus:bg-fluxNeon"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 border-2 border-fluxDark bg-fluxDark px-6 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-fluxDark"
            >
              {content.submit}
              <Send size={16} />
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm font-black uppercase tracking-wider text-fluxDark">{content.interestsLabel}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {content.interests.map((interest) => {
                const active = selected.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    aria-pressed={active}
                    className={`inline-flex items-center gap-2 border-2 px-4 py-2 text-sm font-black transition ${
                      active
                        ? "border-fluxDark bg-fluxNeon text-fluxDark"
                        : "border-fluxDark bg-white text-fluxDark hover:bg-fluxDark hover:text-fluxNeon"
                    }`}
                  >
                    {active ? <Check size={14} /> : null}
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {isSubmitted ? (
            <p role="status" className="mt-5 border-2 border-fluxDark bg-white px-4 py-3 text-sm font-black text-fluxDark">
              {content.success}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
