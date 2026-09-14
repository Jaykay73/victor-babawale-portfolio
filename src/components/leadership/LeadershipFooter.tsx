"use client";

import React from "react";
import Link from "next/link";
import { Cpu, ArrowUp, Shield, Instagram, Facebook } from "lucide-react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";
import { PROFILE } from "@/data/portfolioData";

export default function LeadershipFooter() {
  const { setMode } = usePortfolioTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05070D] border-t border-amber-500/20 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              VB
            </div>
            <div>
              <span className="font-bold text-slate-200 tracking-wider">
                BABAWALE VICTOR AYOMIDE
              </span>
              <span className="text-[10px] text-amber-400/80 block">
                Executive Leadership &amp; Community Governance
              </span>
            </div>
          </div>

          {/* Social Links & Portal Switcher */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE.contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors flex items-center gap-1.5"
              title="Instagram Profile"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@babs_victor</span>
            </a>
            <a
              href={PROFILE.contact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
              title="Facebook Profile"
            >
              <Facebook className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>

            <span className="text-white/20 hidden sm:inline">|</span>

            <button
              onClick={() => setMode("embedded")}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-eng-cyan/10 border border-eng-cyan/30 text-eng-cyan hover:bg-eng-cyan/20 transition-all font-semibold"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Switch to Embedded Systems</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Babawale Victor Ayomide. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Christ Apostolic Church Students Association // University of Ilorin</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
