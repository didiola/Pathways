"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Camera,
  ClipboardList,
  FileText,
  Lightbulb,
  PartyPopper,
  Video,
} from "lucide-react";
import RegistrationForm from "./registration-form";
import styles from "./policy-hub.module.css";

const tabs = [
  { id: "proposals", label: "Policy Proposals", icon: FileText },
  { id: "open-house", label: "Open House", icon: PartyPopper },
  { id: "projects", label: "Notable Projects", icon: Lightbulb },
  { id: "events", label: "Events", icon: CalendarDays },
  { id: "join", label: "Join the Hub", icon: ClipboardList },
];

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

function formatDate(value) {
  return value ? dateFormat.format(new Date(`${value}T00:00:00Z`)) : null;
}

export default function HubTabs({ hub }) {
  const [active, setActive] = useState(tabs[0].id);
  const tabRefs = useRef({});

  // Deep links: /works/programs/policy-hub/unilag#join opens that tab.
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      if (tabs.some((t) => t.id === id)) setActive(id);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const select = (id, focus = false) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (event) => {
    const index = tabs.findIndex((t) => t.id === active);
    const moves = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (event.key in moves) {
      event.preventDefault();
      select(tabs[(index + moves[event.key] + tabs.length) % tabs.length].id, true);
    } else if (event.key === "Home") {
      event.preventDefault();
      select(tabs[0].id, true);
    } else if (event.key === "End") {
      event.preventDefault();
      select(tabs[tabs.length - 1].id, true);
    }
  };

  return (
    <div>
      <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0 [scrollbar-width:none]">
        <div
          role="tablist"
          aria-label={`${hub.hubName} sections`}
          onKeyDown={onKeyDown}
          className="flex w-max gap-2 md:w-auto md:flex-wrap md:gap-3"
        >
          {tabs.map(({ id, label, icon: Icon }) => {
            const selected = active === id;
            return (
              <button
                key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                role="tab"
                type="button"
                id={`tab-${id}`}
                aria-selected={selected}
                aria-controls={`panel-${id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => select(id)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm transition-all duration-300 md:px-5 md:text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 ${
                  selected
                    ? "border-green-600 bg-gradient-to-r from-green-600 to-green-500 text-white shadow-sm"
                    : "border-[#e5e5e5] bg-white text-[#4b4b4b] hover:border-green-600 hover:text-green-700"
                }`}
              >
                <Icon size={18} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        key={active}
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
        className={`mt-6 rounded-xl border border-[#e5e5e5] bg-white p-5 outline-none md:mt-8 md:p-10 ${styles.panel}`}
      >
        {active === "proposals" && <Proposals hub={hub} />}
        {active === "open-house" && <OpenHouse hub={hub} />}
        {active === "projects" && <Projects hub={hub} />}
        {active === "events" && <Events hub={hub} />}
        {active === "join" && <RegistrationForm hub={hub} />}
      </div>
    </div>
  );
}

function PanelHeading({ title, children }) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl font-bold md:text-4xl">{title}</h2>
      {children && <p className="mt-2 max-w-2xl text-gray-500">{children}</p>}
    </div>
  );
}

function EmptyState({ icon: Icon, title, children }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-[#fffdf8] px-6 py-12 text-center md:py-16">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,#a67714_1px,transparent_1px)] [background-size:10px_10px]" />
      <span className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3d6] text-[#a67714]">
        <Icon size={22} />
      </span>
      <p className="relative text-lg font-semibold">{title}</p>
      <p className="relative mx-auto mt-2 max-w-md text-sm text-gray-500">{children}</p>
    </div>
  );
}

function Proposals({ hub }) {
  const years = ["2025", "2026"];
  const hasData = years.some((y) => typeof hub.proposals[y] === "number");

  return (
    <>
      <PanelHeading title="Policy Proposals">
        Proposals submitted to The Policy Challenge from {hub.confirmed ? hub.institution : "this hub"}.
      </PanelHeading>

      {hasData ? (
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {years.map((year, i) => {
            const count = hub.proposals[year];
            return (
              <div
                key={year}
                className={`rounded-xl p-6 md:p-8 ${i === 0 ? "bg-[#cfe7d6] text-[#627768]" : "bg-[#ffc20a] text-[#8a6a00]"}`}
              >
                <p className="text-sm font-semibold uppercase tracking-widest">{year}</p>
                <p className="mt-4 text-6xl font-bold leading-none text-black md:text-7xl">
                  {typeof count === "number" ? count : "—"}
                </p>
                <p className="mt-2 text-sm font-medium">
                  {typeof count === "number"
                    ? `proposal${count === 1 ? "" : "s"} received`
                    : "Not yet published"}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState icon={FileText} title="Proposal figures are on the way">
          Counts for 2025 and 2026 will appear here once they have been
          published for this hub.
        </EmptyState>
      )}
    </>
  );
}

function OpenHouse({ hub }) {
  const { date, photos, videos } = hub.openHouse;

  if (!date && !photos && !videos) {
    return (
      <>
        <PanelHeading title="Open House">
          Our campus tour bringing FPDI, lawmakers and policymakers to students.
        </PanelHeading>
        <EmptyState icon={PartyPopper} title="Open House hasn’t visited yet">
          When the Open House tour stops at this campus, the date, photos and
          videos will be shared here.
        </EmptyState>
      </>
    );
  }

  return (
    <>
      <PanelHeading title="Open House" />
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        <div className="rounded-xl bg-[#fff3d6] p-6 md:p-8">
          <p className="text-sm font-semibold text-[#a67714]">Date</p>
          <p className="mt-3 text-2xl font-bold">{formatDate(date) ?? "Date to be announced"}</p>
        </div>
        <MediaLink href={photos} icon={Camera} label="Photos" empty="Photos coming soon" />
        <MediaLink href={videos} icon={Video} label="Videos" empty="Videos coming soon" />
      </div>
    </>
  );
}

function MediaLink({ href, icon: Icon, label, empty }) {
  if (!href) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-dashed border-[#e5e5e5] p-6 md:p-8">
        <Icon className="h-6 w-6 text-gray-400" />
        <p className="text-gray-500">{empty}</p>
      </div>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 rounded-xl border border-[#e5e5e5] p-6 transition-all duration-300 hover:border-green-600 hover:shadow-lg md:p-8"
    >
      <span className="flex items-center gap-4">
        <Icon className="h-6 w-6 text-green-700" />
        <span className="text-lg font-semibold">{label}</span>
      </span>
      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
    </a>
  );
}

function Projects({ hub }) {
  return (
    <>
      <PanelHeading title="Notable Projects" />
      {hub.projects.length ? (
        <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
          {hub.projects.map((project) => (
            <li key={project.title} className="rounded-xl border border-[#e5e5e5] p-6">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.description && <p className="mt-2 text-gray-600">{project.description}</p>}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState icon={Lightbulb} title="Projects are in the works">
          This hub’s notable projects will be featured here as they are
          completed.
        </EmptyState>
      )}
    </>
  );
}

function Events({ hub }) {
  return (
    <>
      <PanelHeading title="Events" />
      {hub.events.length ? (
        <ul className="divide-y divide-[#e5e5e5]">
          {hub.events.map((event) => (
            <li key={`${event.title}-${event.date}`} className="grid gap-2 py-5 md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6">
              <p className="text-sm font-semibold text-[#a67714]">{formatDate(event.date)}</p>
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                {event.location && <p className="text-sm text-gray-500">{event.location}</p>}
                {event.description && <p className="mt-1 text-gray-600">{event.description}</p>}
              </div>
              {event.href && (
                <a
                  href={event.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-green-700 hover:underline"
                >
                  Details <ArrowUpRight size={16} />
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState icon={CalendarDays} title="No events scheduled yet">
          Upcoming and past hub events will be listed here. Join the hub to
          hear about them first.
        </EmptyState>
      )}
    </>
  );
}
