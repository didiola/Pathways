"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import hands from "../assets/image/groupie.png";

export default function Contact() {
  return (
    <div className="md:mt-[10rem] mt-[5rem] border-t border-gray-300">
      <div className=" text-sm text-gray-500 flex items-center space-x-2 md:mx-18 mx-6 mt-10 mb-6">
        <Link href="/">Home</Link>
        <span>→</span>
        <span className="text-black font-medium">Contact Us</span>
      </div>
      <div className="max-w-6xl md:mx-auto mx-4 grid grid-cols-1 md:grid-cols-2 gap-12 ">
        <div>
          <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-6">
            Have questions or <br />
            interested in learning more <br />
            about FPDI?
          </p>

          <div className="flex items-center gap-3 text-gray-800">
            <Mail className="text-[#A27C00]" />
            <span>
              Email:{" "}
              <a
                href="mailto:contact@policychanllege.com"
                className="underline text-[#231F20]"
              >
                contact@policychanllege.com
              </a>
            </span>
          </div>
        </div>

        <div className="w-100 h-120">
          <Image src={hands} alt="Teamwork" />
        </div>
      </div>
    </div>
  );
}
