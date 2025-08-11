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
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="max-w-5xl md:mx-18 mx-6">
          <h1 className="md:text-7xl text-5xl font-bold leading-tight">
            Events.
          </h1>
        </div>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-4">
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
