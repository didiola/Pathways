import Image from "next/image";
import TeamCard from "../reusable/teamcard";
import arinola from "../../assets/image/arinola.png";
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
            bio="Dr. Ayokunnu is a People Policy and Governance Specialist, Human Capital Strategist, Civic Engagement Advocate, Leadership Coach, Public Sector Reformer..."
            imgSrc={ayokunnu}
            linkedinUrl="https://www.linkedin.com/in/ayokunnu-ojeniyi
            "
          />
        </div>
        <div className="w-120">
          <TeamCard
            name="Arinola Addo Daniel"
            title="Executive Director, FPDI"
            bio="Arinola is a People Policy and Governance Specialist, Human Capital Strategist, Civic Engagement Advocate, Leadership Coach, Public Sector Reformer..."
            imgSrc={arinola}
            linkedinUrl="https://www.linkedin.com/in/arinoladaniel/"
          />
        </div>
      </div>
    </div>
  );
}
