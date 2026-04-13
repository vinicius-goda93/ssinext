"use client";

import { useState } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ssi-dark-blue py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between md:justify-end items-center gap-4 md:gap-6">
          <span className="text-white text-sm hidden md:inline">License #AC - 13555</span>
          <a href="tel:8088452474" className="text-white text-sm">(808) 845-2474</a>
          <a
            href="#estimate"
            className="font-eurostile font-bold text-xs md:text-sm uppercase tracking-wide bg-ssi-orange text-white px-3 py-1.5 md:px-4 md:py-2 hover:opacity-90 transition-opacity"
          >
            Free Estimate
          </a>
        </div>
      </div>

      <nav className="bg-ssi-bright-blue py-3 md:py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center shrink-0">
            <LogoSVG clipId={clipId} />
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10">
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

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden mt-4 border-t border-white/20 pt-4 space-y-4">
            {navItems.map((nav) => (
              <div key={nav.label}>
                <p className="font-eurostile font-bold text-sm uppercase tracking-wider text-white mb-2">
                  {nav.label}
                </p>
                <div className="pl-4 space-y-2">
                  {nav.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block text-white/80 text-sm hover:text-ssi-orange transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
