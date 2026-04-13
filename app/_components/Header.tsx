import LogoSVG from "./LogoSVG";

const navItems = [
  { label: "About Us", items: ["Our Story", "Team", "Certifications"], width: "w-48" },
  {
    label: "Residential",
    items: [
      "Foundation Repairs",
      "Foundation Releveling",
      "Slope Stabilization",
      "Retaining Wall Stabilization",
    ],
    width: "w-56",
  },
  { label: "Commercial", items: ["Services", "Projects"], width: "w-48" },
  { label: "Solutions", items: ["All Solutions"], width: "w-48" },
  { label: "Projects", items: ["Case Studies", "Gallery"], width: "w-48" },
];

const ChevronDown = () => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default function Header({ clipId }: { clipId: string }) {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ssi-dark-blue py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6">
          <span className="text-white text-sm">License #AC - 13555</span>
          <span className="text-white text-sm">(808) 845-2474</span>
          <a
            href="#estimate"
            className="font-eurostile font-bold text-sm uppercase tracking-wide bg-ssi-orange text-white px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>

      <nav className="bg-ssi-bright-blue py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <LogoSVG clipId={clipId} />
          </a>

          <ul className="flex items-center gap-10">
            {navItems.map((nav) => (
              <li key={nav.label} className="nav-item relative">
                <button className="font-eurostile font-bold text-[13px] uppercase tracking-wider text-white flex items-center gap-1.5 hover:text-ssi-orange transition-colors">
                  {nav.label}
                  <ChevronDown />
                </button>
                <ul
                  className={`dropdown hidden absolute top-full left-0 mt-0 ${nav.width} bg-white shadow-lg border-t-2 border-ssi-orange z-50`}
                >
                  {nav.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-3 text-sm text-ssi-dark-blue hover:bg-gray-50 hover:text-ssi-orange"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
