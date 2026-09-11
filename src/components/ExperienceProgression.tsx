"use client";

import React from "react";
import { Briefcase, ArrowDown, Cpu, Network, Sun, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE_PROGRESSION } from "@/data/portfolioData";

export default function ExperienceProgression() {
  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case "EMBEDDED":
        return <Cpu className="w-5 h-5 text-eng-cyan" />;
      case "INFRASTRUCTURE":
        return <Network className="w-5 h-5 text-eng-copper" />;
      case "POWER":
        return <Sun className="w-5 h-5 text-amber-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-slate-primary" />;
    }
  };

  return (
    <section id="experience" className="py-24 bg-canvas relative border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-eng-cyan tracking-widest uppercase">
              <Briefcase className="w-3.5 h-3.5" />
              <span>02 // ENGINEERING TRAJECTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              POWER &rarr; INFRASTRUCTURE &rarr; EMBEDDED SYSTEMS
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-muted max-w-md">
            CHRONOLOGICAL EVOLUTION // From high-power photovoltaic arrays to enterprise network backbones to low-level microcontroller firmware.
          </p>
        </div>

        {/* Progression Stepper Ribbon */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-4 rounded bg-canvas-secondary border border-line flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-amber-400/10 text-amber-400">
                <Sun className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-muted block">PHASE 01</span>
                <span className="font-bold text-slate-primary">POWER SYSTEMS</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-muted">2024–2025</span>
          </div>

          <div className="p-4 rounded bg-canvas-secondary border border-line flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-eng-copper/10 text-eng-copper">
                <Network className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-muted block">PHASE 02</span>
                <span className="font-bold text-slate-primary">NETWORK INFRASTRUCTURE</span>
              </div>
            </div>
            <span className="text-[11px] text-slate-muted">2025</span>
          </div>

          <div className="p-4 rounded bg-canvas-elevated border border-eng-cyan/50 flex items-center justify-between font-mono text-xs shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-eng-cyan/10 text-eng-cyan">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-eng-cyan block">PHASE 03 (PRESENT)</span>
                <span className="font-bold text-slate-primary">EMBEDDED CONTROL</span>
              </div>
            </div>
            <span className="text-[11px] text-eng-cyan font-bold">CURRENT</span>
          </div>
        </div>

        {/* Detailed Experience Cards Stack */}
        <div className="space-y-8 relative">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-eng-cyan via-eng-copper to-line"></div>

          {EXPERIENCE_PROGRESSION.map((exp, index) => {
            const isCurrent = exp.domain === "EMBEDDED";
            return (
              <div
                key={exp.id}
                className={`relative md:pl-20 transition-all duration-300 ${
                  isCurrent ? "scale-[1.005]" : ""
                }`}
              >
                {/* Node marker on the line */}
                <div
                  className={`hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-7 h-7 rounded-full items-center justify-center border-2 bg-canvas z-10 ${
                    isCurrent
                      ? "border-eng-cyan text-eng-cyan shadow-[0_0_10px_#22D3EE]"
                      : "border-line text-slate-muted"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                </div>

                {/* Experience Chassis */}
                <div
                  className={`rounded-lg p-6 sm:p-8 border transition-all duration-200 ${
                    isCurrent
                      ? "bg-canvas-elevated/90 border-eng-cyan/50 shadow-xl shadow-black/40"
                      : "bg-canvas-secondary border-line hover:border-line-bright"
                  }`}
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line mb-6 font-mono text-xs">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-eng-cyan font-bold">{exp.domainLabel}</span>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded bg-eng-cyan/20 text-eng-cyan text-[10px] font-bold">
                            ACTIVE APPOINTMENT
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-primary">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-sans text-eng-copper font-medium mt-0.5">
                        {exp.organization}
                      </div>
                      {exp.simpleTakeaway && (
                        <div className="mt-2 text-xs font-sans text-slate-primary/90 bg-canvas/60 px-3 py-1.5 rounded border border-line/60 inline-block">
                          <span className="text-eng-cyan font-mono font-semibold">ROLE SUMMARY:</span> {exp.simpleTakeaway}
                        </div>
                      )}
                    </div>

                    <div className="text-left sm:text-right space-y-1">
                      <div className="flex sm:justify-end items-center gap-1.5 text-slate-primary">
                        <Calendar className="w-3.5 h-3.5 text-slate-muted" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="text-slate-muted text-[11px]">NIGERIA</div>
                    </div>
                  </div>

                  {/* Bulleted Responsibilities strictly from CV */}
                  <div className="space-y-3 mb-6">
                    <div className="text-[11px] font-mono text-slate-muted uppercase tracking-wider">
                      VERIFIED CORE RESPONSIBILITIES & DELIVERABLES:
                    </div>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-3 text-sm text-slate-secondary leading-relaxed font-sans"
                        >
                          <span className="text-eng-cyan mt-1">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-line/60 flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    <span className="text-slate-muted mr-1">TECHNICAL DOMAIN:</span>
                    {exp.techFocus.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-canvas border border-line text-slate-primary"
                      >
                        {tech}
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
