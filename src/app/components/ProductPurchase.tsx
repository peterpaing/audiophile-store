"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaMinus, FaPlus } from "react-icons/fa6";

import { useCart } from "@/app/components/CartProvider";
import type { Product } from "@/product-data";

type ProductPurchaseProps = {
  product: Product;
};

export default function ProductPurchase({ product }: ProductPurchaseProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const resetTimeoutRef = useRef<number | null>(null);
  const { addToCart, openCart } = useCart();

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        window.clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);

    if (resetTimeoutRef.current) {
      window.clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = window.setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <div className="mt-8">
      <p aria-live="polite" aria-atomic="true" className="sr-only">
        {isAdded ? `${product.name} added to cart` : ""}
      </p>

      <div className="flex items-end gap-4">
      <div
        role="group"
        aria-label={`Choose quantity for ${product.name}`}
        className="flex h-12 shrink-0 items-center bg-surface"
      >
        <button
          type="button"
          onClick={decreaseQuantity}
          disabled={quantity === 1}
          aria-label="Decrease quantity"
          className="flex h-12 w-12 items-center justify-center text-[13px] font-bold text-black/60 transition-colors hover:text-black disabled:cursor-not-allowed disabled:text-black/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <FaMinus aria-hidden="true" size={11} />
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
          className="flex h-12 w-12 items-center justify-center text-[13px] font-bold text-black/60 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <FaPlus aria-hidden="true" size={11} />
        </button>
      </div>

      <div className="relative min-w-0 flex-1 lg:w-[200px] lg:flex-none">
        {isAdded && (
          <button
            type="button"
            onClick={openCart}
            className="animate-fade-in absolute bottom-full left-0 mb-3 w-full text-center text-[12px] font-bold uppercase tracking-[1px] text-primary underline underline-offset-4 transition-colors hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            View cart
          </button>
        )}

        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-primary px-4 text-[13px] font-bold uppercase tracking-[1px] text-black transition-all hover:bg-primary-hover active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:px-6"
        >
          {isAdded ? (
            <>
              <FaCheck aria-hidden="true" className="animate-fade-in" />
              Added
            </>
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </div>
    </div>
  );
}