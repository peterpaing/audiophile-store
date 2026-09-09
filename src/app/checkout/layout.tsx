import type { ReactNode } from "react";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function CheckoutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />

      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>

      <Footer />
    </>
  );
}