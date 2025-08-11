"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Career() {
  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="md:max-w-5xl md:mx-18 mx-6 md:mb-8">
          <h1 className="md:text-7xl text-4xl font-bold leading-tight">
            Join the team.
          </h1>
        </div>
      </section>
      <div className="mt-6 text-sm text-gray-500 flex items-center space-x-2 md:mx-18 mx-6">
        <Link href="/">Home</Link>
        <span>→</span>
        <span className="text-black font-medium">Careers</span>
      </div>
      <section className="max-w-6xl mx-auto px-4 mt-12 space-y-6">
        <h1 className="font-bold text-4xl mt-20 mb-8">Jobs</h1>
        <div className="py-6 border-t border-gray-300 flex flex-col md:flex-row md:space-x-6">
          <h2 className="text-base text-[#231F20] md:w-1/4">
            No current openings
          </h2>
        </div>
        <h1 className="font-bold text-4xl mt-20 mb-8">Volunteer</h1>
        <div className="py-6 border-t border-gray-300 flex md:flex-row flex-col md:space-x-6">
          <h2 className="text-base text-[#231F20] md:w-1/4 mb-6">
            Current openings
          </h2>
          <div className="">
            <h2 className="text-base text-[#231F20] font-semibold md:mb-6 mb-4">
              Policy Hubs Campus Ambassador
            </h2>
            <a
              href=""
              target="_blank"
              className="bg-gradient-to-r from-green-600 to-green-500 border border-white hover:opacity-90 transition text-white rounded-full py-3 px-5 inline-flex items-center gap-2"
            >
              Volunteer Registration Form
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
