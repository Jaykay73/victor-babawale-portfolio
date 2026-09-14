"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, Shield, Cpu, ChevronDown, CheckCircle2, Layers, Lightbulb, AlertTriangle, TrendingUp, Info } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import SmartGridArchitectureDiagram from "./SmartGridArchitectureDiagram";

export default function MiniSmartGridCaseStudy() {
  const project = PROJECTS[0]; // Mini Smart Grid
  const [activeMedia, setActiveMedia] = useState<"rig" | "live" | "video">("rig");
  const [showTechDetails, setShowTechDetails] = useState<boolean>(false);

  return (
    <section id="projects" className="py-20 bg-canvas relative border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header Banner */}
        <div className="mb-8 pb-6 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-eng-cyan">
              <span className="px-2 py-0.5 rounded bg-eng-cyan/10 border border-eng-cyan/30 font-bold">
                01 // FEATURED SYSTEM
              </span>
              <span className="text-slate-muted">// IoT POWER INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-eng-copper font-mono">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1.5 rounded bg-canvas-secondary border border-line text-slate-secondary">
              FreeRTOS 10.x
            </span>
            <span className="px-3 py-1.5 rounded bg-canvas-secondary border border-line text-slate-secondary">
              Embedded C / C++
            </span>
            <span className="px-3 py-1.5 rounded bg-canvas-secondary border border-line text-slate-secondary">
              Opto-Isolated Drivers
            </span>
          </div>
        </div>

        {/* What the Project is About (Concise Overview) */}
        <div className="mb-10 p-6 sm:p-7 rounded-xl bg-canvas-secondary/80 border border-eng-cyan/30 shadow-lg space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-eng-cyan font-bold uppercase tracking-wider">
            <Lightbulb className="w-4 h-4" />
            <span>WHAT THIS PROJECT IS ABOUT</span>
          </div>
          <p className="text-slate-secondary text-sm sm:text-base leading-relaxed font-sans">
            I designed and built an IoT-enabled mini-grid system to solve power transformer overload and cascading blackouts. 
            Running preemptive tasks under <strong className="text-slate-primary">FreeRTOS</strong>, the embedded controller continuously monitors voltage and current across three independent phases. 
            When power demand crosses safety thresholds, it automatically executes <strong className="text-eng-cyan">dynamic load shedding</strong> via opto-isolated relay switches—safeguarding the electrical grid while streaming real-time metrics to both an on-site display and a remote web dashboard.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="px-2.5 py-1 rounded bg-canvas border border-line text-slate-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Automatic 3-Phase Load Shedding
            </span>
            <span className="px-2.5 py-1 rounded bg-canvas border border-line text-slate-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-eng-cyan"></span>
              Opto-Isolated Electrical Protection
            </span>
            <span className="px-2.5 py-1 rounded bg-canvas border border-line text-slate-muted flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-eng-copper"></span>
              Dual On-Site &amp; Cloud Telemetry
            </span>
          </div>
        </div>

        {/* Real Physical Hardware Test Rig Gallery (Visible Images/Videos of Working Hardware) */}
        <div className="mb-10 bg-canvas-secondary border border-line rounded-xl p-5 sm:p-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
            <div>
              <span className="text-xs font-mono text-eng-copper font-bold uppercase tracking-wider">
                PHYSICAL HARDWARE PROTOTYPE
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-primary mt-0.5">
                Mini Smart Grid Benchtop Verification Rig
              </h3>
            </div>

            {/* Media Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActiveMedia("rig")}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activeMedia === "rig"
                    ? "bg-eng-cyan text-canvas font-bold"
                    : "bg-canvas border border-line text-slate-secondary hover:text-slate-primary"
                }`}
              >
                CHASSIS &amp; TRANSMISSION
              </button>
              <button
                onClick={() => setActiveMedia("live")}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activeMedia === "live"
                    ? "bg-eng-cyan text-canvas font-bold"
                    : "bg-canvas border border-line text-slate-secondary hover:text-slate-primary"
                }`}
              >
                TEST RIG ACTIVE (POWER ON)
              </button>
              <button
                onClick={() => setActiveMedia("video")}
                className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 ${
                  activeMedia === "video"
                    ? "bg-emerald-400 text-canvas font-bold"
                    : "bg-canvas border border-line text-emerald-400 hover:bg-emerald-400/10"
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE VIDEO DEMO
              </button>
            </div>
          </div>

          {/* Active Media Container */}
          {activeMedia === "video" ? (
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden border border-line bg-black flex items-center justify-center">
              <video
                src="/assets/smart-grid-demo.mp4"
                controls
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-canvas/90 backdrop-blur-md border border-line p-3 rounded font-mono text-xs text-slate-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-2 pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-primary font-semibold">
                    VIDEO: Mini-Grid Multi-Phase Load Shedding &amp; LCD Telemetry
                  </span>
                </div>
                <span className="text-[11px] text-slate-muted">
                  LIVE BENCHTOP TEST // 35S DEMO
                </span>
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-lg overflow-hidden border border-line bg-canvas">
              <Image
                src={activeMedia === "live" ? "/assets/smart-grid-live.jpg" : "/assets/smart-grid-rig.jpg"}
                alt="Mini Smart Grid Hardware Test Rig built by Babawale Victor"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-center"
              />

              {/* Overlay Hardware Annotation Callouts */}
              <div className="absolute bottom-3 left-3 right-3 bg-canvas/90 backdrop-blur-md border border-line p-3 rounded font-mono text-xs text-slate-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-primary font-semibold">
                    {activeMedia === "live"
                      ? "PHOTO: Live 3-Phase Multi-Load Test (R, Y, B Phases Energized)"
                      : "PHOTO: Mini-Grid Substation Transformer & Transmission Line Towers"}
                  </span>
                </div>
                <span className="text-[11px] text-slate-muted">
                  PHYSICAL PROTOTYPE // UNIVERSITY OF ILORIN
                </span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs text-slate-secondary pt-1">
            <div className="p-3 bg-canvas rounded border border-line">
              <div className="text-eng-cyan font-semibold mb-1">01 / SUBSTATION STAGE</div>
              <p className="font-sans text-[11px] text-slate-muted leading-relaxed">
                Step-down transformer and conditioning feeding the simulated 3-phase bus.
              </p>
            </div>
            <div className="p-3 bg-canvas rounded border border-line">
              <div className="text-eng-copper font-semibold mb-1">02 / TRANSMISSION TOWERS</div>
              <p className="font-sans text-[11px] text-slate-muted leading-relaxed">
                Miniature overhead transmission line models with multi-conductor routing.
              </p>
            </div>
            <div className="p-3 bg-canvas rounded border border-line">
              <div className="text-emerald-400 font-semibold mb-1">03 / PHASE RELAY ENCLOSURES</div>
              <p className="font-sans text-[11px] text-slate-muted leading-relaxed">
                Weatherproof junctions housing opto-isolated switching stages and current sensors.
              </p>
            </div>
          </div>
        </div>

        {/* Click-to-Reveal Collapsible Section for Architecture & Technical Specs */}
        <div className="border border-line rounded-xl overflow-hidden bg-canvas-secondary/40">
          <button
            onClick={() => setShowTechDetails(!showTechDetails)}
            className="w-full py-4 px-6 bg-canvas-secondary hover:bg-canvas-elevated transition-colors flex items-center justify-between text-left group"
            aria-expanded={showTechDetails}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded bg-eng-cyan/10 text-eng-cyan group-hover:bg-eng-cyan group-hover:text-canvas transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-eng-cyan font-bold block">
                  SYSTEM ARCHITECTURE &amp; TECHNICAL DEEP-DIVE
                </span>
                <span className="text-sm font-semibold text-slate-primary">
                  {showTechDetails ? "Hide System Architecture & Specifications" : "Click to view System Architecture, Signal Flow & Specifications"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-muted group-hover:text-eng-cyan transition-colors">
              <span className="hidden sm:inline">{showTechDetails ? "[COLLAPSE]" : "[CLICK TO REVEAL]"}</span>
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showTechDetails ? "rotate-180 text-eng-cyan" : ""}`} />
            </div>
          </button>

          {showTechDetails && (
            <div className="p-6 sm:p-8 space-y-10 border-t border-line bg-canvas animate-fadeIn">
              {/* Interactive Architecture Diagram */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="font-mono text-sm tracking-wider text-slate-primary flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-eng-cyan" />
                    HARDWARE BUS ARCHITECTURE &amp; SIGNAL FLOW
                  </h4>
                  <span className="font-mono text-xs text-slate-muted">INTERACTIVE HARDWARE MAP</span>
                </div>
                <p className="text-xs text-slate-muted font-sans">
                  <span className="text-eng-cyan font-mono font-semibold">GUIDE:</span> Power flows from the utility substation on the left through current sensors into the central microcontroller brain, which controls the opto-isolated switches on the right.
                </p>
                <SmartGridArchitectureDiagram />
              </div>

              {/* Specs & Highlights Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Highlights */}
                <div className="lg:col-span-7 space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-muted flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-eng-cyan" />
                    VERIFIED ARCHITECTURAL CONTRIBUTIONS
                  </h4>
                  <ul className="space-y-2.5">
                    {project.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 p-3 rounded bg-canvas-secondary/70 border border-line text-xs font-mono text-slate-secondary"
                      >
                        <span className="text-eng-cyan font-bold mt-0.5">[{i + 1}]</span>
                        <span className="font-sans text-xs leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Table */}
                <div className="lg:col-span-5 bg-canvas-secondary border border-line rounded-lg p-5 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2.5 border-b border-line text-slate-primary font-bold">
                    <span className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-eng-copper" />
                      HARDWARE &amp; FIRMWARE SPECS
                    </span>
                    <span className="text-[10px] text-slate-muted">SPEC_01</span>
                  </div>

                  <div className="divide-y divide-line/60">
                    {project.specs.map((s) => (
                      <div key={s.label} className="py-2 flex items-center justify-between">
                        <span className="text-slate-muted">{s.label}</span>
                        <span className="text-slate-primary font-semibold text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2.5 border-t border-line">
                    <div className="text-[10px] text-slate-muted mb-0.5">SAFETY ISOLATION:</div>
                    <p className="text-[11px] font-sans text-slate-secondary leading-normal">
                      Opto-isolated drivers decouple inductive switching noise and transient spikes from sensitive microcontroller logic.
                    </p>
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

// Default view: Substation Chassis & Miniature Transmission Lines
