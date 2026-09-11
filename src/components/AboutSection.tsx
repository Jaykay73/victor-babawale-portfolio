"use client";

import React from "react";
import Image from "next/image";
import { User, GraduationCap, MapPin, CheckCircle2, Shield, Award } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-canvas relative border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo 2 (Outdoor portrait with binder) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Corner brackets */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-eng-cyan z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-eng-copper z-20 pointer-events-none" />

              {/* Photo Frame */}
              <div className="relative rounded bg-canvas-secondary border border-line overflow-hidden shadow-2xl shadow-black/60 group">
                <div className="flex items-center justify-between px-3 py-2 bg-canvas-elevated border-b border-line text-[10px] font-mono text-slate-muted">
                  <span>BIOGRAPHICAL PROFILE</span>
                  <span className="text-eng-copper">REF: AYOMIDE_V</span>
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/assets/victor-about.jpg"
                    alt="Victor Babawale Ayomide, Computer Engineering student and Embedded Systems Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas/80 via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

                <div className="p-3 bg-canvas-elevated border-t border-line flex items-center justify-between text-[10px] font-mono text-slate-secondary">
                  <span>UNILORIN COMPUTER ENGINEERING</span>
                  <span className="text-eng-cyan">2021 &ndash; 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Human & Engineering Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-mono text-xs text-eng-cyan tracking-widest uppercase">
                <User className="w-3.5 h-3.5" />
                <span>04 // THE ENGINEER BEHIND THE INSTRUMENTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
                PRACTICAL HARDWARE DISCIPLINE MEETS REAL-WORLD CONTEXT.
              </h2>
            </div>

            <div className="prose prose-invert max-w-none text-slate-secondary leading-relaxed text-sm sm:text-base space-y-4 font-normal">
              <p>
                I am an Embedded Systems Engineer completing my Bachelor of Engineering in Computer Engineering at the University of Ilorin (Class of 2026). Rather than restricting myself to theoretical computation or abstract software layers, my career trajectory has been shaped by direct physical contact with electrical energy, communications cabling, and microcontrollers.
              </p>
              <p>
                My engineering journey began on active rooftops with photovoltaic array wiring and inverter performance analysis at Autokontrol Technology, moved indoors to telecom racks auditing Cat6 and fiber backbones for the Lagos State Development &amp; Property Corporation, and converged on bare-metal firmware optimization, FreeRTOS scheduling, and debugging industrial control units.
              </p>
              <p>
                I combine low-level technical rigor with deep human responsibility. When working on systems that control power relays or secure entryways, I design with the understanding that failure in the physical world carries immediate real-world consequences.
              </p>
            </div>

            {/* Education & Academic Rigor */}
            <div className="pt-2 p-5 bg-canvas-secondary rounded-lg border border-line space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-primary font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-eng-cyan" />
                  UNIVERSITY OF ILORIN, NIGERIA
                </span>
                <span className="text-eng-copper">2021 &ndash; 2026</span>
              </div>
              <div className="text-sm font-sans text-slate-secondary">
                Bachelor of Engineering, Computer Engineering
              </div>
              <div className="text-xs font-mono text-slate-muted pt-1 border-t border-line/60">
                Core Focus: Microcontroller System Architecture, Interfacing, Computer Organization, Embedded C/C++, and Verification Protocols.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
