export default function VirtualClassroomPage() {
  return (
    <div className="min-h-screen bg-[#08111d] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(80,140,255,0.22),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(30,90,255,0.18),_transparent_40%),linear-gradient(135deg,_#07111b_0%,_#0b2340_35%,_#154a89_65%,_#08111d_100%)]" />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.08)_50%,transparent_100%)] bg-[length:100%_4px]" />

      <div className="relative z-10 min-h-screen grid md:grid-cols-[1fr_260px]">
        <div className="flex flex-col justify-between px-8 py-10 md:px-16 md:py-14 border-r border-white/10">
          <div>
            <div className="flex items-center justify-between mb-8 uppercase text-[11px] tracking-[0.35em] text-zinc-100 font-semibold">
              <span>Next Gen</span>
              <span>Learning:</span>
            </div>

            <h1
              className="text-[#2cff66] uppercase leading-[0.85] tracking-tight font-black text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] max-w-4xl"
              style={{
                fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
                textShadow: '0 0 14px rgba(44,255,102,0.35)',
              }}
            >
              Beyond The
              <br />
              Virtual
              <br />
              Classroom
            </h1>
          </div>

          <div className="flex gap-4 max-w-lg mb-10 md:mb-0">
            <div className="pt-1 text-zinc-200 text-xl">▶</div>
            <p className="text-[11px] sm:text-xs uppercase leading-relaxed tracking-[0.18em] text-zinc-200 max-w-sm">
              Explore new learning frameworks, digital habits, and design strategies that redefine the next generation of learners.
            </p>
          </div>
        </div>

        <aside className="flex flex-col justify-between px-8 py-10 md:px-10 md:py-14 bg-black/10 backdrop-blur-[2px]">
          <div>
            <div className="mb-12">
              <p className="uppercase text-[10px] tracking-[0.25em] text-zinc-300 mb-4">
                Presenters:
              </p>

              <div className="space-y-8">
                <div>
                  <h2
                    className="text-[#39ff63] text-3xl uppercase font-black leading-none"
                    style={{
                      fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
                    }}
                  >
                    Nina Davis
                  </h2>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-3 leading-relaxed max-w-[180px]">
                    Educational Designer & Future Learning Strategist
                  </p>
                </div>

                <div>
                  <h2
                    className="text-[#39ff63] text-3xl uppercase font-black leading-none"
                    style={{
                      fontFamily: 'Impact, Haettenschweiler, Arial Narrow Bold, sans-serif',
                    }}
                  >
                    Carlos Vega
                  </h2>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-3 leading-relaxed max-w-[180px]">
                    Hybrid Systems Researcher & Digital Educator
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-[10px] uppercase tracking-[0.2em]">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-zinc-300">Date:</span>
                <div className="text-right text-[#39ff63] font-bold">
                  <div>6 /</div>
                  <div>27 /</div>
                  <div>2026</div>
                </div>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-zinc-300">Time:</span>
                <div className="text-right text-[#39ff63] font-bold">
                  <div>2:00</div>
                  <div>PM</div>
                  <div>GMT</div>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-12 border border-[#39ff63] text-[#39ff63] hover:bg-[#39ff63] hover:text-black transition-all duration-200 uppercase tracking-[0.25em] text-xs py-3 font-bold">
            Register
          </button>
        </aside>
      </div>
    </div>
  );
}
