"use client";

import React from "react";
import { Users, Calendar, Award, CheckCircle, TrendingUp, ShieldCheck } from "lucide-react";

export default function LeadershipScaleMetrics() {
  const metrics = [
    {
      value: "400+",
      label: "Active Members Governed",
      subtext: "Coordinated students across all academic levels and faculties at University of Ilorin",
      icon: Users,
      accent: "text-amber-400",
    },
    {
      value: "3+ Years",
      label: "Executive Tenure",
      subtext: "Consecutive executive service as Vice President and Programs Coordinator",
      icon: Calendar,
      accent: "text-amber-300",
    },
    {
      value: "1,000+",
      label: "Attendees Reached",
      subtext: "Delivered large-scale conventions, student workshops, and orientation programs",
      icon: TrendingUp,
      accent: "text-amber-400",
    },
    {
      value: "3 Honors",
      label: "Official Leadership Awards",
      subtext: "Award of Excellence, Most Influential Award, and Certificate of Service",
      icon: Award,
      accent: "text-amber-300",
    },
  ];

  return (
    <section id="scale" className="py-16 bg-[#080C16] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-amber-500/20 shadow-lg relative overflow-hidden group hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-mono tracking-tight group-hover:text-amber-400 transition-colors">
                    {m.value}
                  </span>
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-slate-200 uppercase font-mono tracking-wider mb-1">
                  {m.label}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {m.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
