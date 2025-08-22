"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
// import logo from "../../assets/image/fpdiblack.svg";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Works",
      href: "/works",
      children: [
        { name: "Events", href: "/works/events" },
        { name: "Projects", href: "/works/projects" },
        {
          name: "Policy Challenge",
          href: "https://www.policychallenge.com/",
        },
        { name: "Blog", href: "/works/blog" },
        { name: "Impact Report", href: "/works/impactreport" },
        { name: "TPC Compendium", href: "/works/compendium" },
      ],
    },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "Download Brochure",
      href: "https://drive.google.com/file/d/1BiK-EwbJM8LRiwsB73e1JIZKQ3NT1Fsv/view?usp=sharing",
      external: true,
      green: true,
    },
  ];

  const disabledLinks = ["Blog", "Impact Report", "TPC Compendium"];

  return (
    <header className="absolute top-0 left-0 w-full md:py-4 md:px-[4.375rem] z-[50]">
      <div className="flex items-center justify-between">
        <div className="md:block w-full md:w-[unset] flex items-center justify-between md:bg-transparent bg-white md:rounded-full px-4 py-2 gap-6">
          <Image
            src="/fpdiblack.svg"
            alt="logo"
            width={120}
            height={46}
            className="md:w-[168px] md:h-[65px] w-[120px] h-[46px] object-contain"
          />
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="bg-white rounded-s-full rounded-e-full px-6 py-5 text-sm hidden md:block">
          <nav className="md:flex gap-6 hidden text-sm">
            {links.map((link) =>
              link.children ? (
                <div key={link.name} className="relative group">
                  <div
                    className={`flex items-center gap-1 cursor-pointer ${
                      pathname === link.href
                        ? "font-bold text-black"
                        : "text-gray-600"
                    } group-hover:text-black`}
                  >
                    {link.name}
                    <span className="text-xs">⌄</span>
                  </div>

                  <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow rounded mt-1 z-50">
                    <div className="flex flex-col min-w-[150px] py-2">
                      {link.children.map((child) => {
                        const isDisabled = disabledLinks.includes(child.name);
                        return isDisabled ? (
                          <span
                            key={child.name}
                            className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                          >
                            {child.name}
                          </span>
                        ) : (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`${
                    link.green
                      ? "text-green-600 font-semibold"
                      : pathname === link.href
                      ? "font-bold text-black"
                      : "text-gray-600"
                  } hover:text-black transition`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>
        </div>
        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200">
          {links.map((link, index) =>
            link.children ? (
              <div key={link.name}>
                <button
                  className="flex justify-between w-full px-4 py-2 text-left text-gray-600 hover:text-black"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  {link.name}
                  <span>{openDropdown === index ? "−" : "⌄"}</span>
                </button>
                {openDropdown === index && (
                  <div className="pl-6">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 text-gray-600 hover:text-black"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
