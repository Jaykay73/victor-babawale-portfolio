"use client";

import React from "react";
import Image from "next/image";
import { Quote, Sparkles, CheckCircle2, HeartHandshake, Compass } from "lucide-react";

export default function LeadershipManifesto() {
  return (
    <section id="manifesto" className="py-24 bg-[#080C16] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Prestige Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-[#0E1524]">
              <Image
                src="/assets/victor-about.jpg"
                alt="Babawale Victor Ayomide - Leadership Philosophy"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C16] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080C16]/90 backdrop-blur-md border border-amber-500/30 font-mono text-xs text-slate-300">
                <div className="text-amber-400 font-bold tracking-wider mb-1">
                  PERSONAL LEADERSHIP CREED
                </div>
                <div className="text-[11px] text-slate-400 font-sans">
                  University of Ilorin Campus // Student Governance
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Essay & Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Quote className="w-3.5 h-3.5" />
              <span>THE LEADERSHIP MANIFESTO</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-sans leading-tight">
              WHY TECHNICAL RIGOR MAKES ME A STRONGER EXECUTIVE LEADER
            </h2>

            {/* Featured Quote Callout */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-amber-500/10 via-[#0F1626] to-[#0A0F1D] border-l-4 border-amber-500 border-y border-r border-amber-500/20 shadow-lg">
              <p className="text-base sm:text-lg text-slate-100 font-sans italic leading-relaxed">
                &ldquo;Engineering taught me that you cannot negotiate with reality—if the physics is wrong, the circuit burns. 
                Leadership taught me that you cannot dictate to human beings—if empathy and active listening are absent, the community fractures.&rdquo;
              </p>
              <div className="mt-3 text-xs font-mono text-amber-400 font-semibold">
                — Babawale Victor Ayomide
              </div>
            </div>

            <div className="prose prose-invert text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 font-sans">
              <p>
                When coordinating 400+ students across different departments, personalities, and academic pressures, leaders cannot rely on raw authority. Real leadership is the discipline of creating clarity where there is confusion, building consensus across opposing viewpoints, and maintaining absolute follow-through on every promise.
              </p>
              <p>
                As Vice President and Programs Coordinator, I treated every committee member as a valued stakeholder. Whether allocating event responsibilities, mediating student conflicts, or organizing welfare support, my core goal was always to leave people more capable, confident, and motivated than I found them.
              </p>
            </div>

            {/* Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-[#0E1524] border border-amber-500/20 space-y-1">
                <span className="text-amber-400 font-bold block">01 / ACCOUNTABILITY</span>
                <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                  Total transparency in decisions, delegation, and institutional resources.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1524] border border-amber-500/20 space-y-1">
                <span className="text-amber-400 font-bold block">02 / ACTIVE EMPATHY</span>
                <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                  Listening before prescribing; addressing personal welfare alongside task delivery.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0E1524] border border-amber-500/20 space-y-1">
                <span className="text-amber-400 font-bold block">03 / EMPOWERMENT</span>
                <p className="font-sans text-[11px] text-slate-400 leading-relaxed">
                  Training successors so the organization thrives long after your tenure ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
