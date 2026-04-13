import Header from "./_components/Header";
import Footer from "./_components/Footer";
import LogoSVG from "./_components/LogoSVG";
import EstimateForm from "./_components/EstimateForm";

const residentialSolutions = [
  "Foundation Repair & Releveling",
  "Void Filling & Compaction Grouting",
  "Retaining Wall Stabilization",
  "Expansive Clay Stabilization",
  "Slope Stabilization",
  "Geotechnical Investigations & Reports",
];

const commercialSolutions = [
  "Concrete Split Repairs",
  "Painting & Waterproofing",
  "Guardrail & Safety Installation",
  "Post Tension Cable Repair",
  "Window & Sliding Door Replacements",
  "Commercial Concrete & Grouting",
];

const articles = [
  {
    tag: "Residential",
    title: "Signs Your Foundation Needs Repair",
    body:
      "Learn to identify warning signs that your home's foundation may need repair before costly damage occurs.",
    image: "/images/article-crack.jpg",
  },
  {
    tag: "Commercial",
    title: "Foundational Challenges in Commercial Buildings",
    body:
      "Explore the unique foundation issues faced by commercial properties and how to address them effectively.",
    image: "/images/article-commercial.jpg",
  },
  {
    tag: "Engineering",
    title: "How Soil Conditions Affect Your Foundation",
    body:
      "Understanding Hawaii's clay, fill, and coastal soils — and what homeowners need to know.",
    image: "/images/article-soil.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header clipId="clip-hdr-main" />

      {/* SECTION 2 — HERO BANNER */}
      <section className="relative pb-10 bg-ssi-charcoal bg-cover bg-center overflow-visible" style={{ backgroundImage: "url('/images/hero-worker.jpg')" }}>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-16 pb-12">
          <div className="flex justify-end">
            <div className="bg-white px-12 py-14 max-w-xl">
              <h1 className="font-eurostile leading-[1.1] mb-6">
                <span className="block font-normal text-ssi-dark-blue text-[clamp(1.4rem,2.5vw,1.8rem)] mb-1">
                  We Build
                </span>
                <span className="block font-bold uppercase text-ssi-orange text-[clamp(2.2rem,4.5vw,3.2rem)] tracking-tight leading-[1.05]">
                  Strong
                  <br />
                  Foundations
                </span>
                <span className="block font-bold uppercase text-ssi-dark-blue text-[clamp(2.2rem,4.5vw,3.2rem)] tracking-tight leading-[1.05]">
                  Above and
                  <br />
                  Below the
                  <br />
                  Surface.
                </span>
              </h1>
              <a
                href="#contact"
                className="inline-block font-eurostile font-bold uppercase tracking-wider text-sm text-ssi-orange hover:text-ssi-orange/80 transition border-b-2 border-ssi-orange pb-0.5"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Residential Services overlapping card */}
        <div className="relative z-20 px-6 -mb-[160px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex shadow-xl">
              <div className="bg-white px-10 py-8 flex-1">
                <h2 className="font-eurostile font-bold uppercase text-[clamp(1.6rem,3vw,2rem)] leading-tight text-ssi-dark-blue">
                  Residential
                  <br />
                  <span className="text-ssi-orange">Services</span>
                </h2>
                <p className="text-ssi-dark-blue text-[13px] leading-relaxed mt-3 max-w-md">
                  Homeowners and residential property managers can rely on
                  Structural Systems to provide time-tested solutions to their
                  foundation problems. With our experience and range of
                  foundation systems at our disposal, we can permanently fix
                  that hard-to-close door or window that refuses to open.
                </p>
                <h3 className="font-eurostile font-bold text-ssi-dark-blue text-base mt-5 mb-2">
                  Solutions
                </h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12px] text-ssi-dark-blue">
                  {residentialSolutions.map((s) => (
                    <li key={s} className="flex items-start gap-1.5">
                      <span className="text-ssi-orange mt-0.5">▶</span> {s}
                    </li>
                  ))}
                </ul>
                <a
                  href="#estimate"
                  className="inline-block mt-5 font-eurostile font-bold uppercase tracking-wider text-[13px] bg-ssi-orange text-white px-6 py-3 hover:brightness-110 transition"
                >
                  Get a Free Estimate
                </a>
              </div>
              <div className="relative w-[380px] flex-shrink-0 bg-ssi-charcoal bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/residential-concrete.jpg')" }}>
                <div className="absolute inset-0 bg-ssi-dark-blue/60" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8 py-10">
                  <span className="font-eurostile font-bold text-white text-[clamp(2.5rem,5vw,3.5rem)] leading-none">
                    40+ Years
                  </span>
                  <p className="text-white/90 text-sm mt-3 leading-relaxed">
                    Of combined foundation research,
                    <br />
                    development, and proven solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[160px] bg-white" />

      {/* SECTION 3 — COMMERCIAL SERVICES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex shadow-xl">
            <div className="relative w-[420px] flex-shrink-0 bg-ssi-charcoal bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/commercial-crane.jpg')" }}>
              <div className="absolute inset-0 bg-ssi-bright-blue/70" />
              <div className="relative z-10 flex flex-col justify-end h-full px-8 py-8">
                <div className="font-eurostile font-bold text-white text-[clamp(3rem,5vw,4.5rem)] leading-none">
                  100+ Ft.
                </div>
                <p className="text-white/90 text-[13px] leading-relaxed mt-2 max-w-[260px]">
                  Our fleet handles low-overhead, tight-space, and large-scale
                  projects up to 100+ feet.
                </p>
              </div>
            </div>
            <div className="bg-white px-10 py-8 flex-1">
              <h2 className="font-eurostile font-bold uppercase text-[clamp(1.6rem,3vw,2rem)] leading-tight text-ssi-dark-blue">
                Commercial
                <br />
                <span className="text-ssi-orange">Services</span>
              </h2>
              <p className="text-ssi-dark-blue text-[13px] leading-relaxed mt-3 max-w-md">
                From micro piles to deep, rock drilling, we have the right rig
                for your job. Our fleet handles low-overhead, tight-space, and
                large-scale projects up to 100+ feet. Our versatile range of
                drills/equipment offers solutions.
              </p>
              <h3 className="font-eurostile font-bold text-ssi-dark-blue text-base mt-5 mb-2">
                Solutions
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-[12px] text-ssi-dark-blue">
                {commercialSolutions.map((s) => (
                  <li key={s} className="flex items-start gap-1.5">
                    <span className="text-ssi-orange mt-0.5">▶</span> {s}
                  </li>
                ))}
              </ul>
              <a
                href="#estimate"
                className="inline-block mt-5 font-eurostile font-bold uppercase tracking-wider text-[13px] bg-ssi-orange text-white px-6 py-3 hover:brightness-110 transition"
              >
                Get a Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ABOUT US */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex shadow-xl">
            <div className="bg-white px-10 py-8 flex-1">
              <h2 className="font-eurostile font-bold uppercase text-[clamp(1.6rem,3vw,2rem)] leading-tight text-ssi-dark-blue">
                About Us
                <br />
                <span className="text-ssi-orange">
                  Our Structural Approach
                </span>
              </h2>
              <p className="text-ssi-dark-blue text-[13px] leading-relaxed mt-3 max-w-md">
                From foundation repairs in neighborhoods like Manoa, Ewa Beach,
                Palolo Valley, and Waikane, to restoring and strengthening
                venues across Oahu, and the neighboring islands, our
                experienced team brings proven methods, custom solutions, and
                unmatched workmanship to every project.
              </p>
              <a
                href="#contact"
                className="inline-block mt-5 font-eurostile font-bold uppercase tracking-wider text-[13px] text-ssi-orange hover:text-ssi-orange/80 transition border-b-2 border-ssi-orange pb-0.5"
              >
                Contact Us
              </a>
            </div>
            <div className="relative w-[420px] flex-shrink-0 bg-ssi-charcoal bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/about-team.jpg')" }}>
              <div className="absolute inset-0 bg-ssi-dark-blue/40" />
              <div className="relative z-10 flex flex-col justify-center h-full px-10 py-10">
                <p className="font-eurostile font-bold text-white text-[clamp(1.8rem,3vw,2.4rem)] leading-tight italic">
                  Local
                  <br />
                  Expertise.
                </p>
                <p className="font-eurostile font-bold text-ssi-orange text-[clamp(1.8rem,3vw,2.4rem)] leading-tight italic mt-2">
                  Lasting
                  <br />
                  Results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — ARTICLES */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end mb-6">
            <a
              href="#"
              className="font-eurostile font-bold text-ssi-dark-blue text-[12px] uppercase tracking-wider hover:text-ssi-orange transition"
            >
              View all articles →
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {articles.map((a) => (
              <div
                key={a.title}
                className="bg-white rounded shadow-[0_2px_15px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col"
              >
                <div className="p-5 pb-0">
                  <span className="font-eurostile font-bold uppercase text-[10px] tracking-wider text-white bg-ssi-orange px-3 py-1 inline-block">
                    {a.tag}
                  </span>
                </div>
                <div className="relative h-[180px] bg-ssi-cool-gray bg-cover bg-center mt-4 mx-3 rounded" style={{ backgroundImage: `url('${a.image}')` }} />
                <div className="p-5 pt-4 flex flex-col flex-1">
                  <h3 className="font-eurostile font-bold text-ssi-dark-blue text-[14px] leading-tight mb-2">
                    {a.title}
                  </h3>
                  <p className="text-ssi-dark-blue text-[12px] leading-relaxed flex-1">
                    {a.body}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 font-eurostile font-bold uppercase tracking-wider text-[11px] bg-ssi-orange text-white px-5 py-2 hover:brightness-110 transition self-start"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — 40 YEARS BADGE + MISSION */}
      <div className="relative z-20 px-6 -mb-[80px]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.12)] px-8 py-6 flex items-center gap-6 max-w-3xl mx-auto">
            <div className="flex-shrink-0">
              <svg
                width="120"
                height="140"
                viewBox="0 0 120 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M60 5 L110 35 L110 110 L60 135 L10 110 L10 35 Z"
                  fill="#3e4242"
                  stroke="#3e4242"
                  strokeWidth={2}
                />
                <path
                  d="M60 12 L104 38 L104 106 L60 128 L16 106 L16 38 Z"
                  fill="#f26e22"
                />
                <path
                  d="M60 12 L104 38 L104 70 L60 55 L16 70 L16 38 Z"
                  fill="#d4601e"
                  opacity={0.4}
                />
                <text
                  x="60"
                  y="62"
                  textAnchor="middle"
                  fontFamily="'Michroma', sans-serif"
                  fontSize={32}
                  fontWeight="bold"
                  fill="white"
                >
                  40
                </text>
                <text
                  x="60"
                  y="80"
                  textAnchor="middle"
                  fontFamily="'Michroma', sans-serif"
                  fontSize={11}
                  fontWeight="bold"
                  fill="white"
                  letterSpacing={2}
                >
                  YEARS
                </text>
                <text
                  x="60"
                  y="100"
                  textAnchor="middle"
                  fontFamily="'Source Sans 3', sans-serif"
                  fontSize={7}
                  fill="white"
                  letterSpacing={1}
                >
                  FAMILY OWNED
                </text>
                <text
                  x="60"
                  y="112"
                  textAnchor="middle"
                  fontFamily="'Source Sans 3', sans-serif"
                  fontSize={7}
                  fill="white"
                  letterSpacing={1}
                >
                  &amp; OPERATED
                </text>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-ssi-dark-blue text-[13px] leading-relaxed">
                Our purpose is to protect, preserve and repair Hawai&apos;i&apos;s
                built environment by addressing challenging soil conditions,
                restoring structural integrity, and reinforcing the foundations
                that sustain homes, businesses, and communities.
              </p>
              <div className="flex items-center gap-8 mt-4">
                <a
                  href="#contact"
                  className="font-eurostile font-bold uppercase tracking-wider text-[12px] text-ssi-orange hover:text-ssi-orange/80 transition border-b-2 border-ssi-orange pb-0.5"
                >
                  Contact Us
                </a>
                <span className="font-bold text-ssi-dark-blue text-[12px]">
                  Call Us: (808) 845-2474
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#eceeed] pt-[100px] pb-14 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-10">
            <div className="flex-1">
              <h2 className="font-eurostile font-bold text-[clamp(1.4rem,2.5vw,1.8rem)] mb-3">
                <span className="text-ssi-dark-blue">Our </span>
                <span className="text-ssi-orange">Mission</span>
              </h2>
              <p className="text-ssi-dark-blue text-[13px] leading-relaxed">
                Deliver reliable, engineered structural solutions that
                strengthen Hawai&apos;i&apos;s buildings from below and above the
                surface. We are dedicated to ensuring safety, stability, and
                long-term performance through innovative foundation systems
                with quality and safety.
              </p>
            </div>
            <div className="flex-shrink-0 mt-4">
              <svg
                width="260"
                height="180"
                viewBox="0 0 260 180"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 140 C25 120, 40 110, 50 105 C55 100, 58 90, 55 80 C58 75, 65 78, 68 85 C72 90, 78 95, 75 105 C72 115, 65 130, 55 140 C45 148, 30 148, 20 140Z" fill="#245e82" opacity={0.75} />
                <path d="M85 95 C88 88, 95 85, 100 87 C105 85, 110 88, 108 93 C112 90, 118 92, 116 97 C114 102, 108 105, 102 103 C96 105, 88 102, 85 95Z" fill="#245e82" opacity={0.75} />
                <path d="M88 78 C90 74, 96 73, 98 77 C100 81, 95 84, 91 82 C88 81, 87 80, 88 78Z" fill="#245e82" opacity={0.75} />
                <path d="M95 68 C100 64, 115 62, 122 65 C126 67, 124 72, 118 72 C112 73, 100 72, 95 68Z" fill="#245e82" opacity={0.75} />
                <path d="M135 58 C138 50, 148 46, 155 48 C160 44, 168 46, 166 52 C170 50, 175 53, 172 58 C168 62, 158 65, 150 63 C142 64, 135 62, 135 58Z" fill="#245e82" opacity={0.75} />
                <path d="M190 38 C194 30, 205 28, 212 32 C218 36, 216 44, 210 46 C204 48, 194 46, 190 38Z" fill="#245e82" opacity={0.75} />
                <path d="M200 20 C203 16, 208 15, 210 18 C212 22, 208 25, 204 24 C201 23, 199 22, 200 20Z" fill="#245e82" opacity={0.75} />
                <path d="M100 108 C103 105, 108 104, 110 107 C111 110, 107 112, 103 111 C100 110, 99 109, 100 108Z" fill="#245e82" opacity={0.75} />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — LEAD CAPTURE FORM */}
      <section id="estimate" className="bg-ssi-bright-blue">
        <div className="grid grid-cols-2">
          <div className="bg-ssi-bright-blue p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="mb-10">
                <LogoSVG clipId="clip-form-main" />
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

          <div className="bg-ssi-bright-blue p-12 lg:p-16 border-l border-white/10">
            <EstimateForm fieldBg="bg-ssi-form-dark" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

