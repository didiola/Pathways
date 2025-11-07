import Image from "next/image";
import rlogo from "../../assets/image/reverso.png";
import arise from "../../assets/image/arisetv.png";
import blogo from "../../assets/image/businessday.png";
import nta from "../../assets/image/nta.png";
import tdlogo from "../../assets/image/thisday.png";

export default function Brand() {
  return (
    <div className="flex flex-col items-center md:p-24 p-8 bg-white">
      <div className="text-black md:mb-12 mb-8">
        <p className="md:text-4xl text-2xl font-semibold">FPDI in the News</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="border-[0.5px] border-[#00000040] rounded-xl px-8 py-12 shadow-sm">
          <Image src={arise} alt="logo of arise tv" />
        </div>
        <div className="border-[0.5px] border-[#00000040] rounded-xl px-8 py-12 shadow-sm">
          <Image src={blogo} alt="logo of business day news" />
        </div>
        <div className="border-[0.5px] border-[#00000040] rounded-xl px-8 py-12 shadow-sm">
          <Image src={tdlogo} alt="logo of this day news" />
        </div>
        <div className="border-[0.5px] border-[#00000040] rounded-xl px-8 py-12 shadow-sm">
          <Image src={nta} alt="logo of NTA" />
        </div>
      </div>
    </div>
  );
}
