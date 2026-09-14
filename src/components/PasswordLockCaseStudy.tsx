"use client";

import React, { useState } from "react";
import { ShieldCheck, Cpu, ChevronDown, CheckCircle2, Lock, Terminal, Layers, Lightbulb } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function PasswordLockCaseStudy() {
  const project = PROJECTS[1]; // Password Controlled Lock
  const [showTechDetails, setShowTechDetails] = useState<boolean>(false);

  return (
    <section className="py-20 bg-canvas-secondary/40 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 pb-6 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-eng-copper">
              <span className="px-2 py-0.5 rounded bg-eng-copper/10 border border-eng-copper/30 font-bold">
                02 // EMBEDDED SECURITY
              </span>
              <span className="text-slate-muted">// HARDWARE ACCESS CONTROL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-secondary font-mono">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded bg-canvas border border-line text-slate-secondary">
              Embedded C / C++
            </span>
            <span className="px-3 py-1.5 rounded bg-canvas border border-line text-slate-secondary">
              Hardware Debouncing
            </span>
            <span className="px-3 py-1.5 rounded bg-canvas border border-line text-slate-secondary">
              Character LCD
            </span>
          </div>
        </div>

        {/* What the Project is About (Concise Overview) */}
        <div className="mb-10 p-6 sm:p-7 rounded-xl bg-canvas border border-eng-copper/30 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-eng-copper font-bold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>WHAT THIS PROJECT IS ABOUT</span>
          </div>
          <p className="text-slate-secondary text-sm sm:text-base leading-relaxed font-sans">
            I designed and built an embedded electronic security access lock to prevent lost-key vulnerabilities and false keystroke triggers. 
            The system interfaces a 4x4 matrix keypad with dedicated <strong className="text-slate-primary">hardware RC debouncing</strong> and firmware filtering to ensure every button press registers cleanly without electrical bounce artifacts. 
            When an authorized PIN is entered, the embedded C/C++ state machine verifies the sequence, displays real-time status on a 16x2 character LCD, and safely energizes an electronic solenoid locking mechanism via high-current driver relays.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-canvas-secondary border border-line text-slate-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Hardware RC Debouncing (Zero False Triggers)
            </span>
            <span className="px-2.5 py-1 rounded bg-canvas-secondary border border-line text-slate-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-eng-copper"></span>
              Real-Time 16x2 LCD Feedback
            </span>
            <span className="px-2.5 py-1 rounded bg-canvas-secondary border border-line text-slate-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-eng-cyan"></span>
              High-Current Solenoid Actuation
            </span>
          </div>
        </div>

        {/* Hardware Status Note */}
        <div className="mb-10 p-5 rounded-lg bg-canvas border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-emerald-400/10 text-emerald-400">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-slate-primary font-bold">PROTOTYPE STATUS: BENCH-VERIFIED HARDWARE</div>
              <div className="text-slate-muted font-sans text-xs">Tactile matrix scanning, debounce conditioning, and solenoid relay actuation verified on benchtop hardware.</div>
            </div>
          </div>
          <span className="px-3 py-1 rounded bg-canvas-secondary border border-line text-[11px] text-slate-secondary self-start sm:self-auto">
            STANDALONE LAB BUILD
          </span>
        </div>

        {/* Click-to-Reveal Collapsible Section for Architecture & Technical Specs */}
        <div className="border border-line rounded-xl overflow-hidden bg-canvas">
          <button
            onClick={() => setShowTechDetails(!showTechDetails)}
            className="w-full py-4 px-6 bg-canvas hover:bg-canvas-secondary transition-colors flex items-center justify-between text-left group"
            aria-expanded={showTechDetails}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-eng-copper/10 text-eng-copper group-hover:bg-eng-copper group-hover:text-canvas transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-eng-copper font-bold block">
                  SYSTEM ARCHITECTURE &amp; TECHNICAL DEEP-DIVE
                </span>
                <span className="text-sm font-semibold text-slate-primary">
                  {showTechDetails ? "Hide System Architecture & Signal Flow" : "Click to view System Architecture, Signal Flow & Specifications"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-muted group-hover:text-eng-copper transition-colors">
              <span className="hidden sm:inline">{showTechDetails ? "[COLLAPSE]" : "[CLICK TO REVEAL]"}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showTechDetails ? "rotate-180 text-eng-copper" : ""}`} />
            </div>
          </button>

          {showTechDetails && (
            <div className="p-6 sm:p-8 space-y-10 border-t border-line bg-canvas-secondary/40 animate-fadeIn">
              {/* Architecture & Flow Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Highlights */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-muted flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-eng-copper" />
                    VERIFIED HARDWARE &amp; FIRMWARE IMPLEMENTATION
                  </h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded bg-canvas border border-line text-xs font-mono text-slate-secondary"
                      >
                        <span className="text-eng-copper font-bold mt-0.5">[{i + 1}]</span>
                        <span className="font-sans text-xs leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hardware Specs Table */}
                  <div className="bg-canvas border border-line rounded-lg p-5 font-mono text-xs space-y-3 mt-6">
                    <div className="flex items-center justify-between pb-2.5 border-b border-line text-slate-primary font-bold">
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-eng-copper" />
                        TECHNICAL SPECIFICATIONS
                      </span>
                      <span className="text-[10px] text-slate-muted">SPEC_02</span>
                    </div>
                    <div className="divide-y divide-line/60">
                      {project.specs.map((s) => (
                        <div key={s.label} className="py-2 flex items-center justify-between">
                          <span className="text-slate-muted">{s.label}</span>
                          <span className="text-slate-primary font-semibold text-right">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Signal Flow Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-canvas border border-line rounded-lg p-5 font-mono text-xs space-y-4">
                    <div className="text-slate-primary font-bold pb-2 border-b border-line flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-eng-cyan" />
                      HARDWARE-TO-FIRMWARE SIGNAL FLOW
                    </div>

                    {/* Block Diagram Flow */}
                    <div className="space-y-3">
                      <div className="p-3 bg-canvas-secondary rounded border border-line flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-eng-cyan font-bold">INPUT:</span>
                          <span className="text-slate-primary">4x4 Keypad Matrix</span>
                        </div>
                        <span className="text-[10px] text-slate-muted">ROW/COL SCAN</span>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-[1px] h-4 bg-line"></div>
                      </div>

                      <div className="p-3 bg-canvas-elevated rounded border border-eng-copper/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-eng-copper font-bold">LOGIC:</span>
                          <span className="text-slate-primary">Microcontroller C/C++</span>
                        </div>
                        <span className="text-[10px] text-eng-copper font-bold">RC DEBOUNCE &amp; PIN MATCH</span>
                      </div>

                      <div className="flex justify-center">
                        <div className="w-[1px] h-4 bg-line"></div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 bg-canvas-secondary rounded border border-line">
                          <span className="text-slate-muted block text-[10px]">FEEDBACK:</span>
                          <span className="text-slate-primary font-bold">Character LCD</span>
                        </div>
                        <div className="p-3 bg-canvas-secondary rounded border border-line">
                          <span className="text-eng-copper block text-[10px]">ACTUATOR:</span>
                          <span className="text-slate-primary font-bold">Electronic Lock</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Micro Specs summary */}
                  <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                    <div className="p-3 bg-canvas border border-line rounded">
                      <span className="text-[10px] text-slate-muted block">FIRMWARE:</span>
                      <span className="text-slate-primary font-bold">Embedded C / C++</span>
                    </div>
                    <div className="p-3 bg-canvas border border-line rounded">
                      <span className="text-[10px] text-slate-muted block">INTEGRITY:</span>
                      <span className="text-emerald-400 font-bold">Hardware Debouncing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
