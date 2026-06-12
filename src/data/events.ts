export type Language = "ko" | "en";
export type Genre = "theater" | "classic" | "exhibition";

export type EventItem = {
  title: string;
  genre: Genre;
  genreLabel: string;
  venue: string;
  area: string;
  period: string;
  price: string;
  tags: string[];
  reason: string;
};

export const featuredEventsByLang: Record<Language, EventItem[]> = {
  ko: [
    {
      title: "빛의 방",
      genre: "exhibition",
      genreLabel: "전시",
      venue: "성수 갤러리",
      area: "성수",
      period: "2026.05.20 - 2026.07.10",
      price: "15,000원",
      tags: ["혼자 보기 좋음", "사진전", "주말"],
      reason: "혼자 천천히 둘러보기 좋은 감각적인 전시",
    },
    {
      title: "달빛 아래 피아노",
      genre: "classic",
      genreLabel: "클래식",
      venue: "롯데콘서트홀",
      area: "잠실",
      period: "2026.06.21",
      price: "45,000원",
      tags: ["피아노", "저녁 공연", "우아한"],
      reason: "하루를 조용히 닫고 싶은 관객에게 어울리는 리사이틀",
    },
    {
      title: "밤의 대화",
      genre: "theater",
      genreLabel: "연극",
      venue: "대학로 소극장",
      area: "대학로",
      period: "2026.06.01 - 2026.06.30",
      price: "30,000원",
      tags: ["감성적", "데이트", "퇴근 후"],
      reason: "짧은 러닝타임으로 평일 저녁에 보기 좋은 감성 연극",
    },
    {
      title: "도시의 여백",
      genre: "exhibition",
      genreLabel: "전시",
      venue: "광화문 아트스페이스",
      area: "광화문",
      period: "2026.06.03 - 2026.08.02",
      price: "18,000원",
      tags: ["현대미술", "산책", "혼자"],
      reason: "정동길 산책과 함께 묶기 좋은 조용한 도시 전시",
    },
    {
      title: "한여름의 현악 사중주",
      genre: "classic",
      genreLabel: "클래식",
      venue: "예술의전당",
      area: "서초",
      period: "2026.06.14",
      price: "50,000원",
      tags: ["입문자 추천", "차분한", "프리미엄"],
      reason: "클래식 입문자도 편안하게 즐길 수 있는 실내악 공연",
    },
    {
      title: "혜화역 3번 출구",
      genre: "theater",
      genreLabel: "연극",
      venue: "아르코 근처 블랙박스",
      area: "혜화",
      period: "2026.06.07 - 2026.07.05",
      price: "35,000원",
      tags: ["소극장", "몰입감", "친구와"],
      reason: "가까운 객석에서 배우의 호흡을 느끼는 도심형 무대",
    },
  ],
  en: [
    {
      title: "Room of Light",
      genre: "exhibition",
      genreLabel: "Exhibition",
      venue: "Seongsu Gallery",
      area: "Seongsu",
      period: "May 20 - Jul 10, 2026",
      price: "KRW 15,000",
      tags: ["Solo Friendly", "Photography", "Weekend"],
      reason: "A quiet, sensory exhibition made for slow viewing and solo wandering.",
    },
    {
      title: "Piano Under Moonlight",
      genre: "classic",
      genreLabel: "Classical",
      venue: "Lotte Concert Hall",
      area: "Jamsil",
      period: "Jun 21, 2026",
      price: "KRW 45,000",
      tags: ["Piano", "Evening", "Elegant"],
      reason: "A recital for ending the day quietly, with room for stillness.",
    },
    {
      title: "Night Conversations",
      genre: "theater",
      genreLabel: "Theater",
      venue: "Daehakro Black Box",
      area: "Daehakro",
      period: "Jun 01 - Jun 30, 2026",
      price: "KRW 30,000",
      tags: ["Emotional", "Date Night", "After Work"],
      reason: "A compact, intimate play that fits naturally into a weekday evening.",
    },
    {
      title: "Urban Negative Space",
      genre: "exhibition",
      genreLabel: "Exhibition",
      venue: "Gwanghwamun Art Space",
      area: "Gwanghwamun",
      period: "Jun 03 - Aug 02, 2026",
      price: "KRW 18,000",
      tags: ["Contemporary Art", "Walkable", "Solo"],
      reason: "A calm city exhibition that pairs well with a walk along Jeongdong-gil.",
    },
    {
      title: "Midsummer String Quartet",
      genre: "classic",
      genreLabel: "Classical",
      venue: "Seoul Arts Center",
      area: "Seocho",
      period: "Jun 14, 2026",
      price: "KRW 50,000",
      tags: ["Beginner Friendly", "Calm", "Premium"],
      reason: "A chamber concert that makes classical music easy to enter and enjoy.",
    },
    {
      title: "Exit 3, Hyehwa Station",
      genre: "theater",
      genreLabel: "Theater",
      venue: "Arko-side Black Box",
      area: "Hyehwa",
      period: "Jun 07 - Jul 05, 2026",
      price: "KRW 35,000",
      tags: ["Small Stage", "Immersive", "With Friends"],
      reason: "A close-stage performance where the actors' breath feels part of the room.",
    },
  ],
};
