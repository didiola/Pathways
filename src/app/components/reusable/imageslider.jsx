"use client";
import { useState } from "react";
import Image from "next/image";
import jumoke from "../../assets/image/jumoke.jpg";
import founder from "../../assets/image/founder.jpg";
import director from "../../assets/image/director.jpg";
import panel from "../../assets/image/panel.jpg";
import teamone from "../../assets/image/teamone.jpg";
import teamtwo from "../../assets/image/teamtwo.jpg";
import teamthree from "../../assets/image/teamthree.jpg";

const images = [
  { src: jumoke, alt: "first slide" },
  { src: founder, alt: "second slide" },
  { src: director, alt: "third slide" },
  { src: panel, alt: "fourth slide" },
  { src: teamone, alt: "fifth slide" },
  { src: teamtwo, alt: "sixth slide" },
  { src: teamthree, alt: "seventh slide" },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden mt-20 bg-white">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative w-screen h-screen flex-shrink-0">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
}
