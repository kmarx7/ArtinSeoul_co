const footerLinks = ["오늘의 추천", "연극", "클래식", "전시", "문화 코스", "제휴 문의"];

export default function Footer() {
  return (
    <footer className="bg-fluxDark px-4 pb-12 pt-20 text-white sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-4 w-4 rounded-full border-2 border-white bg-fluxNeon" />
            <span className="font-display text-3xl font-black uppercase tracking-widest text-fluxNeon">Seoul Culture Now</span>
          </div>
          <p className="mt-4 max-w-md text-xl font-bold leading-snug text-white/70">
            서울의 연극, 클래식, 전시회를 감각적으로 발견하는 문화 큐레이션 서비스
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-bold text-white/70 md:col-span-3 md:justify-end">
          {footerLinks.map((link) => (
            <a key={link} href="#" className="transition hover:text-fluxNeon">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-8 text-xs font-bold uppercase tracking-wider text-white/45">
        © 2026 Seoul Culture Now. All rights reserved.
      </div>
    </footer>
  );
}
