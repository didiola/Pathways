import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-[#1f1f1f]">
      <div className="grid border-t border-[#e5e5e5] md:grid-cols-[1.1fr_2fr]">
        <div className="flex min-h-72 items-center border-b border-[#e5e5e5] px-8 py-12 md:border-b-0 md:border-r md:px-20">
          <Image
            src="/fpdiblack.svg"
            alt="Future Pathways Development Initiative"
            width={260}
            height={120}
            className="h-auto w-[260px]"
          />
        </div>

        <div className="grid md:grid-cols-6">
          <FooterCell className="md:col-span-2">
            <Link href="/brochure.pdf" className="text-xl font-semibold">
              Download Brochure
            </Link>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <Link href="/career" className="text-xl font-semibold">
              Careers
            </Link>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <a
              href="https://www.linkedin.com/company/future-pathways-development-initiative/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-xl font-semibold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff9ed]">
                <FaLinkedin size={18} />
              </span>
              Linkedin
            </a>
          </FooterCell>

          <FooterCell className="md:col-span-2">
            <a
              href="https://www.instagram.com/fpdiafrica/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-xl font-semibold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff9ed]">
                <FaInstagram size={18} />
              </span>
              Instagram
            </a>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <a
              href="https://x.com/FPDIAfrica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 whitespace-nowrap text-xl font-semibold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff9ed]">
                <FaTwitter size={18} />
              </span>
              X<span className="text-gray-500">(formely Twitter)</span>
            </a>
          </FooterCell>
          <FooterCell className="md:col-span-2">
            <a
              href="https://www.youtube.com/@fpdiafrica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 text-xl font-semibold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff9ed]">
                <FaYoutube size={18} />
              </span>
              Youtube
            </a>
          </FooterCell>

          <div className="border-t border-[#e5e5e5] px-8 py-8 md:col-span-3 md:border-r md:px-10">
            <div className="flex items-start gap-5">
              <MapPin className="mt-1 text-gray-500" size={26} />
              <div>
                <p className="mb-2 text-base font-semibold text-gray-500">
                  Address
                </p>
                <p className="max-w-lg text-lg font-medium leading-8 text-green-700">
                  3rd Floor, Coscharis Building, Plot 338 Constitution Avenue,
                  Central Business District, Abuja.
                </p>
              </div>
            </div>
          </div>

          <div className="min-w-0 border-t border-[#e5e5e5] px-8 py-8 md:col-span-3 md:px-10">
            <div className="flex min-w-0 items-start gap-5">
              <Mail className="mt-1 shrink-0 text-gray-500" size={28} />
              <div className="min-w-0">
                <p className="mb-2 text-base font-semibold text-gray-500">Mail</p>
                <a
                  href="mailto:contact@policychallenge.com"
                  className="block max-w-full whitespace-nowrap text-lg font-medium leading-8 text-green-700"
                >
                  contact@policychallenge.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e5e5e5] py-6 text-center text-sm font-medium text-gray-500">
        © 2026, FPDI All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterCell({ children, className = "" }) {
  return (
    <div className={`flex min-h-24 items-center border-b border-[#e5e5e5] px-8 py-6 md:border-r md:px-10 ${className}`}>
      {children}
    </div>
  );
}
