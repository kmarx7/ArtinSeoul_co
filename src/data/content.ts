import type { Language } from "@/data/events";

export type LandingContent = {
  header: {
    nav: string[];
    cta: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    titleLines: string[];
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    cardsLabel: string;
    cardsMeta: string;
    cards: Array<{ genre: string; copy: string; tags: string[] }>;
  };
  categories: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; description: string; tags: string[] }>;
  };
  featured: {
    eyebrow: string;
    title: string;
    cta: string;
    detailsCta: string;
  };
  mood: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{ title: string; recommendation: string; description: string }>;
  };
  routes: {
    eyebrow: string;
    titleLines: string[];
    stroke: string;
    description: string;
    targetLabel: string;
    cta: string;
    items: Array<{ title: string; path: string; target: string }>;
  };
  newsletter: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    submit: string;
    interestsLabel: string;
    interests: string[];
    defaultInterest: string;
    success: string;
  };
  footer: {
    description: string;
    links: string[];
  };
};

export const landingContent: Record<Language, LandingContent> = {
  ko: {
    header: {
      nav: ["오늘의 추천", "전시", "클래식", "연극", "문화 코스"],
      cta: "이번 주 추천 받기",
      menuLabel: "메뉴 열기",
    },
    hero: {
      badge: "ArtLife Seoul © 2026",
      titleLines: ["오늘,", "내 마음이 머무르고 싶은 곳."],
      subtitle: "연극, 클래식, 전시 그리고 산책까지. ArtLife Seoul이 오늘의 기분에 어울리는 서울의 예술 코스를 제안합니다.",
      primaryCta: "오늘 볼 공연 찾기",
      secondaryCta: "문화 코스 보기",
      cardsLabel: "Curated Picks",
      cardsMeta: "Seoul Night",
      cards: [
        { genre: "전시", copy: "혼자 걷고 생각을 정리하는 시간", tags: ["광화문", "성수", "주말"] },
        { genre: "클래식", copy: "하루를 천천히 닫는 음악", tags: ["예술의전당", "입문자 추천", "프리미엄"] },
        { genre: "연극", copy: "감정과 이야기에 몰입하는 밤", tags: ["대학로", "퇴근 후", "데이트"] },
      ],
    },
    categories: {
      eyebrow: "Categories",
      title: "장르를 고르세요",
      description: "전시, 클래식, 연극을 복잡한 검색 없이 분위기와 시간대 중심으로 탐색합니다.",
      items: [
        { title: "전시", description: "혼자 걸으며 감각과 생각을 정리하는 도시의 문화 산책", tags: ["미술관", "갤러리", "사진전"] },
        { title: "클래식", description: "하루의 속도를 낮추고 깊은 울림을 만나는 음악의 시간", tags: ["예술의전당", "오케스트라", "리사이틀"] },
        { title: "연극", description: "가까운 무대에서 사람의 감정과 이야기를 직접 만나는 시간", tags: ["대학로", "소극장", "몰입감"] },
      ],
    },
    featured: {
      eyebrow: "Featured",
      title: "이번 주 추천",
      cta: "추천 공연/전시 둘러보기",
      detailsCta: "자세히 보기",
    },
    mood: {
      eyebrow: "Mood",
      title: "오늘의 기분에 맞는 문화생활",
      description: "장르보다 먼저 오늘의 감정과 동선을 기준으로 추천을 시작합니다.",
      items: [
        { title: "조용히 몰입하고 싶을 때", recommendation: "전시", description: "복잡한 하루를 잠시 멈추고 작품 사이를 천천히 걸어보세요." },
        { title: "하루를 고급스럽게 마무리하고 싶을 때", recommendation: "클래식", description: "음악으로 하루의 속도를 낮추고 천천히 밤을 닫아보세요." },
        { title: "깊은 감정을 느끼고 싶을 때", recommendation: "연극", description: "가까운 무대에서 배우의 호흡과 이야기를 직접 마주하세요." },
        { title: "데이트 코스를 찾고 있을 때", recommendation: "공연 + 카페 + 산책", description: "하나의 공연을 중심으로 서울의 저녁 코스를 완성하세요." },
      ],
    },
    routes: {
      eyebrow: "Routes",
      titleLines: ["공연 하나로 완성되는", "서울의 하루"],
      stroke: "Culture Route",
      description: "공연장 주변의 카페, 산책, 식사를 함께 묶어 하루의 흐름으로 제안합니다.",
      targetLabel: "추천 대상",
      cta: "코스 보기",
      items: [
        { title: "광화문 전시 산책 코스", path: "광화문 전시 → 정동길 산책 → 서촌 카페", target: "혼자 걷고 생각을 정리하고 싶은 사람" },
        { title: "서초 클래식 데이트 코스", path: "예술의전당 근처 카페 → 클래식 공연 → 서초 저녁식사", target: "차분하고 고급스러운 저녁을 보내고 싶은 사람" },
        { title: "대학로 감성 연극 코스", path: "혜화 카페 → 대학로 연극 → 낙산공원 산책", target: "평일 저녁 데이트, 연극 입문자" },
      ],
    },
    newsletter: {
      eyebrow: "Subscribe",
      title: "이번 주 서울 문화 추천을 받아보세요",
      description: "전시, 클래식, 연극 추천과 문화 코스를 매주 정리해서 보내드립니다.",
      emailLabel: "이메일",
      submit: "추천 받기",
      interestsLabel: "관심 장르",
      interests: ["전시", "클래식", "연극", "데이트 코스", "혼자 보기 좋은 콘텐츠"],
      defaultInterest: "전시",
      success: "신청이 완료되었습니다. 이번 주 추천을 보내드릴게요.",
    },
    footer: {
      description: "서울의 전시, 클래식, 연극을 감각적으로 발견하는 문화 큐레이션 서비스",
      links: ["오늘의 추천", "전시", "클래식", "연극", "문화 코스", "제휴 문의"],
    },
  },
  en: {
    header: {
      nav: ["Today's Picks", "Exhibitions", "Classical", "Theater", "Culture Routes"],
      cta: "Get This Week's Picks",
      menuLabel: "Open menu",
    },
    hero: {
      badge: "ArtLife Seoul © 2026",
      titleLines: ["What should you see", "in Seoul today?"],
      subtitle: "Discover exhibitions, classical concerts, and theater at a glance, then connect them to bookings and a full-day route.",
      primaryCta: "Find Something Today",
      secondaryCta: "View Culture Routes",
      cardsLabel: "Curated Picks",
      cardsMeta: "Seoul Night",
      cards: [
        { genre: "Exhibition", copy: "A quiet walk for clearing your thoughts", tags: ["Gwanghwamun", "Seongsu", "Weekend"] },
        { genre: "Classical", copy: "Music that slows the day down", tags: ["Seoul Arts Center", "Beginner", "Premium"] },
        { genre: "Theater", copy: "A night for emotion and story", tags: ["Daehakro", "After Work", "Date"] },
      ],
    },
    categories: {
      eyebrow: "Categories",
      title: "Pick your entry point",
      description: "Explore exhibitions, classical music, and theater by mood and timing instead of endless searching.",
      items: [
        { title: "Exhibition", description: "Walk the city, reset your senses, and organize your thoughts.", tags: ["Museum", "Gallery", "Photo Show"] },
        { title: "Classical", description: "Slow the pace of the day and find a deeper resonance through music.", tags: ["Seoul Arts Center", "Orchestra", "Recital"] },
        { title: "Theater", description: "Meet human emotion and story from a close-up stage.", tags: ["Daehakro", "Small Stage", "Immersive"] },
      ],
    },
    featured: {
      eyebrow: "Featured",
      title: "This Week's Picks",
      cta: "Browse Picks",
      detailsCta: "View Details",
    },
    mood: {
      eyebrow: "Mood",
      title: "Culture for today's mood",
      description: "Start with how you feel and where your day is headed, not only with genre.",
      items: [
        { title: "When you want quiet focus", recommendation: "Exhibition", description: "Pause the noise of the day and move slowly between works." },
        { title: "When you want an elegant ending", recommendation: "Classical", description: "Let music slow the pace of the evening and close the day gently." },
        { title: "When you want deeper emotion", recommendation: "Theater", description: "Meet the actors' breath, timing, and story from a close stage." },
        { title: "When you need a date route", recommendation: "Show + Cafe + Walk", description: "Build a complete Seoul evening around one performance." },
      ],
    },
    routes: {
      eyebrow: "Routes",
      titleLines: ["One show can shape", "a full Seoul day"],
      stroke: "Culture Route",
      description: "Pair each performance or exhibition with nearby cafes, walks, and dinner spots for a complete flow.",
      targetLabel: "Best for",
      cta: "View Route",
      items: [
        { title: "Gwanghwamun Gallery Walk", path: "Gwanghwamun exhibition → Jeongdong-gil walk → Seochon cafe", target: "Solo visitors who want to walk and think" },
        { title: "Seocho Classical Date", path: "Cafe near Seoul Arts Center → Classical concert → Dinner in Seocho", target: "Anyone looking for a calm, polished evening" },
        { title: "Daehakro Theater Evening", path: "Hyehwa cafe → Daehakro play → Naksan Park walk", target: "Weekday dates, theater beginners" },
      ],
    },
    newsletter: {
      eyebrow: "Subscribe",
      title: "Get Seoul culture picks every week",
      description: "We will send a concise weekly edit of theater, classical concerts, exhibitions, and culture routes.",
      emailLabel: "Email",
      submit: "Get Picks",
      interestsLabel: "Interests",
      interests: ["Exhibitions", "Classical", "Theater", "Date Routes", "Solo-friendly Picks"],
      defaultInterest: "Exhibitions",
      success: "You're subscribed. We will send this week's picks soon.",
    },
    footer: {
      description: "A cultural curation service for discovering exhibitions, classical concerts, and theater in Seoul.",
      links: ["Today's Picks", "Exhibitions", "Classical", "Theater", "Culture Routes", "Partnerships"],
    },
  },
};
