"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Users, Award, CheckCircle2, ShieldCheck, X, Eye } from "lucide-react";
import { LEADERSHIP, AWARDS, AwardItem } from "@/data/portfolioData";

export default function LeadershipSection() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <section id="leadership" className="py-24 bg-canvas-secondary/30 relative border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-eng-copper tracking-widest uppercase">
              <Users className="w-3.5 h-3.5" />
              <span>05 // COMMUNITY & STEWARDSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              ENGINEERING SYSTEMS &amp; LEADING PEOPLE
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-muted max-w-md">
            EXECUTIVE GOVERNANCE // Coordinating 400+ student members, program operations, and volunteer execution across multiple academic sessions.
          </p>
        </div>

        {/* Conceptual Contrast: Logic vs Empathy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 font-mono text-xs">
          <div className="p-5 rounded-lg bg-canvas border border-line space-y-2">
            <span className="text-eng-cyan font-bold block">PRECISION IN HARDWARE:</span>
            <p className="font-sans text-xs text-slate-secondary leading-relaxed">
              Deterministic state machines, millivolt tolerances, microsecond interrupt response times, and galvanic isolation.
            </p>
          </div>
          <div className="p-5 rounded-lg bg-canvas border border-line space-y-2">
            <span className="text-eng-copper font-bold block">EMPATHY IN LEADERSHIP:</span>
            <p className="font-sans text-xs text-slate-secondary leading-relaxed">
              Active listening, cross-team accountability, structured delegation, conflict resolution, and student community welfare.
            </p>
          </div>
        </div>

        {/* Roles Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {LEADERSHIP.map((role) => (
            <div
              key={role.id}
              className="bg-canvas border border-line rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-line-bright transition-colors"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-line mb-4">
                  <span className="text-eng-copper font-bold">{role.period}</span>
                  <span className="px-2 py-0.5 rounded bg-canvas-elevated text-slate-secondary text-[10px]">
                    {role.communitySize}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-primary font-sans">
                  {role.role}
                </h3>
                <div className="text-sm text-slate-secondary font-sans mt-0.5">
                  {role.organization}
                </div>
                <div className="text-xs font-mono text-slate-muted mt-1">
                  {role.institution}
                </div>

                {role.simpleSummary && (
                  <div className="mt-3 p-2.5 rounded bg-canvas-secondary border border-line text-xs font-sans text-slate-primary/90">
                    <span className="text-eng-copper font-mono font-semibold">LEADERSHIP HIGHLIGHT:</span> {role.simpleSummary}
                  </div>
                )}

                <ul className="mt-6 space-y-2.5">
                  {role.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-slate-secondary leading-relaxed font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-eng-copper mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-line/50 font-mono text-[11px] text-slate-muted flex items-center justify-between">
                <span>COMMUNITY COORDINATION</span>
                <span className="text-eng-cyan">VERIFIED TENURE</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Awards & Recognition Certificates Gallery */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-mono text-sm tracking-wider text-slate-primary flex items-center gap-2">
              <Award className="w-4 h-4 text-eng-copper" />
              VERIFIED INSTITUTIONAL RECOGNITION &amp; CITATIONS
            </h3>
            <span className="font-mono text-xs text-slate-muted">CLICK CERTIFICATE TO INSPECT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AWARDS.map((award) => (
              <div
                key={award.id}
                onClick={() => setSelectedAward(award)}
                className="bg-canvas border border-line rounded-lg overflow-hidden hover:border-eng-copper/60 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-canvas-elevated">
                    <Image
                      src={award.image}
                      alt={award.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-canvas/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded bg-canvas/90 border border-eng-copper text-eng-copper font-mono text-xs flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        VIEW FULL CITATION
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-eng-copper">
                      <span>{award.category}</span>
                      <span>CACSA UNILORIN</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-primary font-sans">
                      {award.title}
                    </h4>
                    <p className="text-xs text-slate-secondary font-sans line-clamp-3 leading-relaxed">
                      {award.citation}
                    </p>
                  </div>
                </div>

                <div className="px-5 py-2.5 bg-canvas-secondary border-t border-line text-[10px] font-mono text-slate-muted flex items-center justify-between">
                  <span>OFFICIAL DOCUMENT</span>
                  <span className="text-eng-cyan">&bull; VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox for Verified Certificates */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-canvas-secondary border border-line rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 bg-canvas-elevated border-b border-line font-mono text-xs text-slate-primary">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4 text-eng-copper" />
                {selectedAward.title}
              </span>
              <button
                onClick={() => setSelectedAward(null)}
                aria-label="Close certificate preview"
                className="p-1 rounded hover:bg-canvas text-slate-muted hover:text-slate-primary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-[4/3] w-full bg-black">
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                sizes="(max-width: 1000px) 100vw, 900px"
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-canvas border-t border-line text-xs font-mono space-y-1">
              <div className="text-slate-primary font-bold">{selectedAward.issuer}</div>
              <p className="text-slate-secondary font-sans text-xs leading-relaxed">
                {selectedAward.citation}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
