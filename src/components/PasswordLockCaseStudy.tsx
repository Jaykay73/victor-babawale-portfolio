import React from "react";
import { ShieldCheck, Cpu, ArrowRight, CheckCircle2, Lock, Terminal, Radio, Lightbulb, AlertTriangle, TrendingUp } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";

export default function PasswordLockCaseStudy() {
  const project = PROJECTS[1]; // Password Controlled Lock

  return (
    <section className="py-20 bg-canvas-secondary/40 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-eng-copper">
              <span className="px-2 py-0.5 rounded bg-eng-copper/10 border border-eng-copper/30 font-bold">
                02 // EMBEDDED SECURITY
              </span>
              <span className="text-slate-muted">// HARDWARE ACCESS CONTROL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              {project.title}
            </h2>
            <p className="text-base text-slate-secondary font-mono">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded bg-canvas border border-line text-slate-secondary">
              Embedded C/C++
            </span>
            <span className="px-3 py-1.5 rounded bg-canvas border border-line text-slate-secondary">
              Hardware Debouncing
            </span>
            <span className="px-3 py-1.5 rounded bg-canvas border border-line text-slate-secondary">
              Character LCD
            </span>
          </div>
        </div>

        {/* Non-Technical / HR Plain-English Overview Box */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-canvas via-canvas-secondary to-canvas border border-eng-copper/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-eng-copper/20 text-eng-copper">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-eng-copper uppercase tracking-wider block">
                  PLAIN-ENGLISH OVERVIEW // FOR RECRUITERS &amp; NON-TECHNICAL VIEWERS
                </span>
                <span className="text-xs text-slate-muted">How physical keypad authentication is made tamper-resistant and foolproof</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-eng-copper/10 border border-eng-copper/30 text-eng-copper font-semibold self-start sm:self-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-eng-copper animate-pulse"></span>
              RELIABLE ACCESS SECURITY
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 rounded-lg bg-canvas-secondary/80 border border-line">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>1. THE REAL PROBLEM</span>
              </div>
              <p className="text-xs text-slate-secondary leading-relaxed font-sans">
                {project.nonTechnicalSummary.problem}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-lg bg-canvas-secondary/80 border border-line">
              <div className="flex items-center gap-2 text-xs font-mono text-eng-copper font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>2. WHAT I BUILT</span>
              </div>
              <p className="text-xs text-slate-secondary leading-relaxed font-sans">
                {project.nonTechnicalSummary.solution}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-lg bg-canvas-secondary/80 border border-line">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold">
                <TrendingUp className="w-4 h-4" />
                <span>3. REAL-WORLD IMPACT</span>
              </div>
              <p className="text-xs text-slate-secondary leading-relaxed font-sans">
                {project.nonTechnicalSummary.impact}
              </p>
            </div>
          </div>
        </div>

        {/* Overview & Architecture Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-secondary leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                Embedded access controllers require reliable real-world input validation where electrical noise and mechanical switch bounce cannot corrupt authentication credentials. In this project, I designed and fabricated a standalone hardware security access node.
              </p>
              <p>
                My system couples a tactile keypad matrix with hardware RC filtering and firmware debouncing algorithms. I developed C/C++ firmware to scan matrix intersections, buffer user keystrokes, provide real-time character LCD feedback, and securely compare entered sequences against stored parameters to energize an electronic locking mechanism via high-current driver relays.
              </p>
            </div>

            {/* Architectural Highlights from CV */}
            <div className="space-y-3 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-muted flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-eng-copper" />
                VERIFIED HARDWARE & FIRMWARE IMPLEMENTATION
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 p-3 rounded bg-canvas-secondary border border-line text-xs font-mono text-slate-secondary"
                  >
                    <span className="text-eng-copper font-bold mt-0.5">[{i + 1}]</span>
                    <span className="font-sans text-xs leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Flow Callouts */}
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

                <div className="p-3 bg-canvas-elevated rounded border border-eng-cyan/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-eng-cyan font-bold">LOGIC:</span>
                    <span className="text-slate-primary">Microcontroller C/C++</span>
                  </div>
                  <span className="text-[10px] text-eng-cyan">DEBOUNCING & PIN MATCH</span>
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

            {/* Micro Specs */}
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <div className="p-3 bg-canvas border border-line rounded">
                <span className="text-[10px] text-slate-muted block">FIRMARE:</span>
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
    </section>
  );
}
