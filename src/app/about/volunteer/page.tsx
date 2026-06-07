"use client";
import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function VolunteerPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", skills: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    { emoji: "📖", title: "Education Support", desc: "Assist with literacy, tutoring, and educational activities for children." },
    { emoji: "🎨", title: "Creative & Arts", desc: "Lead creative workshops in art, music, drama, or storytelling." },
    { emoji: "💻", title: "Technology & IT", desc: "Support digital literacy programmes and tech infrastructure." },
    { emoji: "📋", title: "Programme Coordination", desc: "Help plan, organise, and coordinate community programmes." },
    { emoji: "📢", title: "Advocacy & Communications", desc: "Champion our mission through storytelling and outreach." },
    { emoji: "📊", title: "Research & M&E", desc: "Support needs assessments, data collection, and impact evaluation." },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/kirsten10.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">Get Involved</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            Become a Volunteer
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Use your skills, time, and expertise to support children and
            communities. Together, we can create brighter futures.
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-tag">Volunteer Roles</p>
            <div className="divider-gold mx-auto" />
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--forest)" }}
            >
              How You Can Contribute
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {roles.map((role, i) => (
              <div
                key={i}
                className="rounded-xl p-6 card-hover text-center"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="text-4xl mb-3">{role.emoji}</div>
                <h3
                  className="font-bold mb-2"
                  style={{ color: "var(--forest)" }}
                >
                  {role.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--soft-gray)" }}
                >
                  {role.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <div
              className="rounded-2xl p-10"
              style={{
                background: "white",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle
                    size={56}
                    className="mx-auto mb-4"
                    style={{ color: "var(--forest)" }}
                  />
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: "var(--forest)" }}
                  >
                    Application Received!
                  </h3>
                  <p className="mb-6" style={{ color: "var(--soft-gray)" }}>
                    Thank you for your interest in volunteering with us. We&apos;ll
                    be in touch shortly.
                  </p>
                  <Link
                    href="/"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Return Home <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <>
                  <h3
                    className="text-2xl font-bold mb-2"
                    style={{ color: "var(--forest)" }}
                  >
                    Volunteer Application
                  </h3>
                  <p
                    className="text-sm mb-7"
                    style={{ color: "var(--soft-gray)" }}
                  >
                    Fill in the form below and we&apos;ll get back to you with next
                    steps.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      {
                        label: "Full Name *",
                        key: "name",
                        type: "text",
                        placeholder: "Your full name",
                      },
                      {
                        label: "Email Address *",
                        key: "email",
                        type: "email",
                        placeholder: "your@email.com",
                      },
                      {
                        label: "Phone Number",
                        key: "phone",
                        type: "tel",
                        placeholder: "+234 ...",
                      },
                      {
                        label: "Skills / Area of Expertise",
                        key: "skills",
                        type: "text",
                        placeholder: "e.g. Teaching, IT, Project Management",
                      },
                    ].map((field) => (
                      <div key={field.key}>
                        <label
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: "var(--forest)" }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) =>
                            setForm({ ...form, [field.key]: e.target.value })
                          }
                          required={field.label.includes("*")}
                          className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                          style={{
                            border: "1.5px solid rgba(0,0,0,0.12)",
                            background: "var(--cream)",
                            color: "var(--charcoal)",
                          }}
                          onFocus={(e) =>
                            (e.target.style.borderColor = "var(--gold)")
                          }
                          onBlur={(e) =>
                            (e.target.style.borderColor = "rgba(0,0,0,0.12)")
                          }
                        />
                      </div>
                    ))}
                    <div>
                      <label
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: "var(--forest)" }}
                      >
                        Why do you want to volunteer?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your motivation..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
                        style={{
                          border: "1.5px solid rgba(0,0,0,0.12)",
                          background: "var(--cream)",
                          color: "var(--charcoal)",
                        }}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--gold)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor = "rgba(0,0,0,0.12)")
                        }
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full py-4 text-sm"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
