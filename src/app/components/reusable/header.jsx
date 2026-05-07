"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";

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
        { name: "Programs", href: "/works/programs" },
        { name: "Publications", href: "/works/publications" },
      ],
    },
    { name: "Careers", href: "/career" },
    { name: "Contact Us", href: "/contact" },
  ];

  const closeMenu = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="absolute left-0 top-0 z-[50] w-full px-3 py-3 md:px-[4.375rem] md:py-12">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="flex h-[46px] w-[98px] items-center justify-center rounded-lg border border-gray-100 bg-[#fffdf8] shadow-sm md:h-16 md:w-[136px] md:rounded-xl"
          aria-label="Future Pathways Development Initiative home"
          onClick={closeMenu}
        >
          <Image
            src="/fpdiblack.svg"
            alt="Future Pathways Development Initiative"
            width={150}
            height={58}
            className="h-auto w-[76px] object-contain md:w-[106px]"
            priority
          />
        </Link>

        {mobileOpen ? (
          <nav className="hidden items-center gap-6 rounded-2xl border border-gray-100 bg-[#fffdf8] px-8 py-6 text-base shadow-sm md:flex">
            {links.map((link) =>
              link.children ? (
                <div key={link.name} className="relative">
                  <button
                    type="button"
                    className={`flex items-center gap-2 hover:text-black ${
                      pathname.startsWith(link.href)
                        ? "font-bold text-black"
                        : "text-gray-700"
                    }`}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name,
                      )
                    }
                  >
                    {link.name}
                    {openDropdown === link.name ? (
                      <ChevronUp size={18} strokeWidth={2.25} />
                    ) : (
                      <ChevronDown size={18} strokeWidth={2.25} />
                    )}
                  </button>

                  {openDropdown === link.name && (
                    <div className="absolute left-0 top-full z-50 mt-4 min-w-[170px] rounded-lg bg-white py-2 text-base shadow">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black"
                          onClick={closeMenu}
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
                  className={`hover:text-black ${
                    pathname === link.href ? "font-bold text-black" : "text-gray-700"
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ),
            )}

            <button
              type="button"
              className="text-black"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </nav>
        ) : (
          <button
            type="button"
            className="hidden h-16 w-16 items-center justify-center rounded-xl border border-gray-100 bg-[#fffdf8] shadow-sm md:flex"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        )}

        <button
          type="button"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-lg border border-gray-100 bg-[#fffdf8] shadow-sm md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="ml-auto mt-4 flex w-full max-w-xs flex-col rounded-2xl border border-gray-100 bg-white p-3 text-sm shadow-sm md:hidden">
          {links.map((link) =>
            link.children ? (
              <div key={link.name}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-black"
                  onClick={() =>
                    setOpenDropdown(openDropdown === link.name ? null : link.name)
                  }
                >
                  {link.name}
                  {openDropdown === link.name ? (
                    <ChevronUp size={16} strokeWidth={2.25} />
                  ) : (
                    <ChevronDown size={16} strokeWidth={2.25} />
                  )}
                </button>
                {openDropdown === link.name && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black"
                        onClick={closeMenu}
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
                className="rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
