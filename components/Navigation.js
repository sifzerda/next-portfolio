"use client";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-zinc-500/40 bg-gradient-to-b from-[#1b2633] via-[#111827] to-[#0a0f16] text-zinc-300 uppercase tracking-[0.18em]">
      {/* Top Bar */}
      <div className="drag-handle flex items-center justify-between border-b border-zinc-700/60 cursor-move overflow-hidden h-[52px]">
        <div className="flex items-center gap-3 min-w-0 flex-1 px-4">
          <div className="w-5 h-5 relative shrink-0">
            <Image src="/fox.svg" alt="logo" fill className="object-contain" />
          </div>

          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="marquee-wrapper">
              <div className="marquee-content text-[10px] text-zinc-400 whitespace-nowrap">
                <span className="pr-16">
                  This window is draggable
                  <span className="mx-6 text-zinc-600">|</span>
                  Click the Menu Tabs to Navigate
                  <span className="mx-6 text-zinc-600">|</span>
                  Portfolio Version 3.0
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          onMouseDown={(e) => e.stopPropagation()}
          className="h-full w-[52px] shrink-0 border-l border-zinc-700/60 text-zinc-400 hover:bg-[#ff4c4c] hover:text-white active:bg-[#cc3a3a] transition-colors flex items-center justify-center text-lg"
        >
          ✕
        </button>
      </div>

      {/* Navigation */}
      <nav
        className="flex items-center gap-1 px-3 h-11 border-t border-zinc-800/40"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <Link
          href="/"
          className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors"
        >
          About Me
        </Link>

        <Link
          href="/portfolio"
          className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors"
        >
          Portfolio
        </Link>

        <Link
          href="/resume"
          className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors"
        >
          Resume
        </Link>

        <Link
          href="/contact"
          className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}