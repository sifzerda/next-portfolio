// components/Footer.jsx

import React from "react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-screen border-t border-zinc-500/40 bg-gradient-to-b from-[#1b2633] via-[#111827] to-[#0a0f16] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 z-[60]">

      <div className="flex items-center gap-4 flex-wrap">
        <span>
          <span className="text-zinc-400">Status: </span>
          <span className="text-[#39ff63] font-bold animate-pulse">
            Deployed
          </span>
        </span>

        <span className="text-zinc-500">|</span>
        <span>v3.0</span>
        <span className="text-zinc-500">|</span>
        <span>Next.js</span>
      </div>

      <div className="flex items-center gap-4">

        {/* GitHub link */}
        <a href="https://github.com/sifzerda/next-portfolio"
          target="_blank" rel="noopener noreferrer"
          className="group flex items-center gap-2 text-zinc-300 transition hover:text-[#39ff63]">
          <FaGithub className="text-base transition group-hover:text-[#39ff63]" />
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold transition group-hover:text-[#39ff63]">
            GitHub
          </span>
        </a>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#39ff63] animate-pulse" />
          <span>Available for Freelance Projects</span>
        </div>

      </div>
    </footer>
  );
}