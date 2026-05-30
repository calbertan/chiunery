"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import type { IconType } from "react-icons";

const navConfig = {
  logo: "/Chiunery Logo_Transparent full.png",
  links: [
    { label: "Work", href: "/" },
    { label: "About", href: "/about" },
  ],
  socials: [
    { label: "Behance",   icon: FaBehance,      href: "https://www.behance.net/chiunery/" },
    { label: "LinkedIn",  icon: FaLinkedinIn,   href: "https://www.linkedin.com/in/jesslyn-chiunardy" },
    { label: "Instagram", icon: FaInstagram,    href: "https://instagram.com/chiunery/" },
    { label: "Email",     icon: MdOutlineEmail, href: "mailto:chiunery@gmail.com" },
  ] as { label: string; icon: IconType; href: string }[],
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-bg">
        <div className="max-w-360 mx-auto px-8 md:px-16 h-16 flex items-center relative">

          {/* Left — nav links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navConfig.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide text-secondary hover:text-primary transition-colors duration-200 ${
                  isActive(link.href) ? "font-bold" : "font-normal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center — logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={navConfig.logo}
                alt="Logo"
                className="h-10 w-auto transition-[filter] duration-200 filter-[brightness(0)] hover:filter-[brightness(0)_saturate(100%)_invert(64%)_sepia(25%)_saturate(600%)_hue-rotate(163deg)]"
              />
            </Link>
          </div>

          {/* Right — social icons (desktop) */}
          <div className="hidden md:flex items-center gap-5 ml-auto">
            {navConfig.socials.map(({ label, icon: Icon, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-secondary hover:text-primary transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Right — hamburger (mobile) */}
          <button
            className="md:hidden ml-auto text-secondary hover:text-primary transition-colors duration-200 cursor-pointer p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-bg flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navConfig.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`py-3 text-2xl text-secondary hover:text-primary transition-colors duration-200 ${
              isActive(link.href) ? "font-bold" : "font-normal"
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="w-8 h-px bg-secondary/20 my-6" />

        <div className="flex items-center gap-7">
          {navConfig.socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              onClick={() => setOpen(false)}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
