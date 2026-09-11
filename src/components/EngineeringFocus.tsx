"use client";

import React from "react";
import { Activity, Cpu, ShieldCheck, Waves, GitCommit, Gauge } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function EngineeringFocus() {
  const pillars = [
    {
      code: "01",
      slug: "SIGNAL",
      title: "Physical Signal & Interface Integrity",
      tag: "INPUT LAYER",
      accent: "text-eng-cyan",
      borderAccent: "hover:border-eng-cyan/60",
      icon: Waves,
      diagram: (
        <svg className="w-full h-16 text-eng-cyan/40" viewBox="0 0 200 50" fill="none">
          <path
            d="M0 25 L40 25 L50 10 L60 40 L70 15 L80 35 L90 25 L130 25 L140 8 L150 42 L160 25 L200 25"
            stroke="currentColor"
            strokeWidth="1.5"
            className="animate-signal-pulse"
          />
          <circle cx="50" cy="10" r="3" fill="#22D3EE" />
          <circle cx="140" cy="8" r="3" fill="#22D3EE" />
        </svg>
      ),
      description:
        "Real-world electrical signals are noisy, inductive, and unpredictable. I design hardware interfaces with proper signal conditioning, hardware debouncing, opto-isolation, and DC-DC regulation to ensure clean, deterministic transitions before data reaches firmware logic.",
      specs: ["Hardware Debouncing", "Opto-Isolation", "DC-DC Power Rails", "Physical Sensor Interfacing"],
    },
    {
      code: "02",
      slug: "CONTROL",
      title: "Deterministic Firmware & Scheduling",
      tag: "CORE LOGIC",
      accent: "text-eng-copper",
      borderAccent: "hover:border-eng-copper/60",
      icon: Cpu,
      diagram: (
        <svg className="w-full h-16 text-eng-copper/40" viewBox="0 0 200 50" fill="none">
          <rect x="20" y="10" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M60 25 L100 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <rect x="100" y="10" width="40" height="30" rx="3" stroke="#D89B4A" strokeWidth="1.5" />
          <path d="M140 25 L180 25" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="100" cy="25" r="2" fill="#D89B4A" />
          <circle cx="140" cy="25" r="2" fill="#D89B4A" />
        </svg>
      ),
      description:
        "Firmware is the bridge between electrons and decisions. Developing in C and C++ on FreeRTOS and bare-metal architectures, I implement preemptive task scheduling, interrupt service routines, and state machines to manage multi-phase load shedding and security validation without latency jitter.",
      specs: ["FreeRTOS Scheduling", "Embedded C / C++", "State Machine Logic", "Multi-Phase Analytics"],
    },
    {
      code: "03",
      slug: "RELIABILITY",
      title: "System Testing & Physical Integration",
      tag: "VERIFICATION",
      accent: "text-emerald-400",
      borderAccent: "hover:border-emerald-400/60",
      icon: ShieldCheck,
      diagram: (
        <svg className="w-full h-16 text-emerald-400/40" viewBox="0 0 200 50" fill="none">
          <path d="M10 25 Q50 0 100 25 T190 25" stroke="currentColor" strokeWidth="1.5" />
          <line x1="10" y1="42" x2="190" y2="42" stroke="#1E334A" strokeWidth="1.5" />
          <line x1="60" y1="35" x2="60" y2="45" stroke="#10B981" strokeWidth="2" />
          <line x1="100" y1="35" x2="100" y2="45" stroke="#10B981" strokeWidth="2" />
          <line x1="140" y1="35" x2="140" y2="45" stroke="#10B981" strokeWidth="2" />
        </svg>
      ),
      description:
        "An embedded system is only as good as its failure resilience. I draft testing and debugging protocols that eliminate signal inconsistencies, audit physical network cabling (Cat6/Fiber), and verify inverter/solar array metrics under real field loads.",
      specs: ["Testing & Debugging Protocols", "Signal Inconsistency Reduction", "Network Auditing", "Power Metric Evaluation"],
    },
  ];

  return (
    <section id="focus" className="py-24 bg-canvas border-y border-line/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-line">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-eng-cyan tracking-widest uppercase">
              <Activity className="w-3.5 h-3.5" />
              <span>01 // ARCHITECTURAL FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              BUILDING SYSTEMS THAT INTERACT WITH THE REAL WORLD.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-slate-muted max-w-md">
            ENGINEERING DISCIPLINE // Grounded in physical laws, deterministic firmware, and empirical testing.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.code}
                className={`relative bg-canvas-secondary border border-line p-6 sm:p-8 rounded transition-all duration-300 ${pillar.borderAccent} group flex flex-col justify-between`}
              >
                {/* Top Metatag */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-line/60">
                    <span className={`font-bold ${pillar.accent}`}>
                      {pillar.code} // {pillar.slug}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-canvas border border-line text-[10px] text-slate-muted">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Visual Diagram Element */}
                  <div className="my-6 bg-canvas/80 p-3 rounded border border-line/40 flex items-center justify-center">
                    {pillar.diagram}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-primary group-hover:text-slate-primary transition-colors flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${pillar.accent}`} />
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-secondary leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                {/* Specs List */}
                <div className="mt-8 pt-4 border-t border-line/50">
                  <div className="text-[10px] font-mono text-slate-muted uppercase tracking-wider mb-2">
                    VERIFIED FOCUS AREAS:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.specs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-canvas-elevated text-slate-secondary border border-line/70"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Core architectural focus: Signal Integrity, Control Logic, System Reliability
