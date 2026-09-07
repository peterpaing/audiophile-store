import HeroSection from "@/app/components/HeroSection";
import CategoryNavigation from "@/app/components/CategoryNavigation";
import ProductShowcase from "@/app/components/ProductShowcase";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryNavigation />
      <ProductShowcase />
    </>
  );
}