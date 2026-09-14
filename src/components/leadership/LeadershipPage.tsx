"use client";

import React from "react";
import LeadershipNavbar from "./LeadershipNavbar";
import LeadershipHero from "./LeadershipHero";
import LeadershipScaleMetrics from "./LeadershipScaleMetrics";
import LeadershipPillars from "./LeadershipPillars";
import LeadershipRolesDetailed from "./LeadershipRolesDetailed";
import LeadershipAwardsGallery from "./LeadershipAwardsGallery";
import LeadershipManifesto from "./LeadershipManifesto";
import LeadershipContact from "./LeadershipContact";
import LeadershipFooter from "./LeadershipFooter";

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070A12] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      <LeadershipNavbar />
      <main className="flex-grow">
        <LeadershipHero />
        <LeadershipScaleMetrics />
        <LeadershipPillars />
        <LeadershipRolesDetailed />
        <LeadershipAwardsGallery />
        <LeadershipManifesto />
        <LeadershipContact />
      </main>
      <LeadershipFooter />
    </div>
  );
}
