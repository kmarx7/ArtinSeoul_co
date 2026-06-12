"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { LandingContent } from "@/data/content";
import type { Language } from "@/data/events";

type HeaderProps = {
  content: LandingContent["header"];
  language: Language;
  onLanguageChange: (language: Language) => void;
};

const languageOptions: Array<{ code: Language; label: string; flag: string; ariaLabel: string }> = [
  { code: "ko", label: "KO", flag: "🇰🇷", ariaLabel: "한국어로 보기" },
  { code: "en", label: "EN", flag: "🇬🇧", ariaLabel: "View in English" },
];

export default function Header({ content, language, onLanguageChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b-4 border-fluxDark bg-fluxBg/90 px-4 py-4 backdrop-blur-md sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex min-w-fit items-center gap-3">
            <span className="h-4 w-4 rounded-full border-2 border-fluxDark bg-fluxNeon" />
            <span className="font-display text-xl font-black uppercase tracking-widest text-fluxDark sm:text-2xl">
              Seoul Culture Now
            </span>
          </a>

          <nav className="hidden items-center gap-2 text-xs font-black uppercase tracking-widest text-fluxDark lg:flex">
            {content.nav.map((item) => (
              <a
                key={item}
                href="#"
                className="border-2 border-transparent px-3 py-1.5 transition hover:border-fluxDark hover:bg-fluxDark hover:text-fluxNeon"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex border-2 border-fluxDark bg-white text-xs font-black uppercase tracking-widest text-fluxDark">
              {languageOptions.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLanguageChange(item.code)}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 transition ${
                    language === item.code ? "bg-fluxDark text-fluxNeon" : "hover:bg-fluxNeon"
                  }`}
                  aria-pressed={language === item.code}
                  aria-label={item.ariaLabel}
                >
                  <span aria-hidden="true">{item.flag}</span>
                  {item.label}
                </button>
              ))}
            </div>
            <a
              href="#newsletter"
              className="border-2 border-fluxDark bg-fluxNeon px-5 py-2.5 text-sm font-black uppercase tracking-wider text-fluxDark shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutalSm"
            >
              {content.cta}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center border-2 border-fluxDark bg-fluxNeon text-fluxDark shadow-brutal lg:hidden"
            aria-label={content.menuLabel}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-2 border-t-2 border-fluxDark pt-4 lg:hidden">
            {content.nav.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="border-2 border-fluxDark bg-fluxBg px-3 py-2 text-sm font-bold hover:bg-fluxDark hover:text-fluxNeon"
              >
                {item}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2">
              {languageOptions.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => onLanguageChange(item.code)}
                  aria-pressed={language === item.code}
                  aria-label={item.ariaLabel}
                  className={`inline-flex items-center justify-center gap-2 border-2 border-fluxDark px-3 py-2 text-sm font-black uppercase ${
                    language === item.code ? "bg-fluxDark text-fluxNeon" : "bg-white text-fluxDark"
                  }`}
                >
                  <span aria-hidden="true">{item.flag}</span>
                  {item.label}
                </button>
              ))}
            </div>
            <a
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="mt-2 border-2 border-fluxDark bg-fluxNeon px-4 py-3 text-center text-sm font-black uppercase tracking-widest text-fluxDark"
            >
              {content.cta}
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
