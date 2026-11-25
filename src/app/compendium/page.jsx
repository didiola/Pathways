import Link from "next/link";
import { ArrowUpRight, Download, FileText } from "lucide-react";
import { compendiums } from "./compendium-content";

export const metadata = {
  title: "Compendium | Future Pathways Development",
  description: "View and download the FPDI Compendiums.",
};

export default function CompendiumPage() {
  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="max-w-5xl md:mx-18 mx-6">
          <h1 className="md:text-7xl text-5xl font-bold leading-tight">
            Compendium.
          </h1>
        </div>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-4 md:mb-24 mb-12">
        <div className="text-sm text-gray-500 mb-10">
          <Link href="/">Home</Link>
          <span>→</span>
          <span className="text-black font-medium"> Compendium</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {compendiums.map((item) => (
            <CompendiumCard key={item.year} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

function CompendiumCard({ item }) {
  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-[#e5e5e5] hover:shadow-lg transition-all duration-300">
      <div className="relative flex h-56 md:h-72 items-center justify-center bg-[#fff9ed]">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#a67714_1px,transparent_1px)] [background-size:10px_10px]" />
        <div className="relative flex flex-col items-center text-green-700">
          <FileText className="h-10 w-10 md:h-12 md:w-12 mb-3" />
          <span className="text-6xl md:text-7xl font-bold leading-none">
            {item.year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-6">
        <h2 className="font-semibold text-lg md:text-2xl mb-2">
          {/* Stretched link: makes the whole card clickable. */}
          <Link
            href={item.href}
            className="after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:underline"
          >
            {item.title}
          </Link>
        </h2>
        <p className="text-sm md:text-base text-gray-500 mb-6">
          {item.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-3">
          <span className="bg-gradient-to-r from-green-600 to-green-500 group-hover:opacity-90 transition text-white rounded-full py-2.5 px-5 inline-flex items-center gap-2 text-sm md:text-base">
            View
            <ArrowUpRight size={18} />
          </span>
          <a
            href={item.file}
            download={item.downloadName}
            className="relative z-10 border border-green-600 text-green-700 hover:bg-green-50 transition rounded-full py-2.5 px-5 inline-flex items-center gap-2 text-sm md:text-base"
          >
            Download
            <Download size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
