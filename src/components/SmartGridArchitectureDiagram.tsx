"use client";

import React, { useState } from "react";
import { Zap, Cpu, Monitor, Radio, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function SmartGridArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<string>("mcu");

  const nodes = {
    power: {
      title: "POWER INPUT STAGE",
      badge: "PHYSICAL GRID",
      desc: "3-Phase AC supply (Phase R, Y, B) stepped down via physical transformer and conditioned with custom DC-DC voltage regulation to feed logic boards safely.",
      tech: ["Custom DC-DC Buck Regulation", "Voltage Divider Networks", "Surge Clamping"],
    },
    mcu: {
      title: "MICROCONTROLLER CORE (FreeRTOS)",
      badge: "PROCESSING CORE",
      desc: "Preemptive FreeRTOS scheduler running embedded C/C++ tasks. Concurrently samples multi-phase voltages/currents, calculates active power, and compares against safety thresholds.",
      tech: ["FreeRTOS Kernel", "Analog-to-Digital DMA Sampling", "Safety Threshold Evaluator"],
    },
    telemetry: {
      title: "DUAL TELEMETRY INTERFACES",
      badge: "TELEMETRY BUS",
      desc: "Dual-stream monitoring: high-speed localized Graphic LCD (GLCD) for immediate field technician readout, plus IoT remote web dashboard for centralized telemetry.",
      tech: ["Localized 128x64 GLCD", "IoT Telemetry Stream", "Real-Time Dashboard"],
    },
    relays: {
      title: "OPTO-ISOLATED RELAY CONTROL",
      badge: "ACTUATION STAGE",
      desc: "Opto-isolated relay drivers completely isolate sensitive MCU logic from high-voltage inductive switching noise. Executes dynamic load shedding per phase.",
      tech: ["Optocoupler Isolation", "High-Current Relay Banks", "Dynamic Load Shedding Logic"],
    },
  };

  return (
    <div className="bg-canvas-secondary border border-line rounded-lg p-5 sm:p-7 relative overflow-hidden">
      {/* Schematic header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line mb-6 font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-primary">
          <span className="w-2 h-2 rounded-full bg-eng-cyan animate-pulse"></span>
          <span className="font-semibold tracking-wider">SYSTEM SCHEMATIC // ARCH_01</span>
        </div>
        <div className="text-[11px] text-slate-muted">
          INTERACTIVE: CLICK BLOCKS TO INSPECT BUS ARCHITECTURE
        </div>
      </div>

      {/* SVG System Diagram */}
      <div className="w-full overflow-x-auto py-2">
        <div className="min-w-[620px] max-w-full mx-auto relative">
          <svg className="w-full h-80" viewBox="0 0 680 300" fill="none">
            {/* Defs for gradients & markers */}
            <defs>
              <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#22D3EE" stopOpacity="1" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="copperLine" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D89B4A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D89B4A" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Wire Connections */}
            {/* Power to MCU */}
            <path
              d="M 340 55 L 340 100"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-signal-pulse"
            />

            {/* MCU to Local GLCD (Left Branch) */}
            <path
              d="M 280 155 L 170 155 L 170 210"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* MCU to Web Dashboard (Right Branch) */}
            <path
              d="M 400 155 L 510 155 L 510 210"
              stroke="#22D3EE"
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* MCU to Opto-Relay Control (Center Down) */}
            <path
              d="M 340 170 L 340 215"
              stroke="#D89B4A"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="animate-signal-pulse"
            />

            {/* Signal Pulse Nodes */}
            <circle cx="340" cy="75" r="3" fill="#22D3EE" />
            <circle cx="210" cy="155" r="3" fill="#22D3EE" />
            <circle cx="470" cy="155" r="3" fill="#22D3EE" />
            <circle cx="340" cy="195" r="3" fill="#D89B4A" />
          </svg>

          {/* HTML Overlay Nodes mapped on top */}
          {/* 1. Power Input Node */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64">
            <button
              onClick={() => setActiveNode("power")}
              className={`w-full p-3 rounded border text-left transition-all duration-200 ${
                activeNode === "power"
                  ? "bg-canvas-elevated border-eng-cyan shadow-[0_0_12px_rgba(34,211,238,0.25)] ring-1 ring-eng-cyan"
                  : "bg-canvas border-line hover:border-eng-cyan/50"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-eng-cyan flex items-center gap-1.5 font-bold">
                  <Zap className="w-3.5 h-3.5" />
                  POWER INPUT STAGE
                </span>
                <span className="text-[10px] text-slate-muted">3-PHASE AC</span>
              </div>
              <p className="text-[11px] text-slate-secondary">
                Transformer &bull; Custom DC-DC Regulation
              </p>
            </button>
          </div>

          {/* 2. Microcontroller Core (FreeRTOS) */}
          <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-72">
            <button
              onClick={() => setActiveNode("mcu")}
              className={`w-full p-3.5 rounded border text-left transition-all duration-200 ${
                activeNode === "mcu"
                  ? "bg-canvas-elevated border-eng-cyan shadow-[0_0_15px_rgba(34,211,238,0.3)] ring-1 ring-eng-cyan"
                  : "bg-canvas border-line hover:border-eng-cyan/50"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-eng-cyan flex items-center gap-1.5 font-bold">
                  <Cpu className="w-4 h-4" />
                  MCU // FreeRTOS CORE
                </span>
                <span className="px-1.5 py-0.5 rounded bg-eng-cyan/10 text-eng-cyan text-[10px]">
                  C/C++
                </span>
              </div>
              <p className="text-[11px] text-slate-secondary">
                Multi-Phase Analytics &bull; Demand Evaluation &bull; Safety Thresholds
              </p>
            </button>
          </div>

          {/* 3. Local GLCD */}
          <div className="absolute top-[210px] left-[55px] w-56">
            <button
              onClick={() => setActiveNode("telemetry")}
              className={`w-full p-2.5 rounded border text-left transition-all duration-200 ${
                activeNode === "telemetry"
                  ? "bg-canvas-elevated border-eng-cyan shadow-[0_0_12px_rgba(34,211,238,0.25)] ring-1 ring-eng-cyan"
                  : "bg-canvas border-line hover:border-eng-cyan/50"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-slate-primary flex items-center gap-1.5 font-semibold">
                  <Monitor className="w-3.5 h-3.5 text-eng-cyan" />
                  LOCAL GLCD
                </span>
                <span className="text-[9px] text-slate-muted">128x64</span>
              </div>
              <p className="text-[10px] text-slate-secondary">
                Direct field display &bull; Real-time phase status
              </p>
            </button>
          </div>

          {/* 4. Opto-Isolated Relay Control */}
          <div className="absolute top-[215px] left-1/2 -translate-x-1/2 w-64">
            <button
              onClick={() => setActiveNode("relays")}
              className={`w-full p-2.5 rounded border text-left transition-all duration-200 ${
                activeNode === "relays"
                  ? "bg-canvas-elevated border-eng-copper shadow-[0_0_12px_rgba(216,155,74,0.25)] ring-1 ring-eng-copper"
                  : "bg-canvas border-line hover:border-eng-copper/50"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-eng-copper flex items-center gap-1.5 font-semibold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  OPTO-RELAY CONTROL
                </span>
                <span className="text-[9px] text-eng-copper font-mono">ISOLATED</span>
              </div>
              <p className="text-[10px] text-slate-secondary">
                Dynamic load shedding &bull; Phase relays
              </p>
            </button>
          </div>

          {/* 5. Remote Web Dashboard */}
          <div className="absolute top-[210px] right-[55px] w-56">
            <button
              onClick={() => setActiveNode("telemetry")}
              className={`w-full p-2.5 rounded border text-left transition-all duration-200 ${
                activeNode === "telemetry"
                  ? "bg-canvas-elevated border-eng-cyan shadow-[0_0_12px_rgba(34,211,238,0.25)] ring-1 ring-eng-cyan"
                  : "bg-canvas border-line hover:border-eng-cyan/50"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1">
                <span className="text-slate-primary flex items-center gap-1.5 font-semibold">
                  <Radio className="w-3.5 h-3.5 text-eng-cyan" />
                  WEB DASHBOARD
                </span>
                <span className="text-[9px] text-slate-muted">IoT STREAM</span>
              </div>
              <p className="text-[10px] text-slate-secondary">
                Remote telemetry &bull; Load shed events
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* Detail Inspector Drawer for Clicked Node */}
      {activeNode && (
        <div className="mt-6 pt-4 border-t border-line bg-canvas/60 p-4 rounded text-xs font-mono space-y-2">
          <div className="flex items-center justify-between text-slate-primary">
            <span className="text-eng-cyan font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {nodes[activeNode as keyof typeof nodes].title}
            </span>
            <span className="px-2 py-0.5 bg-canvas-elevated rounded text-[10px] text-eng-copper border border-line">
              {nodes[activeNode as keyof typeof nodes].badge}
            </span>
          </div>
          <p className="text-slate-secondary font-sans text-xs leading-relaxed">
            {nodes[activeNode as keyof typeof nodes].desc}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {nodes[activeNode as keyof typeof nodes].tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-canvas-secondary border border-line text-[10px] text-slate-muted"
              >
                &bull; {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
