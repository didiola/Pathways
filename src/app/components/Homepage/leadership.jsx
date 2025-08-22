import Image from "next/image";
import TeamCard from "../reusable/teamcard";
import arinola from "../../assets/image/addo.jpg";
import ayokunnu from "../../assets/image/ayokunnu.jpeg";

export default function Leadership() {
  return (
    <div className="flex flex-col md:p-28 py-10 px-6 bg-white">
      <div className="text-black mb-8 p-8">
        <h1 className="text-4xl font-semibold">Our Leadership</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="w-120">
          <TeamCard
            name="Ayokunnu Ojeniyi"
            title="Founder, FPDI"
            bio="Ayokunnu Ojeniyi is a public policy expert, entrepreneur, and nation-builder with over a decade of experience driving systems-level reform across Nigeria’s public and private sectors."
            imgSrc={ayokunnu}
            linkedinUrl="https://www.linkedin.com/in/ayokunnu-ojeniyi
            "
          />
        </div>
        <div className="w-120">
          <TeamCard
            name="Arinola Addo Daniel"
            title="Executive Director, FPDI"
            bio="Arinola stand at the intersection of policy, people, projects and products. An emerging leader who has frontier many enterprises, He streamlines work plans, programs, and end-to-end processes in nonprofits, municipal governments, startups, and education."
            imgSrc={arinola}
            linkedinUrl="https://www.linkedin.com/in/arinoladaniel/"
          />
        </div>
      </div>
    </div>
  );
}
