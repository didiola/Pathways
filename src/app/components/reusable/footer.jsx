import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#1f1f1f]">
      <div className="grid border-t border-[#e5e5e5] md:grid-cols-[1.1fr_2fr]">
        <div className="flex min-h-0 items-start border-b border-[#e5e5e5] px-6 py-8 md:min-h-72 md:items-center md:border-b-0 md:border-r md:px-20 md:py-12">
          <Image
            src="/fpdiblack.svg"
            alt="Future Pathways Development Initiative"
            width={260}
            height={120}
            className="h-auto w-[130px] md:w-[260px]"
          />
        </div>

        <div className="grid px-6 py-3 md:grid-cols-6 md:p-0">
          <FooterCell className="md:col-span-2">
            <Link
              href="https://drive.google.com/file/d/1P9-EtMZcop__grJpI2a-UceR0et7VinX/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-green-700 md:text-xl"
            >
              Download Compendium
            </Link>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <Link href="/career" className="text-xs font-semibold md:text-xl">
              Careers
            </Link>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <a
              href="https://www.linkedin.com/company/future-pathways-development-initiative/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold md:gap-5 md:text-xl"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff9ed] md:h-10 md:w-10">
                <FaLinkedin className="h-3.5 w-3.5 md:h-[18px] md:w-[18px]" />
              </span>
              Linkedin
            </a>
          </FooterCell>

          <FooterCell className="md:col-span-2">
            <a
              href="https://www.instagram.com/fpdiafrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold md:gap-5 md:text-xl"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff9ed] md:h-10 md:w-10">
                <FaInstagram className="h-3.5 w-3.5 md:h-[18px] md:w-[18px]" />
              </span>
              Instagram
            </a>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <a
              href="https://x.com/FPDIAfrica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold md:gap-5 md:text-xl"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff9ed] md:h-10 md:w-10">
                <FaTwitter className="h-3.5 w-3.5 md:h-[18px] md:w-[18px]" />
              </span>
              X
            </a>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <a
              href="https://www.youtube.com/@fpdiafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold md:gap-5 md:text-xl"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#fff9ed] md:h-10 md:w-10">
                <FaYoutube className="h-3.5 w-3.5 md:h-[18px] md:w-[18px]" />
              </span>
              Youtube
            </a>
          </FooterCell>

          <div className="border-t border-[#e5e5e5] px-0 py-4 md:col-span-3 md:border-r md:px-10 md:py-8">
            <div className="flex items-start gap-3 md:gap-5">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-gray-500 md:h-[26px] md:w-[26px]" />
              <div>
                <p className="mb-1 text-xs font-semibold text-gray-500 md:mb-2 md:text-base">
                  Address
                </p>
                <p className="max-w-lg text-xs font-medium leading-5 text-green-700 md:text-lg md:leading-8">
                  3rd Floor, Coscharis Building, Plot 338 Constitution Avenue,
                  Central Business District, Abuja.
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 border-t border-[#e5e5e5] px-0 py-4 md:col-span-3 md:px-10 md:py-8">
            <div className="flex min-w-0 items-start gap-3 md:gap-5">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-gray-500 md:h-7 md:w-7" />
              <div className="min-w-0">
                <p className="mb-1 text-xs font-semibold text-gray-500 md:mb-2 md:text-base">
                  Mail
                </p>
                <a
                  href="mailto:contact@policychallenge.com"
                  className="block max-w-full whitespace-nowrap text-xs font-medium leading-5 text-green-700 md:text-lg md:leading-8"
                >
                  info@futurepathways.ng
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5] py-5 text-center text-[10px] font-medium text-gray-500 md:py-6 md:text-sm">
        © 2026, FPDI All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterCell({ children, className = "" }) {
  return (
    <div
      className={`flex min-h-0 items-center border-b border-[#e5e5e5] px-0 py-2 text-xs md:min-h-24 md:border-r md:px-10 md:py-6 md:text-base ${className}`}
    >
      {children}
    </div>
  );
}
