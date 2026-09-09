import bestGearDesktop from "@/assets/shared/desktop/image-best-gear.jpg";
import bestGearTablet from "@/assets/shared/tablet/image-best-gear.jpg";
import bestGearMobile from "@/assets/shared/mobile/image-best-gear.jpg";

export default function BestGearSection() {
  return (
    <section
      aria-labelledby="best-gear-heading"
      className="mt-25 mb-[110px] px-6 md:px-0 lg:mt-40 lg:mb-[130px]"
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

          <div className="group order-1 overflow-hidden rounded-lg lg:order-2">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={bestGearMobile.src}
              />
              <source
                media="(max-width: 1023px)"
                srcSet={bestGearTablet.src}
              />

              <img
                src={bestGearDesktop.src}
                alt="Person listening to music with headphones"
                width={bestGearDesktop.width}
                height={bestGearDesktop.height}
                loading="lazy"
                className="h-[300px] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none md:w-[689px] lg:h-[588px] lg:w-[540px]"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}