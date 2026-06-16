import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { FoodBloggerSection } from "@/components/FoodBloggerSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProperties />
      <FoodBloggerSection />
      <ContactFooter />
    </main>
  );
}
