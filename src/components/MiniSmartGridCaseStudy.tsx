"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, Shield, Cpu, Activity, ArrowUpRight, CheckCircle2, Layers, Server, Lightbulb, AlertTriangle, TrendingUp, Info } from "lucide-react";
import { PROJECTS } from "@/data/portfolioData";
import SmartGridArchitectureDiagram from "./SmartGridArchitectureDiagram";

export default function MiniSmartGridCaseStudy() {
  const project = PROJECTS[0]; // Mini Smart Grid
  const [activePhoto, setActivePhoto] = useState<"live" | "rig">("rig");

  return (
    <section id="projects" className="py-24 bg-canvas relative border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Header Banner */}
        <div className="mb-10 pb-6 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-eng-cyan">
              <span className="px-2 py-0.5 rounded bg-eng-cyan/10 border border-eng-cyan/30 font-bold">
                01 // FEATURED SYSTEM
              </span>
              <span className="text-slate-muted">// IoT-ENABLED EMBEDDED POWER</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-primary">
              {project.title}
            </h2>
            <p className="text-lg text-eng-copper font-mono">
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

        {/* Non-Technical / HR Plain-English Overview Box */}
        <div className="mb-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-canvas-secondary via-canvas-elevated to-canvas-secondary border border-eng-cyan/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-line mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded bg-eng-cyan/20 text-eng-cyan">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs font-bold text-eng-cyan uppercase tracking-wider block">
                  PLAIN-ENGLISH OVERVIEW // FOR RECRUITERS &amp; NON-TECHNICAL VIEWERS
                </span>
                <span className="text-xs text-slate-muted">What I built and why it matters without the technical jargon</span>
              </div>
            </div>
            <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-semibold self-start sm:self-auto flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              PROVEN REAL-WORLD APPLICATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2 p-4 rounded-lg bg-canvas/80 border border-line">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <AlertTriangle className="w-4 h-4" />
                <span>1. THE REAL PROBLEM</span>
              </div>
              <p className="text-xs text-slate-secondary leading-relaxed font-sans">
                {project.nonTechnicalSummary.problem}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-lg bg-canvas/80 border border-line">
              <div className="flex items-center gap-2 text-xs font-mono text-eng-cyan font-bold">
                <Lightbulb className="w-4 h-4" />
                <span>2. WHAT I BUILT</span>
              </div>
              <p className="text-xs text-slate-secondary leading-relaxed font-sans">
                {project.nonTechnicalSummary.solution}
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-lg bg-canvas/80 border border-line">
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

        {/* Narrative & Technical Specs Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-slate-secondary leading-relaxed text-sm sm:text-base space-y-4">
              <p>
                As distributed renewable energy expands, managing multi-phase balance and avoiding transformer overloads becomes critical. In this project, I architected an IoT-enabled smart mini-grid system designed to monitor power demand across independent phase lines and execute real-time protection protocols.
              </p>
              <p>
                My embedded core executes C/C++ firmware running preemptive tasks under <strong>FreeRTOS</strong>. The firmware continuously processes voltage and current telemetry, evaluates multi-phase consumption metrics, and triggers <strong>dynamic load shedding</strong> via opto-isolated relay drivers whenever total consumption crosses safety thresholds.
              </p>
            </div>

            {/* Key Engineering Highlights from CV */}
            <div className="space-y-3 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-muted flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-eng-cyan" />
                VERIFIED ARCHITECTURAL CONTRIBUTIONS
              </h3>
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
          </div>

          {/* Right Specs Table */}
          <div className="lg:col-span-5 bg-canvas-secondary border border-line rounded-lg p-6 font-mono text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-line text-slate-primary font-bold">
              <span className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-eng-copper" />
                HARDWARE & FIRMWARE SPECIFICATIONS
              </span>
              <span className="text-[10px] text-slate-muted">SPEC_01</span>
            </div>

            <div className="divide-y divide-line/60">
              {project.specs.map((s) => (
                <div key={s.label} className="py-2.5 flex items-center justify-between">
                  <span className="text-slate-muted">{s.label}</span>
                  <span className="text-slate-primary font-semibold text-right">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-line">
              <div className="text-[11px] text-slate-muted mb-1">SAFETY ISOLATION PRINCIPLE:</div>
              <p className="text-[11px] font-sans text-slate-secondary leading-normal">
                Opto-isolated relay drivers prevent inductive back-EMF and transient voltage spikes from reaching sensitive microcontroller logic during high-power contact switching.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Interactive Architecture Diagram */}
        <div className="mb-16 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="font-mono text-sm tracking-wider text-slate-primary flex items-center gap-2">
              <Cpu className="w-4 h-4 text-eng-cyan" />
              SYSTEM ARCHITECTURE &amp; SIGNAL FLOW
            </h3>
            <span className="font-mono text-xs text-slate-muted">INTERACTIVE HARDWARE MAP</span>
          </div>
          <p className="text-xs text-slate-muted font-sans">
            <span className="text-eng-cyan font-mono font-semibold">GUIDE:</span> Power flows from the utility substation on the left through my current sensors into the central microcontroller brain, which controls the opto-isolated switches on the right.
          </p>
          <SmartGridArchitectureDiagram />
        </div>

        {/* Section: Real Physical Hardware Test Rig Gallery */}
        <div className="bg-canvas-secondary border border-line rounded-lg p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
            <div>
              <span className="text-xs font-mono text-eng-copper font-bold uppercase tracking-wider">
                PHYSICAL HARDWARE PROTOTYPE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-primary mt-1">
                Mini Smart Grid Benchtop Verification Rig
              </h3>
            </div>

            {/* Photo Selector Tabs */}
            <div className="flex items-center gap-2 font-mono text-xs">
              <button
                onClick={() => setActivePhoto("rig")}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activePhoto === "rig"
                    ? "bg-eng-cyan text-canvas font-bold"
                    : "bg-canvas border border-line text-slate-secondary hover:text-slate-primary"
                }`}
              >
                CHASSIS &amp; TRANSMISSION
              </button>
              <button
                onClick={() => setActivePhoto("live")}
                className={`px-3 py-1.5 rounded transition-colors ${
                  activePhoto === "live"
                    ? "bg-eng-cyan text-canvas font-bold"
                    : "bg-canvas border border-line text-slate-secondary hover:text-slate-primary"
                }`}
              >
                TEST RIG ACTIVE (POWER ON)
              </button>
            </div>
          </div>

          {/* Active Photo Container */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded overflow-hidden border border-line bg-canvas">
            <Image
              src={activePhoto === "live" ? "/assets/smart-grid-live.jpg" : "/assets/smart-grid-rig.jpg"}
              alt="Mini Smart Grid Hardware Test Rig built by Babawale Victor"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />

            {/* Overlay Hardware Annotation Callouts */}
            <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur-md border border-line p-3 rounded font-mono text-xs text-slate-secondary flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-slate-primary font-bold">
                  {activePhoto === "live"
                    ? "PHOTO: Live 3-Phase Multi-Load Test (R, Y, B Phases Energized)"
                    : "PHOTO: Mini-Grid Substation Transformer & Transmission Line Towers"}
                </span>
              </div>
              <span className="text-[11px] text-slate-muted">
                PHYSICAL PROTOTYPE // UNIVERSITY OF ILORIN
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs text-slate-secondary pt-2">
            <div className="p-3 bg-canvas rounded border border-line">
              <div className="text-eng-cyan font-semibold mb-1">01 / SUBSTATION STAGE</div>
              <p className="font-sans text-[11px] text-slate-muted leading-relaxed">
                Step-down transformer representation with high-voltage simulated primary wiring feeding the 3-phase bus.
              </p>
            </div>
            <div className="p-3 bg-canvas rounded border border-line">
              <div className="text-eng-copper font-semibold mb-1">02 / TRANSMISSION TOWERS</div>
              <p className="font-sans text-[11px] text-slate-muted leading-relaxed">
                Physical miniature overhead transmission line models with ceramic-style insulators and multi-conductor routing.
              </p>
            </div>
            <div className="p-3 bg-canvas rounded border border-line">
              <div className="text-emerald-400 font-semibold mb-1">03 / PHASE RELAY ENCLOSURES</div>
              <p className="font-sans text-[11px] text-slate-muted leading-relaxed">
                Weatherproof junction enclosures housing opto-isolated switching stages, current sensors, and dynamic shed relays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
