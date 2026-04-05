"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ContactPage() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const day = currentDateTime.getDate();
  const month = currentDateTime.getMonth() + 1;
  const year = currentDateTime.getFullYear();

  const time = currentDateTime.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 pb-[120px]">
      <div
        className="
          w-full max-w-6xl
          border border-zinc-300
          bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)]
          rounded-sm
          cursor-default">
        <div className="grid md:grid-cols-[1fr_220px] min-h-[700px] md:min-h-0">
          {/* Left Section */}
          <div className="relative border-r border-zinc-300/60 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(70,140,255,0.15),_transparent_55%)] pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 uppercase text-[11px] tracking-[0.3em] text-zinc-100 font-semibold">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Vercel</span>
                </div>

                <h1
                  className="text-[#2cff66] uppercase leading-[0.85] font-black text-5xl sm:text-6xl md:text-7xl max-w-3xl mb-10"
                  style={{
                    fontFamily:
                      "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                    textShadow: "0 0 12px rgba(44,255,102,0.35)",
                  }}>
                  Contact Me
                </h1>

                <div className="inline-block border border-zinc-300/60 bg-black/25 p-5">
                  <form className="space-y-5">
                   <div className="grid sm:grid-cols-2 gap-5">
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-[0.25em] text-zinc-300">
      Name
    </label>
    <input
      type="text"
      placeholder="John"
      className="bg-[#08131f] border border-zinc-500/40 text-zinc-100 px-4 py-3 uppercase text-xs tracking-[0.12em] outline-none focus:border-[#39ff63] focus:shadow-[0_0_12px_rgba(57,255,99,0.25)] transition-all"
    />
  </div>
</div>

<div className="grid sm:grid-cols-2 gap-5">
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-[0.25em] text-zinc-300">
      Email
    </label>
    <input
      type="email"
      placeholder="example@email.com"
      className="bg-[#08131f] border border-zinc-500/40 text-zinc-100 px-4 py-3 text-xs tracking-[0.12em] outline-none focus:border-[#39ff63] focus:shadow-[0_0_12px_rgba(57,255,99,0.25)] transition-all"
    />
  </div>
</div>

<div className="grid sm:grid-cols-2 gap-5">
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase tracking-[0.25em] text-zinc-300">
      Message
    </label>
    <textarea
      rows={8}
      placeholder="Write your message here..."
      className="resize-none bg-[#08131f] border border-zinc-500/40 text-zinc-100 px-4 py-3 text-xs tracking-[0.08em] outline-none focus:border-[#39ff63] focus:shadow-[0_0_12px_rgba(57,255,99,0.25)] transition-all"
    />
  </div>
</div>

                    <button
                      type="submit"
                      className="
                        w-full sm:w-auto
                        border border-[#39ff63]
                        text-[#39ff63]
                        hover:bg-[#39ff63]
                        hover:text-black
                        active:bg-[#2ecc58]
                        active:text-black
                        active:translate-y-[1px]
                        transition-all duration-150
                        uppercase tracking-[0.25em]
                        text-xs
                        py-3 px-8
                        font-bold
                        inline-flex items-center justify-center
                        select-none
                      ">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>


            </div>
          </div>

          {/* Right Aside */}
          <aside className="border border-zinc-300/60 bg-gradient-to-b from-[#08131f] via-[#1a4bcf] to-[#06111b] p-6 flex flex-col justify-between text-zinc-100 min-h-full">
            <div className="flex flex-col gap-4">
              {/* Date & Time */}
              <div className="flex flex-col gap-1 bg-[#0b1522] border border-zinc-500/30 rounded-sm px-3 py-2 text-[10px] uppercase tracking-[0.25em] w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-zinc-400">Date</span>
                  <span className="text-[#39ff63] font-bold">
                    {day.toString().padStart(2, "0")} /{" "}
                    {month.toString().padStart(2, "0")} / {year}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full">
                  <span className="text-zinc-400">Time</span>
                  <span className="text-[#39ff63] font-bold">{time}</span>
                </div>

                <div className="text-right text-white text-[8px] w-full break-words">
                  GMT {currentDateTime.getTimezoneOffset() <= 0 ? "+" : "-"}
                  {String(
                    Math.floor(
                      Math.abs(currentDateTime.getTimezoneOffset()) / 60
                    )
                  ).padStart(2, "0")}
                  :
                  {String(
                    Math.abs(currentDateTime.getTimezoneOffset()) % 60
                  ).padStart(2, "0")}{" "}
                  – {timezone}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <p className="uppercase text-[10px] tracking-[0.25em] text-zinc-300 mb-3">
                  Contact:
                </p>

                <div className="space-y-6">
                  <div>
                    <h2
                      className="text-[#39ff63] text-2xl uppercase font-black leading-none"
                      style={{
                        fontFamily:
                          "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                      }}
                    >
                      Email
                    </h2>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed break-all">
                      your@email.com
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[#39ff63] text-2xl uppercase font-black leading-none"
                      style={{
                        fontFamily:
                          "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                      }}
                    >
                      Location
                    </h2>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed">
                      Melbourne, Australia
                    </p>
                  </div>

                  <div>
                    <h2
                      className="text-[#39ff63] text-2xl uppercase font-black leading-none"
                      style={{
                        fontFamily:
                          "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                      }}
                    >
                      Status
                    </h2>
                    <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed">
                      Available For New Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="mt-12 border border-[#39ff63] text-[#39ff63] 
            hover:bg-[#39ff63] hover:text-black active:bg-[#2ecc58] active:text-black active:translate-y-[1px] 
            transition-all duration-150 uppercase tracking-[0.25em] text-xs py-3 font-bold inline-flex items-center 
            justify-center select-none">
              My Apps
            </Link>

          </aside>
        </div>
      </div>
    </div>
  );
}