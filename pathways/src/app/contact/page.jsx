"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import hands from "../assets/image/groupie.png";

export default function Contact() {
  return (
    <div className="mt-[8rem]">
      <div className="mt-12 text-sm text-gray-500 flex items-center space-x-2 mx-18 border-t border-gray-300">
        <Link href="/">Home</Link>
        <span>→</span>
        <span className="text-black font-medium">Team</span>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
            Have questions or <br />
            interested in learning more <br />
            about FPDI?
          </p>

          <div className="flex items-center gap-3 text-gray-800">
            <Mail className="text-yellow-500" />
            <span>
              Email:{" "}
              <a
                href="mailto:contact@policychanllege.com"
                className="underline text-blue-700 hover:text-blue-900"
              >
                contact@policychanllege.com
              </a>
            </span>
          </div>
        </div>

        <div>
          <Image src={hands} alt="Teamwork" />
        </div>
      </div>
    </div>
  );
}
