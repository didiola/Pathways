"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight, Search, UserRound, X } from "lucide-react";
import Reveal from "./reveal";

const filters = [
  { id: "all", label: "All hubs" },
  { id: "director", label: "With a hub director" },
  { id: "establishing", label: "Director to be appointed" },
];

export default function HubDirectory({ hubs }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const counts = useMemo(
    () => ({
      all: hubs.length,
      director: hubs.filter((h) => h.director).length,
      establishing: hubs.filter((h) => !h.director).length,
    }),
    [hubs]
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hubs.filter((hub) => {
      if (filter === "director" && !hub.director) return false;
      if (filter === "establishing" && hub.director) return false;
      if (!q) return true;
      return [hub.institution, hub.code, hub.hubName, hub.director]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(q));
    });
  }, [hubs, query, filter]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter hubs">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                filter === f.id
                  ? "border-green-600 bg-gradient-to-r from-green-600 to-green-500 text-white"
                  : "border-[#e5e5e5] bg-white text-[#4b4b4b] hover:border-green-600 hover:text-green-700"
              }`}
            >
              {f.label}
              <span className={`ml-2 text-xs ${filter === f.id ? "text-white/80" : "text-gray-400"}`}>
                {counts[f.id]}
              </span>
            </button>
          ))}
        </div>

        <label className="relative block md:w-80">
          <span className="sr-only">Search institutions</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search institution or director"
            className="w-full rounded-full border border-[#e5e5e5] bg-white py-2.5 pl-11 pr-10 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-600/15"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:text-black"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </label>
      </div>

      <p className="mb-6 text-sm text-gray-500" aria-live="polite">
        Showing {visible.length} of {hubs.length} hubs
      </p>

      {visible.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[#e5e5e5] bg-[#fffdf8] px-6 py-16 text-center">
          <p className="text-lg font-semibold">No hubs match “{query}”.</p>
          <p className="mt-2 text-sm text-gray-500">
            Try a shorter name or an abbreviation such as UNILAG or ABU.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
            className="mt-6 rounded-full border border-green-600 px-5 py-2.5 text-sm text-green-700 transition hover:bg-green-50"
          >
            Show all hubs
          </button>
        </div>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {visible.map((hub, index) => (
            <Reveal as="li" key={hub.slug} delay={Math.min(index, 8) * 45}>
              <HubCard hub={hub} />
            </Reveal>
          ))}
        </ul>
      )}
    </div>
  );
}

function HubCard({ hub }) {
  const long = hub.code.length > 10;

  return (
    <Link
      href={`/works/programs/policy-hub/${hub.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e5e5e5] bg-white transition-all duration-300 hover:shadow-lg motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      <div className={`relative flex h-32 items-end justify-between overflow-hidden px-5 pb-4 md:h-36 ${hub.tone}`}>
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#a67714_1px,transparent_1px)] [background-size:10px_10px]" />
        <span
          className={`relative font-bold leading-none transition-transform duration-500 motion-safe:group-hover:-translate-y-1 ${
            long ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
          }`}
        >
          {hub.code}
        </span>
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/70 text-black transition-all duration-300 group-hover:bg-black group-hover:text-white motion-safe:group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-semibold text-lg leading-snug">{hub.institution}</h3>
        <p className="mt-1 text-sm text-gray-500">{hub.hubName}</p>

        <div className="mt-auto pt-5">
          {hub.director ? (
            <p className="flex items-center gap-2 text-sm text-[#231F20]">
              <UserRound className="h-4 w-4 shrink-0 text-green-700" />
              <span className="truncate">{hub.director}</span>
            </p>
          ) : (
            <p className="inline-flex items-center gap-2 rounded-full bg-[#fff3d6] px-3 py-1 text-xs font-medium text-[#8a6a00]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ffc20a]" />
              Director to be appointed
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
