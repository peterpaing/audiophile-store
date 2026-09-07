import Image from "next/image";
import Link from "next/link";

import heroHeadphones from "@/assets/home/hero-headphones-transparent.png";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-dark text-white">
      <div className="relative mx-auto h-[600px] max-w-[1110px] px-6 md:h-[639px] md:px-10 lg:h-[633px] lg:px-0">
        <Image
          src={heroHeadphones}
          alt=""
          aria-hidden="true"
          priority
          sizes="(max-width: 767px) 650px, (max-width: 1023px) 730px, 610px"
          className="pointer-events-none absolute left-1/2 top-2 z-0 w-[650px] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_20px_28px_rgba(0,0,0,0.5)] md:top-[-10px] md:w-[730px] lg:left-auto lg:right-[-20px] lg:top-[18px] lg:w-[610px] lg:translate-x-0"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(16,16,16,0)_15%,rgba(16,16,16,0.3)_38%,rgba(16,16,16,0.82)_78%,rgba(16,16,16,0.96)_100%)] lg:hidden"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[395px] z-0 h-2 w-32 -translate-x-1/2 rounded-full bg-white/20 blur-md md:top-[535px] md:w-48 lg:left-auto lg:right-[170px] lg:top-[575px] lg:w-48 lg:translate-x-0"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-[120px] text-center md:pb-[94px] lg:items-start lg:justify-center lg:pb-0 lg:text-left">
          <p className="text-[14px] uppercase tracking-[10px] text-white/70 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]">
            New product
          </p>

          <h1 className="mt-4 max-w-[380px] text-[36px] font-bold uppercase leading-[40px] tracking-[1.3px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] md:mt-6 md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            XX99 Mark II Headphones
          </h1>

          <p className="mt-6 max-w-[349px] text-[15px] leading-[25px] text-white/90 drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] md:mt-7">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link
            href="/products/xx99-mark-two-headphones"
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-hover md:mt-10"
          >
            See product
          </Link>
        </div>
      </div>
    </section>
  );
}