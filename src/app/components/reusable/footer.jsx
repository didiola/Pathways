import Image from "next/image";
import logo from "../../assets/image/fpdiblack.png";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-700 py-32 md:px-10 px-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Social */}
        <div className="md:col-span-2">
          <div className="mb-4 w-52 h-26">
            <Image src={logo} alt="FPDI logo" />
          </div>
          <div className="flex space-x-10 mt-4 text-gray-800">
            <a href="https://www.instagram.com/fpdiafrica/" target="_blank">
              <FaInstagram size={20} />
            </a>
            <a href="https://x.com/FPDIAfrica" target="_blank">
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/future-pathways-development-initiative/"
              target="_blank"
            >
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.youtube.com/@fpdiafrica" target="_blank">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-semibold mb-2 text-[#1A1A1A]">Explore</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/brochure.pdf" target="_blank">
                Download Brochure
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h4 className="font-semibold mb-2 text-[#1A1A1A]">Get Involved</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/works">Our Works</Link>
            </li>
            <li>
              <Link href="/career">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h4 className="font-semibold mb-2 text-[#1A1A1A]">Connect with Us</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Address & Mail */}
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6">
        <div className="flex items-start gap-2">
          <MapPin className="mt-1" size={18} />
          <div>
            <p className="mb-1">Address</p>
            <p className="text-green-700">
              3rd Floor, Coscharis Building, Plot 338 Constitution Avenue,
              <br />
              Central Business District, Abuja
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={18} className="mb-4" />
          <div>
            <p>Mail</p>
            <a
              href="mailto:contact@policychanllenge.com"
              className="text-green-700"
            >
              arinola@policychallenge.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 text-xs text-gray-500">
        © 2025, FPDI All Rights Reserved.
      </div>
    </footer>
  );
}
