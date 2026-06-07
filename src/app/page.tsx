import Link from "next/link";
import { ArrowRight, Heart, Users, BookOpen, Target, CheckCircle, ChevronRight } from "lucide-react";

export default function HomePage() {
  const values = [
    { title: "Integrity", desc: "Transparency, accountability, and ethical practices in all we do." },
    { title: "Compassion", desc: "Children's welfare and dignity remain at the centre of our work." },
    { title: "Equity", desc: "We advocate equal opportunities for all children." },
    { title: "Collaboration", desc: "Sustainable impact achieved through partnerships and community engagement." },
    { title: "Excellence", desc: "High standards in programme delivery and measurable outcomes." },
    { title: "Sustainability", desc: "Long-term solutions that strengthen communities." },
  ];

  const impacts = [
    "Increased access to quality education",
    "Improved learning environments",
    "Enhanced educational outcomes for children",
    "Stronger community participation in child development",
    "Sustainable support systems for vulnerable children",
    "Improved social wellbeing and life opportunities",
  ];

  const getInvolved = [
    { icon: <Users size={28} />, title: "Volunteer", desc: "Use your skills, time, and expertise to support children and communities.", href: "/about/volunteer", cta: "Join Us" },
    { icon: <BookOpen size={28} />, title: "Partner With Us", desc: "Collaborate with us on educational and developmental projects.", href: "/contact", cta: "Partner" },
    { icon: <Target size={28} />, title: "Sponsor a Programme", desc: "Support initiatives designed to improve children's welfare and educational outcomes.", href: "/donate", cta: "Sponsor" },
    { icon: <Heart size={28} />, title: "Donate", desc: "Your contribution helps expand access to learning opportunities and child development programmes.", href: "/donate", cta: "Donate" },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/kirsten4.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
          style={{ background: "var(--gold)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-20 left-0 w-56 h-56 rounded-full opacity-10"
          style={{ background: "var(--gold)", filter: "blur(60px)" }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <p className="section-tag mb-4">
              Kirsten & Seth Children&apos;s Foundation
            </p>
            <h1
              className="text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ color: "white" }}
            >
              EVERY CHILD <span style={{ color: "#fba828" }}>DESERVES</span> TO
              THRIVE.
            </h1>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              We are a non-profit organisation dedicated to advancing the
              welfare, education, and holistic development of children in
              underserved and vulnerable communities across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="btn-primary flex items-center gap-2"
              >
                <Heart size={16} /> Donate Now
              </Link>
              <Link
                href="/what-we-do"
                className="flex items-center gap-2 border-2 border-[#fba828] text-[#fba828] px-6 py-3 rounded-lg hover:bg-[#fba828] hover:text-white transition-all duration-300"
              >
                What We Do
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div className="fade-up delay-2">
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{
                  color: "#fba828",
                  fontFamily: "Playfair Display, serif",
                }}
              >
                Our Impact Goals
              </h3>
              <ul className="space-y-3">
                {impacts.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(255,255,255,0.8)" }}
                  >
                    <CheckCircle
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--gold)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p
                  className="text-xs italic"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Together, we can create brighter futures for children.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
              fill="#fdfaf5"
            />
          </svg>
        </div>
      </section>

      {/* MISSION SNIPPET */}
      <section className="py-24" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">Our Mission</p>
            <div className="divider-accent" />
            <h2
              className="text-4xl font-bold mb-5"
              style={{ color: "var(--navy)" }}
            >
              Equitable Access to Education & Welfare
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--soft-gray)" }}
            >
              To improve the lives of children through equitable access to
              education, welfare support, and sustainable developmental
              programmes that empower communities and promote lifelong learning.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--soft-gray)" }}
            >
              Children are the foundation of every thriving society. Yet
              millions face barriers to quality education, safe environments,
              and growth opportunities. We exist to bridge these gaps — one
              child, one school, one community at a time.
            </p>
            <Link
              href="/about/our-mission"
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                label: "Our Vision",
                text: "A future where every child, regardless of circumstance, achieves their full potential.",
                bg: "var(--navy)",
                accent: "var(--amber)",
                textCol: "rgba(255,255,255,0.75)",
                headCol: "var(--amber)",
                emoji: "🔭",
              },
              {
                label: "Our Reach",
                text: "Working with underserved communities across Nigeria to deliver sustainable interventions.",
                bg: "var(--cream)",
                accent: "var(--coral)",
                textCol: "var(--soft-gray)",
                headCol: "var(--navy)",
                emoji: "🌍",
              },
              {
                label: "Our Team",
                text: "Experienced professionals and volunteers in education, welfare, and community engagement.",
                bg: "var(--cream)",
                accent: "var(--sky)",
                textCol: "var(--soft-gray)",
                headCol: "var(--navy)",
                emoji: "🤝",
              },
              {
                label: "Our Promise",
                text: "Lasting impact — one child, one school, and one community at a time.",
                bg: "var(--navy)",
                accent: "var(--sky)",
                textCol: "rgba(255,255,255,0.75)",
                headCol: "var(--sky)",
                emoji: "✨",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="card-hover rounded-2xl p-6"
                style={{
                  background: card.bg,
                  borderLeft: `4px solid ${card.accent}`,
                }}
              >
                <div className="text-2xl mb-3">{card.emoji}</div>
                <h4
                  className="font-bold text-sm mb-2"
                  style={{ color: card.headCol }}
                >
                  {card.label}
                </h4>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: card.textCol }}
                >
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag">Our Foundation</p>
            <div className="divider-gold mx-auto" />
            <h2
              className="text-4xl font-bold"
              style={{ color: "var(--forest)" }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="card-hover rounded-xl p-7 bg-white"
                style={{ borderLeft: "4px solid var(--gold)" }}
              >
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: "var(--forest)" }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--soft-gray)" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag">Take Action</p>
            <div className="divider-gold mx-auto" />
            <h2
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--forest)" }}
            >
              Get Involved
            </h2>
            <p
              className="max-w-xl mx-auto text-base"
              style={{ color: "var(--soft-gray)" }}
            >
              Creating lasting change requires collective effort. You can
              support our mission in many ways.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getInvolved.map((item, i) => (
              <div
                key={i}
                className="card-hover rounded-xl p-7 text-center bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: "rgba(26,58,42,0.08)",
                    color: "var(--forest)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-bold mb-2"
                  style={{
                    color: "var(--forest)",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--soft-gray)" }}
                >
                  {item.desc}
                </p>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold"
                  style={{ color: "var(--forest-mid)" }}
                >
                  {item.cta} <ChevronRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATION CTA BANNER */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: "var(--navy)" }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10"
            style={{ background: "var(--sky)", filter: "blur(70px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full opacity-10"
            style={{ background: "var(--coral)", filter: "blur(60px)" }}
          />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="section-tag mb-2" style={{ color: "var(--amber)" }}>
            Make a Difference Today
          </p>
          <h2 className="text-4xl font-bold mb-5 text-white">
            Help Us Reach More Children
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Your donation directly supports educational access, welfare
            programmes, and community development initiatives that transform
            children&apos;s lives across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="btn-primary flex items-center gap-2 text-base px-8 py-4"
            >
              <Heart size={18} /> Donate Now
            </Link>
            <Link
              href="/what-we-do"
              className="flex items-center gap-2 border-2 border-[#fba828] text-[#fba828] px-6 py-3 rounded-lg hover:bg-[#fba828] hover:text-white transition-all duration-300"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
