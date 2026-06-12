import CategoryCards from "@/components/CategoryCards";
import CulturalRoutePreview from "@/components/CulturalRoutePreview";
import FeaturedEvents from "@/components/FeaturedEvents";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MoodRecommendation from "@/components/MoodRecommendation";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-fluxBg bg-paper-grid bg-[size:72px_72px] text-fluxDark">
      <Header />
      <Hero />
      <CategoryCards />
      <FeaturedEvents />
      <MoodRecommendation />
      <CulturalRoutePreview />
      <NewsletterForm />
      <Footer />
    </main>
  );
}
