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
    <main className="relative min-h-screen overflow-hidden bg-night text-pearl">
      <div className="pointer-events-none fixed inset-0 bg-radial-stage opacity-80" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:96px_96px] opacity-20" />
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
