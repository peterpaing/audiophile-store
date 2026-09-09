import Link from "next/link";
import { FaHeadphones, FaHouse } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="flex min-h-[60vh] items-center bg-surface px-6 py-20 md:px-10"
    >
      <div className="mx-auto w-full max-w-[689px] rounded-lg bg-white px-6 py-16 text-center md:px-12 md:py-20">
        <p className="text-[13px] font-bold uppercase tracking-[1px] text-[#9A4F2B]">
          Error 404
        </p>

        <h1
          id="not-found-heading"
          className="mt-4 text-[36px] font-bold uppercase leading-[40px] tracking-[1.3px] md:text-[56px] md:leading-[58px] md:tracking-[2px]"
        >
          Page not found
        </h1>

        <p className="mx-auto mt-6 max-w-md text-[15px] leading-[25px] text-black/60">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-black transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <FaHouse aria-hidden="true" size={14} />
            Go home
          </Link>

          <Link
            href="/category/headphones"
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-black px-8 text-[13px] font-bold uppercase tracking-[1px] transition-colors hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <FaHeadphones aria-hidden="true" size={14} />
            Shop headphones
          </Link>
        </div>
      </div>
    </section>
  );
}