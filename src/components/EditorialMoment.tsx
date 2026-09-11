"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Terminal } from "lucide-react";

export default function EditorialMoment() {
  return (
    <section className="py-20 bg-canvas relative overflow-hidden border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden border border-line bg-canvas-secondary shadow-2xl">
          {/* Subtle Corner Brackets */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-eng-cyan z-20 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-line z-20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-line z-20 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-eng-copper z-20 pointer-events-none" />

          {/* Background Grid Accent */}
          <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-5 relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-canvas">
              <Image
                src="/assets/victor-editorial.jpg"
                alt="Babawale Victor Ayomide, Modern African Engineering Perspective"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top filter contrast-[1.03] brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-canvas-secondary pointer-events-none" />
            </div>

            {/* Editorial Statement Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 z-20 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-eng-cyan tracking-widest uppercase">
                <Terminal className="w-3.5 h-3.5" />
                <span>ENGINEERING PHILOSOPHY // INTENTIONAL DESIGN</span>
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-primary leading-tight font-sans">
                &ldquo;GOOD ENGINEERING ISN&apos;T JUST ABOUT MAKING THINGS WORK.{" "}
                <span className="text-eng-copper">
                  IT&apos;S ABOUT UNDERSTANDING WHY THEY WORK.
                </span>&rdquo;
              </blockquote>

              <p className="text-slate-secondary text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                From microsecond signal propagation down PCB traces to dynamic load distribution across utility phases, true reliability comes from respecting physical constraints and designing systems with deterministic predictability.
              </p>

              <div className="pt-4 border-t border-line/60 flex flex-wrap items-center gap-6 font-mono text-xs text-slate-muted">
                <div>
                  <span className="text-slate-primary block font-bold">BABAWALE VICTOR AYOMIDE</span>
                  <span>COMPUTER ENGINEERING // UNILORIN</span>
                </div>
                <div className="border-l border-line pl-6">
                  <span className="text-eng-cyan block font-bold">EMBEDDED SYSTEMS</span>
                  <span>FIRMWARE &bull; POWER &bull; HARDWARE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
