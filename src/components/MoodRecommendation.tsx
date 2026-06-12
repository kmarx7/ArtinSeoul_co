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
    <section className="border-y-2 border-fluxDark bg-fluxDark px-4 py-24 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxNeon">Mood</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none sm:text-7xl">
              오늘의 기분에 맞는 문화생활
            </h2>
          </div>
          <p className="max-w-lg text-lg font-bold leading-snug text-white/70">
            장르보다 먼저 오늘의 감정과 동선을 기준으로 추천을 시작합니다.
          </p>
        </div>

        <div className="grid gap-0 border-2 border-white md:grid-cols-2 xl:grid-cols-4">
          {moods.map(({ title, recommendation, description, Icon }) => (
            <article
              key={title}
              className="border-b-2 border-white bg-fluxDark p-6 transition hover:bg-fluxNeon hover:text-fluxDark md:border-r-2 xl:border-b-0"
            >
              <Icon className="text-current" size={30} strokeWidth={2.5} />
              <h3 className="mt-8 text-xl font-black leading-snug">{title}</h3>
              <p className="mt-4 font-display text-3xl font-black uppercase leading-none">{recommendation}</p>
              <p className="mt-4 text-sm font-bold leading-7 opacity-75">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
