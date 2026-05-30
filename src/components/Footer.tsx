import { FaBehance, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import type { IconType } from "react-icons";

const socials: { label: string; icon: IconType; href: string }[] = [
  { label: "Behance",   icon: FaBehance,      href: "https://www.behance.net/chiunery/" },
  { label: "LinkedIn",  icon: FaLinkedinIn,   href: "https://www.linkedin.com/in/jesslyn-chiunardy" },
  { label: "Instagram", icon: FaInstagram,    href: "https://instagram.com/chiunery/" },
  { label: "Email",     icon: MdOutlineEmail, href: "mailto:chiunery@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-secondary/10">
      <div className="max-w-360 mx-auto px-8 md:px-16 py-12 flex flex-col items-center gap-5">

        <div className="flex items-center gap-6">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-secondary hover:text-primary transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        <p className="text-sm text-secondary/60 tracking-wide">
          Brand Experience &amp; Environmental Graphic Designer
        </p>

        <p className="text-xs text-secondary/40">
          &copy; 2026 Jesslyn Chiunardy
        </p>

      </div>
    </footer>
  );
}
