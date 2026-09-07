import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import logo from "@/assets/shared/desktop/logo.svg";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Headphones", href: "/category/headphones" },
  { label: "Speakers", href: "/category/speakers" },
  { label: "Earphones", href: "/category/earphones" },
];

const socialLinks = [
  {
    label: "Visit Pyae Sone Paing on GitHub",
    href: "https://github.com/peterpaing",
    icon: FaGithub,
  },
  {
    label: "Visit Pyae Sone Paing on LinkedIn",
    href: "https://www.linkedin.com/in/pyae-sone-paing-06a283418/",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark text-white">
      {/* Orange line: centered on mobile, left on tablet and desktop */}
      <div className="absolute top-0 left-1/2 h-1 w-[101px] -translate-x-1/2 bg-primary md:left-10 md:translate-x-0 min-[1440px]:left-[calc((100%-1110px)/2)]" />

      <div className="mx-auto max-w-[1110px] px-6 pb-10 pt-[52px] md:px-10 md:pb-10 md:pt-[60px] min-[1440px]:px-0 min-[1440px]:pb-12 min-[1440px]:pt-[75px]">
        <div className="flex flex-col items-center md:items-start min-[1440px]:flex-row min-[1440px]:items-start min-[1440px]:justify-between">
          <Link
            href="/"
            aria-label="Audiophile home"
            className="rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Image src={logo} alt="" priority />
          </Link>

          <nav
            aria-label="Footer navigation"
            className="mt-12 md:mt-8 min-[1440px]:mt-0"
          >
            <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-[34px]">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-[13px] font-bold uppercase tracking-[2px] transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 max-w-[540px] text-center text-[15px] leading-[25px] text-white/50 md:mt-8 md:text-left min-[1440px]:mt-9">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <div className="mt-12 flex flex-col items-center gap-12 md:mt-20 md:flex-row md:justify-between md:gap-0 min-[1440px]:mt-14">
          <p className="text-[15px] font-bold leading-[25px] text-white/50">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${label}, opens in a new tab`}
                className="flex h-11 w-11 items-center justify-center rounded text-white transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                <Icon aria-hidden="true" size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}