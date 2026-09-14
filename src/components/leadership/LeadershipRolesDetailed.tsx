"use client";

import React from "react";
import { Users, Calendar, CheckCircle2, Shield, ArrowUpRight, Award, Compass } from "lucide-react";
import { LEADERSHIP } from "@/data/portfolioData";

export default function LeadershipRolesDetailed() {
  return (
    <section id="tenures" className="py-24 bg-[#080C16] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-amber-500/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Compass className="w-3.5 h-3.5" />
              <span>EXECUTIVE GOVERNANCE TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
              ELECTED TENURES &amp; EXECUTIVE RESPONSIBILITIES
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            PROVEN TRACK RECORD // 3+ consecutive years of institutional stewardship coordinating hundreds of members and managing cross-functional student divisions.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LEADERSHIP.map((role, idx) => (
            <div
              key={role.id}
              className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0F172A] to-[#0A0F1D] border border-amber-500/25 hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-8 shadow-xl relative overflow-hidden group"
            >
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold">
                      {role.period}
                    </span>
                    <span className="text-slate-400">// TENURE 0{idx + 1}</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold text-[11px]">
                    {role.communitySize}
                  </span>
                </div>

                {/* Title & Body */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 font-sans group-hover:text-amber-300 transition-colors">
                    {role.role}
                  </h3>
                  <div className="text-sm sm:text-base text-amber-400 font-mono mt-1 font-semibold">
                    {role.organization}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    {role.institution}
                  </div>
                </div>

                {/* Executive Summary Card */}
                <div className="p-4 rounded-xl bg-[#090E1A] border border-amber-500/20 text-xs sm:text-sm font-sans text-slate-200 leading-relaxed">
                  <span className="text-amber-400 font-mono font-bold block text-xs mb-1 uppercase tracking-wider">
                    EXECUTIVE MANDATE &amp; FOCUS:
                  </span>
                  {role.simpleSummary}
                </div>

                {/* Detailed Verified Achievements */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    KEY GOVERNANCE ACTIONS &amp; DELIVERABLES:
                  </span>
                  <ul className="space-y-3">
                    {role.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Institutional Tag */}
              <div className="pt-4 border-t border-white/10 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                <span>COMMUNITY SCALE: 400+ MEMBERS</span>
                <span className="text-amber-400 font-semibold flex items-center gap-1">
                  <span>OFFICIALLY VERIFIED</span>
                  <Shield className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
