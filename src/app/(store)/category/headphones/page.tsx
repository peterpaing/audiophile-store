import type { Metadata } from "next";

import CategoryNavigation from "@/app/components/CategoryNavigation";
import HeadphoneProductList from "@/app/components/HeadphoneProductList";

export const metadata: Metadata = {
  title: "Headphones",
  description:
    "Explore Audiophile premium headphones, designed for detailed, balanced, studio-quality sound.",
};

export default function HeadphonesPage() {
  return (
    <>
      <section
        aria-labelledby="headphones-heading"
        className="flex h-[102px] items-center justify-center bg-dark px-6 text-white md:h-[246px] lg:h-[240px]"
      >
        <h1
          id="headphones-heading"
          className="text-[28px] font-bold uppercase leading-[38px] tracking-[2px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]"
        >
          Headphones
        </h1>
      </section>

      <HeadphoneProductList />
      <CategoryNavigation />
    </>
  );
}