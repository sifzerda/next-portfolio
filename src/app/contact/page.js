// contact page.js
"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {

  // date time logic
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
  // ---------------------------------------------//

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 pb-[120px]">
      
 <div className="
    border border-zinc-300
    bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)]
    rounded-sm
    cursor-default">

          {/* Main Content */}
          <div className="grid md:grid-cols-[1fr_220px] min-h-[600px] md:min-h-0">
            {/* Left Section */}
            <div className="relative border-r border-zinc-300/60 p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(70,140,255,0.15),_transparent_55%)] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-6 uppercase text-[11px] tracking-[0.3em] text-zinc-100 font-semibold">
                      <span>React</span>
                      <span>Next.js</span>
                      <span>Vercel</span>
                    </div>

                    <h1 className="text-[#2cff66] uppercase leading-[0.85] font-black text-5xl sm:text-6xl md:text-7xl max-w-3xl" style={{
                      fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                      textShadow: "0 0 12px rgba(44,255,102,0.35)",
                    }}>
                      Contact Me
                    </h1>
                  </div>

                </div>

                <div className="mt-12 flex flex-col gap-2 max-w-md">
                  <div className="flex gap-3">
                    <div className="pt-1 text-zinc-200 text-xl">▶</div>
                    <p className="text-[11px] sm:text-xs uppercase leading-relaxed tracking-[0.15em] text-zinc-200">
                      Monash Fullstack Coding Bootcamp Graduate
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="pt-1 text-zinc-200 text-xl">▶</div>
                    <p className="text-[11px] sm:text-xs uppercase leading-relaxed tracking-[0.15em] text-zinc-200">
                      Creativity, attention to detail, and passion for learning
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <div className="pt-1 text-zinc-200 text-xl">▶</div>
                    <p className="text-[11px] sm:text-xs uppercase leading-relaxed tracking-[0.15em] text-zinc-200">
                      Eager to contribute to innovative projects and collaborate with talented teams
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Aside */}

            <aside className="border border-zinc-300/60 bg-gradient-to-b from-[#08131f] via-[#1a4bcf] to-[#06111b] p-6 flex flex-col justify-between text-zinc-100 min-h-full">

              {/* Top Section: Date & Time + Name */}
              <div className="flex flex-col gap-4">

                {/* Date & Time Header (matches width of Name section) */}
                <div className="flex flex-col gap-1 bg-[#0b1522] border border-zinc-500/30 rounded-sm px-3 py-2 text-[10px] uppercase tracking-[0.25em] w-full">
                  <div className="flex justify-between items-center w-full">
                    <span className="text-zinc-400">Date</span>
                    <span className="text-[#39ff63] font-bold">
                      {day.toString().padStart(2, "0")} / {month.toString().padStart(2, "0")} / {year}
                    </span>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <span className="text-zinc-400">Time</span>
                    <span className="text-[#39ff63] font-bold">{time}</span>
                  </div>

                  <div className="text-right text-white text-[8px] w-full break-words">
                    GMT {currentDateTime.getTimezoneOffset() <= 0 ? "+" : "-"}
                    {String(Math.floor(Math.abs(currentDateTime.getTimezoneOffset()) / 60)).padStart(2, "0")}
                    :
                    {String(Math.abs(currentDateTime.getTimezoneOffset()) % 60).padStart(2, "0")} – {timezone}
                  </div>
                </div>

                {/* Name Section */}
                <div>
                  <p className="uppercase text-[10px] tracking-[0.25em] text-zinc-300 mb-3">Name:</p>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-[#39ff63] text-2xl uppercase font-black leading-none" style={{ fontFamily: "Impact, Haettenschweiler, Arial Narrow, sans-serif" }}>Troy Damon</h2>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed">Fullstack Web Developer and Coder</p>
                    </div>
                    <div>
                      <h2 className="text-[#39ff63] text-2xl uppercase font-black leading-none" style={{ fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }}>Heading 2</h2>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed">Hybrid Systems Researcher & Digital Educator</p>
                    </div>
                  </div>
                </div>

              </div>

              <button className="mt-12 border border-[#39ff63] text-[#39ff63] hover:bg-[#39ff63] hover:text-black transition-all duration-200 uppercase tracking-[0.25em] text-xs py-3 font-bold">My Apps</button>
            </aside>

          </div>


        </div>
    </div>
  );
}
