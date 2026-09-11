"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Radio, Terminal } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-canvas relative overflow-hidden">
      {/* Schematic Signal Trace into contact node */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-16 bg-gradient-to-b from-line to-eng-cyan"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-canvas-secondary border border-line text-eng-cyan font-mono text-xs tracking-widest uppercase">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>COMMUNICATION INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-primary">
            ESTABLISH CONNECTION
          </h2>
          <p className="text-slate-secondary text-sm sm:text-base max-w-xl mx-auto font-normal">
            Have an embedded systems project, engineering opportunity, or technical problem worth discussing? I am available for full-time engineering roles, technical internships, and collaborative hardware-software projects.
          </p>
        </div>

        {/* System Terminal Console Chassis */}
        <div className="bg-canvas-secondary border border-line rounded-xl overflow-hidden shadow-2xl relative">
          {/* Header Bar */}
          <div className="px-5 py-3 bg-canvas-elevated border-b border-line flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-slate-primary">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-led-blink"></span>
              <span className="font-bold">CHANNEL // DIRECT_LINK</span>
            </div>
            <div className="text-slate-muted text-[11px] hidden sm:block">
              PORT: 2579 // READY
            </div>
          </div>

          <div className="p-6 sm:p-10 space-y-8">
            {/* Primary Action Box: Email */}
            <div className="p-6 rounded-lg bg-canvas border border-line/80 space-y-4">
              <div className="text-xs font-mono text-slate-muted flex items-center justify-between">
                <span className="flex items-center gap-2 text-eng-cyan">
                  <Mail className="w-4 h-4" />
                  PRIMARY INBOX
                </span>
                <span>DIRECT ROUTE</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="font-mono text-lg sm:text-xl font-bold text-slate-primary break-all">
                  {PROFILE.contact.email}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-2 rounded bg-canvas-secondary border border-line text-slate-secondary hover:text-slate-primary hover:border-eng-cyan font-mono text-xs transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PROFILE.contact.email}`}
                    className="flex items-center gap-2 px-5 py-2 rounded bg-eng-cyan text-canvas font-mono text-xs font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND MESSAGE &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded bg-canvas border border-line flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-eng-copper" />
                  <div>
                    <span className="text-[10px] text-slate-muted block">TELEPHONE</span>
                    <span className="text-slate-primary font-bold">{PROFILE.contact.phone}</span>
                  </div>
                </div>
                <a
                  href={`tel:${PROFILE.contact.phone}`}
                  className="text-eng-copper hover:underline text-[11px]"
                >
                  CALL
                </a>
              </div>

              <div className="p-4 rounded bg-canvas border border-line flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <div>
                    <span className="text-[10px] text-slate-muted block">LOCATION</span>
                    <span className="text-slate-primary font-bold">{PROFILE.contact.location}</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-muted">WAT (UTC+1)</span>
              </div>
            </div>

            {/* Terminal Status Ticker */}
            <div className="p-3 bg-canvas/60 rounded border border-line/50 font-mono text-[11px] text-slate-muted flex items-center justify-between">
              <span>ACTIVE STATUS: OPEN FOR EMBEDDED &amp; FIRMWARE ENGINEERING OPPORTUNITIES</span>
              <span className="text-eng-cyan">&bull; VERIFIED 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
