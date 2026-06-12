"use client";

import CategoryCards from "@/components/CategoryCards";
import CulturalRoutePreview from "@/components/CulturalRoutePreview";
import FeaturedEvents from "@/components/FeaturedEvents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MoodRecommendation from "@/components/MoodRecommendation";
import NewsletterForm from "@/components/NewsletterForm";
import { landingContent } from "@/data/content";
import { featuredEventsByLang, type Language } from "@/data/events";
import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<Language>("ko");
  const content = landingContent[language];
  const events = featuredEventsByLang[language];

  return (
    <main className="relative min-h-screen overflow-hidden bg-fluxBg bg-paper-grid bg-[size:72px_72px] text-fluxDark">
      <Header content={content.header} language={language} onLanguageChange={setLanguage} />
      <Hero content={content.hero} />
      <CategoryCards content={content.categories} />
      <FeaturedEvents content={content.featured} events={events} />
      <MoodRecommendation content={content.mood} />
      <CulturalRoutePreview content={content.routes} />
      <NewsletterForm key={language} content={content.newsletter} />
      <Footer content={content.footer} />
    </main>
  );
}
