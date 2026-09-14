"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Eye, X, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { AWARDS, AwardItem } from "@/data/portfolioData";

export default function LeadershipAwardsGallery() {
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);

  return (
    <section id="honors" className="py-24 bg-[#090D16] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-amber-500/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-400 tracking-widest uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>OFFICIAL HONORS &amp; CITATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-sans">
              RECOGNITION FOR EXEMPLARY LEADERSHIP
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-400 max-w-md">
            OFFICIAL CERTIFICATES // Formal recognitions of stewardship, exemplary character, and lasting community influence awarded by the student association.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AWARDS.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-b from-[#0F1626] to-[#0A0F1D] border border-amber-500/20 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between group shadow-xl"
            >
              {/* Certificate Image Preview */}
              <div
                onClick={() => setSelectedAward(item)}
                className="relative aspect-[4/3] w-full bg-[#080C14] cursor-pointer overflow-hidden group/img"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-amber-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#080C16]/90 border border-amber-500/40 text-amber-400 font-mono text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Eye className="w-3.5 h-3.5" />
                    Inspect Certificate
                  </span>
                </div>
              </div>

              {/* Award Details */}
              <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-amber-400">
                    <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 font-semibold">
                      {item.category}
                    </span>
                    <span className="text-slate-400">UNILORIN</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs text-slate-400 font-mono">
                    Issuer: {item.issuer}
                  </div>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed pt-2 line-clamp-3 italic">
                    &ldquo;{item.citation}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px]">
                  <button
                    onClick={() => setSelectedAward(item)}
                    className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Citation</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-slate-400 flex items-center gap-1 text-[10px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox for Certificate View */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="bg-[#0D1322] border border-amber-500/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 font-sans">
                  {selectedAward.title}
                </h3>
                <span className="text-xs text-amber-400 font-mono">
                  {selectedAward.issuer}
                </span>
              </div>
              <button
                onClick={() => setSelectedAward(null)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Certificate Zoom Container */}
            <div className="relative aspect-[4/3] w-full bg-black/60">
              <Image
                src={selectedAward.image}
                alt={selectedAward.title}
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            {/* Official Citation Details */}
            <div className="p-5 sm:p-6 bg-[#090E1A] border-t border-white/10 space-y-2">
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                OFFICIAL CITATION / TEXT:
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed italic">
                &ldquo;{selectedAward.citation}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
