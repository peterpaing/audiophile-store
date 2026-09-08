import type { Metadata } from "next";

import CategoryNavigation from "@/app/components/CategoryNavigation";
import EarphoneProductList from "@/app/components/EarphoneProductList";

export const metadata: Metadata = {
  title: "Earphones",
  description:
    "Explore Audiophile wireless earphones with high-fidelity sound and active noise cancellation.",
};

export default function EarphonesPage() {
  return (
    <>
      <section
        aria-labelledby="earphones-heading"
        className="flex h-[102px] items-center justify-center bg-dark px-6 text-white md:h-[246px] lg:h-[240px]"
      >
        <h1
          id="earphones-heading"
          className="text-[28px] font-bold uppercase leading-[38px] tracking-[2px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]"
        >
          Earphones
        </h1>
      </section>

      <EarphoneProductList />
      <CategoryNavigation />
    </>
  );
}