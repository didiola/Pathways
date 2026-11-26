import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Mail, UserRound } from "lucide-react";
import Reveal from "../reveal";
import HubTabs from "../hub-tabs";
import { getAdjacentHubs, getHub, policyHubs } from "../hub-content";

export const dynamicParams = false;

export function generateStaticParams() {
  return policyHubs.map((hub) => ({ slug: hub.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) return {};
  return {
    title: `${hub.hubName} | Future Pathways Development`,
    description: `The FPDI Policy Hub at ${hub.institution}: hub director, contacts, policy proposals, open house, projects and events.`,
  };
}

export default async function PolicyHubDetailPage({ params }) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();
  const { previous, next } = getAdjacentHubs(slug);

  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="max-w-5xl md:mx-18 mx-6">
          <Reveal>
            <Link
              href="/works/programs/policy-hub"
              className="group mb-6 inline-flex items-center gap-2 text-sm font-medium text-green-700"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 motion-safe:group-hover:-translate-x-1" />
              All Policy Hubs
            </Link>
          </Reveal>
          <Reveal as="p" delay={60} className="text-sm font-semibold uppercase tracking-widest text-[#a67714]">
            {hub.hubName}
          </Reveal>
          <Reveal as="h1" delay={120} className="mt-2 md:text-7xl text-4xl font-bold leading-tight">
            {hub.institution}.
          </Reveal>
        </div>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-4">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8 md:mb-10">
          <Link href="/">Home</Link>
          <span>→</span>
          <Link href="/works/programs"> Programs</Link>
          <span>→</span>
          <Link href="/works/programs/policy-hub"> Policy Hub</Link>
          <span>→</span>
          <span className="text-black font-medium"> {hub.code}</span>
        </nav>

        <Reveal delay={180} className="grid gap-4 md:grid-cols-[1.2fr_1fr_1fr] md:gap-6">
          <div className={`relative flex items-end overflow-hidden rounded-xl px-6 py-6 md:p-8 ${hub.tone}`}>
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#a67714_1px,transparent_1px)] [background-size:10px_10px]" />
            <p className={`relative font-bold leading-none ${hub.code.length > 10 ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>
              {hub.code}
            </p>
          </div>

          <DetailCard icon={UserRound} label="Hub Director">
            {hub.director ? (
              <p className="text-lg font-semibold text-[#231F20] md:text-xl">{hub.director}</p>
            ) : (
              <>
                <p className="text-lg font-semibold text-[#231F20] md:text-xl">To be appointed</p>
                <p className="mt-1 text-sm text-gray-500">
                  FPDI is active here and a hub director will be announced soon.
                </p>
              </>
            )}
          </DetailCard>

          <DetailCard icon={Mail} label="Hub Email">
            {hub.email ? (
              <a
                href={`mailto:${hub.email}`}
                className="block break-words text-base font-semibold text-green-700 underline-offset-4 hover:underline md:text-lg"
              >
                {hub.email.split("@")[0]}@<wbr />
                {hub.email.split("@")[1]}
              </a>
            ) : (
              <>
                <p className="text-lg font-semibold text-[#231F20] md:text-xl">Coming soon</p>
                <p className="mt-1 text-sm text-gray-500">
                  Until then, reach the team at{" "}
                  <a href="mailto:info@futurepathways.ng" className="font-medium text-green-700 hover:underline">
                    info@futurepathways.ng
                  </a>
                  .
                </p>
              </>
            )}
          </DetailCard>
        </Reveal>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-8 md:py-12">
        <HubTabs hub={hub} />
      </section>

      <nav
        aria-label="More Policy Hubs"
        className="max-w-6xl md:mx-auto mx-6 px-1 pb-16 md:pb-24"
      >
        <div className="grid gap-4 border-t border-[#e5e5e5] pt-8 sm:grid-cols-3 sm:items-center">
          <div>
            {previous && (
              <AdjacentLink hub={previous} direction="previous" />
            )}
          </div>
          <div className="sm:text-center">
            <Link
              href="/works/programs/policy-hub"
              className="inline-flex items-center gap-2 rounded-full border border-green-600 px-5 py-2.5 text-sm text-green-700 transition hover:bg-green-50"
            >
              View all hubs
            </Link>
          </div>
          <div className="sm:text-right">
            {next && <AdjacentLink hub={next} direction="next" />}
          </div>
        </div>
      </nav>
    </div>
  );
}

function DetailCard({ icon: Icon, label, children }) {
  return (
    <div className="rounded-xl border border-[#e5e5e5] bg-white p-6 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff9ed] text-green-700">
          <Icon size={18} />
        </span>
        <p className="text-sm font-semibold text-gray-500">{label}</p>
      </div>
      {children}
    </div>
  );
}

function AdjacentLink({ hub, direction }) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/works/programs/policy-hub/${hub.slug}`}
      className={`group inline-flex items-center gap-3 ${isNext ? "flex-row-reverse text-right" : ""}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff9ed] text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
        {isNext ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
      </span>
      <span>
        <span className="block text-xs text-gray-500">{isNext ? "Next hub" : "Previous hub"}</span>
        <span className="block font-semibold">{hub.code}</span>
      </span>
    </Link>
  );
}
