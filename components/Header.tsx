import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <Link href="/" className="flex items-center space-x-2 mx-4">
          <Logo />
          <span className="font-bold text-xl text-gray-900">
            {" "}
            The SOTA Lab{" "}
          </span>
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/demos"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Demos
          </Link>
          <Link
            href="/features"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        {/* Mobile menu button */}
        {/* Implement mobile menu for small screens if needed */}
      </nav>
    </header>
  );
};

export default Header;
