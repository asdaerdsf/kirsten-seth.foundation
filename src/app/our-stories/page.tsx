import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export default function OurStoriesPage() {
  const stories = [
    {
      title: "Bringing Learning Resources to Rural Schools",
      excerpt: "In partnership with local educators, we provided over 500 textbooks and learning materials to three under-resourced schools in Lagos State, transforming classroom experiences for hundreds of children.",
      tag: "Education Support",
      emoji: "📚",
    },
    {
      title: "Life Skills for Adolescent Girls",
      excerpt: "Our mentorship programme reached 80 adolescent girls with life skills training, confidence-building workshops, and career awareness sessions — equipping them for futures beyond their immediate circumstances.",
      tag: "Child Development",
      emoji: "🌟",
    },
    {
      title: "Community Engagement in Underserved Areas",
      excerpt: "Working with community leaders in three neighbourhoods, we facilitated awareness campaigns that led to a measurable increase in school enrolment and parent engagement in children's education.",
      tag: "Community Intervention",
      emoji: "🤝",
    },
    {
      title: "Teacher Support Initiative",
      excerpt: "We supported a cohort of primary school teachers with professional development resources and peer learning networks, improving teaching quality and learning outcomes for over 1,000 pupils.",
      tag: "Education Support",
      emoji: "👩‍🏫",
    },
    {
      title: "Psychosocial Support for Vulnerable Children",
      excerpt: "Our psychosocial support initiative identified and provided tailored welfare interventions for children facing social and emotional challenges, helping them re-engage with education and community life.",
      tag: "Child Welfare",
      emoji: "💛",
    },
    {
      title: "Impact Assessment Across Our Programmes",
      excerpt: "Through rigorous monitoring and evaluation, we documented measurable improvements in literacy rates, attendance, and wellbeing scores across our programme communities — providing evidence for expansion.",
      tag: "Research & Impact",
      emoji: "📊",
    },
  ];

  const testimonials = [
    {
      quote: "The learning materials provided by the Foundation were a turning point for our school. Our pupils finally had access to the resources they needed.",
      author: "Head Teacher, Lagos State",
    },
    {
      quote: "The mentorship programme gave our daughters confidence and a sense of purpose. We are grateful for the Foundation's commitment to our community.",
      author: "Parent, Programme Beneficiary",
    },
    {
      quote: "Partnering with Kirsten & Seth has been transformative. Their collaborative approach and dedication to measurable impact set them apart.",
      author: "Community Development Partner",
    },
  ];

  return (
    <>
      {/* Header */}
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/kirsten8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">Impact & Stories</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            Our Stories
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Every story represents a child, a family, or a community whose life
            has been touched by our collective effort. Here are some of the
            journeys we&rsquo;ve shared.
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

      {/* Stories Grid */}
      <section className="py-20" style={{ background: "var(--warm-white)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {stories.map((story, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden card-hover"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div
                  className="h-36 flex items-center justify-center text-5xl"
                  style={{ background: "var(--cream)" }}
                >
                  {story.emoji}
                </div>
                <div className="p-6">
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(26,58,42,0.08)",
                      color: "var(--forest)",
                    }}
                  >
                    {story.tag}
                  </span>
                  <h3
                    className="font-bold mt-3 mb-3 text-lg leading-snug"
                    style={{ color: "var(--forest)" }}
                  >
                    {story.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--soft-gray)" }}
                  >
                    {story.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag">Voices of Impact</p>
            <div className="divider-gold mx-auto" />
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--forest)" }}
            >
              What People Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 card-hover"
                style={{ background: "white" }}
              >
                <Quote
                  size={28}
                  className="mb-4"
                  style={{ color: "var(--gold)" }}
                />
                <p
                  className="text-sm leading-relaxed italic mb-5"
                  style={{ color: "var(--charcoal)" }}
                >
                  &quot;{t.quote}&quot;
                </p>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--forest)" }}
                >
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "white" }}>
            Be Part of the Next Story
          </h2>
          <p className="mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
            Your support makes stories like these possible. Help us write more
            chapters of transformation.
          </p>
          <Link
            href="/donate"
            className="btn-primary inline-flex items-center gap-2"
          >
            Donate to Make a Difference <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
