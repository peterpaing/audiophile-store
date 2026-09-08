import Image from "next/image";
import Link from "next/link";

import circles from "@/assets/home/desktop/pattern-circles.svg";
import zx9Speaker from "@/assets/home/products/zx9-speaker.png";
import zx7Speaker from "@/assets/home/products/zx7-speaker.png";
import yx1Earphones from "@/assets/home/products/yx1-earphones.png";

const darkButtonClass =
  "inline-flex min-h-12 items-center justify-center bg-black px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-[#4C4C4C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

const outlineButtonClass =
  "inline-flex min-h-12 items-center justify-center border border-black px-8 text-[13px] font-bold uppercase tracking-[1px] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black";

export default function ProductShowcase() {
  return (
    <section
      aria-label="Featured products"
      className="mt-20 px-6 md:mt-20 md:px-10 lg:mt-24 lg:px-10"
    >
      <div className="mx-auto max-w-[500px] space-y-6 md:max-w-[760px] md:space-y-8 lg:max-w-[1110px] lg:space-y-12">
        <article className="relative h-[560px] overflow-hidden rounded-lg bg-primary text-white transition-transform duration-300 hover:-translate-y-1 md:h-[620px] lg:h-95">
          <Image
            src={circles}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-115px] w-[558px] max-w-none -translate-x-1/2 opacity-40 md:top-[-190px] md:w-[944px] lg:left-[-150px] lg:top-[-36px] lg:w-[944px] lg:translate-x-0"
          />

          <Image
            src={zx9Speaker}
            alt=""
            aria-hidden="true"
            sizes="(max-width: 767px) 180px, (max-width: 1023px) 180px, 260px"
            className="pointer-events-none absolute left-1/2 top-[57px] w-[180px] -translate-x-1/2 object-contain md:top-[40px] md:w-[180px] lg:bottom-auto lg:left-[140px] lg:top-1/2 lg:w-[260px] lg:-translate-y-1/2 lg:translate-x-0"
          />

          <div className="absolute inset-x-6 bottom-[45px] flex flex-col items-center text-center md:bottom-[45px] lg:inset-x-auto lg:left-[650px] lg:top-1/2 lg:bottom-auto lg:w-[350px] lg:-translate-y-1/2 lg:items-start lg:text-left">
            <h2 className="max-w-[260px] text-[36px] font-bold uppercase leading-[40px] tracking-[1.3px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
              ZX9 Speaker
            </h2>

            <p className="mt-6 max-w-[349px] text-[15px] leading-[25px] text-white/75 md:mt-8">
              Upgrade to premium speakers that are phenomenally built to
              deliver truly remarkable sound.
            </p>

            <Link
              href="/products/zx9-speaker"
              className={`mt-6 md:mt-10 ${darkButtonClass}`}
            >
              See product
            </Link>
          </div>
        </article>

        <article className="relative h-80 overflow-hidden rounded-lg bg-[#D8D8D8] transition-transform duration-300 hover:-translate-y-1">
          <Image
            src={zx7Speaker}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 760px, 1110px"
            className="object-cover object-[50%_center] md:object-[62%_center]"
          />

          <div className="relative flex h-full flex-col items-start justify-center pl-6 md:pl-[62px] lg:pl-[95px]">
            <h2 className="text-[28px] font-bold uppercase leading-[38px] tracking-[2px]">
              ZX7 Speaker
            </h2>

            <Link
              href="/products/zx7-speaker"
              className={`mt-8 ${outlineButtonClass}`}
            >
              See product
            </Link>
          </div>
        </article>

        <div className="grid grid-cols-2 gap-2 md:gap-[11px] lg:gap-[30px]">
          <article className="relative h-[200px] overflow-hidden rounded-lg bg-dark transition-transform duration-300 hover:-translate-y-1 md:h-80">
            <Image
              src={yx1Earphones}
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 767px) calc((100vw - 56px) / 2), (max-width: 1023px) 375px, 540px"
              className="object-cover object-[35%_center]"
            />
          </article>

          <article className="flex h-[200px] flex-col items-start justify-center rounded-lg bg-surface px-4 transition-transform duration-300 hover:-translate-y-1 md:h-80 md:px-0 md:pl-[41px] lg:pl-[95px]">
            <h2 className="text-[15px] font-bold uppercase leading-5 tracking-[1px] md:text-[28px] md:leading-[38px] md:tracking-[2px]">
              YX1 Earphones
            </h2>

            <Link
              href="/products/yx1-wireless-earphones"
              className="mt-3 inline-flex min-h-8 items-center justify-center border border-black px-4 text-[10px] font-bold uppercase tracking-[0.8px] text-black transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black md:mt-8 md:min-h-12 md:px-8 md:text-[13px] md:tracking-[1px]"
            >
              See product
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}