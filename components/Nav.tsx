"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F6F1]/90 backdrop-blur-sm border-b border-[#e8e4dc]">
      <nav className="max-w-5xl mx-auto px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-tight hover:text-[#C17A3A] transition-colors">
          SV
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-xs tracking-widest uppercase transition-colors hover:text-[#C17A3A] ${
                  pathname === href ? "text-[#C17A3A]" : "text-[#555]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-xs tracking-widest uppercase text-[#555]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F8F6F1] border-t border-[#e8e4dc] px-6 py-6 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-xs tracking-widest uppercase transition-colors hover:text-[#C17A3A] ${
                pathname === href ? "text-[#C17A3A]" : "text-[#555]"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
