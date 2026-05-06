"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
// import logo from "../../assets/image/fpdiblack.svg";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const isHome = pathname === "/";

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Works",
      href: "/works",
      children: [
        // { name: "Events", href: "/works/events" },
        { name: "Programs", href: "/works/programs" },
        // {
        //   name: "Policy Challenge",
        //   href: "https://www.policychallenge.com/",
        // },
        { name: "Publications", href: "/works/publications" },
        // { name: "Impact Report", href: "/works/impactreport" },
        // { name: "TPC Compendium", href: "/works/compendium" },
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

  const disabledLinks = ["Events", "Impact Report", "TPC Compendium"];
  const homeMenuLinks = links.filter((link) => !link.green);

  if (isHome) {
    return (
      <header className="absolute left-0 top-0 z-[50] w-full px-6 py-10 md:px-[4.375rem] md:py-12">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex h-[92px] w-[194px] items-center justify-center rounded-2xl border border-gray-100 bg-[#fffdf8] shadow-sm md:h-[92px] md:w-[194px]"
            aria-label="Future Pathways Development Initiative home"
          >
            <Image
              src="/fpdiblack.svg"
              alt="Future Pathways Development Initiative"
              width={150}
              height={58}
              className="h-auto w-[150px] object-contain"
              priority
            />
          </Link>

          {mobileOpen ? (
            <nav className="hidden items-center gap-8 rounded-2xl border border-gray-100 bg-[#fffdf8] px-10 py-8 text-lg shadow-sm md:flex">
              {homeMenuLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="relative group">
                    <button
                      type="button"
                      className="flex items-center gap-2 text-gray-700 hover:text-black"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name,
                        )
                      }
                    >
                      {link.name}
                      <ChevronDown size={18} strokeWidth={2.25} />
                    </button>
                    {openDropdown === link.name && (
                      <div className="absolute left-0 top-full z-50 mt-4 min-w-[170px] rounded-lg bg-white py-2 text-base shadow">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-black"
                            onClick={() => setMobileOpen(false)}
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
                    className={`text-gray-700 hover:text-black ${
                      pathname === link.href ? "font-bold text-black" : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                ),
              )}
              <button
                type="button"
                className="text-black"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </nav>
          ) : (
            <button
              type="button"
              className="hidden h-[84px] w-[84px] items-center justify-center rounded-2xl border border-gray-100 bg-[#fffdf8] shadow-sm md:flex"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          )}

          <button
            type="button"
            className="flex h-[84px] w-[84px] items-center justify-center rounded-2xl border border-gray-100 bg-[#fffdf8] shadow-sm md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="ml-auto mt-4 flex w-full max-w-xs flex-col rounded-2xl border border-gray-100 bg-white p-3 text-sm shadow-sm md:hidden">
            {homeMenuLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-gray-700 hover:bg-gray-50"
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
                          onClick={() => setMobileOpen(false)}
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
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-black"
                  onClick={() => setMobileOpen(false)}
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
                    <ChevronDown
                      size={14}
                      strokeWidth={2.25}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </div>

                  <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block z-50 pt-1">
                    <div className="flex flex-col min-w-[150px] py-2 bg-white shadow rounded">
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
              ),
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
                  {openDropdown === index ? (
                    <ChevronUp size={16} strokeWidth={2.25} />
                  ) : (
                    <ChevronDown size={16} strokeWidth={2.25} />
                  )}
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
            ),
          )}
        </div>
      )}
    </header>
  );
}
