"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaMinus, FaPlus, FaXmark } from "react-icons/fa6";

import type { CartItem } from "@/app/components/CartProvider";

type CartDrawerProps = {
  items: CartItem[];
  total: number;
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
};

function formatPrice(price: number) {
  return `$ ${price.toLocaleString("en-US")}`;
}

export default function CartDrawer({
  items,
  total,
  isOpen,
  onClose,
  onClear,
  onRemove,
  onUpdateQuantity,
}: CartDrawerProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElement.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const cartCount = items.reduce((totalQuantity, item) => {
    return totalQuantity + item.quantity;
  }, 0);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      onClose();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (!focusableElements?.length) {
      return;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }

    if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        tabIndex={-1}
        aria-label="Close shopping cart"
        onClick={onClose}
        className="animate-fade-in absolute inset-0 cursor-default bg-black/40"
      />

      <aside
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-heading"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
        className="animate-slide-in-right absolute left-6 right-6 top-[114px] mx-auto max-h-[calc(100dvh-138px)] max-w-[377px] overflow-y-auto rounded-lg bg-white p-7 outline-none md:left-auto md:right-10 md:top-[120px] md:w-[377px] md:p-8 lg:right-[calc((100vw-1110px)/2)]"
      >
        <div className="flex items-center justify-between">
          <h2
            id="cart-heading"
            className="text-[18px] font-bold uppercase leading-[25px] tracking-[1.3px]"
          >
            Cart ({cartCount})
          </h2>

          <div className="flex items-center gap-3">
            {items.length > 0 && (
              <button
                type="button"
                onClick={onClear}
                className="text-[15px] leading-[25px] text-black/60 underline transition-colors hover:text-black focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                Remove all
              </button>
            )}

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close shopping cart"
              className="flex h-11 w-11 items-center justify-center rounded text-black/70 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <FaXmark aria-hidden="true" size={20} />
            </button>
          </div>
        </div>

        {items.length === 0 ? (
          <p className="py-10 text-center text-[15px] leading-[25px] text-black/60">
            Your cart is empty.
          </p>
        ) : (
          <>
            <ul className="mt-8 space-y-6">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex items-center justify-between gap-3"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <Image
                      src={product.cartImage}
                      alt=""
                      aria-hidden="true"
                      className="h-16 w-16 rounded-lg object-cover"
                    />

                    <div className="min-w-0">
                      <h3 className="truncate text-[15px] font-bold uppercase">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[14px] font-bold text-black/60">
                        {formatPrice(product.price)}
                      </p>

                      <button
                        type="button"
                        onClick={() => onRemove(product.id)}
                        className="mt-1 text-[13px] text-black/60 underline transition-colors hover:text-black focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        Remove {product.name}
                      </button>
                    </div>
                  </div>

                  <div
                    role="group"
                    aria-label={`Quantity for ${product.name}`}
                    className="flex h-8 items-center bg-surface"
                  >
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${product.name}`}
                      onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center text-black/60 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <FaMinus aria-hidden="true" size={10} />
                    </button>

                    <output
                      aria-live="polite"
                      aria-label={`Current quantity: ${quantity}`}
                      className="flex w-7 justify-center text-[13px] font-bold"
                    >
                      {quantity}
                    </output>

                    <button
                      type="button"
                      aria-label={`Increase quantity of ${product.name}`}
                      onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center text-black/60 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-primary"
                    >
                      <FaPlus aria-hidden="true" size={10} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between">
              <p className="text-[15px] uppercase text-black/60">Total</p>
              <p className="text-[18px] font-bold">{formatPrice(total)}</p>
            </div>

            <Link
              href="/checkout"
              onClick={onClose}
              className="mt-6 flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-black transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Checkout
            </Link>
          </>
        )}
      </aside>
    </div>
  );
}