import Header from "@/app/components/Header";
import BestGearSection from "@/app/components/BestGearSection";
import Footer from "@/app/components/Footer";

export default function StoreLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />

      <main className="flex-1">{children}</main>

      <BestGearSection />

      <Footer />
    </>
  );
}