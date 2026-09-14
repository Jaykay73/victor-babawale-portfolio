"use client";

import React from "react";
import { ShieldCheck, Layers, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function LeadershipPillars() {
  const pillars = [
    {
      code: "01",
      title: "Executive Governance & Stewardship",
      subtitle: "Constitutional Administration & Transparent Accountability",
      icon: ShieldCheck,
      description:
        "As Vice President, I helped lead the executive cabinet representing 400+ students. I established transparent communication channels between executive officers and members, ensured policy continuity, and maintained institutional trust through accountable stewardship.",
      highlights: [
        "Co-led executive decision-making and cross-committee governance",
        "Preserved administrative alignment and documented institutional handoffs",
        "Enforced transparent delegation standards across executive appointments",
      ],
    },
    {
      code: "02",
      title: "Large-Scale Operational Logistics",
      subtitle: "Multi-Committee Orchestration & Precision Event Execution",
      icon: Layers,
      description:
        "As Programs Coordinator, I engineered end-to-end operational blueprints for major student conventions, seminars, and orientations. I decomposed large goals into actionable committee tasks, managed volunteer logistics, and resolved real-time operational bottlenecks.",
      highlights: [
        "Coordinated multi-tier student committees and volunteer workforces",
        "Supervised event schedules, venue logistics, and live audience flow",
        "Mitigated real-time operational disruptions with calm contingency plans",
      ],
    },
    {
      code: "03",
      title: "Human-Centered Mentorship & Empathy",
      subtitle: "People Empowerment & Constructive Conflict Resolution",
      icon: HeartHandshake,
      description:
        "Leadership is fundamentally about people, not titles. I prioritized active listening, mediated student concerns with fairness, organized academic welfare initiatives, and actively mentored junior students into confident organizational leaders.",
      highlights: [
        "Fostered a culture where every volunteer felt valued and respected",
        "Mediated interpersonal conflicts constructively through patient diplomacy",
        "Mentored successor executives ensuring sustainable leadership continuity",
      ],
    },
  ];

  return (
    <section id="vision" className="py-24 bg-[#090D16] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-amber-500/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>CORE LEADERSHIP PHILOSOPHY // 3 PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
              HOW I LEAD &amp; GOVERN
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            THE TRIAD OF STEWARDSHIP // Balancing institutional rigor, operational precision, and deep human empathy.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.code}
                className="p-8 rounded-2xl bg-gradient-to-b from-[#0F1626] to-[#0A0F1D] border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-6 shadow-xl relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                      PILLAR {pillar.code}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 text-amber-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 font-sans group-hover:text-amber-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-mono text-amber-400/80">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 border-t border-white/5 space-y-2.5">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      KEY LEADERSHIP PRACTICES:
                    </span>
                    {pillar.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                  <span>EXECUTIVE STANDARDS</span>
                  <span className="text-amber-400 font-semibold">VERIFIED IMPACT</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
