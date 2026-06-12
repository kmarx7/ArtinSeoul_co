import { Drama, Frame, Music2 } from "lucide-react";

const categories = [
  {
    title: "연극",
    description: "가까운 무대에서 사람의 감정과 이야기를 직접 만나는 시간",
    tags: ["대학로", "소극장", "몰입감"],
    Icon: Drama,
  },
  {
    title: "클래식",
    description: "하루의 속도를 낮추고 깊은 울림을 만나는 음악의 시간",
    tags: ["예술의전당", "오케스트라", "리사이틀"],
    Icon: Music2,
  },
  {
    title: "전시",
    description: "혼자 걸으며 감각과 생각을 정리하는 도시의 문화 산책",
    tags: ["미술관", "갤러리", "사진전"],
    Icon: Frame,
  },
];

export default function CategoryCards() {
  return (
    <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Categories</p>
            <h2 className="mt-3 text-3xl font-semibold text-pearl sm:text-4xl">취향의 입구를 가볍게 고르세요</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-pearl/60">
            연극, 클래식, 전시를 복잡한 검색 없이 분위기와 시간대 중심으로 탐색합니다.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map(({ title, description, tags, Icon }) => (
            <article
              key={title}
              className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/35"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
                <Icon size={26} />
              </div>
              <h3 className="text-2xl font-semibold text-pearl">{title}</h3>
              <p className="mt-3 min-h-14 text-sm leading-7 text-pearl/66">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-pearl/60">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
