"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "Our Stories", href: "/our-stories" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "var(--forest)" }}
          >
            <Image src="/kirsten-logo.png" alt="Logo" width={50} height={16} />
          </div>
          <div>
            <p
              className="font-bold text-sm leading-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                color: scrolled ? "var(--forest)" : "white",
              }}
            >
              Kirsten & Seth
            </p>
            <p
              className="text-xs leading-tight"
              style={{
                color: scrolled ? "#fba828" : "btn-primary",
                letterSpacing: "0.06em",
              }}
            >
              Children&apos;s Foundation
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, 1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              style={{
                color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.9)",
              }}
            >
              {l.label}
            </Link>
          ))}

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              className="nav-link text-sm flex items-center gap-1"
              style={{
                color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.9)",
              }}
            >
              About Us{" "}
              <ChevronDown
                size={14}
                className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-52 rounded-lg shadow-xl py-2 z-50"
                style={{
                  background: "white",
                  border: "1px solid rgba(201,168,76,0.2)",
                }}
              >
                <Link
                  href="/about/our-mission"
                  className="block px-4 py-3 text-sm hover:bg-amber-50 transition-colors"
                  style={{ color: "var(--charcoal)" }}
                  onClick={() => setAboutOpen(false)}
                >
                  <span className="font-medium">Our Mission</span>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--soft-gray)" }}
                  >
                    What drives our work
                  </p>
                </Link>
                <Link
                  href="/about/volunteer"
                  className="block px-4 py-3 text-sm hover:bg-amber-50 transition-colors"
                  style={{ color: "var(--charcoal)" }}
                  onClick={() => setAboutOpen(false)}
                >
                  <span className="font-medium">Become a Volunteer</span>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--soft-gray)" }}
                  >
                    Join our mission
                  </p>
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link text-sm"
              style={{
                color: scrolled ? "var(--charcoal)" : "rgba(255,255,255,0.9)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Donate CTA */}
        <div className="hidden lg:block" style={{ color: "#fba828" }}>
          <Link
            href="/donate"
            className="btn-primary flex items-center gap-2 text-base px-8 py-4"
          >
            <Heart size={18} /> Donate Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: scrolled ? "var(--charcoal)" : "white" }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t border-amber-100 px-6 py-4">
          <Link
            href="/"
            className="block py-3 text-sm font-medium border-b border-gray-100"
            style={{ color: "var(--charcoal)" }}
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <div className="border-b border-gray-100">
            <button
              className="w-full text-left py-3 text-sm font-medium flex items-center justify-between"
              style={{ color: "var(--charcoal)" }}
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
            >
              About Us{" "}
              <ChevronDown
                size={14}
                className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 pb-2">
                <Link
                  href="/about/our-mission"
                  className="block py-2 text-sm"
                  style={{ color: "var(--soft-gray)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Our Mission
                </Link>
                <Link
                  href="/about/volunteer"
                  className="block py-2 text-sm"
                  style={{ color: "var(--soft-gray)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Become a Volunteer
                </Link>
              </div>
            )}
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium border-b border-gray-100"
              style={{ color: "var(--charcoal)" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}

          <div className="pt-4">
            <Link
              href="/donate"
              className="btn-primary flex items-center gap-2 text-base px-8 py-4"
            >
              <Heart size={18} /> Donate Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
