import Image from "next/image";
import Link from "next/link";

import arrowRight from "@/assets/shared/desktop/icon-arrow-right.svg";
import headphonesImage from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImage from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImage from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";

const categories = [
  {
    name: "Headphones",
    href: "/category/headphones",
    image: headphonesImage,
    imageClassName:
      "w-[150px] -top-12 md:w-[145px] md:-top-11 lg:w-[190px] lg:-top-[70px]",
  },
  {
    name: "Speakers",
    href: "/category/speakers",
    image: speakersImage,
    imageClassName:
      "w-[135px] -top-11 md:w-[130px] md:-top-10 lg:w-[175px] lg:-top-[65px]",
  },
  {
    name: "Earphones",
    href: "/category/earphones",
    image: earphonesImage,
    imageClassName:
      "w-[155px] -top-10 md:w-[145px] md:-top-9 lg:w-[190px] lg:-top-[58px]",
  },
];

export default function CategoryNavigation() {
  return (
    <nav
      aria-label="Shop by category"
      className="mt-[120px] px-6 md:mt-[148px] md:px-10 lg:mt-[120px] lg:px-0"
    >
      <ul className="mx-auto flex max-w-[327px] flex-col gap-[68px] md:max-w-[689px] md:flex-row md:gap-[10px] lg:max-w-[1110px] lg:gap-[30px]">
        {categories.map((category) => (
          <li key={category.href} className="flex-1">
            <Link
              href={category.href}
              className="group relative flex h-[165px] w-full flex-col items-center justify-end rounded-lg bg-surface pb-[22px] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:pb-[20px] lg:h-[204px] lg:pb-[30px]"
            >
              <Image
                src={category.image}
                alt=""
                aria-hidden="true"
                sizes="(max-width: 767px) 190px, (max-width: 1023px) 145px, 190px"
                className={`pointer-events-none absolute left-1/2 -translate-x-1/2 object-contain transition-transform duration-300 group-hover:scale-105 ${category.imageClassName}`}
              />

              <span className="text-[15px] font-bold uppercase tracking-[1.07px]">
                {category.name}
              </span>

              <span className="mt-3 flex items-center gap-[13px] text-[13px] font-bold uppercase tracking-[1px] text-black/50 transition-colors group-hover:text-primary group-focus-visible:text-primary lg:mt-4">
                Shop
                <Image
                  src={arrowRight}
                  alt=""
                  aria-hidden="true"
                  className="h-3 w-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}