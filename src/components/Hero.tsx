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
    <section className="relative z-10 px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm text-gold">
            <CalendarDays size={16} />
            이번 주 서울 문화 큐레이션
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-normal text-pearl sm:text-6xl lg:text-7xl">
            오늘 서울에서 무엇을 볼까?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/72 sm:text-xl">
            연극, 클래식, 전시회를 한눈에 발견하고 예매와 하루 코스까지 연결하세요.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-4 text-base font-semibold text-night shadow-glow transition hover:bg-pearl"
            >
              오늘 볼 공연 찾기
              <ArrowRight size={18} />
            </a>
            <a
              href="#routes"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 text-base font-semibold text-pearl backdrop-blur transition hover:border-gold/45 hover:text-gold"
            >
              이번 주 문화 코스 보기
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-pearl/58 sm:grid-cols-3">
            {["검색보다 빠르게, 취향보다 섬세하게", "퇴근 후, 무대가 있는 저녁", "공연 하나로 완성되는 서울의 하루"].map(
              (item) => (
                <p key={item} className="border-l border-gold/45 pl-3">
                  {item}
                </p>
              ),
            )}
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_50%_10%,rgba(215,174,97,.24),transparent_34%),linear-gradient(145deg,rgba(16,24,39,.95),rgba(76,22,42,.72)_52%,rgba(8,11,20,.95))] shadow-wine" />
          <div className="absolute inset-x-8 top-10 h-44 rounded-b-full bg-gold/15 blur-3xl" />
          <div className="absolute left-8 right-8 top-12 h-px gold-line" />
          <div className="absolute bottom-8 left-8 right-8 top-20 rounded-t-full border border-gold/20 bg-black/18" />
          <div className="absolute bottom-14 left-1/2 h-72 w-36 -translate-x-1/2 rounded-t-full bg-gradient-to-b from-gold/25 to-transparent blur-sm" />

          <div className="absolute inset-0 flex flex-col justify-end gap-4 p-5 sm:p-8">
            {curationCards.map((card, index) => (
              <article
                key={card.genre}
                className="glass-panel group rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/35"
                style={{ marginLeft: `${index * 28}px` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gold">{card.genre}</p>
                    <h2 className="mt-2 text-xl font-semibold text-pearl">{card.copy}</h2>
                  </div>
                  <MapPin className="mt-1 text-pearl/38 transition group-hover:text-gold" size={20} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {card.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/8 px-3 py-1 text-xs text-pearl/70">
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
