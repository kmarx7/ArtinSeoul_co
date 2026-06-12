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
    <section id="routes" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-16">
          <p className="font-mono text-sm font-black uppercase tracking-widest text-fluxGray">Routes</p>
          <h2 className="relative z-10 mt-3 font-display text-[13vw] font-black uppercase leading-[0.86] text-fluxDark md:text-[8vw]">
            공연 하나로 완성되는
            <br />
            서울의 하루
          </h2>
          <h3 className="pointer-events-none absolute -top-8 left-0 font-display text-[14vw] font-black uppercase leading-none text-stroke opacity-20 md:text-[9vw]">
            Culture Route
          </h3>
          <p className="mt-6 max-w-xl text-lg font-bold leading-snug text-fluxDark/70">
            공연장 주변의 카페, 산책, 식사를 함께 묶어 하루의 흐름으로 제안합니다.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {routes.map((route) => (
            <article
              key={route.title}
              className="border-2 border-fluxDark bg-white p-6 shadow-brutal transition hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-fluxNeon hover:shadow-brutalSm"
            >
              <div className="mb-8 inline-flex border-2 border-fluxDark bg-fluxDark p-3 text-fluxNeon">
                <Route size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-4xl font-black uppercase leading-none text-fluxDark">{route.title}</h3>
              <p className="mt-5 text-base font-black leading-7 text-fluxDark">{route.path}</p>
              <p className="mt-5 border-2 border-fluxDark bg-fluxBg p-4 text-sm font-bold leading-6 text-fluxDark/72">
                추천 대상: {route.target}
              </p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 border-2 border-fluxDark bg-fluxDark px-4 py-3 text-sm font-black uppercase tracking-wider text-white transition hover:bg-white hover:text-fluxDark"
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
