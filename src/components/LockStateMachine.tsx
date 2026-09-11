"use client";

import React, { useState } from "react";
import { Lock, Unlock, ShieldCheck, AlertCircle, RefreshCw, KeyRound, Cpu, Terminal } from "lucide-react";

export default function LockStateMachine() {
  const [pin, setPin] = useState<string>("");
  const [status, setStatus] = useState<"IDLE" | "VERIFYING" | "GRANTED" | "DENIED">("IDLE");
  const [solenoidOpen, setSolenoidOpen] = useState(false);
  const [debounceSimActive, setDebounceSimActive] = useState(true);

  const SECRET_CODE = "1234";

  const handleKeyPress = (char: string) => {
    if (status === "VERIFYING") return;

    if (char === "*") {
      setPin("");
      setStatus("IDLE");
      setSolenoidOpen(false);
      return;
    }

    if (char === "#") {
      // Validate
      if (pin.length === 0) return;
      setStatus("VERIFYING");

      setTimeout(() => {
        if (pin === SECRET_CODE) {
          setStatus("GRANTED");
          setSolenoidOpen(true);
        } else {
          setStatus("DENIED");
          setSolenoidOpen(false);
        }
      }, 500);
      return;
    }

    if (pin.length < 4) {
      const newPin = pin + char;
      setPin(newPin);
      setStatus("IDLE");
    }
  };

  const resetLock = () => {
    setPin("");
    setStatus("IDLE");
    setSolenoidOpen(false);
  };

  const keypadRows = [
    ["1", "2", "3", "A"],
    ["4", "5", "6", "B"],
    ["7", "8", "9", "C"],
    ["*", "0", "#", "D"],
  ];

  return (
    <div className="bg-canvas-secondary border border-line rounded-lg p-5 sm:p-7 relative font-mono text-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-line mb-6">
        <div className="flex items-center gap-2 text-slate-primary">
          <KeyRound className="w-4 h-4 text-eng-cyan" />
          <span className="font-bold tracking-wider">HARDWARE MATRIX & LCD EMULATOR</span>
        </div>
        <span className="text-[11px] text-slate-muted">DEFAULT DEMO PIN: 1234 &bull; PRESS [#] TO VERIFY</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Side: 16x2 Character LCD Screen */}
        <div className="md:col-span-6 space-y-6">
          <div>
            <div className="text-[10px] text-slate-muted uppercase tracking-wider mb-2 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-eng-cyan" />
              <span>16x2 CHARACTER LCD READOUT</span>
            </div>

            {/* Character LCD Box Styled like HD44780 / Industrial Green-Blue Display */}
            <div className="bg-[#051E1E] border-2 border-[#0A3838] p-4 rounded-md shadow-inner text-emerald-300 font-mono tracking-wider space-y-2">
              <div className="flex justify-between text-xs border-b border-emerald-900/60 pb-1 text-emerald-400/90">
                <span>[LINE 1] SECURITY SYSTEM</span>
                <span>FW: v1.4</span>
              </div>
              <div className="text-sm font-bold min-h-[1.5rem] flex items-center">
                {status === "IDLE" && (
                  <span>
                    PIN: {pin.padEnd(4, "-").replace(/./g, (c, i) => (i < pin.length ? "*" : "_"))}
                  </span>
                )}
                {status === "VERIFYING" && <span className="animate-pulse">VERIFYING PIN...</span>}
                {status === "GRANTED" && (
                  <span className="text-emerald-400 font-bold animate-bounce">
                    ACCESS GRANTED!
                  </span>
                )}
                {status === "DENIED" && (
                  <span className="text-red-400 font-bold">INVALID PIN - RETRY</span>
                )}
              </div>
              <div className="text-[11px] text-emerald-500/80 flex items-center justify-between pt-1 border-t border-emerald-900/60">
                <span>STATUS: {solenoidOpen ? "UNLOCKED" : "LOCKED"}</span>
                <span>DEBOUNCE: RC_OK</span>
              </div>
            </div>
          </div>

          {/* Electronic Lock Actuator State */}
          <div
            className={`p-4 rounded border transition-all duration-300 ${
              solenoidOpen
                ? "bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                : "bg-canvas border-line"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`p-2.5 rounded ${
                    solenoidOpen ? "bg-emerald-500/20 text-emerald-400" : "bg-canvas-elevated text-slate-muted"
                  }`}
                >
                  {solenoidOpen ? <Unlock className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-bold text-slate-primary text-xs">
                    {solenoidOpen ? "SOLENOID ENERGIZED // UNLOCKED" : "ELECTRONIC LATCH // SECURED"}
                  </div>
                  <div className="text-[11px] text-slate-muted">
                    {solenoidOpen ? "Actuation pulse active (12V pulse via relay driver)" : "Waiting for valid authentication pulse"}
                  </div>
                </div>
              </div>

              {solenoidOpen && (
                <button
                  onClick={resetLock}
                  className="px-3 py-1.5 rounded bg-canvas-secondary border border-line text-[11px] text-slate-primary hover:border-eng-cyan flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  RESET LOCK
                </button>
              )}
            </div>
          </div>

          {/* Technical Debouncing Annotation */}
          <div className="p-3 bg-canvas rounded border border-line text-[11px] text-slate-secondary space-y-1">
            <span className="text-eng-copper font-bold flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" />
              SIGNAL CONDITIONING & DEBOUNCING:
            </span>
            <p className="font-sans text-slate-muted text-xs leading-relaxed">
              Tactile pushbuttons generate microsecond-scale mechanical chatter upon contact closure. Integrated RC low-pass filters and software polling thresholds eliminate spurious false trigger pulses before register comparison.
            </p>
          </div>
        </div>

        {/* Right Side: Interactive 4x4 Keypad */}
        <div className="md:col-span-6 bg-canvas p-5 rounded-lg border border-line space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-muted pb-2 border-b border-line">
            <span>4x4 MATRIX KEYPAD</span>
            <span className="text-[10px] text-eng-cyan">TACTILE ROW-COL SCAN</span>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {keypadRows.map((row, rIdx) =>
              row.map((key) => {
                const isAction = key === "*" || key === "#" || isNaN(Number(key));
                return (
                  <button
                    key={`${rIdx}-${key}`}
                    onClick={() => handleKeyPress(key)}
                    className={`h-12 rounded border font-mono font-bold text-sm transition-all duration-150 flex items-center justify-center active:scale-95 ${
                      isAction
                        ? "bg-canvas-elevated border-line text-eng-copper hover:border-eng-copper hover:bg-canvas-secondary"
                        : "bg-canvas-secondary border-line text-slate-primary hover:border-eng-cyan hover:bg-canvas-elevated hover:text-eng-cyan"
                    }`}
                  >
                    {key}
                  </button>
                );
              })
            )}
          </div>

          <div className="flex items-center justify-between pt-2 text-[10px] text-slate-muted">
            <span>[*] CLEAR / RESET</span>
            <span>[#] SUBMIT CODE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
