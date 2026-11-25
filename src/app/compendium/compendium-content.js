// PDFs are served from /public/compendium. To replace a document, overwrite
// the file at the same path (or update `file` here).
export const compendiums = [
  {
    year: "2025",
    title: "2025 Compendium",
    description:
      "Rebuilding Trust, One Policy at a Time: policy ideas from Nigeria’s next generation of leaders.",
    file: "/compendium/fpdi-compendium-2025.pdf",
    downloadName: "FPDI-Compendium-2025.pdf",
    href: "/compendium/2025",
  },
  {
    year: "2026",
    title: "2026 Compendium",
    description:
      "Rebuilding Trust, One Policy at a Time: policy ideas from Nigeria’s next generation of leaders.",
    file: "/compendium/fpdi-compendium-2026.pdf",
    downloadName: "FPDI-Compendium-2026.pdf",
    href: "/compendium/2026",
  },
];

export function getCompendium(year) {
  return compendiums.find((item) => item.year === year);
}
