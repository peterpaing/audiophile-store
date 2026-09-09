"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import arrowRight from "@/assets/shared/desktop/icon-arrow-right.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Headphones", href: "/category/headphones" },
  { label: "Speakers", href: "/category/speakers" },
  { label: "Earphones", href: "/category/earphones" },
];

export default function NavList() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    mobileMenuRef.current?.focus();
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="hidden lg:block" aria-label="Desktop navigation">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`rounded text-[13px] font-bold uppercase tracking-[2px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={menuButtonRef}
        type="button"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          if (isMenuOpen) {
            closeMenu();
          } else {
            setIsMenuOpen(true);
          }
        }}
        className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:hidden"
      >
        <span
          aria-hidden="true"
          className={`h-0.5 w-4 bg-white transition-transform motion-reduce:transition-none ${
            isMenuOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          aria-hidden="true"
          className={`h-0.5 w-4 bg-white transition-opacity motion-reduce:transition-none ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          aria-hidden="true"
          className={`h-0.5 w-4 bg-white transition-transform motion-reduce:transition-none ${
            isMenuOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      {isMenuOpen && (
        <>
          <button
            type="button"
            tabIndex={-1}
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-0 top-24 z-40 cursor-default bg-black/40 lg:hidden"
          />

          <nav
            ref={mobileMenuRef}
            id="mobile-navigation"
            tabIndex={-1}
            aria-label="Mobile navigation"
            className="absolute left-0 top-full z-50 w-full bg-white px-6 py-8 shadow-xl outline-none lg:hidden"
          >
            <ul className="mx-auto flex max-w-[688px] flex-col divide-y divide-black/10">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex min-h-14 items-center justify-between rounded py-4 text-[13px] font-bold uppercase tracking-[2px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                      isActive(item.href)
                        ? "text-black"
                        : "text-black hover:text-black"
                    }`}
                  >
                    {item.label}

                    <Image
                      src={arrowRight}
                      alt=""
                      aria-hidden="true"
                      className="h-3 w-2"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}