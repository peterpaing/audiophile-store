"use client";

import Image from "next/image";

import cartIcon from "@/assets/shared/desktop/icon-cart.svg";
import { useCart } from "@/app/components/CartProvider";

export default function CartButton() {
  const { cartCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={
        cartCount === 0
          ? "Open shopping cart"
          : `Open shopping cart, ${cartCount} items`
      }
      className="relative ml-auto rounded p-2 transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <Image src={cartIcon} alt="" aria-hidden="true" />

      {cartCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-white">
          {cartCount}
        </span>
      )}
    </button>
  );
}