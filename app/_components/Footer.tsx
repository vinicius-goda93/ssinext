const licenseBadges = [
  { code: "A", label: "General\nEngineering" },
  { code: "C31A", label: "Cement\nConcrete" },
  { code: "C32", label: "Guardrails &\nFencing" },
  { code: "C22", label: "Glass &\nGlazing" },
  { code: "C33", label: "Painting" },
  { code: "C35", label: "Pile Driving &\nFoundations" },
  { code: "C34", label: "Soil\nStabilization" },
  { code: "C17", label: "Excavating,\nGrading &" },
  { code: "C55", label: "Water-\nproofing" },
  { code: "C24", label: "Building\nMoving" },
];

const sitemapLinks = [
  "Sitemap",
  "Careers",
  "Contact",
  "Customer Service",
  "Privacy Policy",
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <p className="text-ssi-dark-blue text-xs mb-3">
              General Engineering License #AC - 13555
            </p>
            <div className="flex flex-wrap gap-2">
              {licenseBadges.map((b) => (
                <div
                  key={b.code}
                  className="w-12 h-14 bg-ssi-orange clip-hexagon flex flex-col items-center justify-center text-white text-center"
                >
                  <span className="font-eurostile font-bold text-[10px] leading-none">
                    {b.code}
                  </span>
                  <span className="text-[7px] leading-tight mt-0.5 whitespace-pre-line">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="text-ssi-dark-blue text-xs">Certifications</span>
            <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-ssi-dark-blue text-[10px] text-center leading-tight">
                BBB
                <br />
                A+
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-ssi-dark-blue text-[8px] text-center leading-tight">
                100%
              </span>
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="font-bold text-ssi-dark-blue text-[8px] text-center leading-tight">
                GCA
              </span>
            </div>
          </div>

          <nav className="shrink-0">
            <ul className="space-y-0.5 md:text-right">
              {sitemapLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-eurostile font-bold text-ssi-bright-blue text-[11px] uppercase tracking-wider hover:text-ssi-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
