"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function VirtualClassroomPage() {
  const nodeRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // Window dragging disables on screen size smaller than 768 (phones can't drag)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const menuItems = {
    "About Me": [], // No dropdown for "About Me"
    Portfolio: ["Zoom In", "Zoom Out", "Fullscreen", "Split View"],
    Resume: ["Preferences", "Themes", "Notifications", "Settings"],
    Contact: ["Documentation", "Support", "Report Issue", "About"],
  };

  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position when screen size changes
  useEffect(() => {
    if (isMobile) {
      setPosition({ x: 0, y: 0 }); // Reset to top-left when mobile
    }
  }, [isMobile]);

  const draggableProps = isMobile
    ? { disabled: true, position } // disabled on mobile and reset position
    : { nodeRef, handle: ".drag-handle", bounds: "parent", position, onDrag: (_, data) => setPosition({ x: data.x, y: data.y }) };

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <Draggable {...draggableProps} nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className={`
    ${isMobile ? "w-full h-full" : "w-full max-w-5xl"}
    max-h-[calc(100vh-2rem)]
    border border-zinc-300
    bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)]
    rounded-sm
    overflow-y-auto
    overflow-x-hidden
    cursor-default
  `}>

          {/* Header / Drag Handle */}
          <div className="border-b border-zinc-500/40 bg-gradient-to-b from-[#ffffff] via-[#c0c8d6] to-[#9aa6b4] text-[10px] text-black">

            <div className="drag-handle flex items-center justify-between border-b border-zinc-500/30 cursor-move overflow-hidden">
              <div className="flex items-center gap-2 min-w-0 flex-1">

                <div className="w-5 h-5 relative shrink-0 ml-3">
                  <Image src="/fox.svg" alt="sifzerda logo" fill className="object-contain" />
                </div>

                <div className="flex-1 ml-4 marquee-wrapper min-w-0">
                  <div className="marquee-content text-sm">
                    <span className="whitespace-nowrap pr-16">
                      This window is draggable
                      <span className="mx-6"></span>
                      Click the Menu Tabs to Navigate
                      <span className="mx-6"></span>
                    </span>

                    <span className="whitespace-nowrap pr-16">
                      This window is draggable
                      <span className="mx-6"></span>
                      Click the Menu Tabs to Navigate
                      <span className="mx-6"></span>
                    </span>
                  </div>
                </div>

              </div>

              <button
                onMouseDown={(e) => e.stopPropagation()}
                className="ml-4 h-[42px] w-[42px] shrink-0 hover:bg-[#ff4c4c] hover:border-[#ff4c4c] hover:text-white active:bg-[#cc3a3a] text-black text-lg font-bold flex items-center justify-center">
                ✕
              </button>
            </div>

            <div className="flex items-stretch gap-2 px-3 tracking-wide text-[12px] relative cursor-default h-9"
              onMouseDown={(e) => e.stopPropagation()}>
              {Object.entries(menuItems).map(([menu, items]) => (
                <div
                  key={menu}
                  className="relative self-stretch flex"
                  onMouseLeave={() => setOpenMenu(null)}>
                  {menu === "About Me" ? (
                    // Direct link for "About Me"
                    <Link
                      href="/"
                      className="h-full px-3 flex items-center text-black transition-colors duration-150 hover:bg-[#8f9caf]/50 hover:text-white">
                      About Me
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => setOpenMenu(openMenu === menu ? null : menu)}
                        className="h-full px-3 flex items-center text-black transition-colors duration-150 hover:bg-[#8f9caf]/50 hover:text-white">
                        {menu}
                      </button>

                      {openMenu === menu && (
                        <div className="absolute left-0 top-full z-50 mt-1 min-w-[140px] border border-zinc-500/40 bg-[#d7dde6] shadow-lg text-black">
                          {items.map((item) => (
                            <button
                              key={item}
                              className="block w-full px-3 py-2 text-left text-[9px] uppercase tracking-wide hover:bg-[#b8c3d1]">
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

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

                    <h1 className="text-[#2cff66] uppercase leading-[0.85] font-black text-5xl sm:text-6xl md:text-7xl max-w-3xl"
                      style={{
                        fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                        textShadow: "0 0 12px rgba(44,255,102,0.35)",
                      }}>
                      Welcome
                      <br />
                      To My
                      <br />
                      Portfolio
                    </h1>
                  </div>

                  <div className="w-40 h-48 border border-zinc-300/60 bg-black/30 flex items-center justify-center text-zinc-400 text-[10px] uppercase tracking-[0.25em] shrink-0">
                    Photo
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

          {/* Footer */}
          <div className="border-t border-zinc-500/40 bg-gradient-to-b from-[#1b2633] via-[#111827] to-[#0a0f16] px-4 py-3">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[10px] uppercase tracking-[0.2em] text-zinc-300">

              <div className="flex items-center gap-4">
                <span className="text-[#39ff63] font-bold">Status: Deployed</span>
                <span className="text-zinc-500">|</span>
                <span>Portfolio Version 3.0</span>
                <span className="text-zinc-500">|</span>
                <span>Built with Next.js</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#39ff63] animate-pulse"></div>
                <span>Available for Freelance Projects</span>
              </div>

            </div>
          </div>
          {/* End Footer */}

        </div>
      </Draggable>
    </div>
  );
}
