import Header from "../_components/Header";
import Footer from "../_components/Footer";
import LogoSVG from "../_components/LogoSVG";
import EstimateForm from "../_components/EstimateForm";

const residentialServices = [
  "Foundation Repair",
  "Retaining Wall Stabilization",
  "Foundation Releveling",
  "Expansive Clay Stabilization",
  "Slope Stabilization",
  "Void Filling & Compaction",
];

const soilChecklist = [
  "Identify structural problems",
  "Explain repairs in simple terms",
  "Design engineered solutions",
  "Utilize proven repair methods",
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

export default function Residential() {
  return (
    <>
      <Header clipId="clip-hdr-residential" />

      {/* SECTION 2 — HERO */}
      <section className="relative min-h-[400px] md:min-h-[600px] flex items-center bg-ssi-charcoal bg-cover bg-center" style={{ backgroundImage: "url('/images/res-hero.jpg')" }}>
        <div className="absolute inset-0 bg-ssi-dark-blue/50" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-eurostile text-white leading-[1.05] mb-6">
              <span className="block font-normal italic text-[clamp(1.6rem,4.5vw,3.2rem)]">
                We Solve
              </span>
              <span className="block font-bold uppercase text-[clamp(2.2rem,6vw,4.5rem)] tracking-tight">
                Structural
                <br />
                Issues Above
              </span>
              <span className="block text-[clamp(1.8rem,5vw,3.8rem)] tracking-tight">
                <span className="font-normal uppercase">and </span>
                <span className="font-bold italic uppercase">Below Your Home.</span>
              </span>
            </h1>
            <p className="font-eurostile font-normal uppercase tracking-[0.25em] text-white/80 text-xs md:text-sm mb-10">
              Protecting Hawaii Homes for Over 40 Years.
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
      <section className="bg-white py-8 md:py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-between gap-6">
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
              <span className="italic">Lorem Ipsum</span>
              <br />
              dolor sit
            </TrustItem>

            <TrustItem icon={<BuildingIcon />}>
              <span className="text-ssi-bright-blue">Hawaii</span>
              <br />
              Construction Experts
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
                  Homes
                  <br />
                  Stabilized
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — SERVICES & STAT (2x2) */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-8 md:p-10 lg:p-14">
            <h2 className="font-eurostile font-bold text-ssi-dark-blue text-2xl md:text-3xl uppercase italic mb-6">
              Our Residential Services
            </h2>
            <h3 className="font-eurostile font-bold text-ssi-dark-blue text-lg uppercase mb-5">
              Foundation Repairs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 mb-10">
              {residentialServices.map((s) => (
                <div key={s} className="flex items-center justify-between">
                  <span className="text-ssi-dark-blue text-sm">
                    <span className="text-ssi-orange mr-1.5 font-bold">•</span>
                    {s}
                  </span>
                  <a
                    href="#"
                    className="font-eurostile font-bold text-[10px] uppercase tracking-wider text-white bg-ssi-orange px-2 py-0.5 hover:brightness-110 transition shrink-0 ml-2"
                  >
                    More
                  </a>
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

          <div className="relative flex items-center justify-end bg-ssi-charcoal bg-cover bg-center p-8 md:p-10 lg:p-14 min-h-[300px]" style={{ backgroundImage: "url('/images/res-85-crack.jpg')" }}>
            <div className="absolute inset-0 bg-ssi-bright-blue/70" />
            <div className="relative z-10 text-white text-right max-w-sm">
              <div
                className="font-eurostile font-bold leading-none mb-2"
                style={{ fontSize: "clamp(4.5rem, 8vw, 7rem)" }}
              >
                85<span className="text-[0.45em] align-top">%</span>
              </div>
              <p className="font-eurostile font-bold uppercase text-xl italic leading-tight mb-0.5">
                Of Visible Signs
              </p>
              <p className="font-eurostile font-bold uppercase italic leading-tight mb-0.5">
                Are{" "}
                <span className="text-[1.6rem] not-italic font-bold">
                  Found Below
                </span>
              </p>
              <p className="font-eurostile font-bold uppercase italic leading-tight mb-6">
                The{" "}
                <span className="text-[1.6rem] not-italic font-bold">Ground.</span>
              </p>
              <p className="text-white/80 italic text-base leading-relaxed">
                Cracks, uneven floors, sticking doors, and leaning walls may
                signal issues beneath.
              </p>
            </div>
          </div>

          <div className="relative flex items-end bg-ssi-charcoal bg-cover bg-center p-8 md:p-10 lg:p-14 min-h-[300px]" style={{ backgroundImage: "url('/images/res-soil.jpg')" }}>
            <div className="absolute inset-0 bg-ssi-dark-blue/50" />
            <div className="relative z-10 text-white">
              <div
                className="font-eurostile font-bold leading-none"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
              >
                10
              </div>
              <h3 className="font-eurostile font-bold uppercase text-xl leading-tight mb-3">
                Major Soil
                <br />
                Conditions
              </h3>
              <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                Hawai&apos;i contains more soil diversity than many entire
                continents.
              </p>
            </div>
          </div>

          <div className="relative bg-cover bg-center p-8 md:p-10 lg:p-14" style={{ backgroundImage: "url('/images/res-soil-light.jpg')" }}>
            <div className="absolute inset-0 bg-white/85" />
            <div className="relative z-10">
              <h2 className="font-eurostile font-bold text-ssi-dark-blue text-xl md:text-2xl uppercase mb-4">
                Hawaii Major Soil Conditions
              </h2>
              <p className="text-ssi-dark-blue text-base mb-6 max-w-md">
                Found in the islands, more soil diversity than entire continents.
              </p>
              <ul className="space-y-3 mb-8">
                {soilChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    <span className="font-bold text-ssi-dark-blue text-sm italic">
                      {item}
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
        </div>
      </section>

      {/* SECTION 5 — BEFORE/AFTER */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-eurostile font-bold text-ssi-dark-blue uppercase italic mb-4 text-center"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            Residential Foundational Releveling
          </h2>
          <p className="text-ssi-dark-blue text-base leading-relaxed mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(["Before", "After"] as const).map((label) => (
              <div
                key={label}
                className="relative aspect-[4/3] bg-ssi-cool-gray bg-cover bg-center rounded-md overflow-hidden"
                style={{ backgroundImage: `url('/images/${label === "Before" ? "res-before" : "res-after"}.jpg')` }}
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

      {/* SECTION 6 — REVIEWS */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-eurostile font-bold text-ssi-dark-blue text-center uppercase mb-12"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
          >
            Check Out What Homeowners Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YelpCard />

            <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 flex flex-col">
              <div className="mb-3">
                <p className="font-bold text-ssi-dark-blue text-base">Park L.</p>
              </div>
              <p className="text-ssi-dark-blue text-sm leading-relaxed flex-1">
                We had a great experience with Structural Systems. Our initial
                encounter was with Damien, who came out to our property to assess
                our issues. He was very professional, honest and took the time
                to explain the project plan.
              </p>
              <div className="flex items-center gap-2 mt-6">
                <span className="text-orange-500 font-bold text-lg">G2</span>
                <div className="flex gap-0.5 text-orange-400 text-sm">
                  ★★★★★
                </div>
              </div>
            </div>

            <YelpCard />
          </div>
        </div>
      </section>

      {/* SECTION 7 — LEAD CAPTURE FORM */}
      <section id="estimate" className="bg-ssi-bright-blue">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-ssi-bright-blue p-8 md:p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <LogoSVG
                  clipId="clip-form-residential"
                  width={208}
                  height={53}
                />
              </div>
              <p className="font-eurostile font-bold text-ssi-orange text-xs uppercase tracking-[0.2em] mb-2">
                Free Homeowner Estimate
              </p>
              <h2
                className="font-eurostile font-bold text-white uppercase leading-none mb-4"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
              >
                Get a Free
                <br />
                <span className="text-ssi-orange">Estimate</span>
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

          <div className="bg-ssi-bright-blue p-8 md:p-12 lg:p-16 md:border-l border-t md:border-t-0 border-white/10">
            <EstimateForm fieldBg="bg-ssi-form-dark" />
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
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-ssi-dark-blue flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="font-eurostile font-bold text-ssi-dark-blue text-[13px] md:text-[15px] leading-tight">
          {children}
        </div>
      </div>
    </div>
  );
}

function YelpCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-bold text-ssi-dark-blue text-sm">
            Structural Systems
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-red-600 text-sm">★★★★★</div>
            <span className="text-ssi-cool-gray text-xs">17 reviews</span>
          </div>
        </div>
        <span className="font-bold text-red-600 text-xl tracking-tight">
          yelp
        </span>
      </div>
      <hr className="mb-3 border-gray-200" />
      <div className="flex items-center gap-2 mb-1">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-ssi-dark-blue text-sm">Abe R.</p>
          <p className="text-ssi-cool-gray text-[11px]">0 &nbsp; 3</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5 text-red-600 text-sm">★★★★★</div>
        <span className="text-ssi-cool-gray text-xs">1/18/2024</span>
      </div>
      <p className="text-ssi-dark-blue text-sm leading-relaxed flex-1">
        Just had our unit in Makaha worked on by Structural Systems and had a
        great experience from Doreen communicating the whole way and actually
        calling us when anything she thought was important to the hard working
        young men hanging off the side of a building. The foreman Fernando has
        done a great job...
      </p>
    </div>
  );
}
