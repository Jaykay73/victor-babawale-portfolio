"use client";

import React from "react";
import { ArrowUp, Terminal, Cpu } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-canvas border-t border-line py-12 font-mono text-xs text-slate-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-line/60">
          <div>
            <div className="flex items-center gap-2 text-slate-primary font-bold text-sm mb-1">
              <span className="w-2 h-2 rounded-full bg-eng-cyan"></span>
              <span>{PROFILE.name.toUpperCase()}</span>
            </div>
            <p className="text-slate-secondary">
              {PROFILE.title.toUpperCase()} // UNIVERSITY OF ILORIN (2021&ndash;2026)
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-secondary">
            <a href="#projects" className="hover:text-eng-cyan transition-colors">
              WORK
            </a>
            <a href="#experience" className="hover:text-eng-cyan transition-colors">
              EXPERIENCE
            </a>
            <a href="#skills" className="hover:text-eng-cyan transition-colors">
              SKILLS
            </a>
            <a href="#about" className="hover:text-eng-cyan transition-colors">
              ABOUT
            </a>
            <a href="#leadership" className="hover:text-eng-cyan transition-colors">
              LEADERSHIP
            </a>
            <a href="#contact" className="hover:text-eng-cyan transition-colors">
              CONTACT
            </a>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-canvas-secondary border border-line text-slate-primary hover:border-eng-cyan hover:text-eng-cyan transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>RETURN TO TOP</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Babawale Victor Ayomide. Engineered with restraint.
          </div>
          <div className="flex items-center gap-3">
            <span>LAGOS &bull; ILORIN, NIGERIA</span>
            <span>&bull;</span>
            <span className="text-eng-copper">SYS_RELEASE // 2026.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
