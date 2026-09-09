import type { StaticImageData } from "next/image";
import Link from "next/link";

import xx99MarkTwoDesktop from "@/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkTwoTablet from "@/assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkTwoMobile from "@/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

import xx99MarkOneDesktop from "@/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx99MarkOneTablet from "@/assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg";
import xx99MarkOneMobile from "@/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";

import xx59Desktop from "@/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import xx59Tablet from "@/assets/product-xx59-headphones/tablet/image-category-page-preview.jpg";
import xx59Mobile from "@/assets/product-xx59-headphones/mobile/image-category-page-preview.jpg";

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
    name: "XX99 Mark II Headphones",
    slug: "xx99-mark-two-headphones",
    isNew: true,
    description:
      "The new XX99 Mark II headphones are the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: {
      desktop: xx99MarkTwoDesktop,
      tablet: xx99MarkTwoTablet,
      mobile: xx99MarkTwoMobile,
    },
  },
  {
    name: "XX99 Mark I Headphones",
    slug: "xx99-mark-one-headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: {
      desktop: xx99MarkOneDesktop,
      tablet: xx99MarkOneTablet,
      mobile: xx99MarkOneMobile,
    },
  },
  {
    name: "XX59 Headphones",
    slug: "xx59-headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: {
      desktop: xx59Desktop,
      tablet: xx59Tablet,
      mobile: xx59Mobile,
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
    <div className="h-[352px] w-full overflow-hidden rounded-lg bg-surface md:h-[352px] lg:h-[560px] lg:w-[540px] lg:shrink-0">
      <picture>
        <source media="(max-width: 767px)" srcSet={image.mobile.src} />
        <source media="(max-width: 1023px)" srcSet={image.tablet.src} />

        <img
          src={image.desktop.src}
          alt={productName}
          width={image.desktop.width}
          height={image.desktop.height}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </picture>
    </div>
  );
}

export default function HeadphoneProductList() {
  return (
    <section
      aria-labelledby="headphone-products-heading"
      className="px-6 pt-16 md:px-10 md:pt-[120px] lg:px-10 lg:pt-[160px]"
    >
      <h2 id="headphone-products-heading" className="sr-only">
        Headphone products
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
                className="mt-6 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-black transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:mt-10"
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