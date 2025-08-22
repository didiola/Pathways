"use client";
import Link from "next/link";
import Image from "next/image";
import team from "../assets/image/team.jpg";
import { Quote } from "lucide-react";
import TeamCard from "../components/reusable/teamcard";
import arinola from "../assets/image/addo.jpg";
import ayokunnu from "../assets/image/ayokunnu.jpeg";

export default function About() {
  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="md:max-w-5xl md:mx-18 mx-6">
          <h1 className="md:text-7xl text-3xl font-bold leading-tight">
            Policy towards a <br />
            more prosperous <br />
            Africa
          </h1>
        </div>
      </section>
      <div className="mt-6 text-sm text-gray-500 flex items-center space-x-2 md:mx-18 mx-6">
        <Link href="/">Home</Link>
        <span>→</span>
        <span className="text-black font-medium">About Us</span>
      </div>
      <div className="mt-10 ">
        {
          <Image
            src={team}
            alt="members of the company in a photograph"
            className="object-cover object-center"
          />
        }
      </div>
      <section className="max-w-5xl mx-auto px-4 mt-12 space-y-6">
        <div className="py-10 border-t md:border-b border-gray-300 flex flex-col md:flex-row md:space-x-6">
          <h2 className="text-lg font-semibold md:w-1/4">About Us</h2>
          <p className="text-gray-700 md:w-3/4">
            Future Pathways Development Initiative is a pan-African organisation
            established to inspire reforms and equip governance outcomes through
            policy towards a more prosperous Africa. Established in 2022, FPDI
            is set to reach all 54 countries in Africa, transcending political
            ideologies, economic interests, and religious affiliations to shape
            a more inclusive, accountable, and prosperous continent.
          </p>
        </div>

        <div className="py-10 border-b border-gray-300 flex flex-col md:flex-row md:space-x-6">
          <h2 className="text-lg font-semibold md:w-1/4 md:block hidden">
            Our Mission
          </h2>
          <p className="text-gray-700 md:text-base md:font-normal md:w-3/4 font-bold text-3xl">
            To inspire and strengthen citizen action and engagement in Africa.
          </p>
        </div>

        <div className="py-10 border-b border-gray-300 flex flex-col md:flex-row md:space-x-6">
          <h2 className="text-lg font-semibold md:w-1/4">Our Vision</h2>
          <p className="text-gray-700 md:w-3/4">
            We strengthen good governance through our work
            <br />
            on developing and implementing good policies.
          </p>
        </div>
        <div className="py-10 border-b border-gray-300 flex flex-col md:flex-row md:space-x-6">
          <h2 className="text-lg font-semibold md:w-1/4">
            Our Target Audience
          </h2>
          <p className="text-gray-700 md:w-3/4">
            Our primary constituency is youth, defined as individuals between
            the <br />
            ages of 15 and 35 years who are passionate about governance, <br />
            public leadership, and policy reform
          </p>
        </div>
      </section>
      <div className="flex flex-col mx-auto max-w-3xl py-12 px-4 items-center justify-center text-center mt-6">
        <Quote className="w-6 h-6 text-black mb-2" />
        <h2 className="font-semibold text-2xl">
          people who can influence, design, and implement inclusive,
          forward-thinking public policies across the African continent.
        </h2>
      </div>
      <section className="md:py-12 md:px-16 py-6 px-8">
        <h2 className="text-xl font-semibold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TeamCard
            name="Ayokunnu Ojeniyi"
            title="Founder, FPDI"
            bio="Ayokunnu Ojeniyi is a public policy expert, entrepreneur, and nation-builder with over a decade of experience driving systems-level reform across Nigeria’s public and private sectors."
            imgSrc={ayokunnu}
          />
          <TeamCard
            name="Arinola Addo Daniel"
            title="Executive Director, FPDI"
            bio="Arinola stand at the intersection of policy, people, projects and products. An emerging leader who has frontier many enterprises, He streamlines work plans, programs, and end-to-end processes in nonprofits, municipal governments, startups, and education."
            imgSrc={arinola}
          />
          {/* <TeamCard
            name="Chimchetaram Chuka-Okoli"
            title="Communications Lead"
            bio="Arinola is a People Policy and Governance Specialist, Human Capital Strategist, Civic Engagement Advocate, Leadership Coach, Public Sector Reformer..."
            imgSrc={arinola}
          /> */}
          {/* <TeamCard
            name="Peter Joshua Nwali"
            title="Associate"
            bio="Arinola is a People Policy and Governance Specialist, Human Capital Strategist, Civic Engagement Advocate, Leadership Coach, Public Sector Reformer..."
            imgSrc={arinola}
          /> */}
        </div>
      </section>
    </div>
  );
}
