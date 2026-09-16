"use client";

import React from "react";
import Image from "next/image";
import { Users, Award, Shield, ArrowDown, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function LeadershipHero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 bg-gradient-to-b from-[#070B14] via-[#0A0F1D] to-[#080C16] border-b border-amber-500/20 flex items-center overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Authoritative Text */}
          <div className="lg:col-span-7 space-y-6">
            {/* Super-Header Badge */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold flex items-center gap-1.5 shadow-sm shadow-amber-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                EXECUTIVE STEWARDSHIP // LEADERSHIP PORTFOLIO
              </span>
              <span className="text-slate-400">// UNIVERSITY OF ILORIN</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-100 font-sans leading-[1.1]">
              LEADING PEOPLE.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                GOVERNING SCALE.
              </span>{" "}
              EMPOWERING COMMUNITIES.
            </h1>

            {/* Role & Summary */}
            <p className="text-lg sm:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl">
              I am <strong className="text-slate-100">Babawale Victor Ayomide</strong>—an executive student leader, former <strong className="text-amber-400">Vice President</strong> and <strong className="text-amber-400">Programs Coordinator</strong> of the Christ Apostolic Church Students Association (CACSA), University of Ilorin.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-sans">
              I lead with purposeful vision and high empathy—governing active communities of over <strong className="text-slate-200 font-semibold">400+ members</strong>, managing complex multi-committee operations, mentoring emerging leaders, and instilling organizational accountability.
            </p>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#0F1626] border border-amber-500/20">
                <span className="text-amber-400 font-bold block">400+ MEMBERS</span>
                <span className="text-slate-400 text-[11px]">Active Governance</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0F1626] border border-amber-500/20">
                <span className="text-amber-400 font-bold block">VICE PRESIDENT</span>
                <span className="text-slate-400 text-[11px]">Executive Council</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0F1626] border border-amber-500/20 col-span-2 sm:col-span-1">
                <span className="text-amber-400 font-bold block">3 HONORS</span>
                <span className="text-slate-400 text-[11px]">Excellence &amp; Influence</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs">
              <a
                href="#tenures"
                className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
              >
                <span>Explore Executive Tenures</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#honors"
                className="px-6 py-3 rounded-lg bg-[#0E1524] hover:bg-[#152035] border border-amber-500/30 text-amber-300 font-bold transition-all flex items-center gap-2"
              >
                <span>View Official Honors</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Formal Portrait with Executive Crest */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-500/10 bg-[#0E1524]">
              <Image
                src="/assets/victor-hero.jpg"
                alt="Babawale Victor Ayomide - Vice President & Executive Leader"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                priority
                className="object-cover object-top"
              />

              {/* Bottom Caption Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#080C16]/90 backdrop-blur-md border border-amber-500/30 p-4 rounded-xl font-mono text-xs">
                <div className="flex items-center justify-between gap-2 pb-1 border-b border-white/10 mb-2">
                  <span className="text-amber-400 font-bold tracking-wider">OFFICIAL EXECUTIVE DOSSIER</span>
                  <span className="text-[10px] text-slate-400">UNILORIN // 2026</span>
                </div>
                <div className="text-slate-200 font-sans font-semibold text-sm">
                  Babawale Victor Ayomide
                </div>
                <div className="text-slate-400 text-[11px] font-sans">
                  Vice President &amp; Executive Council Member, CACSA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
