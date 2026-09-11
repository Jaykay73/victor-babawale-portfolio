"use client";

import React, { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Show name alone, then smoothly fade out
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-canvas transition-opacity duration-700 ease-in-out ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Centered Name Alone */}
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="overflow-hidden">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-[0.22em] text-slate-primary uppercase font-sans animate-in fade-in zoom-in-95 duration-700">
            BABAWALE VICTOR AYOMIDE
          </h1>
        </div>
        {/* Minimalist engineering hairline that expands beneath */}
        <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-transparent via-eng-cyan to-transparent mt-5 animate-pulse"></div>
      </div>
    </div>
  );
}
