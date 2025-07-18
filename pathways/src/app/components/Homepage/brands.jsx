import Image from "next/image";
import rlogo from "../../assets/image/reverso.png";

export default function Brand() {
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="">
        <Image src={rlogo} alt="logo of reverso" />
      </div>
    </div>
  );
}
