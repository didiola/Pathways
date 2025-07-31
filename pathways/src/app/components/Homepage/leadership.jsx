import Image from "next/image";
import TeamCard from "../reusable/teamcard";
import arinola from "../../assets/image/arinola.png";

export default function Leadership() {
  return (
    <div className="flex flex-col p-28">
      <div className="text-black mb-8 p-8">
        <h1 className="text-4xl font-semibold">Our Leadership</h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <div className="w-120">
          <TeamCard
            name="Ayokunnu Ojeniyi"
            title="Founder, FPDI"
            bio="Arinola is a People Policy and Governance Specialist, Human Capital Strategist, Civic Engagement Advocate, Leadership Coach, Public Sector Reformer..."
            imgSrc={arinola}
          />
        </div>
        <div className="w-120">
          <TeamCard
            name="Arinola Addo Daniel"
            title="Executive Director, FPDI"
            bio="Arinola is a People Policy and Governance Specialist, Human Capital Strategist, Civic Engagement Advocate, Leadership Coach, Public Sector Reformer..."
            imgSrc={arinola}
          />
        </div>
      </div>
    </div>
  );
}
