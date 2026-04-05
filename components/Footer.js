// components/Footer.jsx

import React from "react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen border-t border-zinc-500/40 bg-gradient-to-b from-[#1b2633] via-[#111827] to-[#0a0f16] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 z-[60]">
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-[#39ff63] font-bold">Status: Deployed</span>
        <span className="text-zinc-500">|</span>
        <span>Portfolio Version 3.0</span>
        <span className="text-zinc-500">|</span>
        <span>Built with Next.js</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-[#39ff63] animate-pulse" />
        <span>Available for Freelance Projects</span>
      </div>
    </footer>
  );
}