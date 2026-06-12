import { ArrowRight, CalendarDays, MapPin } from "lucide-react";

const curationCards = [
  {
    genre: "연극",
    copy: "감정과 이야기에 몰입하는 밤",
    tags: ["대학로", "퇴근 후", "데이트"],
  },
  {
    genre: "클래식",
    copy: "하루를 천천히 닫는 음악",
    tags: ["예술의전당", "입문자 추천", "프리미엄"],
  },
  {
    genre: "전시",
    copy: "혼자 걷고 생각을 정리하는 시간",
    tags: ["광화문", "성수", "주말"],
  },
];

export default function Hero() {
  return (
    <section className="relative px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 border-2 border-fluxDark bg-fluxNeon px-4 py-2 font-mono text-sm font-black uppercase tracking-widest text-fluxDark shadow-brutal">
            <CalendarDays size={16} />
            ArtLife Seoul © 2026
          </div>
          <h1 className="font-display text-[17vw] font-black uppercase leading-[0.85] tracking-normal text-fluxDark sm:text-[13vw] lg:text-[8.5vw]">
            오늘 서울에서
            <br />
            무엇을 볼까?
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t-2 border-fluxDark pt-8 md:flex-row md:items-end">
            <p className="max-w-xl text-xl font-bold leading-snug text-fluxDark sm:text-2xl">
              연극, 클래식, 전시회를 한눈에 발견하고 예매와 하루 코스까지 연결하세요.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
              <a
                href="#featured"
                className="inline-flex items-center justify-center gap-3 border-2 border-fluxDark bg-fluxDark px-6 py-4 text-base font-black uppercase tracking-wider text-white transition hover:bg-fluxNeon hover:text-fluxDark"
              >
                오늘 볼 공연 찾기
                <ArrowRight size={19} />
              </a>
              <a
                href="#routes"
                className="inline-flex items-center justify-center gap-3 border-2 border-fluxDark bg-fluxBg px-6 py-4 text-base font-black uppercase tracking-wider text-fluxDark shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-brutalSm"
              >
                문화 코스 보기
              </a>
            </div>
          </div>
        </div>

        <div className="relative border-2 border-fluxDark bg-fluxDark p-4 text-white shadow-brutal">
          <div className="absolute -right-4 -top-4 hidden rotate-2 border-2 border-fluxDark bg-fluxNeon px-4 py-2 font-display text-4xl font-black uppercase text-fluxDark sm:block">
            NOW
          </div>
          <div className="mb-4 flex items-center justify-between border-b-2 border-white/25 pb-4 font-mono text-xs font-black uppercase tracking-widest text-fluxNeon">
            <span>Curated Picks</span>
            <span>Seoul Night</span>
          </div>
          <div className="flex flex-col gap-4">
            {curationCards.map((card, index) => (
              <article
                key={card.genre}
                className="group border-2 border-white bg-fluxBg p-5 text-fluxDark transition hover:bg-fluxNeon"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-3xl font-black uppercase">{card.genre}</p>
                    <h2 className="mt-2 text-xl font-black leading-snug">{card.copy}</h2>
                  </div>
                  <MapPin className="mt-1 transition group-hover:rotate-12" size={22} strokeWidth={3} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="border-2 border-fluxDark bg-white px-2 py-1 text-xs font-black uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
