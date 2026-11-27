import Link from "next/link";
import HubDirectory from "./hub-directory";
import HubMarquee from "./hub-marquee";
import Reveal from "./reveal";
import { policyHubs } from "./hub-content";

export const metadata = {
  title: "Policy Hub | Future Pathways Development",
  description:
    "Policy Hubs in tertiary institutions across Nigeria, where students collaborate on localized policy development and leadership training.",
};

export default function PolicyHubPage() {
  return (
    <div className="md:mt-[10rem] mt-[5rem]">
      <section className="md:py-16 py-6 border-b-1 border-gray-300">
        <div className="max-w-5xl md:mx-18 mx-6">
          <Reveal as="h1" className="md:text-7xl text-5xl font-bold leading-tight">
            Policy Hub.
          </Reveal>
          <Reveal as="p" delay={120} className="mt-4 max-w-2xl text-base text-gray-600 md:mt-6 md:text-lg">
            Policy Hubs are established in tertiary institutions where member
            students collaborate on localized policy development and leadership
            capacity training, in partnership with local actors and institutions.
          </Reveal>
        </div>
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-4">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-10">
          <Link href="/">Home</Link>
          <span>→</span>
          <Link href="/works/programs"> Programs</Link>
          <span>→</span>
          <span className="text-black font-medium"> Policy Hub</span>
        </nav>
      </section>

      <section className="py-2 md:py-4">
        <HubMarquee hubs={policyHubs} />
      </section>

      <section className="max-w-6xl md:mx-auto mx-6 px-1 py-10 md:py-16">
        <Reveal className="mb-8 grid gap-4 sm:grid-cols-2 md:mb-10 md:grid-cols-3 md:gap-6">
          <Stat value={policyHubs.length} label="Policy Hubs" tone="bg-[#cfe7d6] text-[#627768]" />
        </Reveal>

        <HubDirectory hubs={policyHubs} />
      </section>
    </div>
  );
}

function Stat({ value, label, tone }) {
  return (
    <div className={`rounded-xl p-5 md:p-6 ${tone}`}>
      <p className="text-4xl font-bold leading-none md:text-5xl">{value}</p>
      <p className="mt-2 text-sm font-medium md:text-base">{label}</p>
    </div>
  );
}
