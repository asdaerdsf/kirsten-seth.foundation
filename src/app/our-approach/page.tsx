import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OurApproachPage() {
  const steps = [
    {
      num: "01",
      title: "Identify",
      desc: "Understanding community needs through engagement and thorough assessment. We listen before we act, ensuring our interventions are grounded in the realities children and families face daily.",
      color: "#1a3a2a",
    },
    {
      num: "02",
      title: "Collaborate",
      desc: "Working with schools, families, community leaders, and partners. Sustainable change is never achieved alone — we build coalitions of dedicated individuals and organisations.",
      color: "#2d5a3e",
    },
    {
      num: "03",
      title: "Implement",
      desc: "Delivering practical, child-focused interventions that are tailored to each community's unique needs and cultural context, ensuring relevance and effectiveness.",
      color: "#3d7a52",
    },
    {
      num: "04",
      title: "Measure",
      desc: "Tracking outcomes and evaluating impact rigorously. Data-driven insights help us understand what works, refine our approaches, and demonstrate accountability to our stakeholders.",
      color: "#1a3a2a",
    },
    {
      num: "05",
      title: "Sustain",
      desc: "Creating long-term solutions that continue beyond individual projects. We build local capacity so communities can maintain and expand the gains achieved together.",
      color: "#2d5a3e",
    },
  ];

  const challenges = [
    "Limited access to quality learning resources",
    "Inadequate educational infrastructure",
    "Poor learning environments",
    "Barriers affecting school attendance and retention",
    "Need for sustainable community-based interventions",
    "Social and welfare challenges impacting children's development",
  ];

  return (
    <>
      {/* Header */}
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/kirsten13.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">How We Work</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            Our Approach
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            We believe meaningful change happens when communities are involved
            in creating solutions. Our approach is participatory,
            evidence-based, and community-centred.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 50L1440 50L1440 15C1200 45 960 0 720 15C480 30 240 0 0 15L0 50Z"
              fill="#fdfaf5"
            />
          </svg>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="section-tag">Our Process</p>
            <div className="divider-gold mx-auto" />
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--forest)" }}
            >
              Five-Step Framework
            </h2>
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 rounded-2xl p-7 card-hover"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 text-2xl font-bold"
                  style={{
                    background: step.color,
                    color: "var(--gold)",
                    fontFamily: "Playfair Display, serif",
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--forest)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--soft-gray)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges we address */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-tag">Context</p>
            <div className="divider-gold" />
            <h2
              className="text-3xl font-bold mb-5"
              style={{ color: "var(--forest)" }}
            >
              Challenges We Address
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--soft-gray)" }}
            >
              Over time, we have developed extensive insight into the challenges
              affecting basic education delivery in Nigeria. Our programmes are
              designed to directly tackle these barriers.
            </p>
            <ul className="space-y-3">
              {challenges.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--charcoal)" }}
                >
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5"
                    style={{
                      background: "var(--forest)",
                      color: "var(--gold)",
                    }}
                  >
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: "var(--forest)" }}
          >
            <p className="text-6xl mb-4">🎯</p>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              Our Goal
            </h3>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--soft-gray)" }}
            >
              &quot;A future where every child, regardless of circumstance, has
              access to quality education, supportive environments, and
              opportunities to achieve their full potential.&quot;
            </p>
            <div className="mt-8">
              <Link
                href="/donate"
                className="btn-primary inline-flex items-center gap-2"
              >
                Support Our Mission <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
