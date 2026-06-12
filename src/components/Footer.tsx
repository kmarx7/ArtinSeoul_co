const footerLinks = ["오늘의 추천", "연극", "클래식", "전시", "문화 코스", "제휴 문의"];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_22px_rgba(215,174,97,.95)]" />
            <span className="text-sm font-semibold tracking-[0.18em] text-pearl">Seoul Culture Now</span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-pearl/56">
            서울의 연극, 클래식, 전시회를 감각적으로 발견하는 문화 큐레이션 서비스
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-pearl/58">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-gold">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-7xl text-xs text-pearl/38">
        © 2026 Seoul Culture Now. All rights reserved.
      </div>
    </footer>
  );
}
