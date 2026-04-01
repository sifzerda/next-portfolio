
"use client";

import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";

export default function VirtualClassroomPage() {
  const nodeRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

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
    File: ["New Session", "Open", "Save", "Export", "Exit"],
    View: ["Zoom In", "Zoom Out", "Fullscreen", "Split View"],
    Options: ["Preferences", "Themes", "Notifications", "Settings"],
    Help: ["Documentation", "Support", "Report Issue", "About"],
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
          className={`${isMobile ? "w-full h-full" : "w-full max-w-5xl"} border border-zinc-300 bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)] rounded-sm overflow-hidden cursor-default`}>

          {/* Header / Drag Handle */}
          <div className="border-b border-zinc-500/40 bg-gradient-to-b from-[#ffffff] via-[#c0c8d6] to-[#9aa6b4] text-[10px] text-black">
            <div className="drag-handle flex items-center justify-between px-4 py-3 border-b border-zinc-500/30 cursor-move">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black" />
                <span className="uppercase tracking-widest font-bold">Virtual Edu</span>
              </div>
            </div>

            <div
              className="flex gap-6 px-3 py-1 uppercase tracking-wide text-[9px] relative cursor-default"
              onMouseDown={(e) => e.stopPropagation()}
            >
              {Object.entries(menuItems).map(([menu, items]) => (
                <div key={menu} className="relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === menu ? null : menu)
                    }
                    className="hover:text-blue-900 transition-colors"
                  >
                    {menu}
                  </button>

                  {openMenu === menu && (
                    <div className="absolute left-0 top-full z-50 mt-1 min-w-[140px] border border-zinc-500/40 bg-[#d7dde6] shadow-lg text-black">
                      {items.map((item) => (
                        <button
                          key={item}
                          className="block w-full px-3 py-2 text-left text-[9px] uppercase tracking-wide hover:bg-[#b8c3d1]"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-[1fr_220px] min-h-[600px]">
            {/* Left Section */}
            <div className="relative border-r border-zinc-300/60 p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(70,140,255,0.15),_transparent_55%)] pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-6 uppercase text-[11px] tracking-[0.3em] text-zinc-100 font-semibold">
                      <span>React</span>
                      <span>Next.js</span>
                      <span>Learning</span>
                    </div>

                    <h1
                      className="text-[#2cff66] uppercase leading-[0.85] font-black text-5xl sm:text-6xl md:text-7xl max-w-3xl"
                      style={{
                        fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif",
                        textShadow: "0 0 12px rgba(44,255,102,0.35)",
                      }}
                    >
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

                <div className="mt-12 flex gap-3 max-w-md">
                  <div className="pt-1 text-zinc-200 text-xl">▶</div>
                  <p className="text-[11px] sm:text-xs uppercase leading-relaxed tracking-[0.15em] text-zinc-200 max-w-xs">
                    Explore new learning frameworks, digital habits, and design strategies that redefine the next generation of learners.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Aside */}

            <aside className="border border-zinc-300/60 bg-gradient-to-b from-[#08131f] via-[#1a4bcf] to-[#06111b] p-6 flex flex-col justify-between text-zinc-100">
              <div>
                <div className="mb-10">
                  <p className="uppercase text-[10px] tracking-[0.25em] text-zinc-300 mb-3"> Presenters: </p>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-[#39ff63] text-2xl uppercase font-black leading-none" style={{ fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} > Nina Davis </h2>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed"> Educational Designer & Future Learning Strategist </p>
                    </div>
                    <div>
                      <h2 className="text-[#39ff63] text-2xl uppercase font-black leading-none" style={{ fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif" }} > Carlos Vega </h2>
                      <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed"> Hybrid Systems Researcher & Digital Educator </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 text-[10px] uppercase tracking-[0.2em]">
                  <div className="flex justify-between border-b border-zinc-500/20 pb-2">
                    <span className="text-zinc-300">Date:</span>
                    <div className="text-right text-[#39ff63] font-bold">
                      <div>6 /</div>
                      <div>27 /</div>
                      <div>2026</div>
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-zinc-500/20 pb-2">
                    <span className="text-zinc-300">Time:</span>
                    <div className="text-right text-[#39ff63] font-bold">
                      <div>2:00</div>
                      <div>PM</div>
                      <div>GMT</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-12 border border-[#39ff63] text-[#39ff63] hover:bg-[#39ff63] hover:text-black transition-all duration-200 uppercase tracking-[0.25em] text-xs py-3 font-bold"> Register </button>
            </aside>
          </div>
        </div>
      </Draggable>
    </div>
  );
}
