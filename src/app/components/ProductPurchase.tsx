"use client";

import { useState } from "react";

import { useCart } from "@/app/components/CartProvider";
import type { Product } from "@/product-data";

type ProductPurchaseProps = {
  product: Product;
};

export default function ProductPurchase({ product }: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-4">
        <div
          role="group"
          aria-label={`Choose quantity for ${product.name}`}
          className="flex h-12 items-center bg-surface"
        >
          <button
            type="button"
            onClick={decreaseQuantity}
            disabled={quantity === 1}
            aria-label="Decrease quantity"
            className="flex h-12 w-12 items-center justify-center text-[13px] font-bold text-black/25 transition-colors hover:text-primary disabled:cursor-not-allowed disabled:hover:text-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            −
          </button>

          <output
            aria-live="polite"
            aria-label={`Quantity: ${quantity}`}
            className="flex w-10 justify-center text-[13px] font-bold"
          >
            {quantity}
          </output>

          <button
            type="button"
            onClick={increaseQuantity}
            aria-label="Increase quantity"
            className="flex h-12 w-12 items-center justify-center text-[13px] font-bold text-black/25 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => addToCart(product, quantity)}
          className="min-h-12 bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}