import Header from "../_components/Header";
import Footer from "../_components/Footer";
import LogoSVG from "../_components/LogoSVG";
import EstimateForm from "../_components/EstimateForm";

const foundationServices = [
  "Concrete Restoration & Repair",
  "Large-Scale Stabilization",
  "Large-Scale Soil Stabilization",
  "Excavation & Site Stabilization",
];

const foundationBullets = [
  "Stabilize large-scale foundations",
  "Repair structural concrete damage",
  "Engineer long-term soil stabilization",
  "Install proven commercial systems",
];

const successProjects = [
  { label: "Resorts &\nHotels", image: "/images/com-resort.jpg" },
  { label: "High-Rise\nCondominiums", image: "/images/com-highrise.jpg" },
  { label: "Office & Retail\nBuildings", image: "/images/com-office.jpg" },
  { label: "Lorem Ipsum", image: "/images/com-commercial.jpg" },
];

const HomeIcon = () => (
  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const LayersIcon = () => (
  <svg className="w-7 h-7 text-ssi-orange" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const BuildingIcon = () => (
  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-ssi-orange shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
  </svg>
);

export default function Commercial() {
  return (
    <>
      <Header clipId="clip-hdr-commercial" />

      {/* SECTION 2 — HERO */}
      <section className="relative min-h-[600px] flex items-center bg-ssi-charcoal bg-cover bg-center" style={{ backgroundImage: "url('/images/com-hero.jpg')" }}>
        <div className="absolute inset-0 bg-ssi-dark-blue/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="font-eurostile text-white leading-[1.05] mb-6">
              <span className="block font-normal text-[clamp(2rem,4.5vw,3.2rem)]">
                We Build
              </span>
              <span className="block font-bold uppercase text-[clamp(3rem,6vw,4.5rem)] tracking-tight">
                Commercial
                <br />
                Construction
              </span>
              <span className="block font-normal uppercase text-[clamp(2.2rem,4vw,3rem)] tracking-tight">
                Throughout Hawaii
              </span>
            </h1>
            <p className="font-eurostile font-normal uppercase tracking-[0.25em] text-white/80 text-sm mb-10">
              Trusted Commercial Contractors for Over 46 Years
            </p>
            <a
              href="#estimate"
              className="inline-block font-eurostile font-bold uppercase tracking-wider text-sm bg-ssi-orange text-white px-8 py-4 rounded-sm hover:brightness-110 transition"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TRUST BAR */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-y-6">
            <div className="flex items-center gap-1">
              <div className="text-center">
                <div
                  className="font-eurostile font-bold text-ssi-orange leading-none"
                  style={{ fontSize: "2.6rem" }}
                >
                  40+
                </div>
                <div className="font-eurostile font-bold text-ssi-dark-blue text-[11px] uppercase tracking-wider leading-tight">
                  Years
                  <br />
                  Experience
                </div>
              </div>
            </div>

            <TrustItem icon={<HomeIcon />}>
              <span className="text-ssi-bright-blue">Hawaii</span>
              <br />
              Local Experts
            </TrustItem>

            <TrustItem icon={<LayersIcon />}>
              <span className="italic">Lorem</span>
              <br />
              dolor sit
            </TrustItem>

            <TrustItem icon={<BuildingIcon />}>
              <span className="text-ssi-bright-blue">Hawaii</span>
              <br />
              Commercial Experts
            </TrustItem>

            <TrustItem icon={<ShieldIcon />}>
              Licensed
              <br />
              Structural Engineers
            </TrustItem>

            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-ssi-dark-blue flex items-center justify-center shrink-0">
                <HomeIcon />
              </div>
              <div>
                <div
                  className="font-eurostile font-bold text-ssi-orange leading-none"
                  style={{ fontSize: "1.6rem" }}
                >
                  1,000+
                </div>
                <div className="font-eurostile font-bold text-ssi-dark-blue text-[11px] uppercase tracking-wider leading-tight">
                  Commercial
                  <br />
                  Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES & STAT (2x2) */}
      <section>
        <div className="grid grid-cols-2">
          <div className="bg-white p-10 lg:p-14">
            <h2 className="font-eurostile font-bold text-ssi-dark-blue text-3xl uppercase mb-6">
              Our Commercial Services
            </h2>
            <h3 className="font-eurostile font-bold text-ssi-dark-blue text-lg uppercase mb-5">
              Foundation &amp; Structural Repairs
            </h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {foundationServices.map((s) => (
                <div key={s} className="flex items-center">
                  <span className="text-ssi-dark-blue text-sm">
                    <span className="text-ssi-orange mr-1.5 font-bold">•</span>
                    {s}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="#estimate"
              className="inline-block font-eurostile font-bold uppercase tracking-wider text-sm bg-ssi-orange text-white px-8 py-3 rounded-sm hover:brightness-110 transition"
            >
              Get a Free Estimate
            </a>
          </div>

          <div className="relative flex items-end justify-end bg-ssi-charcoal bg-cover bg-center p-10 lg:p-14" style={{ backgroundImage: "url('/images/com-drill.jpg')" }}>
            <div className="absolute inset-0 bg-ssi-dark-blue/40" />
            <div className="relative z-10 text-white text-right max-w-sm">
              <h3 className="font-eurostile font-bold uppercase text-3xl leading-tight mb-1">
                Lorem
              </h3>
              <h4 className="font-eurostile font-bold uppercase text-xl leading-tight mb-4">
                Lorem Ipsum
              </h4>
              <p className="text-white/80 italic text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>

          <div className="relative flex items-end bg-ssi-charcoal bg-cover bg-center p-10 lg:p-14" style={{ backgroundImage: "url('/images/com-foundation.jpg')" }}>
            <div className="absolute inset-0 bg-ssi-dark-blue/40" />
            <div className="relative z-10 text-white">
              <h3 className="font-eurostile font-bold uppercase text-3xl leading-tight mb-1">
                Lorem
              </h3>
              <h4 className="font-eurostile font-bold uppercase text-xl leading-tight mb-4">
                Lorem Ipsum
              </h4>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>

          <div className="bg-white p-10 lg:p-14">
            <h2 className="font-eurostile font-bold text-ssi-dark-blue text-2xl uppercase mb-4">
              Commercial Foundation
              <br />
              Solutions
            </h2>
            <p className="text-ssi-dark-blue text-base mb-6 max-w-md">
              Supporting large structures across Hawai&apos;i:
            </p>
            <ul className="space-y-3 mb-8">
              {foundationBullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="font-bold text-ssi-dark-blue text-sm">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#estimate"
              className="inline-block font-eurostile font-bold uppercase tracking-wider text-sm bg-ssi-orange text-white px-8 py-3 rounded-sm hover:brightness-110 transition"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5 — BEFORE/AFTER */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-eurostile font-bold text-ssi-dark-blue uppercase mb-4 text-center"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Commercial Concrete Spall Repair
          </h2>
          <p className="text-ssi-dark-blue text-base leading-relaxed mb-10 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {(["Before", "After"] as const).map((label) => (
              <div
                key={label}
                className="relative aspect-[4/3] bg-ssi-cool-gray bg-cover bg-center rounded-md overflow-hidden"
                style={{ backgroundImage: `url('/images/com-${label.toLowerCase()}.jpg')` }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-5 font-eurostile font-bold text-white text-2xl uppercase tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — SUCCESS PROJECTS */}
      <section className="bg-gray-100 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-eurostile font-bold text-ssi-dark-blue text-center uppercase mb-10"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Success Projects
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {successProjects.map((p) => (
              <div
                key={p.label}
                className="relative aspect-[4/3] bg-ssi-cool-gray bg-cover bg-center rounded-md overflow-hidden"
                style={{ backgroundImage: `url('${p.image}')` }}
              >
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ssi-orange/90 to-transparent" />
                <span className="absolute bottom-4 left-0 right-0 text-center font-eurostile font-bold text-white text-sm uppercase tracking-wide leading-tight whitespace-pre-line">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — LEAD CAPTURE FORM */}
      <section id="estimate" className="bg-ssi-charcoal">
        <div className="grid grid-cols-2">
          <div className="bg-ssi-charcoal p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <LogoSVG clipId="clip-form-commercial" width={208} height={53} />
              </div>
              <p className="font-eurostile font-bold text-ssi-orange text-xs uppercase tracking-[0.2em] mb-2">
                Lorem Ipsum
              </p>
              <h2
                className="font-eurostile font-bold text-white uppercase leading-none mb-4"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                Lorem
                <br />
                <span className="text-ssi-orange">Ipsum</span>
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </p>
              <div className="border-l-4 border-ssi-orange pl-5 mb-10">
                <p className="text-white/80 text-base italic leading-relaxed max-w-sm">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Sed do eiusmod tempor incididunt&quot;
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-12 gap-y-4">
              <div>
                <p className="text-white/80 text-sm leading-relaxed">
                  Post Office Box 30296
                  <br />
                  Honolulu, Hawaii 96820
                </p>
                <p className="text-white/80 text-sm leading-relaxed mt-2">
                  1029 Puuwai Street
                  <br />
                  Honolulu, Hawai&apos;i 96819
                </p>
              </div>
              <div>
                <p className="text-white text-sm">
                  <span className="font-eurostile font-bold text-ssi-orange text-xs uppercase tracking-wider">
                    Office
                  </span>
                  &nbsp; (808) 845-2474
                </p>
                <p className="text-white text-sm mt-1">
                  <span className="font-eurostile font-bold text-ssi-orange text-xs uppercase tracking-wider">
                    Fax
                  </span>
                  &nbsp; (808) 847-2966
                </p>
              </div>
            </div>
          </div>

          <div className="bg-ssi-charcoal p-12 lg:p-16 border-l border-white/10">
            <EstimateForm fieldBg="bg-ssi-form-charcoal" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function TrustItem({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-14 h-14 rounded-full bg-ssi-dark-blue flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-eurostile font-bold text-ssi-dark-blue text-[15px] leading-tight">
          {children}
        </div>
      </div>
    </div>
  );
}
