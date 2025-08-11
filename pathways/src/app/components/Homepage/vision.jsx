import Image from "next/image";
import target from "../../assets/image/target.png";
import eyes from "../../assets/image/eyes.png";

export default function Vision() {
  return (
    <div className="flex flex-col md:p-28 py-10 px-6 bg-[#FFF3D6]">
      <div className="text-black md:mb-12 mb-6">
        <p className="md:text-4xl text-2xl font-semibold">
          Empowering people through tailored support
          <br />
          and authentic connection.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center justify-between gap-10">
        <div className="border-[0.5px] border-[#00000040] rounded-xl relative overflow-hidden z-10 py-8 px-4">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
            <Image src={target} alt="photo of an arrow" className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-semibold mt-3">Vision</h2>
          <p className="text-base text-[#00000099] mt-3 md:w-[75%]">
            We strengthen good governance through our work on developing and
            implementing good policies.
          </p>
        </div>
        <div className="border-[0.5px] border-[#00000040] rounded-xl relative overflow-hidden z-10 py-8 px-4">
          <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
            <Image src={eyes} alt="photo of an arrow" className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-semibold mt-3">Mission</h2>
          <p className="text-base text-[#00000099] mt-3 md:w-[75%]">
            We strengthen good governance through our work on developing and
            implementing good policies.
          </p>
        </div>
      </div>
    </div>
  );
}
