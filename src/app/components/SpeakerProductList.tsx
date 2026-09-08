import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

import zx9Desktop from "@/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx9Tablet from "@/assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx9Mobile from "@/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";

import zx7Desktop from "@/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import zx7Tablet from "@/assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";
import zx7Mobile from "@/assets/product-zx7-speaker/mobile/image-category-page-preview.jpg";

type Product = {
  name: string;
  slug: string;
  description: string;
  isNew?: boolean;
  image: {
    desktop: StaticImageData;
    tablet: StaticImageData;
    mobile: StaticImageData;
  };
};

const products: Product[] = [
  {
    name: "ZX9 Speaker",
    slug: "zx9-speaker",
    isNew: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It is a bookshelf speaker system that offers truly wireless connectivity, creating new possibilities for more pleasing and practical audio setups.",
    image: {
      desktop: zx9Desktop,
      tablet: zx9Tablet,
      mobile: zx9Mobile,
    },
  },
  {
    name: "ZX7 Speaker",
    slug: "zx7-speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represent the top of the line powered speakers for home or studio use.",
    image: {
      desktop: zx7Desktop,
      tablet: zx7Tablet,
      mobile: zx7Mobile,
    },
  },
];

function ProductImage({
  image,
  productName,
}: {
  image: Product["image"];
  productName: string;
}) {
  return (
    <div
      aria-label={productName}
      className="relative h-[352px] w-full overflow-hidden rounded-lg bg-surface md:h-[352px] lg:h-[560px] lg:w-[540px] lg:shrink-0"
    >
      <Image
        src={image.mobile}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 767px) calc(100vw - 48px), 327px"
        className="object-cover md:hidden"
      />

      <Image
        src={image.tablet}
        alt=""
        aria-hidden="true"
        fill
        sizes="(max-width: 1023px) 689px, 540px"
        className="hidden object-cover md:block lg:hidden"
      />

      <Image
        src={image.desktop}
        alt=""
        aria-hidden="true"
        fill
        sizes="540px"
        className="hidden object-cover lg:block"
      />
    </div>
  );
}

export default function SpeakerProductList() {
  return (
    <section
      aria-labelledby="speaker-products-heading"
      className="px-6 pt-16 md:px-10 md:pt-[120px] lg:px-10 lg:pt-[160px]"
    >
      <h2 id="speaker-products-heading" className="sr-only">
        Speaker products
      </h2>

      <div className="mx-auto max-w-[327px] space-y-[120px] md:max-w-[689px] lg:max-w-[1110px] lg:space-y-[160px]">
        {products.map((product, index) => (
          <article
            key={product.slug}
            className={`flex flex-col gap-8 md:gap-[52px] lg:items-center lg:gap-[125px] ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <ProductImage image={product.image} productName={product.name} />

            <div className="text-center lg:w-[445px] lg:text-left">
              {product.isNew && (
                <p className="text-[14px] uppercase tracking-[10px] text-primary">
                  New product
                </p>
              )}

              <h3
                className={`text-[28px] font-bold uppercase leading-[38px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px] ${
                  product.isNew ? "mt-6" : ""
                }`}
              >
                {product.name}
              </h3>

              <p className="mt-6 text-[15px] leading-[25px] text-black/60 md:mt-8">
                {product.description}
              </p>

              <Link
                href={`/products/${product.slug}`}
                className="mt-6 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mt-10"
              >
                See product
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}