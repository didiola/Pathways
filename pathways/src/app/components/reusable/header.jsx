import Image from "next/image";
import logo from "../../assets/image/fdpilogo.png";

export default function Header() {
  return (
    <div className="absolute top-0 left-0 w-full py-12 px-[4.375rem] z-[5]">
      <div className="flex items-center justify-between">
        <div className="">
          <Image src={logo} alt="logo of the company" />
        </div>
        <div className="flex items-center gap-6 bg-white rounded-s-full rounded-e-full px-6 py-5 text-sm">
          <a href="">Home</a>
          <a href="">About Us</a>
          <a href="">Our works</a>
          <a href="">Careers</a>
          <a href="">Contact Us</a>
          <a href="">Download Brochures</a>
        </div>
      </div>
    </div>
  );
}
