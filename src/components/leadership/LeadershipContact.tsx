"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Send, Users, Shield } from "lucide-react";
import { PROFILE } from "@/data/portfolioData";

export default function LeadershipContact() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#070A12] border-b border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              <Users className="w-3.5 h-3.5" />
              <span>LEADERSHIP &amp; GOVERNANCE INQUIRIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100 font-sans">
              LET&apos;S CONNECT
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-sans max-w-xl mx-auto">
              Available for organizational leadership, student governance advisory, speaking engagements, and engineering project coordination.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#0F1626] to-[#0A0E18] border border-amber-500/30 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email Card */}
              <div className="p-5 rounded-xl bg-[#090D16] border border-white/10 space-y-2 relative group hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2 text-amber-400">
                    <Mail className="w-4 h-4" />
                    PRIMARY EMAIL
                  </span>
                  <button
                    onClick={() => copyToClipboard(PROFILE.contact.email, "email")}
                    className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors"
                    title="Copy Email"
                  >
                    {copied === "email" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="text-sm font-mono text-slate-200 hover:text-amber-400 transition-colors block break-all font-semibold"
                >
                  {PROFILE.contact.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-xl bg-[#090D16] border border-white/10 space-y-2 relative group hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-2 text-amber-400">
                    <Phone className="w-4 h-4" />
                    DIRECT PHONE / WHATSAPP
                  </span>
                  <button
                    onClick={() => copyToClipboard(PROFILE.contact.phone, "phone")}
                    className="p-1.5 rounded hover:bg-white/10 text-slate-400 hover:text-amber-400 transition-colors"
                    title="Copy Phone"
                  >
                    {copied === "phone" ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <a
                  href={`tel:${PROFILE.contact.phone.replace(/\s+/g, "")}`}
                  className="text-sm font-mono text-slate-200 hover:text-amber-400 transition-colors block font-semibold"
                >
                  {PROFILE.contact.phone}
                </a>
              </div>
            </div>

            {/* Location & Status */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>LOCATION: Lagos / Ilorin, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>OPEN TO EXECUTIVE &amp; ENGINEERING OPPORTUNITIES</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={`mailto:${PROFILE.contact.email}?subject=Leadership%20Inquiry%20-%20Babawale%20Victor`}
                className="flex-1 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono text-xs text-center transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email Message</span>
              </a>
              <a
                href={PROFILE.contact.cvPath}
                download
                className="py-3.5 px-6 rounded-xl bg-[#090D16] hover:bg-white/10 border border-amber-500/30 text-amber-300 font-bold font-mono text-xs text-center transition-all flex items-center justify-center gap-2"
              >
                <span>Download Executive CV</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
