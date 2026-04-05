// resume/page.js
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ResumePage() {
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
<div className="
  border border-zinc-300
  bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)]
  rounded-sm
  cursor-default
  w-full
  max-w-3xl
">

        <div className="grid md:grid-cols-[1fr_260px] min-h-[600px] md:min-h-0">
          {/* Left Section */}
          <div className="relative border-r border-zinc-300/60 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(70,140,255,0.15),_transparent_55%)] pointer-events-none" />

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6 uppercase text-[11px] tracking-[0.3em] text-zinc-100 font-semibold">
                <span>React</span>
                <span>Next.js</span>
                <span>Vercel</span>
              </div>

              <h1 className="text-[#2cff66] uppercase leading-[0.85] font-black text-5xl sm:text-6xl md:text-7xl"
                style={{ fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif", textShadow: "0 0 12px rgba(44,255,102,0.35)", }}>
                My Resume
              </h1>

              {/* Skills */}
              <section className="mt-12 border-t border-zinc-300/20 pt-6 max-w-md">
                <h2 className="text-[#39ff63] text-sm uppercase tracking-[0.25em] font-bold mb-6">
                  Skills
                </h2>

                <div className="grid sm:grid-cols-1 gap-4">
                  <div className="border border-zinc-300/20 p-4 bg-black/20">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-2">
                      Frontend
                    </p>
                    <p className="text-[11px] tracking-[0.12em] text-zinc-200 leading-relaxed">
                      HTML, CSS, JavaScript, TypeScript, jQuery, React, Next.js, React, Next.js, Tailwind, Bootstrap, Handlebars, SEO
                    </p>
                  </div>

                  <div className="border border-zinc-300/20 p-4 bg-black/20">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-2">
                      Backend
                    </p>
                    <p className="text-[11px] tracking-[0.12em] text-zinc-200 leading-relaxed">
                      Node.js, APIs, Express, MySQL (Sequelize), GraphQL, MongoDB, REST, CRUD, Prisma, PostgreDB, JWT, Authentication, PWAs, Jest Testing, Context API, Redux
                    </p>
                  </div>

                  <div className="border border-zinc-300/20 p-4 bg-black/20">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-2">
                      Other Tools
                    </p>
                    <p className="text-[11px] tracking-[0.12em] text-zinc-200 leading-relaxed">
                      GitHub, Heroku, Vercel, Netlify, Render, Postman, Microsoft Azure Cloud, Serverless Architecture
                    </p>
                  </div>

                  <div className="border border-zinc-300/20 p-4 bg-black/20">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 mb-2">
                      Soft Skills
                    </p>
                    <p className="text-[11px] tracking-[0.12em] text-zinc-200 leading-relaxed">
                      Communication, Creativity, Problem Solving, Attention to
                      Detail
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="mt-12 border-t border-zinc-300/20 pt-6">
                <h2 className="text-[#39ff63] text-sm uppercase tracking-[0.25em] font-bold mb-6">
                  Education
                </h2>

                <div className="border border-zinc-300/20 p-4 bg-black/20">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                    Monash University 2025
                  </p>
                  <h3 className="text-zinc-100 uppercase font-bold text-sm mt-2">
                    Fullstack Coding Bootcamp Graduate
                  </h3>
                  <p className="text-[11px] tracking-[0.12em] text-zinc-300 mt-2">
                    Completed training in frontend and backend web development,
                    including React, Node.js, databases, and deployment.
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Right Aside */}
          <aside className="border border-zinc-300/60 bg-gradient-to-b from-[#08131f] via-[#1a4bcf] to-[#06111b] p-6 flex flex-col justify-between text-zinc-100 min-h-full">
            <div className="flex flex-col gap-4">
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

              <div>
                <p className="uppercase text-[10px] tracking-[0.25em] text-zinc-300 mb-3">
                  Contact
                </p>

                <div className="space-y-6">
                  <div>
                    <h2
                      className="text-[#39ff63] text-2xl uppercase font-black leading-none"
                      style={{
                        fontFamily:
                          "Impact, Haettenschweiler, Arial Narrow, sans-serif",
                      }}
                    >
                      Troy Damon
                    </h2>

                    <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed">
                      Fullstack Web Developer
                    </p>
                  </div>

                  <div className="space-y-3 text-[10px] uppercase tracking-[0.15em] text-zinc-200">
                    <p>Email: your@email.com</p>
                    <p>Phone: 0400 000 000</p>
                    <p>Location: Melbourne, Australia</p>
                    <p>GitHub: github.com/yourname</p>
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