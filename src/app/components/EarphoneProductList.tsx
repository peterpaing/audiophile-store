import Image from "next/image";
import Link from "next/link";

import yx1Desktop from "@/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1Tablet from "@/assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";
import yx1Mobile from "@/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";

export default function EarphoneProductList() {
  return (
    <section
      aria-labelledby="earphone-products-heading"
      className="px-6 pt-16 md:px-10 md:pt-[120px] lg:px-10 lg:pt-[160px]"
    >
      <h2 id="earphone-products-heading" className="sr-only">
        Earphone products
      </h2>

      <article className="mx-auto flex max-w-[327px] flex-col gap-8 md:max-w-[689px] md:gap-[52px] lg:max-w-[1110px] lg:flex-row lg:items-center lg:gap-[125px]">
        <div
          aria-label="YX1 Wireless Earphones"
          className="relative h-[352px] w-full overflow-hidden rounded-lg bg-surface md:h-[352px] lg:h-[560px] lg:w-[540px] lg:shrink-0"
        >
          <Image
            src={yx1Mobile}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 767px) calc(100vw - 48px), 327px"
            className="object-cover md:hidden"
          />

          <Image
            src={yx1Tablet}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 1023px) 689px, 540px"
            className="hidden object-cover md:block lg:hidden"
          />

          <Image
            src={yx1Desktop}
            alt=""
            aria-hidden="true"
            fill
            sizes="540px"
            className="hidden object-cover lg:block"
          />
        </div>

        <div className="text-center lg:w-[445px] lg:text-left">
          <p className="text-[14px] uppercase tracking-[10px] text-primary">
            New product
          </p>

          <h3 className="mt-6 text-[28px] font-bold uppercase leading-[38px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px]">
            YX1 Wireless Earphones
          </h3>

          <p className="mt-6 text-[15px] leading-[25px] text-black/60 md:mt-8">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
            sound even in noisy environments with its active noise cancellation
            feature.
          </p>

          <Link
            href="/products/yx1-wireless-earphones"
            className="mt-6 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mt-10"
          >
            See product
          </Link>
        </div>
      </article>
    </section>
  );
}