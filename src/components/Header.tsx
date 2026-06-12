"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["오늘의 추천", "연극", "클래식", "전시", "문화 코스"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-night/55 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-5">
        <div className="flex items-center justify-between gap-4">
          <a href="#" className="flex min-w-fit items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_22px_rgba(215,174,97,.95)]" />
            <span className="text-sm font-semibold tracking-[0.18em] text-pearl sm:text-base">
              Seoul Culture Now
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-pearl/72 lg:flex">
            {navItems.map((item) => (
              <a key={item} href="#" className="transition hover:text-gold">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="#newsletter"
              className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-night transition hover:bg-pearl"
            >
              이번 주 추천 받기
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-pearl lg:hidden"
            aria-label="메뉴 열기"
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setIsOpen(false)}
                className="rounded-full px-3 py-2 text-sm text-pearl/78 hover:bg-white/8 hover:text-gold"
              >
                {item}
              </a>
            ))}
            <a
              href="#newsletter"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-gold px-4 py-3 text-center text-sm font-semibold text-night"
            >
              이번 주 추천 받기
            </a>
          </div>
        ) : null}
      </div>
    </header>
  );
}
