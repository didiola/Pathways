import Image from "next/image";
import rlogo from "../../assets/image/reverso.png";

export default function Brand() {
  return (
    <div className="flex flex-col items-center justify-center md:p-24 p-8">
      <div className="text-black md:mb-12 mb-8">
        <p className="md:text-4xl text-2xl font-semibold">
          Brands that partner with us
        </p>
      </div>
      <div className="border-[0.5px] border-[#00000040] rounded-xl px-8 py-12 shadow-sm">
        <Image src={rlogo} alt="logo of reverso" />
      </div>
    </div>
  );
}
