import Image from "next/image";

import bestGearDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "@/assets/shared/mobile/image-best-gear.jpg";

export default function BestGearSection() {
  return (
    <section
      aria-labelledby="best-gear-heading"
      className="my-[120px] px-6 md:px-0 lg:my-[200px]"
    >
      <div className="mx-auto max-w-[327px] md:max-w-[689px] lg:max-w-[1110px]">
        <div className="flex flex-col gap-10 md:gap-[63px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="order-2 text-center lg:order-1 lg:w-[445px] lg:text-left">
            <h2
              id="best-gear-heading"
              className="text-[28px] font-bold uppercase leading-[38px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]"
            >
              Bringing you the
              <br />
              <span className="text-primary">best</span> audio gear
            </h2>

            <p className="mt-8 text-[15px] leading-[25px] text-black/60">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src={bestGearMobile}
              alt="Person listening to music with headphones"
              className="h-[300px] w-full rounded-lg object-cover md:hidden"
              sizes="(max-width: 767px) calc(100vw - 48px), 327px"
            />

            <Image
              src={bestGearTablet}
              alt="Person listening to music with headphones"
              className="hidden h-[300px] w-[689px] rounded-lg object-cover md:block lg:hidden"
              sizes="689px"
            />

            <Image
              src={bestGearDesktop}
              alt="Person listening to music with headphones"
              className="hidden h-[588px] w-[540px] rounded-lg object-cover lg:block"
              sizes="540px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}