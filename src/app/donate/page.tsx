"use client";
import { useState } from "react";
import { Heart, CheckCircle, Shield} from "lucide-react";

export default function DonatePage() {
  const [amount, setAmount] = useState<number | null>(null);
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [submitted, setSubmitted] = useState(false);

  const presets = [5000, 10000, 25000, 50000, 100000];

  const handleDonate = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const displayAmount = amount ?? (custom ? parseInt(custom) : null);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/kirsten5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-tag mb-3">Give Today</p>
          <h1 className="text-5xl font-bold mb-5" style={{ color: "white" }}>
            Make a Donation
          </h1>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.72)" }}>
            Your contribution helps expand access to learning opportunities and
            child development programmes that change lives.
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
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
          {/* Why Donate */}
          <div>
            <p className="section-tag">Why Your Gift Matters</p>
            <div className="divider-gold" />
            <h2
              className="text-3xl font-bold mb-5"
              style={{ color: "var(--forest)" }}
            >
              Your Support Changes Lives
            </h2>
            <div
              className="space-y-4 text-sm leading-relaxed"
              style={{ color: "var(--soft-gray)" }}
            >
              <p>
                Every donation — no matter the size — directly supports
                educational access, welfare programmes, and community
                development initiatives across Nigeria.
              </p>
              <p>
                Your generosity helps us provide learning materials to
                under-resourced schools, train teachers, run mentorship
                programmes, and deliver welfare support to the most vulnerable
                children.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                {
                  amount: "₦5,000",
                  impact: "Provides essential learning materials for one child",
                },
                {
                  amount: "₦25,000",
                  impact: "Supports a teacher training workshop session",
                },
                {
                  amount: "₦50,000",
                  impact: "Funds a community outreach programme day",
                },
                {
                  amount: "₦100,000",
                  impact: "Sponsors a child welfare intervention package",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl p-4"
                  style={{ background: "var(--cream)" }}
                >
                  <span
                    className="font-bold text-sm shrink-0"
                    style={{
                      color: "var(--forest)",
                      fontFamily: "Playfair Display, serif",
                    }}
                  >
                    {item.amount}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: "var(--soft-gray)" }}
                  >
                    {item.impact}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="mt-8 rounded-xl p-5 flex items-start gap-3"
              style={{ background: "rgba(26,58,42,0.06)" }}
            >
              <Shield
                size={18}
                className="shrink-0 mt-0.5"
                style={{ color: "var(--forest)" }}
              />
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--soft-gray)" }}
              >
                Kirsten & Seth Children&apos;s Foundation is a registered non-profit
                organisation. All donations are used in accordance with our
                stated mission and are subject to our transparency and
                accountability standards.
              </p>
            </div>
          </div>

          {/* Donation Form */}
          <div
            className="rounded-2xl p-10"
            style={{
              background: "white",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <Heart
                  size={56}
                  className="mx-auto mb-4"
                  fill="var(--gold)"
                  style={{ color: "var(--gold)" }}
                />
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: "var(--forest)" }}
                >
                  Thank You!
                </h3>
                <p className="mb-2" style={{ color: "var(--soft-gray)" }}>
                  {displayAmount
                    ? `Your donation of ₦${displayAmount.toLocaleString()} has been received.`
                    : "Your donation has been received."}
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--soft-gray)" }}
                >
                  Together, we are creating brighter futures for children.
                </p>
                <CheckCircle
                  size={24}
                  className="mx-auto"
                  style={{ color: "var(--forest)" }}
                />
              </div>
            ) : (
              <form onSubmit={handleDonate}>
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--forest)" }}
                >
                  Choose Your Gift
                </h3>
                <p
                  className="text-sm mb-7"
                  style={{ color: "var(--soft-gray)" }}
                >
                  All amounts in Nigerian Naira (₦)
                </p>

                {/* Frequency */}
                <div
                  className="flex rounded-lg overflow-hidden mb-6"
                  style={{ border: "1.5px solid rgba(0,0,0,0.1)" }}
                >
                  {(["once", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className="flex-1 py-2.5 text-sm font-semibold transition-all"
                      style={{
                        background:
                          frequency === f ? "var(--forest)" : "transparent",
                        color: frequency === f ? "white" : "var(--soft-gray)",
                      }}
                    >
                      {f === "once" ? "One-time" : "Monthly"}
                    </button>
                  ))}
                </div>

                {/* Preset amounts */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setAmount(p);
                        setCustom("");
                      }}
                      className="py-2.5 rounded-lg text-sm font-semibold transition-all"
                      style={{
                        background:
                          amount === p ? "var(--forest)" : "var(--cream)",
                        color: amount === p ? "var(--gold)" : "var(--charcoal)",
                        border:
                          amount === p
                            ? "2px solid var(--forest)"
                            : "2px solid transparent",
                      }}
                    >
                      ₦{p.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="mb-6">
                  <label
                    className="block text-xs font-semibold mb-1.5"
                    style={{ color: "var(--forest)" }}
                  >
                    Custom Amount (₦)
                  </label>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    value={custom}
                    onChange={(e) => {
                      setCustom(e.target.value);
                      setAmount(null);
                    }}
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

                {/* Donor info */}
                <div className="space-y-4 mb-6">
                  {[
                    {
                      label: "Full Name *",
                      key: "dname",
                      type: "text",
                      placeholder: "Your full name",
                    },
                    {
                      label: "Email Address *",
                      key: "demail",
                      type: "email",
                      placeholder: "your@email.com",
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
                        required
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
                </div>

                <button
                  type="submit"
                  disabled={!amount && !custom}
                  className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Heart size={16} />
                  Donate{" "}
                  {displayAmount ? `₦${displayAmount.toLocaleString()}` : ""}
                  {frequency === "monthly" ? " / month" : ""}
                </button>

                <p
                  className="text-xs text-center mt-4"
                  style={{ color: "var(--soft-gray)" }}
                >
                  Secure donation · Registered NGO · All funds support our
                  mission
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
