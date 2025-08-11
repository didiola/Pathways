"use client";
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/app/components/reusable/projectcard";
import hands from "../../assets/image/groupie.png";

const events = [
  {
    title: "Press Release, 14th July 2025",
    image: hands,
    href: "/works/events/press",
  },
  {
    title: "PCY, 12TH August 2025",
    image: hands,
    href: "/works/events/pcy",
  },
];

export default function Events() {
  return (
    <div className="mt-[10rem]">
      <section className="py-16 border-b-1 border-gray-300">
        <div className="max-w-5xl mx-18">
          <h1 className="text-7xl font-bold leading-tight">Events.</h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-1 py-4">
        <div className="text-sm text-gray-500 mb-10">
          <Link href="/">Home</Link>
          <span>→</span>
          <span className="text-black font-medium">Events</span>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-8">
          {events.map((events, index) => (
            <ProjectCard
              key={index}
              title={events.title}
              image={events.image}
              href={events.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
