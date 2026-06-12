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
    <section className="border-y-2 border-fluxDark bg-fluxNeon px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-4 border-b-2 border-fluxDark pb-5 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxDark/60">Categories</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase leading-none text-fluxDark sm:text-6xl">
              장르를 고르세요
            </h2>
          </div>
          <p className="max-w-xl text-lg font-bold leading-snug text-fluxDark">
            연극, 클래식, 전시를 복잡한 검색 없이 분위기와 시간대 중심으로 탐색합니다.
          </p>
        </div>

        <div className="grid gap-0 border-2 border-fluxDark md:grid-cols-3">
          {categories.map(({ title, description, tags, Icon }, index) => (
            <article
              key={title}
              className={`group cursor-pointer bg-fluxBg p-8 transition hover:bg-fluxDark hover:text-fluxNeon md:p-10 ${
                index < 2 ? "border-b-2 border-fluxDark md:border-b-0 md:border-r-2" : ""
              }`}
            >
              <div className="mb-10 text-fluxDark transition group-hover:text-fluxNeon">
                <Icon size={48} strokeWidth={2.3} />
              </div>
              <h3 className="font-display text-5xl font-black uppercase leading-none">{title}</h3>
              <p className="mt-5 min-h-20 text-lg font-bold leading-snug opacity-80">{description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="border-2 border-current px-2 py-1 text-xs font-black uppercase">
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
