import type { Metadata } from "next";

import CheckoutContent from "@/app/components/CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Review your Audiophile order and complete this demo checkout.",
};

export default function CheckoutPage() {
  return <CheckoutContent />;
}