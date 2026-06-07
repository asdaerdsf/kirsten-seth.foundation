import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function OurMissionPage() {
  const partners = [
    "Educational institutions",
    "Government agencies",
    "NGOs and development organisations",
    "Corporate organisations",
    "Community groups",
    "Philanthropists and donors",
  ];

  return (
    <>
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('kirsten11.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">About Us</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            Our Mission
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Improving the lives of children through equitable access to
            education, welfare support, and sustainable developmental
            programmes.
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

      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <p className="section-tag">Who We Are</p>
            <div className="divider-gold" />
            <h2
              className="text-3xl font-bold mb-5"
              style={{ color: "var(--forest)" }}
            >
              About the Foundation
            </h2>
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "var(--soft-gray)" }}
            >
              <p>
                Kirsten & Seth Children&apos;s Foundation is a non-profit
                organisation committed to advancing child welfare, improving
                educational opportunities, and supporting holistic development
                for children in underserved communities.
              </p>
              <p>
                Our work is driven by the understanding that quality education
                and social support are essential foundations for individual
                growth and national development.
              </p>
              <p>
                Our team consists of experienced professionals and volunteers
                with expertise in education, project coordination, community
                engagement, programme implementation, and monitoring &
                evaluation — enabling us to deliver impactful and sustainable
                interventions.
              </p>
            </div>

            <div className="mt-10">
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "var(--forest)" }}
              >
                Our Vision
              </h3>
              <div
                className="rounded-xl p-6"
                style={{
                  background: "var(--cream)",
                  borderLeft: "4px solid var(--gold)",
                }}
              >
                <p
                  className="italic text-sm leading-relaxed"
                  style={{ color: "var(--charcoal)" }}
                >
                  &quot;A future where every child, regardless of circumstance, has
                  access to quality education, supportive environments, and
                  opportunities to achieve their full potential.&quot;
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3
              className="text-xl font-bold mb-5"
              style={{ color: "var(--forest)" }}
            >
              Partners & Supporters
            </h3>
            <p
              className="text-sm mb-6 leading-relaxed"
              style={{ color: "var(--soft-gray)" }}
            >
              Through collaboration, we increase impact and reach more children.
              We welcome partnerships with:
            </p>
            <ul className="space-y-3 mb-8">
              {partners.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: "var(--charcoal)" }}
                >
                  <CheckCircle
                    size={16}
                    style={{ color: "var(--gold)" }}
                    className="shrink-0"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <div
              className="rounded-2xl p-7 text-center"
              style={{ background: "var(--forest)" }}
            >
              <h4
                className="text-lg font-bold mb-3"
                style={{ color: "var(--gold)" }}
              >
                Become a Partner
              </h4>
              <p
                className="text-sm mb-5"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Collaborate with us to expand our reach and deepen our impact on
                children&apos;s lives.
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 text-sm"
              >
                Get in Touch <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
