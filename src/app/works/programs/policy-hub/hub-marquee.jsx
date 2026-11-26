import styles from "./policy-hub.module.css";

// Three slow rows of institution pills, after the reference video.
// Each row is rendered twice so the loop is seamless; the copy is hidden from
// assistive tech and dropped entirely under reduced motion.
export default function HubMarquee({ hubs }) {
  const rows = [0, 1, 2].map((row) => hubs.filter((_, i) => i % 3 === row));
  const speeds = ["95s", "110s", "100s"];

  return (
    <div className="space-y-3 md:space-y-4" aria-label="Institutions with a Policy Hub">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.marquee}>
          <div
            className={styles.track}
            style={{
              "--duration": speeds[rowIndex],
              "--direction": rowIndex === 1 ? "reverse" : "normal",
            }}
          >
            <PillRow hubs={row} />
            <PillRow hubs={row} duplicate />
          </div>
        </div>
      ))}
    </div>
  );
}

function PillRow({ hubs, duplicate = false }) {
  return (
    <ul
      className={`flex shrink-0 items-center ${duplicate ? styles.duplicate : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {hubs.map((hub) => (
        <li key={hub.slug} className="flex items-center">
          <span className="whitespace-nowrap rounded-full border border-[#e5e5e5] bg-white px-4 py-1.5 text-xs text-[#4b4b4b] md:px-5 md:py-2 md:text-sm">
            {hub.institution}
          </span>
          <span className="mx-3 h-2 w-2 shrink-0 rounded-full bg-[#ffc20a] md:mx-4" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}
