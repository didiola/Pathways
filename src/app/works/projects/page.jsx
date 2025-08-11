"use client";
import Link from "next/link";
import Image from "next/image";
// import hands from "../assets/image/fdiphoto.png";
import ProjectCard from "@/app/components/reusable/projectcard";
import hands from "../../assets/image/groupie.png";

const projects = [
  {
    title: "The Policy Challenge",
    image: hands,
    href: "/works/projects/the-policy-challenge",
  },
  {
    title: "School Summit",
    image: hands,
    href: "/works/projects/school-summit",
  },
  {
    title: "Playbook for Startups & SMEs",
    image: hands,
    href: "/works/projects/startups-smes-playbook",
  },
];

export default function Projects() {
  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="max-w-5xl md:mx-18 mx-6">
          <h1 className="md:text-7xl text-5xl font-bold leading-tight">
            Projects.
          </h1>
        </div>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-4">
        <div className="text-sm text-gray-500 mb-10">
          <Link href="/">Home</Link>
          <span>→</span>
          <span className="text-black font-medium">Projects</span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              href={project.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
