import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

import type { Product, ResponsiveImage } from "@/product-data";
import CategoryNavigation from "@/app/components/CategoryNavigation";
import ProductPurchase from "@/app/components/ProductPurchase";

type ProductDetailsProps = {
  product: Product;
};

function formatPrice(price: number) {
  return `$ ${price.toLocaleString("en-US")}`;
}

function ResponsiveProductImage({
  image,
  alt,
  className,
}: {
  image: ResponsiveImage;
  alt: string;
  className: string;
}) {
  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={image.mobile.src} />
      <source media="(max-width: 1023px)" srcSet={image.tablet.src} />

      <img
        src={image.desktop.src}
        alt={alt}
        width={image.desktop.width}
        height={image.desktop.height}
        className={className}
      />
    </picture>
  );
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <>
      <div className="mx-auto max-w-[327px] px-0 pt-4 md:max-w-[689px] md:pt-8 lg:max-w-[1110px] lg:pt-[79px]">
        <Link
          href={`/category/${product.category}`}
          className="inline-flex items-center gap-2 text-[15px] leading-[25px] text-black/60 transition-colors hover:text-primary focus-visible:rounded focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <FaArrowLeft aria-hidden="true" size={14} />
          <span>Go back</span>
        </Link>

        <section
          aria-labelledby="product-heading"
          className="mt-6 flex flex-col gap-8 md:flex-row md:items-center md:gap-[69px] lg:mt-14 lg:gap-[125px]"
        >
          <div className="group relative h-[327px] overflow-hidden rounded-lg bg-surface md:h-[480px] md:w-[281px] md:shrink-0 lg:h-[560px] lg:w-[540px]">
            <ResponsiveProductImage
              image={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>

          <div className="md:max-w-[340px] lg:max-w-[445px]">
            {product.new && (
              <p className="text-[14px] uppercase tracking-[10px] text-primary">
                New product
              </p>
            )}

            <h1
              id="product-heading"
              className={`text-[28px] font-bold uppercase leading-[38px] tracking-[1px] md:text-[40px] md:leading-[44px] md:tracking-[1.43px] ${
                product.new ? "mt-6" : ""
              }`}
            >
              {product.name}
            </h1>

            <p className="mt-6 text-[15px] leading-[25px] text-black/60 md:mt-8">
              {product.description}
            </p>

            <p className="mt-6 text-[18px] font-bold tracking-[1.3px] md:mt-8">
              {formatPrice(product.price)}
            </p>

            <ProductPurchase product={product} />
          </div>
        </section>

        <section className="mt-[88px] flex flex-col gap-[88px] md:mt-[120px] md:gap-[120px] lg:mt-[160px] lg:flex-row lg:justify-between lg:gap-[125px]">
          <div className="lg:max-w-[635px]">
            <h2 className="text-[24px] font-bold uppercase leading-[36px] tracking-[0.86px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">
              Features
            </h2>

            <div className="mt-6 space-y-6 text-[15px] leading-[25px] text-black/60 md:mt-8">
              {product.features.split("\n\n").map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <section aria-labelledby="in-the-box-heading" className="lg:w-[350px]">
            <h2
              id="in-the-box-heading"
              className="text-[24px] font-bold uppercase leading-[36px] tracking-[0.86px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]"
            >
              In the box
            </h2>

            <ul className="mt-6 space-y-2 text-[15px] leading-[25px] md:mt-8">
              {product.includes.map((includedItem) => (
                <li key={includedItem.item} className="flex gap-6">
                  <span className="font-bold text-primary">
                    {includedItem.quantity}x
                  </span>
                  <span className="text-black/60">{includedItem.item}</span>
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section
          aria-label={`${product.name} gallery`}
          className="mt-[88px] grid gap-5 md:mt-[120px] md:grid-cols-[277px_1fr] md:grid-rows-2 md:gap-5 lg:mt-[160px] lg:grid-cols-[445px_1fr] lg:gap-[30px]"
        >
          <div className="group h-[174px] overflow-hidden rounded-lg md:h-full">
            <ResponsiveProductImage
              image={product.gallery.first}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>

          <div className="group h-[174px] overflow-hidden rounded-lg md:row-start-2 md:h-full">
            <ResponsiveProductImage
              image={product.gallery.second}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>

          <div className="group h-[368px] overflow-hidden rounded-lg md:col-start-2 md:row-span-2 md:row-start-1 md:h-[368px] lg:h-[592px]">
            <ResponsiveProductImage
              image={product.gallery.third}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
            />
          </div>
        </section>

        <section
          aria-labelledby="also-like-heading"
          className="mt-[120px] md:mt-[120px] lg:mt-[160px]"
        >
          <h2
            id="also-like-heading"
            className="text-center text-[24px] font-bold uppercase leading-[36px] tracking-[0.86px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]"
          >
            You may also like
          </h2>

          <ul className="mt-10 grid gap-14 md:mt-14 md:grid-cols-3 md:gap-[11px] lg:gap-[30px]">
            {product.others.map((relatedProduct) => (
              <li key={relatedProduct.slug}>
                <article className="group text-center">
                  <div className="h-[120px] overflow-hidden rounded-lg bg-surface md:h-[318px]">
                    <ResponsiveProductImage
                      image={relatedProduct.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>

                  <h3 className="mt-8 text-[24px] font-bold uppercase leading-[33px] tracking-[1.7px]">
                    {relatedProduct.name}
                  </h3>

                  <Link
                    href={`/products/${relatedProduct.slug}`}
                    className="mt-8 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    See product
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <CategoryNavigation />
    </>
  );
}