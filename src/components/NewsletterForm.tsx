"use client";

import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const interests = ["연극", "클래식", "전시", "데이트 코스", "혼자 보기 좋은 콘텐츠"];

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState<string[]>(["전시"]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelected((current) =>
      current.includes(interest) ? current.filter((item) => item !== interest) : [...current, interest],
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-gold/18 bg-[linear-gradient(135deg,rgba(215,174,97,.16),rgba(124,32,58,.18)_45%,rgba(255,255,255,.05))] p-6 shadow-glow backdrop-blur md:grid-cols-[.9fr_1.1fr] md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gold">Subscribe</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-pearl sm:text-4xl">
            이번 주 서울 문화 추천을 받아보세요
          </h2>
          <p className="mt-5 text-sm leading-7 text-pearl/68">
            연극, 클래식, 전시회 추천과 문화 코스를 매주 정리해서 보내드립니다.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-night/45 p-5">
          <label htmlFor="email" className="text-sm font-semibold text-pearl">
            이메일
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="min-h-12 flex-1 rounded-full border border-white/10 bg-white/8 px-5 text-sm text-pearl outline-none transition placeholder:text-pearl/35 focus:border-gold/55"
            />
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-6 text-sm font-semibold text-night transition hover:bg-pearl"
            >
              추천 받기
              <Send size={16} />
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-pearl">관심 장르</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {interests.map((interest) => {
                const active = selected.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                      active
                        ? "border-gold/50 bg-gold/18 text-gold"
                        : "border-white/10 bg-white/6 text-pearl/62 hover:border-white/20"
                    }`}
                  >
                    {active ? <Check size={14} /> : null}
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>

          {isSubmitted ? (
            <p className="mt-5 rounded-2xl border border-gold/25 bg-gold/10 px-4 py-3 text-sm text-gold">
              신청이 완료되었습니다. 이번 주 추천을 보내드릴게요.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
