// components/Background.jsx
"use client";

export default function Background({ children }) {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,0.9),_transparent_35%),linear-gradient(to_bottom,_#09111f,_#111827,_#0a0f16)]">
      {children}
    </div>
  );
}