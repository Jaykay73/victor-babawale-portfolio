"use client";

import React, { useState, useEffect } from "react";
import { Activity, AlertTriangle, CheckCircle2, RotateCcw, Shield, Sliders, Zap } from "lucide-react";

export default function TelemetryPanel() {
  const [loadShedActive, setLoadShedActive] = useState(false);
  const [phaseVoltages, setPhaseVoltages] = useState({ r: 231, y: 228, b: 230 });
  const [phaseCurrents, setPhaseCurrents] = useState({ r: 4.2, y: 3.9, b: 4.1 });

  // Minor telemetry jitter simulation to feel like active hardware instrumentation
  useEffect(() => {
    const interval = setInterval(() => {
      setPhaseVoltages({
        r: 230 + Math.floor(Math.sin(Date.now() / 1000) * 2),
        y: 228 + Math.floor(Math.cos(Date.now() / 1200) * 2),
        b: loadShedActive ? 232 : 229 + Math.floor(Math.sin(Date.now() / 1400) * 2),
      });

      if (!loadShedActive) {
        setPhaseCurrents({
          r: +(4.2 + Math.sin(Date.now() / 1500) * 0.1).toFixed(1),
          y: +(3.9 + Math.cos(Date.now() / 1800) * 0.1).toFixed(1),
          b: +(4.1 + Math.sin(Date.now() / 1300) * 0.1).toFixed(1),
        });
      } else {
        setPhaseCurrents({
          r: 4.3,
          y: 4.0,
          b: 0.0, // Shed load on phase C
        });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [loadShedActive]);

  const totalLoadWatts = loadShedActive
    ? Math.round(phaseVoltages.r * phaseCurrents.r + phaseVoltages.y * phaseCurrents.y)
    : Math.round(
        phaseVoltages.r * phaseCurrents.r +
          phaseVoltages.y * phaseCurrents.y +
          phaseVoltages.b * phaseCurrents.b
      );

  const thresholdWatts = 2500;
  const loadPercentage = Math.min(100, Math.round((totalLoadWatts / thresholdWatts) * 100));

  return (
    <div className="bg-canvas-secondary border border-line rounded-lg p-5 sm:p-7 relative font-mono text-xs">
      {/* Instrumentation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line mb-6">
        <div className="flex items-center gap-2 text-slate-primary">
          <Activity className="w-4 h-4 text-eng-cyan" />
          <span className="font-bold tracking-wider">TELEMETRY MONITOR // MODEL SIMULATION</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-canvas border border-line text-[11px]">
            <span
              className={`w-2 h-2 rounded-full ${
                loadShedActive
                  ? "bg-amber-400 animate-ping"
                  : "bg-emerald-400 animate-pulse"
              }`}
            ></span>
            <span className={loadShedActive ? "text-amber-300" : "text-emerald-400"}>
              {loadShedActive ? "LOAD SHEDDING ACTIVE" : "SYSTEM: NORMAL"}
            </span>
          </div>
          <span className="text-[10px] text-slate-muted hidden sm:inline-block">
            RTOS: FreeRTOS 10.x
          </span>
        </div>
      </div>

      {/* Grid of Telemetry Readings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Phase A (Red) */}
        <div className="bg-canvas p-3.5 rounded border border-line">
          <div className="flex items-center justify-between text-[11px] text-slate-muted mb-2">
            <span className="text-red-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              PHASE A [R]
            </span>
            <span className="text-emerald-400 text-[10px]">RELAY 1: CLOSED</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-bold text-slate-primary">{phaseVoltages.r} V</span>
            <span className="text-xs text-slate-secondary">{phaseCurrents.r} A</span>
          </div>
          <div className="w-full bg-canvas-elevated h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-red-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${(phaseCurrents.r / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Phase B (Yellow) */}
        <div className="bg-canvas p-3.5 rounded border border-line">
          <div className="flex items-center justify-between text-[11px] text-slate-muted mb-2">
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              PHASE B [Y]
            </span>
            <span className="text-emerald-400 text-[10px]">RELAY 2: CLOSED</span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-bold text-slate-primary">{phaseVoltages.y} V</span>
            <span className="text-xs text-slate-secondary">{phaseCurrents.y} A</span>
          </div>
          <div className="w-full bg-canvas-elevated h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className="bg-amber-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${(phaseCurrents.y / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Phase C (Blue) */}
        <div
          className={`bg-canvas p-3.5 rounded border transition-colors duration-300 ${
            loadShedActive ? "border-amber-400/60 bg-amber-400/5" : "border-line"
          }`}
        >
          <div className="flex items-center justify-between text-[11px] text-slate-muted mb-2">
            <span className="text-sky-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              PHASE C [B]
            </span>
            <span
              className={`text-[10px] ${
                loadShedActive ? "text-amber-400 font-bold" : "text-emerald-400"
              }`}
            >
              {loadShedActive ? "RELAY 3: ISOLATED" : "RELAY 3: CLOSED"}
            </span>
          </div>
          <div className="flex items-baseline justify-between">
            <span className="text-xl font-bold text-slate-primary">{phaseVoltages.b} V</span>
            <span
              className={`text-xs ${
                loadShedActive ? "text-amber-400 font-bold" : "text-slate-secondary"
              }`}
            >
              {phaseCurrents.b} A
            </span>
          </div>
          <div className="w-full bg-canvas-elevated h-1.5 rounded-full mt-2 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                loadShedActive ? "bg-amber-400" : "bg-sky-400"
              }`}
              style={{ width: `${(phaseCurrents.b / 5) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Aggregate Power & Safety Threshold Meter */}
      <div className="p-4 rounded bg-canvas border border-line mb-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-eng-cyan" />
            <span className="font-semibold text-slate-primary">AGGREGATE SYSTEM DEMAND</span>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-slate-primary">{totalLoadWatts} W</span>
            <span className="text-[10px] text-slate-muted ml-2">/ THRESHOLD: {thresholdWatts} W</span>
          </div>
        </div>

        {/* Load Bar Visualizer */}
        <div className="space-y-1">
          <div className="w-full bg-canvas-elevated h-3 rounded-full overflow-hidden flex border border-line/60">
            <div
              className={`h-full transition-all duration-700 ${
                loadPercentage > 85 ? "bg-amber-400" : "bg-eng-cyan"
              }`}
              style={{ width: `${loadPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-slate-muted">
            <span>0W</span>
            <span>CAPACITY: {loadPercentage}%</span>
            <span>2500W CUTOFF</span>
          </div>
        </div>

        {/* Dynamic Load Shedding Logic Note */}
        <div className="text-[11px] text-slate-secondary flex items-start gap-2 pt-1">
          <Shield className="w-3.5 h-3.5 text-eng-copper shrink-0 mt-0.5" />
          <span>
            {loadShedActive
              ? "FreeRTOS event task detected demand spike & executed dynamic load shedding on Phase C to protect system transformer."
              : "Preemptive FreeRTOS scheduler continuously compares real-time 3-phase demand against safety thresholds."}
          </span>
        </div>
      </div>

      {/* Interactive Testing Controller */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-line">
        <div className="flex items-center gap-2 text-slate-muted text-[11px]">
          <Sliders className="w-3.5 h-3.5 text-eng-cyan" />
          <span>DEMO CONTROL: TEST EMBEDDED LOAD SHEDDING LOGIC</span>
        </div>

        <button
          onClick={() => setLoadShedActive(!loadShedActive)}
          className={`flex items-center gap-2 px-4 py-2 rounded font-mono text-xs font-semibold transition-all duration-200 ${
            loadShedActive
              ? "bg-amber-400/20 text-amber-300 border border-amber-400 hover:bg-amber-400 hover:text-canvas"
              : "bg-canvas-elevated text-slate-primary border border-line hover:border-eng-cyan hover:text-eng-cyan"
          }`}
        >
          {loadShedActive ? (
            <>
              <RotateCcw className="w-3.5 h-3.5" />
              RESTORE ALL PHASE LOADS
            </>
          ) : (
            <>
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              SIMULATE DEMAND OVERLOAD
            </>
          )}
        </button>
      </div>

      {/* Simulation Clarification Footnote */}
      <p className="text-[10px] text-slate-muted mt-3 italic text-center">
        * Interactive hardware emulator demonstrating the FreeRTOS multi-phase analytics and opto-isolated relay shedding logic specified in my engineering architecture documentation.
      </p>
    </div>
  );
}
