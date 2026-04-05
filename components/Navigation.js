"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-500/40 bg-gradient-to-b from-[#1b2633] via-[#111827] to-[#0a0f16] text-zinc-300 uppercase tracking-[0.18em]">
            {/* Navigation */}
            <nav className="flex items-center gap-1 px-3 h-11 border-t border-zinc-800/40" onMouseDown={(e) => e.stopPropagation()}>

                <div className="w-5 h-5 relative shrink-0">
                    <Image src="/fox2.svg" alt="logo" fill className="object-contain" />
                </div>

                <Link href="/" className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors">
                    About Me
                </Link>

                <Link href="/portfolio" className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors">
                    Portfolio
                </Link>

                <Link href="/resume" className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors">
                    Resume
                </Link>

                <Link href="/contact" className="h-full px-4 flex items-center text-[10px] text-zinc-300 hover:bg-zinc-800/70 hover:text-[#39ff63] transition-colors">
                    Contact
                </Link>
            </nav>
        </header>
    );
}