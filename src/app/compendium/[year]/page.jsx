import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Download } from "lucide-react";
import { compendiums, getCompendium } from "../compendium-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return compendiums.map((item) => ({ year: item.year }));
}

export async function generateMetadata({ params }) {
  const { year } = await params;
  const item = getCompendium(year);
  if (!item) return {};
  return {
    title: `${item.title} | Future Pathways Development`,
    description: item.description,
  };
}

export default async function CompendiumViewerPage({ params }) {
  const { year } = await params;
  const item = getCompendium(year);
  if (!item) notFound();

  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="max-w-5xl md:mx-18 mx-6">
          <h1 className="md:text-7xl text-5xl font-bold leading-tight">
            {item.title}.
          </h1>
        </div>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-4 md:mb-24 mb-12">
        <div className="text-sm text-gray-500 mb-8">
          <Link href="/">Home</Link>
          <span>→</span>
          <Link href="/compendium"> Compendium</Link>
          <span>→</span>
          <span className="text-black font-medium"> {item.year}</span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href={item.file}
            download={item.downloadName}
            className="bg-gradient-to-r from-green-600 to-green-500 border border-white hover:opacity-90 transition text-white rounded-full py-3 px-5 inline-flex items-center gap-2"
          >
            Download PDF
            <Download size={18} />
          </a>
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-green-600 text-green-700 hover:bg-green-50 transition rounded-full py-3 px-5 inline-flex items-center gap-2"
          >
            Open full screen
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="rounded-xl overflow-hidden border border-[#e5e5e5] bg-[#fff9ed]">
          <object
            data={`${item.file}#view=FitH`}
            type="application/pdf"
            aria-label={item.title}
            className="block w-full h-[75vh] md:h-[85vh]"
          >
            {/* Shown where the browser can't display PDFs inline (e.g. some mobile browsers). */}
            <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
              <p className="text-gray-600">
                Your browser can&apos;t display this PDF here.
              </p>
              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-700 underline"
              >
                Open the {item.title}
              </a>
            </div>
          </object>
        </div>
      </section>
    </div>
  );
}
