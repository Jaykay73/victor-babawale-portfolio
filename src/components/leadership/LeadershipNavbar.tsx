"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Users, Award, Shield, Cpu, Menu, X, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { PROFILE } from "@/data/portfolioData";

export default function LeadershipNavbar() {
  const { setMode } = usePortfolioTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Vision", href: "#vision" },
    { label: "Executive Roles", href: "#tenures" },
    { label: "Governance Scale", href: "#scale" },
    { label: "Official Honors", href: "#honors" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090D16]/95 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-xl"
          : "bg-transparent border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-[#090D16] font-bold text-sm shadow-lg shadow-amber-500/20">
              VB
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-wider text-slate-100 group-hover:text-amber-400 transition-colors uppercase font-mono">
                VICTOR BABAWALE
              </span>
              <span className="text-[10px] font-mono text-amber-400/90 tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                LEADERSHIP &amp; STEWARDSHIP
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 font-mono text-xs text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-400 transition-colors uppercase tracking-wider py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Portal Switcher & Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Themed Portal Switcher Button */}
            <button
              onClick={() => setMode("embedded")}
              className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-eng-cyan/10 hover:bg-eng-cyan/20 border border-eng-cyan/40 text-eng-cyan font-mono text-xs font-semibold transition-all hover:scale-105 shadow-sm"
              title="Switch to Embedded Systems Engineer Portfolio"
            >
              <Cpu className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              <span>⚡ Switch to Embedded Systems</span>
            </button>

            {/* Resume Button */}
            <a
              href={PROFILE.contact.cvPath}
              download
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-md shadow-amber-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMode("embedded")}
              className="p-1.5 rounded bg-eng-cyan/10 border border-eng-cyan/30 text-eng-cyan text-xs font-mono"
            >
              ⚡ Embedded
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded bg-white/5 border border-white/10 text-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F1A] border-b border-amber-500/20 px-6 py-5 space-y-4 font-mono text-xs animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded bg-white/5 text-slate-200 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setMode("embedded");
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-eng-cyan/15 border border-eng-cyan/40 text-eng-cyan font-bold text-xs"
            >
              <Cpu className="w-4 h-4" />
              <span>Switch to Embedded Systems Site</span>
            </button>
            <a
              href={PROFILE.contact.cvPath}
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
