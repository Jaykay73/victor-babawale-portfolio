"use client";

import React, { useState, useEffect } from "react";
import { Cpu, Users, ArrowRight, ChevronRight } from "lucide-react";
import { usePortfolioTheme } from "@/context/PortfolioThemeContext";

type AnimationPhase = "name-enter" | "name-visible" | "name-fade" | "options-enter";

export default function LoadingScreen() {
  const { setMode, hasSelectedPath } = usePortfolioTheme();
  const [phase, setPhase] = useState<AnimationPhase>("name-enter");
  const [cardsReady, setCardsReady] = useState(false);
  const [selectedAnimation, setSelectedAnimation] = useState<"embedded" | "leadership" | null>(null);

  useEffect(() => {
    // Stage 1: Trigger name entrance
    const enterTimer = setTimeout(() => {
      setPhase("name-visible");
    }, 60);

    // Stage 2: Trigger name fade-out after visitor has read it
    const fadeTimer = setTimeout(() => {
      setPhase("name-fade");
    }, 1800);

    // Stage 3: Trigger options entrance once name has fully faded out
    const optionsTimer = setTimeout(() => {
      setPhase("options-enter");
      // Trigger card stagger slightly after container mounts
      setTimeout(() => setCardsReady(true), 100);
    }, 2450);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(fadeTimer);
      clearTimeout(optionsTimer);
    };
  }, []);

  const skipToOptions = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (phase !== "options-enter") {
      setPhase("options-enter");
      setTimeout(() => setCardsReady(true), 50);
    }
  };

  if (hasSelectedPath && !selectedAnimation) return null;

  const handleSelect = (choice: "embedded" | "leadership") => {
    setSelectedAnimation(choice);
    setTimeout(() => {
      setMode(choice);
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04060E] px-4 py-8 overflow-y-auto transition-all duration-500 ${
        selectedAnimation ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
      onClick={phase !== "options-enter" ? () => skipToOptions() : undefined}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eng-cyan/10 rounded-full blur-[140px] pointer-events-none transition-opacity duration-1000"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none transition-opacity duration-1000"></div>

      {/* Subtle Skip button during name sequence */}
      {phase !== "options-enter" && (
        <button
          onClick={skipToOptions}
          className="absolute top-6 right-6 z-20 font-mono text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
        >
          <span>Skip</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      )}

      <div className="max-w-4xl w-full mx-auto text-center relative z-10 my-auto">
        {/* ============================================================ */}
        {/* PHASE 1: NAME ANIMATION & FADE OUT                           */}
        {/* ============================================================ */}
        {phase !== "options-enter" && (
          <div
            className={`flex flex-col items-center justify-center min-h-[340px] space-y-5 transition-all duration-700 ease-out cursor-pointer ${
              phase === "name-enter"
                ? "opacity-0 scale-95 translate-y-4 blur-sm"
                : phase === "name-visible"
                ? "opacity-100 scale-100 translate-y-0 blur-0"
                : "opacity-0 scale-105 -translate-y-4 blur-sm"
            }`}
          >
            <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-slate-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-eng-cyan animate-pulse"></span>
              <span>SYSTEM PROFILE // PORTFOLIO</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.16em] sm:tracking-[0.22em] text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-200 uppercase font-sans drop-shadow-sm">
              BABAWALE VICTOR AYOMIDE
            </h1>

            {/* Glowing Accent Line */}
            <div
              className={`h-[2px] bg-gradient-to-r from-transparent via-eng-cyan to-transparent transition-all duration-1000 ${
                phase === "name-visible" ? "w-48 sm:w-64 opacity-100" : "w-8 opacity-0"
              }`}
            ></div>

            <p className="font-mono text-xs text-slate-400 tracking-widest pt-1">
              EMBEDDED SYSTEMS &bull; HARDWARE INTEGRATION &bull; EXECUTIVE GOVERNANCE
            </p>
          </div>
        )}

        {/* ============================================================ */}
        {/* PHASE 2: OPTIONS ANIMATE IN (PATH SELECTOR CARDS)            */}
        {/* ============================================================ */}
        {phase === "options-enter" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header / Instructions */}
            <div
              className={`space-y-3 transition-all duration-700 ease-out ${
                cardsReady ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="tracking-widest">BABAWALE VICTOR AYOMIDE // DESTINATION SELECTOR</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-slate-100 font-sans">
                CHOOSE YOUR EXPERIENCE
              </h2>
              <p className="font-mono text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
                Select an engineering path to explore hardware systems, or enter the governance portal for executive stewardship and community leadership.
              </p>
            </div>

            {/* Two Path Selector Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* Option A: Embedded Systems Engineer */}
              <button
                onClick={() => handleSelect("embedded")}
                className={`p-7 rounded-2xl bg-gradient-to-b from-[#0B132B]/90 via-[#07111F]/90 to-[#030712] border-2 border-eng-cyan/40 hover:border-eng-cyan hover:shadow-2xl hover:shadow-eng-cyan/20 transition-all duration-700 ease-out group flex flex-col justify-between space-y-6 text-left relative overflow-hidden ${
                  cardsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${selectedAnimation === "embedded" ? "ring-4 ring-eng-cyan scale-[1.02]" : ""}`}
                style={{ transitionDelay: "150ms" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-1 rounded bg-eng-cyan/15 border border-eng-cyan/30 text-eng-cyan font-bold tracking-wider">
                      01 // TECHNICAL PORTFOLIO
                    </span>
                    <div className="p-2 rounded-lg bg-eng-cyan/10 text-eng-cyan group-hover:scale-110 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans group-hover:text-eng-cyan transition-colors">
                      Embedded Systems Engineer
                    </h3>
                    <p className="text-xs font-mono text-eng-copper mt-1 font-semibold">
                      HARDWARE // FIRMWARE // IoT // RTOS
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    I build systems where software meets hardware—real-time 3-phase power grids, FreeRTOS load shedding, opto-isolated safety drivers, and hardware RC debouncing.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-canvas border border-line text-slate-300">FreeRTOS</span>
                    <span className="px-2 py-0.5 rounded bg-canvas border border-line text-slate-300">Embedded C/C++</span>
                    <span className="px-2 py-0.5 rounded bg-canvas border border-line text-slate-300">Smart Grids</span>
                    <span className="px-2 py-0.5 rounded bg-canvas border border-line text-slate-300">Signal Integrity</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-line font-mono text-xs text-eng-cyan font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>Enter Embedded Systems Site</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>

              {/* Option B: Leadership & Community Governance */}
              <button
                onClick={() => handleSelect("leadership")}
                className={`p-7 rounded-2xl bg-gradient-to-b from-[#161F33]/90 via-[#0F172A]/90 to-[#0A0E18] border-2 border-amber-500/40 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-700 ease-out group flex flex-col justify-between space-y-6 text-left relative overflow-hidden ${
                  cardsReady ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                } ${selectedAnimation === "leadership" ? "ring-4 ring-amber-400 scale-[1.02]" : ""}`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-1 rounded bg-amber-500/15 border border-amber-500/30 text-amber-400 font-bold tracking-wider">
                      02 // EXECUTIVE PORTFOLIO
                    </span>
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-100 font-sans group-hover:text-amber-300 transition-colors">
                      Leadership &amp; Governance
                    </h3>
                    <p className="text-xs font-mono text-amber-400 mt-1 font-semibold">
                      VICE PRESIDENT // 400+ MEMBERS // CITATIONS
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    Leading people, governing scale, and empowering communities—Vice President &amp; Programs Coordinator for 400+ students with official awards for excellence.
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 font-mono text-[10px] text-slate-300">
                    <span className="px-2 py-0.5 rounded bg-[#090D16] border border-amber-500/20 text-slate-300">Vice President, Student Fellowship</span>
                    <span className="px-2 py-0.5 rounded bg-[#090D16] border border-amber-500/20 text-slate-300">400+ Members</span>
                    <span className="px-2 py-0.5 rounded bg-[#090D16] border border-amber-500/20 text-slate-300">Award of Excellence</span>
                    <span className="px-2 py-0.5 rounded bg-[#090D16] border border-amber-500/20 text-slate-300">Stewardship</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-amber-500/20 font-mono text-xs text-amber-400 font-bold flex items-center justify-between group-hover:translate-x-1 transition-transform">
                  <span>Enter Leadership Site</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
