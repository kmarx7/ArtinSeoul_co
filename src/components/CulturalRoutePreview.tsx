import { ArrowRight, Route } from "lucide-react";

const routes = [
  {
    title: "대학로 감성 연극 코스",
    path: "혜화 카페 → 대학로 연극 → 낙산공원 산책",
    target: "평일 저녁 데이트, 연극 입문자",
  },
  {
    title: "서초 클래식 데이트 코스",
    path: "예술의전당 근처 카페 → 클래식 공연 → 서초 저녁식사",
    target: "차분하고 고급스러운 저녁을 보내고 싶은 사람",
  },
  {
    title: "광화문 전시 산책 코스",
    path: "광화문 전시 → 정동길 산책 → 서촌 카페",
    target: "혼자 걷고 생각을 정리하고 싶은 사람",
  },
];

export default function CulturalRoutePreview() {
  return (
    <section id="routes" className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Routes</p>
          <h2 className="mt-3 text-3xl font-semibold text-pearl sm:text-4xl">공연 하나로 완성되는 서울의 하루</h2>
          <p className="mt-4 text-sm leading-7 text-pearl/62">
            공연장 주변의 카페, 산책, 식사를 함께 묶어 하루의 흐름으로 제안합니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {routes.map((route) => (
            <article key={route.title} className="glass-panel rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/35">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-wine/30 text-gold">
                <Route size={22} />
              </div>
              <h3 className="text-2xl font-semibold text-pearl">{route.title}</h3>
              <p className="mt-4 text-sm leading-7 text-pearl/70">{route.path}</p>
              <p className="mt-5 rounded-2xl bg-white/7 p-4 text-sm leading-6 text-pearl/62">
                추천 대상: {route.target}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-3 text-sm font-semibold text-pearl transition hover:bg-gold hover:text-night"
              >
                코스 보기
                <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
