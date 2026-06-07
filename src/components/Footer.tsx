import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(201,168,76,0.2)" }}
              >
                 <Image src="/kirsten-logo.png" alt="Logo" width={50} height={16} />
              </div>
              <span
                className="font-bold"
                style={{
                  fontFamily: "Playfair Display, serif",
                  color: "var(--gold)",
                }}
              >
                Kirsten & Seth children&apos;s Foundation
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Empowering Children. Transforming Futures. Building Stronger
              Communities.
            </p>
            <div className="mt-5">
              <Link href="/donate" className="btn-primary text-sm inline-block">
                Make a Donation
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{
                color: "var(--gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Our Mission", href: "/about/our-mission" },
                { label: "What We Do", href: "/what-we-do" },
                { label: "Our Approach", href: "/our-approach" },
                { label: "Our Stories", href: "/our-stories" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-amber-300"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{
                color: "var(--gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Get Involved
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Volunteer With Us", href: "/about/volunteer" },
                { label: "Partner With Us", href: "/contact" },
                { label: "Sponsor a Programme", href: "/donate" },
                { label: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-amber-300"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-semibold mb-4"
              style={{
                color: "var(--gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Mail
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                <a
                  href="mailto:info@kirstenandseth.org"
                  className="text-sm hover:text-amber-300 transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  info@kirstenandseth.org
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                <div
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  <p>+234 (0)1-2931890</p>
                  <p>+234 803 321 5749</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                <p
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  92A Ojo Lane, Dolphin Estate,
                  <br />
                  Ikoyi, Lagos.
                </p>
              </li>
              <li className="flex items-start gap-2.5">
                <ExternalLink
                  size={14}
                  className="mt-0.5 shrink-0"
                  style={{ color: "var(--gold)" }}
                />
                <a
                  href="https://www.kirstenandseth.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-amber-300 transition-colors"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  www.kirstenandseth.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Kirsten & Seth Children&apos;s Foundation.
            All rights reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1.5"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Registered Non-Profit Organisation · Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
