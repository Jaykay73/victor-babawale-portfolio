"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EngineeringFocus from "@/components/EngineeringFocus";
import MiniSmartGridCaseStudy from "@/components/MiniSmartGridCaseStudy";
import PasswordLockCaseStudy from "@/components/PasswordLockCaseStudy";
import ExperienceProgression from "@/components/ExperienceProgression";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import EditorialMoment from "@/components/EditorialMoment";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import LeadershipPage from "@/components/leadership/LeadershipPage";
import { PortfolioThemeProvider, usePortfolioTheme } from "@/context/PortfolioThemeContext";

function PortfolioView() {
  const { mode } = usePortfolioTheme();

  return (
    <>
      <LoadingScreen />
      {mode === "leadership" ? (
        <LeadershipPage />
      ) : (
        <div className="flex flex-col min-h-screen bg-canvas text-slate-primary font-sans">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <EngineeringFocus />
            <MiniSmartGridCaseStudy />
            <PasswordLockCaseStudy />
            <ExperienceProgression />
            <SkillsSection />
            <AboutSection />
            <EditorialMoment />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default function Home() {
  return (
    <PortfolioThemeProvider>
      <PortfolioView />
    </PortfolioThemeProvider>
  );
}
