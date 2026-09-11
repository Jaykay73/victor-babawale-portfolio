"use client";

import React from "react";
import Image from "next/image";
import { ArrowDownRight, FileDown, Cpu, Activity, Zap, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function Hero() {
  const metadataTech = [
    "C / C++",
    "FreeRTOS",
    "MICROCONTROLLERS",
    "IoT",
    "HARDWARE INTEGRATION",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-tech-grid"
    >
      {/* Ambient background engineering glow and circuit traces */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-eng-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-eng-copper/5 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative schematic coordinates */}
      <div className="absolute top-28 left-6 hidden xl:block font-mono text-[10px] text-slate-muted space-y-1 select-none pointer-events-none">
        <p>COORDINATES // 08°29&apos;N 04°32&apos;E</p>
        <p>SUBSYSTEM: CORE_ENGINEERING_NODE</p>
        <p>CLOCK_SYNC: NOMINAL</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Credentials */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8 z-10">
            {/* System Identifier Bar */}
            <div className="inline-flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded bg-canvas-secondary border border-line text-eng-cyan font-mono text-xs tracking-wider">
                <span className="w-2 h-2 rounded-full bg-eng-cyan animate-pulse shadow-[0_0_8px_#22D3EE]"></span>
                <span>EMBEDDED SYSTEMS ENGINEER</span>
              </div>
              <span className="text-xs font-mono text-slate-muted hidden sm:inline-block">
                SYS_VER // 2026.1
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-primary leading-[1.08]">
                I BUILD SYSTEMS WHERE{" "}
                <span className="relative inline-block text-eng-cyan">
                  SOFTWARE
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-eng-cyan/40"></span>
                </span>{" "}
                MEETS{" "}
                <span className="relative inline-block text-eng-copper">
                  HARDWARE.
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-eng-copper/40"></span>
                </span>
              </h1>
            </div>

            {/* Authoritative Subheading / Philosophy from CV */}
            <p className="text-base sm:text-lg text-slate-secondary leading-relaxed max-w-2xl font-normal">
              {PROFILE.heroSummary}
            </p>

            {/* Technical Metadata Row */}
            <div className="pt-2">
              <div className="text-[11px] font-mono text-slate-muted uppercase tracking-wider mb-2 flex items-center gap-2">
                <Cpu className="w-3 h-3 text-eng-cyan" />
                <span>CORE STACK ARCHITECTURE</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {metadataTech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-mono text-slate-primary bg-canvas-secondary/80 border border-line rounded hover:border-eng-cyan/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Call To Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-3 px-6 py-3 bg-eng-cyan text-canvas font-mono text-xs font-bold tracking-wider rounded transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
              >
                <span>VIEW ENGINEERING WORK</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href={PROFILE.contact.cvPath}
                download="Babawale_Victor_Resume.pdf"
                className="group flex items-center gap-3 px-6 py-3 bg-canvas-secondary text-slate-primary border border-line font-mono text-xs tracking-wider rounded transition-all duration-200 hover:border-eng-copper hover:text-eng-copper hover:bg-canvas-elevated"
              >
                <FileDown className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD CV [PDF]</span>
              </a>
            </div>

            {/* Live Hardware Telemetry Ticker (Compact) */}
            <div className="pt-2 border-t border-line/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-slate-muted">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>EDUCATION: UNILORIN B.ENG (2021–2026)</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-eng-copper" />
                <span>PHYSICAL POWER &bull; FIRMWARE &bull; RTOS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Hero Portrait with Engineering Overlays */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Geometric Chassis Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-eng-cyan z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-line z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-line z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-eng-copper z-20 pointer-events-none" />

              {/* Decorative Schematic Side Tag */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-3 font-mono text-[9px] text-slate-muted tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 z-20 select-none">
                <span className="text-eng-cyan">SYS_ID // VICTOR_B</span>
                <span className="w-[1px] h-12 bg-line"></span>
                <span>CLASS OF 2026 // UNILORIN</span>
              </div>

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded bg-canvas-secondary border border-line shadow-2xl shadow-black/80 group">
                {/* Tech Header Banner inside Frame */}
                <div className="flex items-center justify-between px-3 py-2 bg-canvas-elevated/90 border-b border-line text-[10px] font-mono text-slate-muted">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-secondary">SYSTEM STATUS: ONLINE</span>
                  </div>
                  <span className="text-eng-copper">ENGINEER / 001</span>
                </div>

                {/* Editorial Portrait Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/assets/victor-hero.jpg"
                    alt="Babawale Victor Ayomide, Embedded Systems Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                    className="object-cover object-top filter contrast-[1.02] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle gradient vignette to blend base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Micro Coordinate Callout Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-canvas/90 backdrop-blur-md border border-line/80 p-2.5 rounded text-[11px] font-mono">
                    <div className="flex items-center justify-between text-slate-primary">
                      <span className="font-semibold">BABAWALE VICTOR AYOMIDE</span>
                      <span className="text-eng-cyan text-[10px]">VERIFIED</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-muted mt-1">
                      <span>COMPUTER ENGINEERING</span>
                      <span>AUTOKONTROL TECH</span>
                    </div>
                  </div>
                </div>

                {/* Technical Bottom Edge Meter */}
                <div className="px-3 py-1.5 bg-canvas-elevated border-t border-line flex items-center justify-between text-[9px] font-mono text-slate-muted">
                  <span>INTERFACE: HARDWARE / FIRMWARE</span>
                  <span className="text-eng-cyan">2026 CANDIDATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
