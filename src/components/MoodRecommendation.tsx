import { Heart, Moon, Sparkles, Users } from "lucide-react";

const moods = [
  {
    title: "조용히 몰입하고 싶을 때",
    recommendation: "전시",
    description: "복잡한 하루를 잠시 멈추고 작품 사이를 천천히 걸어보세요.",
    Icon: Moon,
  },
  {
    title: "깊은 감정을 느끼고 싶을 때",
    recommendation: "연극",
    description: "가까운 무대에서 배우의 호흡과 이야기를 직접 마주하세요.",
    Icon: Heart,
  },
  {
    title: "하루를 고급스럽게 마무리하고 싶을 때",
    recommendation: "클래식",
    description: "음악으로 하루의 속도를 낮추고 천천히 밤을 닫아보세요.",
    Icon: Sparkles,
  },
  {
    title: "데이트 코스를 찾고 있을 때",
    recommendation: "공연 + 카페 + 산책",
    description: "하나의 공연을 중심으로 서울의 저녁 코스를 완성하세요.",
    Icon: Users,
  },
];

export default function MoodRecommendation() {
  return (
    <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur sm:p-8 lg:p-10">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Mood</p>
            <h2 className="mt-3 text-3xl font-semibold text-pearl sm:text-4xl">오늘의 기분에 맞는 문화생활</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-pearl/60">
            장르보다 먼저 오늘의 감정과 동선을 기준으로 추천을 시작합니다.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {moods.map(({ title, recommendation, description, Icon }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-night/45 p-5 transition hover:border-gold/35">
              <Icon className="text-gold" size={24} />
              <h3 className="mt-5 text-lg font-semibold leading-7 text-pearl">{title}</h3>
              <p className="mt-3 text-sm font-semibold text-gold">{recommendation}</p>
              <p className="mt-3 text-sm leading-7 text-pearl/62">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
