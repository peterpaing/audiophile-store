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
      {children}
      <Footer />
    </>
  );
}