"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import arise from "./assets/image/arisetv.png";
import businessDay from "./assets/image/businessday.png";
import thisDay from "./assets/image/thisday.png";
import nta from "./assets/image/nta.png";
import hands from "./assets/image/fdiphoto.png";
import director from "./assets/image/director.jpg";
import panel from "./assets/image/panel.jpg";
import team from "./assets/image/team.jpg";

const programs = [
  {
    eyebrow: "Kick It Project",
    title: "Kick It Project",
    body: "A football competition for youth, talented individuals from low-income families, and selected participants receives funding to further their careers and education.",
    tone: "bg-[#cfe7d6] text-[#627768]",
  },
  {
    eyebrow: "Policy Conference",
    title: "Policy Conference",
    body: "Our annual conference where we host an esteemed audience of government officials, civil society leaders, industry stakeholders, and the general public to amplify the voices and solutions of Nigerian youth in national policy conversations. It doubles as the grand finale of the Policy Challenge.",
    tone: "bg-[#ffc20a] text-[#8a6a00]",
  },
  {
    eyebrow: "Policy Hub",
    title: "Policy Hub",
    body: "Policy Hubs are established in tertiary institutions where member students can collaborate on localized policy development and leadership capacity training sessions in partnership with local actors and institutions for all members.",
    tone: "bg-[#87d8f3] text-black",
    featured: true,
  },
  {
    eyebrow: "Policy Challenge",
    title: "Policy Challenge",
    body: "A competition convening Africa’s brightest young minds (thinkers, activists, & emerging leaders) in tertiary institutions to propose well-researched, innovative policy ideas and engage directly with policymakers.",
    tone: "bg-[#cfe7d6] text-[#627768]",
  },
  {
    eyebrow: "Open House",
    title: "Open House",
    body: "Our official campus outreach program, designed to bring FPDI’s team and stakeholders directly to their own campuses, creates an accessible, energetic, and informative environment where students can talk and engage with experts, lawmakers, and policymakers.",
    tone: "bg-[#ffc20a] text-[#8a6a00]",
  },
];

const newsLogos = [
  { src: arise, alt: "Arise News" },
  { src: businessDay, alt: "Business Day" },
  { src: thisDay, alt: "This Day" },
  { src: nta, alt: "NTA" },
];

const gallerySlides = [
  { src: hands, alt: "Hands stacked over a work table" },
  { src: panel, alt: "Policy event panel session" },
  { src: team, alt: "FPDI team members" },
];

const timelineItems = [
  {
    year: "2020",
    paragraphs: [
      "We had a policy competition, on the topic “Improving The Quality Of Tertiary Education In Nigeria” and it was hosted and moderated by Ayokunnu Ojeniyi and we had prominent names like Oluwatosin Ojo (Managing Partner, Verbohelt Consulting), Feyi Fawehinmi, (Accounting & Finance Professional), Bayo Owolabi, (Consultant, Boston Consulting Group), Soji Akinyele, (SA to the CEO and Head, NSE).",
      "Winners (1st, 2nd & 3rd) went home with #250,000, #100,000 and #50,000 respectively.",
    ],
  },
  {
    year: "2022",
    paragraphs: [
      "The foundation was established and duly registered. We launched a campaign before the 2023 general election for voters to pick up their PVC and not deny themselves their voting rights. Advocated for issues such as Nigeria’s debt profile, the standard of Nigerian Institutions, mortality rates, poverty index.",
      "Another policy competition held in 2022, 6 teams advancing to the finals.",
    ],
  },
  {
    year: "2023",
    paragraphs: [
      "We had an another successful campaign titled “KNOW YOUR CANDIDATE” where past education and public office records of the 2023 Presidential aspirants, Gubernatorial candidates were analyzed. Then a side by side contrast of their opinion on ‘Economy’, ‘Power Supply’, ‘Youth Development’, ‘Agriculture’, ‘Security’, ‘Health’, ‘Infrastructure’, ‘Governance’.",
    ],
  },
  {
    year: "2025",
    paragraphs: [
      "We rebranded our flagship competition to The Policy Challenge, drawing over 800 applications and awarding $2,500+ in prizes to the next generation of policy thinkers.",
      "We also hosted our first-ever Youth Policy Conference, bringing young people face-to-face with national leaders like Hon. Minister Dr. Jumoke Oduwole MFR, Ambassador Dapo Oyewole, Dr. Jamila Dahiru, Johannes Oluwatobi Esq., and Mr. Khalil Nur Khalil.",
      "To deepen community impact, we sponsored a grassroots football tournament — using sport to foster engagement and spotlight young talent across local communities.",
    ],
  },
  {
    year: "2026",
    paragraphs: [
      "We’re back for the second edition of The Policy Challenge and the Youth Policy Conference. With our Policy Hubs now active in 27 tertiary institutions nationwide, we’re taking the conversation on the road with OPEN HOUSE, our official campus tour.",
    ],
  },
];

const ifWe = [
  "Invest in building ethical, visionary youth leadership",
  "Equip youth and citizens to engage meaningfully in policymaking",
  "Embed young professionals in governance structures",
  "Provide platforms for continuous learning, dialogue, and co-creation",
];

const thenWe = [
  "Strengthen the legitimacy, responsiveness, and effectiveness of African institutions",
  "Create a new generation of policy leaders across the continent",
  "Catalyze a governance culture rooted in accountability, innovation, and equity",
];

export default function Home() {
  const [activeProgram, setActiveProgram] = useState(2);
  const [activeGallerySlide, setActiveGallerySlide] = useState(0);

  const shiftProgram = (direction) => {
    setActiveProgram((current) => {
      const next = current + direction;
      if (next < 0) return programs.length - 1;
      if (next >= programs.length) return 0;
      return next;
    });
  };

  const shiftGallerySlide = (direction) => {
    setActiveGallerySlide((current) => {
      const next = current + direction;
      if (next < 0) return gallerySlides.length - 1;
      if (next >= gallerySlides.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveProgram((current) =>
        current === programs.length - 1 ? 0 : current + 1,
      );
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveGallerySlide((current) =>
        current === gallerySlides.length - 1 ? 0 : current + 1,
      );
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const visiblePrograms = [-2, -1, 0, 1, 2].map((offset) => {
    const index = (activeProgram + offset + programs.length) % programs.length;
    return { ...programs[index], offset };
  });

  return (
    <main className="w-full bg-white text-[#111111]">
      <section className="relative flex min-h-[560px] flex-col items-center overflow-hidden px-3 pb-8 pt-28 text-center md:min-h-[980px] md:px-6 md:pb-20 md:pt-56">
        <AfricaOutline className="absolute right-[-6rem] top-20 h-[300px] w-[260px] opacity-70 md:right-[-10rem] md:top-32 md:h-[760px] md:w-[620px]" />
        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="mb-3 text-[10px] font-semibold md:mb-8 md:text-xl">Welcome to FPDI</p>
          <h1 className="mx-auto max-w-[320px] text-xl font-bold leading-[1.12] tracking-normal md:max-w-5xl md:text-7xl">
            Co-creating policy towards a more prosperous Africa
          </h1>
        </div>

        <div className="relative z-10 mt-8 flex w-full max-w-none items-center justify-center gap-0 md:mt-16 md:w-[calc(100vw+34rem)] md:gap-16">
          {visiblePrograms.map((program) => (
            <article
              key={`${program.title}-${program.offset}`}
              className={`${program.tone} relative shrink-0 overflow-hidden p-6 text-left transition-all duration-700 ease-in-out ${
                program.offset === 0
                  ? "h-[430px] w-[min(340px,100%)] md:h-[520px] md:w-[430px]"
                  : "hidden md:block md:h-[330px] md:w-[300px] md:opacity-70"
              }`}
            >
              <div className="absolute inset-y-14 right-0 w-32 rounded-l-full bg-black/5" />
              <div className="absolute inset-x-0 top-1/2 h-20 -translate-y-1/2 bg-white/15" />
              <span
                className={`relative inline-block border border-current px-1 font-bold leading-none text-black transition-all duration-700 ${
                  program.offset === 0 ? "text-base md:text-2xl" : "text-base opacity-70"
                }`}
              >
                {program.eyebrow}
              </span>
              <div
                className={`absolute bg-white text-black transition-all duration-700 ${
                  program.offset === 0
                    ? "inset-x-5 bottom-5 p-4 opacity-100 md:inset-x-7 md:bottom-7 md:p-6"
                    : "inset-x-6 bottom-6 p-4 opacity-0 md:opacity-0"
                }`}
              >
                <h2 className="sr-only">{program.title}</h2>
                <p className="text-base font-medium leading-snug md:text-[17px]">
                  {program.body}
                </p>
                <a
                  href="/works/programs"
                  className="mt-4 inline-block text-[9px] font-semibold underline md:mt-5 md:text-xs"
                >
                  Read more
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="relative z-10 mt-4 flex gap-3 self-start md:mt-10 md:gap-5 md:ml-24">
          <button
            type="button"
            onClick={() => shiftProgram(-1)}
            aria-label="Previous program"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-black md:h-12 md:w-12"
          >
            <ArrowLeft size={16} className="md:h-6 md:w-6" />
          </button>
          <button
            type="button"
            onClick={() => shiftProgram(1)}
            aria-label="Next program"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white md:h-12 md:w-12"
          >
            <ArrowRight size={16} className="md:h-6 md:w-6" />
          </button>
        </div>
      </section>

      <section className="bg-[#fff7e8] px-4 py-10 md:px-6 md:py-24">
        <h2 className="text-center text-base font-bold md:text-5xl">
          FPDI in the news
        </h2>
        <div className="mx-auto mt-8 grid max-w-7xl gap-4 sm:grid-cols-2 md:mt-20 md:gap-10 lg:grid-cols-4">
          {newsLogos.map((logo) => (
            <div
              key={logo.alt}
              className="flex h-16 items-center justify-center rounded-lg border border-[#d9d1c2] bg-[#fff9ed] px-8 md:h-36 md:rounded-2xl md:px-10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 w-auto object-contain md:max-h-20"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-12 md:px-6 md:py-32">
        <TimelineOutline className="absolute left-[-10rem] top-[-14rem] hidden h-[1500px] w-[760px] opacity-75 md:block" />
        <div className="relative mx-auto max-w-7xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-[5px] -translate-x-1/2 bg-[#b98210] md:block" />
          <div className="absolute left-2 top-0 h-full w-[2px] bg-[#b98210] md:hidden" />
          <div className="space-y-12 md:space-y-40">
            {timelineItems.map((item, index) => {
              const left = index % 2 === 1;
              return (
                <div
                  key={`${item.year}-${index}`}
                  className="relative grid items-start gap-4 pl-9 md:gap-40 md:pl-0 md:grid-cols-2"
                >
                  <span className="absolute left-[-1px] top-2 h-5 w-5 rounded-full bg-[#c28d10] md:hidden" />
                  <span className="absolute left-1/2 top-8 hidden h-8 w-8 -translate-x-1/2 rounded-full bg-[#c28d10] md:block" />
                  <article
                    className={`max-w-2xl ${
                      left ? "md:col-start-1" : "md:col-start-2"
                    } ${left ? "" : "md:ml-auto"}`}
                  >
                    <h3 className="mb-4 text-xl font-bold md:mb-8 md:text-3xl">{item.year}</h3>
                    <div className="space-y-4 text-[11px] font-medium leading-5 text-[#4b4b4b] md:space-y-6 md:text-lg md:leading-7">
                      {item.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid items-center gap-6 bg-[#fff3d6] px-4 py-10 md:gap-14 md:grid-cols-[0.75fr_1.25fr] md:px-28 md:py-24">
        <div className="hidden mx-auto h-80 w-64 overflow-hidden text-[#a67714] md:block md:h-[430px] md:w-[340px]">
          <div className="h-1/4 rounded-t-full bg-current" />
          <div className="h-1/4 rounded-full bg-current" />
          <div className="h-1/4 rounded-full bg-current" />
          <div className="h-1/4 rounded-b-full bg-current" />
        </div>

        <article className="relative mx-auto grid max-w-4xl gap-5 overflow-hidden rounded-lg bg-[#f4bd3f] p-5 md:gap-8 md:rounded-2xl md:grid-cols-[1.35fr_0.9fr] md:p-14">
          <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#a67714_1px,transparent_1px)] [background-size:10px_10px]" />
          <div className="relative">
            <div className="mb-7 grid grid-cols-3 gap-3 text-[7px] font-semibold uppercase md:mb-14 md:gap-6 md:text-xs">
              <span>Words by</span>
              <span>Arinola Daniel</span>
              <span>Executive Director</span>
            </div>
            <blockquote className="max-w-xl text-sm font-bold leading-tight md:text-4xl">
              “...What is most exciting for us are the impact stories we
              continue to receive from our beneficiaries of different Policy
              programs.”
            </blockquote>
            <div className="mt-5 flex gap-3 md:mt-10 md:gap-4">
              <button
                type="button"
                aria-label="Previous story"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f6cf66] text-black md:h-11 md:w-11"
              >
                <ArrowLeft size={14} className="md:h-[22px] md:w-[22px]" />
              </button>
              <button
                type="button"
                aria-label="Next story"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white md:h-11 md:w-11"
              >
                <ArrowRight size={14} className="md:h-[22px] md:w-[22px]" />
              </button>
            </div>
          </div>
          <div className="relative min-h-44 md:min-h-72">
            <Image
              src={director}
              alt="Executive director portrait"
              fill
              className="object-cover object-center"
            />
          </div>
        </article>
      </section>

      <section className="relative overflow-hidden bg-white px-4 py-12 md:px-24 md:py-32">
        <AfricaOutline className="absolute right-[-8rem] top-36 h-[520px] w-[300px] opacity-70 md:right-[-20rem] md:top-16 md:h-[940px] md:w-[680px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-5 md:gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <h2 className="text-2xl font-bold leading-[1.05] md:text-7xl">
              Our Theory
              <br />
              of Change
            </h2>
            <p className="border-l border-[#edc569] pl-4 text-[10px] font-medium leading-5 text-[#737373] md:pl-8 md:text-lg md:leading-8">
              We believe lasting governance transformation begins with people,
              empowered youth, engaged citizens, and accountable institutions
              working in concert across the continent.
            </p>
          </div>

          <div className="mt-8 grid items-start md:mt-24 md:grid-cols-2">
            <div className="bg-[#fff3d6]">
              <div className="px-4 pt-4 md:px-12 md:pt-12">
                <div className="flex items-center gap-3 border-b border-[#b9ab8e] pb-4 md:gap-6 md:pb-10">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#d08b00] md:text-3xl">
                    If We
                  </h3>
                  <span className="h-px flex-1 bg-[#676767]" />
                </div>
              </div>

              {ifWe.map((item, index) => (
                <div
                  key={item}
                  className="min-h-[72px] border-b border-[#b9ab8e] px-4 py-4 md:min-h-[132px] md:px-12 md:py-7"
                >
                  <p className="mb-2 text-[10px] font-bold text-[#d08b00] md:mb-3 md:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="text-[11px] font-medium leading-snug md:text-2xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-[#a67714] text-white">
              <div className="px-4 pt-4 md:px-12 md:pt-12">
                <div className="flex items-center gap-3 border-b border-white/50 pb-4 md:gap-6 md:pb-10">
                  <span className="h-px flex-1 bg-white/70" />
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] md:text-3xl">
                    Then We Will
                  </h3>
                </div>
              </div>

              {thenWe.map((item, index) => (
                <div
                  key={item}
                  className="min-h-[72px] border-b border-white/50 px-4 py-4 text-right md:min-h-[132px] md:px-12 md:py-7"
                >
                  <p className="mb-2 text-[10px] font-bold md:mb-3 md:text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="ml-auto max-w-lg text-[11px] font-medium leading-snug md:text-2xl">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[180px] overflow-hidden md:h-[620px]">
        {gallerySlides.map((slide, index) => (
          <Image
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-700 ${
              activeGallerySlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between md:inset-x-10 md:bottom-10">
          <div className="flex gap-2">
            {gallerySlides.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                aria-label={`Show gallery slide ${index + 1}`}
                onClick={() => setActiveGallerySlide(index)}
                className={`h-2.5 w-2.5 rounded-full border border-white transition-colors md:h-3 md:w-3 ${
                  activeGallerySlide === index ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => shiftGallerySlide(-1)}
              aria-label="Previous gallery image"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 bg-white/85 text-black md:h-12 md:w-12"
            >
              <ArrowLeft size={16} className="md:h-6 md:w-6" />
            </button>
            <button
              type="button"
              onClick={() => shiftGallerySlide(1)}
              aria-label="Next gallery image"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white md:h-12 md:w-12"
            >
              <ArrowRight size={16} className="md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function AfricaOutline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 720"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      fill="none"
    >
      <path
        d="M303 21c-39 3-76 5-109 7-28 2-58 11-66 34-6 18 8 32-4 51-13 21-49 20-59 45-8 22 17 41 12 70-4 25-29 33-24 56 6 29 50 36 64 65 15 31-17 55-5 83 13 29 58 27 76 56 18 30-19 61-11 98 10 49 91 65 126 42 20-13 21-36 48-45 37-12 62 27 92 10 22-12 17-42 39-57 19-13 43-4 54-23 13-23-19-44-15-79 4-36 42-44 41-79-1-34-40-45-43-79-3-38 44-50 40-85-3-27-33-28-54-57-26-36-7-69-32-89-20-16-43 0-72-13-27-12-25-32-54-37-31-6-44 14-90 18Z"
        stroke="#d8d8d8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </svg>
  );
}

function TimelineOutline({ className = "" }) {
  return (
    <svg
      viewBox="0 0 620 1500"
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
      fill="none"
    >
      <path
        d="M420-40c36 45 52 98 54 159 1 39 34 78 33 126-1 44-31 74-29 116 2 45 38 82 19 128-19 47-76 64-103 107-29 45-48 95-93 126-45 32-72-17-118-5-37 10-40 59-84 58-40-1-81-25-119-1-44 28 13 85-7 132-25 58-64 99-61 169 2 47-34 83-45 128-9 37 3 77-32 111-34 34-71 39-106 18-35-22-66-16-101-11"
        stroke="#d8d8d8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </svg>
  );
}
