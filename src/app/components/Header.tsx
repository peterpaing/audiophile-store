import Image from "next/image";
import Link from "next/link";
import NavList from "./NavList";

import logo from "@/assets/shared/desktop/logo.svg";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className="relative z-50 bg-dark text-white">
      <div className="relative mx-auto flex h-24 max-w-[1110px] items-center border-b border-white/20 px-6 lg:px-0">
        {/* Mobile and tablet navigation trigger */}
        <div className="lg:hidden">
          <NavList />
        </div>

        {/* Brand logo */}
        <Link
          href="/"
          aria-label="Audiophile home"
          className="ml-4 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary lg:ml-0"
        >
          <Image src={logo} alt="" priority />
        </Link>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <NavList />
        </div>

        {/* Shopping cart */}
        <CartButton />
      </div>
    </header>
  );
}