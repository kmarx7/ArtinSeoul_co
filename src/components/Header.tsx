"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["오늘의 추천", "연극", "클래식", "전시", "문화 코스"];

export default function Header() {
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
            {navItems.map((item) => (
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
            <a
              href="#newsletter"
              className="border-2 border-fluxDark bg-fluxNeon px-5 py-2.5 text-sm font-black uppercase tracking-wider text-fluxDark shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutalSm"
            >
              이번 주 추천 받기
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center border-2 border-fluxDark bg-fluxNeon text-fluxDark shadow-brutal lg:hidden"
            aria-label="메뉴 열기"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-2 border-t-2 border-fluxDark pt-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="border-2 border-fluxDark bg-fluxBg px-3 py-2 text-sm font-bold hover:bg-fluxDark hover:text-fluxNeon"
              >
                {item}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="mt-2 border-2 border-fluxDark bg-fluxNeon px-4 py-3 text-center text-sm font-black uppercase tracking-widest text-fluxDark"
            >
              이번 주 추천 받기
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
