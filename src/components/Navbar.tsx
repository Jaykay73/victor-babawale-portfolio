"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileDown, Terminal, Cpu } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["hero", "focus", "projects", "experience", "skills", "about", "leadership", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "WORK", href: "#projects", section: "projects" },
    { label: "EXPERIENCE", href: "#experience", section: "experience" },
    { label: "SKILLS", href: "#skills", section: "skills" },
    { label: "ABOUT", href: "#about", section: "about" },
    { label: "LEADERSHIP", href: "#leadership", section: "leadership" },
    { label: "CONTACT", href: "#contact", section: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-line shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm tracking-widest text-slate-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-eng-cyan"
        >
          <span className="w-2.5 h-2.5 bg-eng-cyan rounded-full animate-pulse-subtle shadow-[0_0_8px_#22D3EE]"></span>
          <span className="font-bold text-base tracking-wider text-slate-primary group-hover:text-eng-cyan transition-colors">
            {PROFILE.brandHandle}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-muted border-l border-line pl-2 ml-1">
            SYS_001 // EMBEDDED
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-200 rounded relative ${
                  isActive
                    ? "text-eng-cyan bg-eng-cyan-dim border border-eng-cyan/30"
                    : "text-slate-secondary hover:text-slate-primary hover:bg-canvas-secondary/60"
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-eng-cyan rounded-full"></span>
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PROFILE.contact.cvPath}
            download="Babawale_Victor_Resume.pdf"
            className="group flex items-center gap-2 px-3.5 py-1.5 font-mono text-xs text-eng-copper bg-eng-copper-dim border border-eng-copper/40 rounded hover:bg-eng-copper hover:text-canvas transition-all duration-200"
          >
            <FileDown className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            <span>RESUME [PDF]</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-slate-muted border-l border-line pl-3">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-led-blink"></span>
            <span>ONLINE</span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 text-slate-secondary hover:text-slate-primary bg-canvas-secondary border border-line rounded focus:outline-none focus:ring-2 focus:ring-eng-cyan"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-canvas-secondary/95 backdrop-blur-lg border-b border-line px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-line text-xs font-mono text-slate-muted">
            <span>INTERFACE CONTROLS</span>
            <span className="flex items-center gap-1 text-eng-cyan">
              <Cpu className="w-3 h-3" />
              PORTFOLIO // 2026
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2.5 rounded font-mono text-xs text-slate-secondary hover:text-eng-cyan hover:bg-canvas border border-line/60"
              >
                <Terminal className="w-3 h-3 text-eng-cyan" />
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3">
            <a
              href={PROFILE.contact.cvPath}
              download="Babawale_Victor_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 font-mono text-xs text-canvas font-bold bg-eng-copper rounded hover:bg-amber-400 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              DOWNLOAD CV (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
