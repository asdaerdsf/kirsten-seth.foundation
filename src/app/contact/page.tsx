"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, ExternalLink, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const contacts = [
    { icon: <Mail size={22} />, label: "Email", values: ["info@kirstenandseth.org"] },
    { icon: <Phone size={22} />, label: "Phone & Mobile", values: ["+234 (0)1-2931890", "+234 803 321 5749", "+234 811 304 1092", "+234 809 800 0665"] },
    { icon: <MapPin size={22} />, label: "Address", values: ["92A Ojo Lane, Dolphin Estate,", "Ikoyi, Lagos."] },
    { icon: <ExternalLink size={22} />, label: "Website", values: ["www.kirstenandseth.org"] },
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
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('kirsten13.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">Reach Out</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            Contact Us
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            We welcome opportunities to collaborate, support, and create
            meaningful impact for children and communities.
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <p className="section-tag">Get in Touch</p>
            <div className="divider-gold" />
            <h2
              className="text-3xl font-bold mb-5"
              style={{ color: "var(--forest)" }}
            >
              Kirsten & Seth Children&apos;s Foundation
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--soft-gray)" }}
            >
              Whether you want to partner with us, support our work, volunteer,
              or simply learn more about what we do — we&quot;d love to hear from
              you.
            </p>

            <div className="space-y-6">
              {contacts.map((c, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(26,58,42,0.08)",
                      color: "var(--forest)",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{
                        color: "var(--gold)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {c.label}
                    </p>
                    {c.values.map((v, j) => (
                      <p
                        key={j}
                        className="text-sm"
                        style={{ color: "var(--charcoal)" }}
                      >
                        {v}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-10 rounded-2xl overflow-hidden"
              style={{ height: "240px", background: "var(--cream)" }}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center"
                style={{ color: "var(--soft-gray)" }}
              >
                <MapPin
                  size={36}
                  className="mb-2"
                  style={{ color: "var(--forest)" }}
                />
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--forest)" }}
                >
                  Dolphin Estate, Ikoyi, Lagos
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--soft-gray)" }}
                >
                  92A Ojo Lane
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className="rounded-2xl p-10"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle
                  size={56}
                  className="mx-auto mb-4"
                  style={{ color: "var(--forest)" }}
                />
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--forest)" }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--soft-gray)" }}>
                  Thank you for reaching out. We&apos;ll respond as soon as possible.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--forest)" }}
                >
                  Send a Message
                </h3>
                <p
                  className="text-sm mb-7"
                  style={{ color: "var(--soft-gray)" }}
                >
                  Fill in the form and we&apos;ll get back to you shortly.
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
                      label: "Subject",
                      key: "subject",
                      type: "text",
                      placeholder: "How can we help?",
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
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none"
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
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us more about your enquiry..."
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
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
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
