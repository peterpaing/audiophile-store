"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa6";

import { useCart, type CartItem } from "@/app/components/CartProvider";

const SHIPPING_COST = 50;
const VAT_RATE = 0.2;

function formatPrice(price: number) {
  return `$ ${price.toLocaleString("en-US")}`;
}

function InputField({
  label,
  id,
  type = "text",
  autoComplete,
  required = true,
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-[12px] font-bold tracking-[-0.2px]"
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 h-14 w-full rounded-lg border border-black/20 px-6 text-[14px] font-bold tracking-[-0.2px] outline-none transition-colors placeholder:text-black/40 focus:border-primary"
      />
    </div>
  );
}

function OrderConfirmation({
  items,
  total,
  onClose,
}: {
  items: CartItem[];
  total: number;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  const firstItem = items[0];
  const remainingItems = items.length - 1;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/40 px-6">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirmation-heading"
        tabIndex={-1}
        className="w-full max-w-[540px] rounded-lg bg-white p-8 outline-none md:p-12"
      >
        <div
          aria-hidden="true"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white"
        >
          <FaCheck aria-hidden="true" size={28} />
        </div>

        <h1
          id="confirmation-heading"
          className="mt-6 text-[24px] font-bold uppercase leading-[28px] tracking-[0.86px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]"
        >
          Thank you for your order
        </h1>

        <p className="mt-4 text-[15px] leading-[25px] text-black/50">
          You will receive an email confirmation shortly.
        </p>

        <div className="mt-6 overflow-hidden rounded-lg md:flex">
          <div className="bg-surface p-6 md:flex-1">
            {firstItem && (
              <div className="flex items-center gap-4">
                <Image
                  src={firstItem.product.cartImage}
                  alt=""
                  aria-hidden="true"
                  className="h-12 w-12 rounded-lg object-cover"
                />

                <div className="min-w-0 flex-1">
                  <p className="truncate text-[15px] font-bold uppercase">
                    {firstItem.product.name}
                  </p>
                  <p className="text-[14px] font-bold text-black/50">
                    {formatPrice(firstItem.product.price)}
                  </p>
                </div>

                <span className="text-[15px] font-bold text-black/50">
                  x{firstItem.quantity}
                </span>
              </div>
            )}

            {remainingItems > 0 && (
              <p className="mt-3 border-t border-black/10 pt-3 text-center text-[12px] font-bold text-black/50">
                and {remainingItems} other item
                {remainingItems > 1 ? "s" : ""}
              </p>
            )}
          </div>

          <div className="bg-black p-6 text-white md:flex md:w-[198px] md:flex-col md:justify-end">
            <p className="text-[15px] uppercase text-white/50">Grand total</p>
            <p className="mt-2 text-[18px] font-bold">
              {formatPrice(total)}
            </p>
          </div>
        </div>

        <Link
          href="/"
          onClick={onClose}
          className="mt-6 flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function CheckoutContent() {
  const { items, total, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [completedOrder, setCompletedOrder] = useState<{
    items: CartItem[];
    total: number;
  } | null>(null);

  const subtotal = total;
  const vat = Math.round(subtotal * VAT_RATE);
  const grandTotal = subtotal + SHIPPING_COST + vat;

  const completeOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!event.currentTarget.reportValidity()) {
      return;
    }

    setCompletedOrder({
      items,
      total: grandTotal,
    });
    clearCart();
  };

  if (items.length === 0 && !completedOrder) {
    return (
      <main className="min-h-[60vh] bg-surface px-6 py-16 md:px-10 lg:py-20">
        <div className="mx-auto max-w-[1110px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[15px] leading-[25px] text-black/50 transition-colors hover:text-primary focus-visible:rounded focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <FaArrowLeft aria-hidden="true" size={14} />
            <span>Go back</span>
          </Link>

          <section className="mt-8 rounded-lg bg-white p-8 text-center md:p-12">
            <h1 className="text-[28px] font-bold uppercase leading-[38px] tracking-[1px]">
              Your cart is empty
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-[25px] text-black/60">
              Add a product to your cart before continuing to checkout.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex min-h-12 items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              Continue shopping
            </Link>
          </section>
        </div>
      </main>
    );
  }

  return (
    <>
      <main className="bg-surface px-6 py-4 md:px-10 md:py-8 lg:py-[79px]">
        <div className="mx-auto max-w-[1110px]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[15px] leading-[25px] text-black/50 transition-colors hover:text-primary focus-visible:rounded focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <FaArrowLeft aria-hidden="true" size={14} />
            <span>Go back</span>
          </Link>

          <div className="mt-6 flex flex-col gap-8 lg:mt-[38px] lg:flex-row lg:items-start">
            <form
              id="checkout-form"
              noValidate
              onSubmit={completeOrder}
              className="rounded-lg bg-white p-6 md:p-7 lg:w-[730px] lg:p-12"
            >
              <h1 className="text-[28px] font-bold uppercase leading-[38px] tracking-[1px] md:text-[32px] md:leading-[36px] md:tracking-[1.14px]">
                Checkout
              </h1>

              <fieldset className="mt-8">
                <legend className="text-[13px] font-bold uppercase tracking-[0.93px] text-primary">
                  Billing details
                </legend>

                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <InputField
                    id="name"
                    label="Name"
                    autoComplete="name"
                    placeholder="Alexei Ward"
                  />
                  <InputField
                    id="email"
                    label="Email Address"
                    type="email"
                    autoComplete="email"
                    placeholder="alexei@mail.com"
                  />
                  <InputField
                    id="phone"
                    label="Phone Number"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </fieldset>

              <fieldset className="mt-[53px]">
                <legend className="text-[13px] font-bold uppercase tracking-[0.93px] text-primary">
                  Shipping info
                </legend>

                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <InputField
                      id="address"
                      label="Address"
                      autoComplete="street-address"
                      placeholder="1137 Williams Avenue"
                    />
                  </div>

                  <InputField
                    id="zip-code"
                    label="ZIP Code"
                    autoComplete="postal-code"
                    placeholder="10001"
                  />
                  <InputField
                    id="city"
                    label="City"
                    autoComplete="address-level2"
                    placeholder="New York"
                  />
                  <InputField
                    id="country"
                    label="Country"
                    autoComplete="country-name"
                    placeholder="United States"
                  />
                </div>
              </fieldset>

              <fieldset className="mt-[53px]">
                <legend className="text-[13px] font-bold uppercase tracking-[0.93px] text-primary">
                  Payment details
                </legend>

                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  <p className="text-[12px] font-bold tracking-[-0.2px]">
                    Payment method
                  </p>

                  <div className="space-y-4">
                    <label className="flex h-14 cursor-pointer items-center gap-4 rounded-lg border border-black/20 px-4 has-[:checked]:border-primary">
                      <input
                        type="radio"
                        name="payment-method"
                        value="e-money"
                        checked={paymentMethod === "e-money"}
                        onChange={() => setPaymentMethod("e-money")}
                        className="h-5 w-5 accent-primary"
                      />
                      <span className="text-[14px] font-bold">e-Money</span>
                    </label>

                    <label className="flex h-14 cursor-pointer items-center gap-4 rounded-lg border border-black/20 px-4 has-[:checked]:border-primary">
                      <input
                        type="radio"
                        name="payment-method"
                        value="cash"
                        checked={paymentMethod === "cash"}
                        onChange={() => setPaymentMethod("cash")}
                        className="h-5 w-5 accent-primary"
                      />
                      <span className="text-[14px] font-bold">
                        Cash on Delivery
                      </span>
                    </label>
                  </div>

                  {paymentMethod === "e-money" && (
                    <>
                      <InputField
                        id="e-money-number"
                        label="e-Money Number"
                        placeholder="238521993"
                      />
                      <InputField
                        id="e-money-pin"
                        label="e-Money PIN"
                        placeholder="6891"
                      />
                    </>
                  )}

                  {paymentMethod === "cash" && (
                    <p className="text-[15px] leading-[25px] text-black/60 md:col-span-2">
                      Cash on Delivery is available for this portfolio project.
                      No payment will be collected.
                    </p>
                  )}
                </div>
              </fieldset>

              <button
                type="submit"
                className="mt-10 flex min-h-12 w-full items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
              >
                Continue and pay
              </button>
            </form>

            <aside
              aria-labelledby="summary-heading"
              className="rounded-lg bg-white p-6 lg:w-[350px] lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-[18px] font-bold uppercase leading-[25px] tracking-[1.3px]"
              >
                Summary
              </h2>

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
                        <p className="mt-1 text-[14px] font-bold text-black/50">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>

                    <span className="text-[15px] font-bold text-black/50">
                      x{quantity}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-8 space-y-2 text-[15px] uppercase">
                <div className="flex justify-between">
                  <dt className="text-black/50">Total</dt>
                  <dd className="font-bold">{formatPrice(subtotal)}</dd>
                </div>

                <div className="flex justify-between">
                  <dt className="text-black/50">Shipping</dt>
                  <dd className="font-bold">{formatPrice(SHIPPING_COST)}</dd>
                </div>

                <div className="flex justify-between">
                  <dt className="text-black/50">VAT (included)</dt>
                  <dd className="font-bold">{formatPrice(vat)}</dd>
                </div>

                <div className="mt-6 flex justify-between pt-4">
                  <dt className="text-black/50">Grand total</dt>
                  <dd className="font-bold text-primary">
                    {formatPrice(grandTotal)}
                  </dd>
                </div>
              </dl>

              <button
                type="submit"
                form="checkout-form"
                className="mt-8 hidden min-h-12 w-full items-center justify-center bg-primary px-8 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:flex"
              >
                Continue and pay
              </button>
            </aside>
          </div>
        </div>
      </main>

      {completedOrder && (
        <OrderConfirmation
          items={completedOrder.items}
          total={completedOrder.total}
          onClose={() => setCompletedOrder(null)}
        />
      )}
    </>
  );
}