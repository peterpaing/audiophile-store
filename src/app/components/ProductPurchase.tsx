"use client";

import { useState } from "react";

type ProductPurchaseProps = {
  productName: string;
};

export default function ProductPurchase({
  productName,
}: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
    setMessage("");
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
    setMessage("");
  };

  const addToCart = () => {
    setMessage(`${quantity} ${productName} added to cart.`);
  };

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-4">
        <div
          role="group"
          aria-label={`Choose quantity for ${productName}`}
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
          onClick={addToCart}
          className="min-h-12 bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Add to cart
        </button>
      </div>

      <p aria-live="polite" className="sr-only">
        {message}
      </p>
    </div>
  );
}