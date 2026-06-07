import Link from "next/link";
import { BookOpen, Heart, Users, BarChart2, ArrowRight } from "lucide-react";

export default function WhatWeDoPage() {
  const programmes = [
    {
      icon: <BookOpen size={32} />,
      title: "Education Support Programmes",
      desc: "We promote access to quality education through initiatives aimed at improving learning environments, supporting schools, and enhancing educational outcomes.",
      items: [
        "School support initiatives",
        "Provision of educational materials and learning resources",
        "Teacher support and training programmes",
        "Literacy and numeracy enhancement projects",
        "Educational advocacy campaigns",
      ],
    },
    {
      icon: <Heart size={32} />,
      title: "Child Welfare & Development",
      desc: "We support programmes that contribute to the emotional, social, and personal development of children.",
      items: [
        "Child wellbeing initiatives",
        "Life skills development",
        "Mentorship programmes",
        "Health and welfare awareness campaigns",
        "Psychosocial support initiatives",
      ],
    },
    {
      icon: <Users size={32} />,
      title: "Community-Based Interventions",
      desc: "We work alongside local communities to develop sustainable solutions that improve children's access to education and welfare support.",
      items: [
        "Community engagement projects",
        "Educational outreach programmes",
        "Stakeholder collaboration",
        "Awareness campaigns",
        "Capacity-building initiatives",
      ],
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Research, Monitoring & Impact",
      desc: "Effective programmes require measurable outcomes. We support evidence-based approaches to ensure our work delivers real change.",
      items: [
        "Needs assessments",
        "Programme monitoring and evaluation",
        "Impact measurement",
        "Educational research",
        "Data-driven interventions",
      ],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('kirsten5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">Our Programmes</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            What We Do
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Through sustainable interventions and community-focused programmes,
            we work to create environments where children can access quality
            education and realise their full potential.
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

      {/* Programmes */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {programmes.map((prog, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 card-hover"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(26,58,42,0.08)",
                    color: "var(--forest)",
                  }}
                >
                  {prog.icon}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--forest)" }}
                >
                  {prog.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--soft-gray)" }}
                >
                  {prog.desc}
                </p>
                <ul className="space-y-2">
                  {prog.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: "var(--charcoal)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--gold)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--forest)" }}
          >
            Support Our Programmes
          </h2>
          <p className="mb-8" style={{ color: "var(--soft-gray)" }}>
            Your support enables us to reach more children and communities with
            life-changing programmes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="btn-primary flex items-center gap-2"
            >
              Donate Now <ArrowRight size={14} />
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
