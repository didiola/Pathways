"use client";
import Image from "next/image";
import photo from "./assets/image/fdiphoto.png";
import Brand from "./components/Homepage/brands";
import Vision from "./components/Homepage/vision";
import ImageSlider from "./components/reusable/imageslider";
import Leadership from "./components/Homepage/leadership";
import Theory from "./components/Homepage/theory";
import Footer from "./components/reusable/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="top-0 w-full h-full absolute left-0">
          <Image
            src={photo}
            alt="hands joined together"
            className="object-cover object-center"
          />
        </div>
        <div className="top-[50%] absolute w-[780px] px-[4.375rem]">
          <p className="text-white text-4xl font-semibold font-sans">
            We strengthen good governance through our work on developing and
            implementing good policies.
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden w-fit px-2 py-1 mt-12">
            <input
              type="email"
              placeholder="email@address.com"
              className="px-4 py-2 outline-none text-sm bg-transparent w-60"
            />
            <button
              className="rounded-full px-4 py-2 text-white text-sm"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(2, 130, 38, 0.20) 100%), #028226",
              }}
            >
              Join the movement
            </button>
          </div>
        </div>
      </div>
      <Brand />
      <Vision />
      <ImageSlider />
      <Leadership />
      <Theory />
      <Footer />
    </div>
  );
}
