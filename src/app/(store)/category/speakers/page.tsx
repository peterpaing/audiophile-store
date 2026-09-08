import type { Metadata } from "next";

import CategoryNavigation from "@/app/components/CategoryNavigation";
import SpeakerProductList from "@/app/components/SpeakerProductList";

export const metadata: Metadata = {
  title: "Speakers",
  description:
    "Explore Audiophile premium speakers built for detailed, powerful, wireless sound.",
};

export default function SpeakersPage() {
  return (
    <>
      <section
        aria-labelledby="speakers-heading"
        className="flex h-[102px] items-center justify-center bg-dark px-6 text-white md:h-[246px] lg:h-[240px]"
      >
        <h1
          id="speakers-heading"
          className="text-[28px] font-bold uppercase leading-[38px] tracking-[2px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]"
        >
          Speakers
        </h1>
      </section>

      <SpeakerProductList />
      <CategoryNavigation />
    </>
  );
}