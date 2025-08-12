"use client";
import Image from "next/image";
import photo from "./assets/image/fdiphoto.jpeg";
import Brand from "./components/Homepage/brands";
import Vision from "./components/Homepage/vision";
import ImageSlider from "./components/reusable/imageslider";
import Leadership from "./components/Homepage/leadership";
import Theory from "./components/Homepage/theory";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div className="min-h-screen w-full relative overflow-hidden">
        <div className="top-0 w-full h-full absolute left-0">
          <Image
            src={photo}
            alt="hands joined together"
            className="object-cover object-center h-full w-full"
          />
        </div>
        {/* top-[50%] absolute max-w-[780px] px-[4.375rem] */}
        <div className="absolute md:top-[50%] md:px-[4.375rem] max-w-[780px] w-full px-6 top-1/2">
          <p className="text-black md:text-4xl sm:text-3xl md:font-bold font-semibold text-2xl mb-10">
            Advancing governance reforms and equipping institutions and citizens
            with the tools to co-create policy solutions that work.
          </p>

          {/* Desktop */}
          <div className="hidden sm:flex items-center bg-white rounded-full overflow-hidden w-fit px-2 py-1 mt-12">
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
          {/* Mobile */}
          <div className="flex flex-col gap-4 sm:hidden">
            <input
              type="email"
              placeholder="email@address.com"
              className="px-4 py-3 outline-none text-sm bg-white rounded-full w-full"
            />
            <button
              className="rounded-full px-4 py-3 text-white text-sm w-full"
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
    </div>
  );
}
