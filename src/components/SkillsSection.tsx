"use client";

import React, { useState } from "react";
import { Wrench, Cpu, Zap, Network, ShieldCheck, Users, Activity } from "lucide-react";
import { SKILLS_LIST } from "@/data/portfolioData";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  // Divide skills into two tracks for a rich, dual-lane right-to-left moving carousel
  const half = Math.ceil(SKILLS_LIST.length / 2);
  const track1 = SKILLS_LIST.slice(0, half);
  const track2 = SKILLS_LIST.slice(half);

  // Duplicate arrays for seamless infinite loop
  const doubleTrack1 = [...track1, ...track1, ...track1, ...track1];
  const doubleTrack2 = [...track2, ...track2, ...track2, ...track2];

  const getCategoryColor = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "firmware":
        return "text-eng-cyan border-eng-cyan/30 bg-eng-cyan/10";
      case "hardware":
        return "text-eng-copper border-eng-copper/30 bg-eng-copper/10";
      case "power":
        return "text-amber-400 border-amber-400/30 bg-amber-400/10";
      case "networking":
        return "text-sky-400 border-sky-400/30 bg-sky-400/10";
      case "verification":
      case "analytics":
      case "engineering":
        return "text-emerald-400 border-emerald-400/30 bg-emerald-400/10";
      default:
        return "text-slate-secondary border-line bg-canvas-secondary";
    }
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "firmware":
        return <Cpu className="w-3.5 h-3.5 text-eng-cyan" />;
      case "hardware":
        return <Wrench className="w-3.5 h-3.5 text-eng-copper" />;
      case "power":
        return <Zap className="w-3.5 h-3.5 text-amber-400" />;
      case "networking":
        return <Network className="w-3.5 h-3.5 text-sky-400" />;
      case "verification":
      case "analytics":
      case "engineering":
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Activity className="w-3.5 h-3.5 text-slate-muted" />;
    }
  };

  const categories = [
    { label: "ALL SKILLS", value: "ALL" },
    { label: "FIRMWARE & RTOS", value: "Firmware" },
    { label: "HARDWARE & CIRCUITS", value: "Hardware" },
    { label: "POWER & SOLAR", value: "Power" },
    { label: "NETWORKING", value: "Networking" },
    { label: "TESTING & VERIFICATION", value: "Verification" },
  ];

  const filteredSkills =
    selectedCategory === "ALL"
      ? SKILLS_LIST
      : SKILLS_LIST.filter(
          (s) =>
            s.category.toLowerCase() === selectedCategory.toLowerCase() ||
            (selectedCategory === "Verification" &&
              (s.category === "Verification" || s.category === "Analytics" || s.category === "Engineering"))
        );

  return (
    <section id="skills" className="py-24 bg-canvas-secondary/20 relative border-b border-line overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-eng-cyan/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-eng-copper/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-line">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-eng-cyan tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>03 // CORE TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-primary">
              MY ENGINEERING SKILLS &amp; TOOLSET
            </h2>
            <p className="text-slate-secondary text-sm sm:text-base max-w-2xl font-normal">
              Every capability here reflects real systems I design, test, and maintain&mdash;from low-level C firmware and real-time operating systems to physical power distribution and enterprise network cabling.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>RIGHT-TO-LEFT STREAM &bull; HOVER TO PAUSE</span>
          </div>
        </div>

        {/* Category Quick Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3.5 py-1.5 font-mono text-xs rounded transition-all duration-200 ${
                selectedCategory === cat.value
                  ? "bg-eng-cyan text-canvas font-bold shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                  : "bg-canvas-secondary border border-line text-slate-secondary hover:text-slate-primary hover:border-line-bright"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTINUOUS ANIMATED CAROUSEL (Moving from Right to Left) */}
      <div className="relative w-full overflow-hidden space-y-4 py-4">
        {/* Gradient edge fades for seamless cinema look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-canvas to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-canvas to-transparent z-20 pointer-events-none" />

        {/* Carousel Track 1 (Right to Left) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-rtl flex gap-4">
            {doubleTrack1.map((skill, idx) => (
              <div
                key={`track1-${idx}`}
                className="w-72 sm:w-80 shrink-0 p-4 rounded-lg bg-canvas-secondary/90 border border-line hover:border-eng-cyan/60 hover:bg-canvas-elevated transition-all duration-200 group cursor-default shadow-lg"
              >
                <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold flex items-center gap-1.5 ${getCategoryColor(skill.category)}`}>
                    {getCategoryIcon(skill.category)}
                    {skill.category.toUpperCase()}
                  </span>
                  <span className="text-slate-muted text-[10px]">{skill.level}</span>
                </div>
                <h4 className="font-sans font-bold text-slate-primary text-base group-hover:text-eng-cyan transition-colors">
                  {skill.name}
                </h4>
                <p className="font-sans text-xs text-slate-secondary mt-1.5 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Track 2 (Right to Left, slightly faster for depth) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-rtl-fast flex gap-4">
            {doubleTrack2.map((skill, idx) => (
              <div
                key={`track2-${idx}`}
                className="w-72 sm:w-80 shrink-0 p-4 rounded-lg bg-canvas-secondary/90 border border-line hover:border-eng-copper/60 hover:bg-canvas-elevated transition-all duration-200 group cursor-default shadow-lg"
              >
                <div className="flex items-center justify-between gap-2 mb-2 font-mono text-[11px]">
                  <span className={`px-2 py-0.5 rounded border text-[10px] font-semibold flex items-center gap-1.5 ${getCategoryColor(skill.category)}`}>
                    {getCategoryIcon(skill.category)}
                    {skill.category.toUpperCase()}
                  </span>
                  <span className="text-slate-muted text-[10px]">{skill.level}</span>
                </div>
                <h4 className="font-sans font-bold text-slate-primary text-base group-hover:text-eng-copper transition-colors">
                  {skill.name}
                </h4>
                <p className="font-sans text-xs text-slate-secondary mt-1.5 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Category Expanded Grid (for recruiters who want to see all skills at once) */}
      {selectedCategory !== "ALL" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="p-6 rounded-lg bg-canvas border border-line space-y-4">
            <div className="flex items-center justify-between font-mono text-xs text-slate-muted pb-3 border-b border-line">
              <span className="text-slate-primary font-bold">
                FILTERED VIEW: {selectedCategory.toUpperCase()} ({filteredSkills.length} SKILLS)
              </span>
              <button
                onClick={() => setSelectedCategory("ALL")}
                className="text-eng-cyan hover:underline"
              >
                SHOW ALL
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded bg-canvas-secondary border border-line hover:border-eng-cyan/40 transition-colors"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                    <span className={`px-2 py-0.5 rounded border text-[10px] ${getCategoryColor(skill.category)}`}>
                      {skill.category}
                    </span>
                    <span className="text-slate-muted">{skill.level}</span>
                  </div>
                  <div className="font-bold text-slate-primary text-sm">{skill.name}</div>
                  <div className="text-xs text-slate-secondary mt-1 font-sans leading-relaxed">
                    {skill.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
