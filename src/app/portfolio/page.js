// portfolio page.js
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setCurrentDateTime(new Date()), 1000);
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

  const apps = [
    //    {
    //      title: "Band Page",
    //      description: "Made for my band to arrange jams and suggest songs. A fullstack app built with React, node, express, MongoDB, and graphql - refactored into a serverless Next app. Rehearsal availability calendar, music player, youtube audio search.",
    //      image: "/bandpic.jpg",
    //      link: "https://bandpage.vercel.app/",
    //      tech: ["React", "react-player", "YouTube Data API v3"],
    //    },
    {
      title: "Game of Life",
      description: "Plays out simulations of John Conway's Game of Life. Frontend React + Node.js. Play/pause/reset timed simulation, alter group size and quantity.",
      image: "/gamePic.jpg",
      link: "https://game-of-life-49sl.vercel.app/",
      tech: ["React", "JavaScript", "Vercel"],
    },
    {
      title: "Music Player",
      description: "A  site with a built in music player. A frontend SPA Router, React + Node.js + react-player. Preloaded with a playlist, songs can be played, paused, and skipped. Volume adjustment and song progress bar.",
      image: "/musicPic.jpg",
      link: "https://slotmachine-five.vercel.app/",
      tech: ["React", "Node.js", "react-player"],
    },
    {
      title: "Eight Ball Pool",
      description: "A game of 8 ball billiards made with the Matter.js engine. Originally a fullstack app with React + Express.js + Node.js + MongoDB + graphql. Has been refactored into a serverless Next app + Postgres DB. Users can sign up, play, submit and view their best scores on their profile.",
      image: "/poolPic.jpg",
      link: "https://nx-pool.vercel.app/",
      tech: ["Next.js", "Matter.js", "Prisma"],
    },
    {
      title: "Asteroids",
      description: "The retro arcade game Asteroids, one using Matter.js and one using Three.js. Was originally a fullstack app, with React + Express + Node.js + MongoDB + graphql. Has been refactored into a serverless Next app + Postgres DB. Users can sign up, submit and view their best scores on their profile.",
      image: "/aster.jpg",
      link: "https://nx-asteroids.vercel.app/",
      tech: ["Next.js", "Matter.js", "Three.js"],
    },
    {
      title: "Solitaire",
      description: "The card game Solitaire made with react-draggable. Was a fullstack app, with React + Express + Node.js + MongoDB + graphql. Has been refactored into a serverless Next app. Users can sign up, submit and view their best times on their profile.",
      image: "/solPic.jpg",
      link: "https://nx-solitaire.vercel.app/",
      tech: ["Next.js", "react-draggable", "Prisma"],
    },
    {
      title: "Minesweeper",
      description: "A frontend game of Minesweeper in Next.js. Originally fullstack, with React + Express + MongoDB + graphQL. Then refactored into a serverless Next app.",
      image: "/mine2.png",
      link: "https://nx-minesweeper.vercel.app/",
      tech: ["Next.js", "Vercel", "Tailwind"],
    },
    {
      title: "Horror Map",
      description: "This (unfinished) blog site provides a guide for horror fiction-writing. Formerly in React + MongoDB + graphql and deployed on Heroku, then refactored into a serverless SPA Router App in Next.js + Postgres-Neon DB. Users can sign up and leave comments on each page.",
      image: "/horrormap.jpg",
      link: "https://next-horror.vercel.app/",
      tech: ["Next.js", "Vercel", "Tailwind"],
    },
    {
      title: "Fiction Map",
      description: "This (unfinished) blog site provides a guide for fiction-writing. Formerly in React + MongoDB + graphql + Heroku deployment, then refactored into a serverless SPA Router App in Next.js + Postgres-Neon DB. Users can sign up and leave comments on each page.",
      image: "/fictionmap.jpg",
      link: "https://next-fiction.vercel.app/",
      tech: ["Next.js", "Vercel", "Neon Postgres"],
    },
    {
      title: "PWA Text Editor",
      description: "A Text Editor app built with Javascript + HTML + CSS + Express Server. It utilizes PWA technologies, including Webpack + a Service Worker + IndexedDB for use and storage offline. Deployed on Render.",
      image: "/jate.jpg",
      link: "https://jate-text-editor-10.onrender.com/",
      tech: ["Express", "Webpack", "Babel"],
    },
    {
      title: "MVC Tech Blog",
      description: "A tech-themed blog with user Auth. It originally used Handlebars UI + Express server + MySQL database with Sequelize + deployed on Heroku. Then refactored into a serverless Next.js app + Postgres-Neon DB + deployed on Vercel.",
      image: "/techblog.jpg",
      link: "https://nx-tech-blog.vercel.app/",
      tech: ["Handlebars", "Express", "Javascript"],
    },
    {
      title: "Express Note Taker",
      description: "This is a note-taking app which runs in node.js. The front end is created through HTML and CSS. It runs on an Express server, and note data is saved JSON and local storage for later retrieval. This app is deployed on Heroku.",
      image: "/notetaker.jpg",
      link: "https://note-taker.vercel.app/",
      tech: ["JavaScript", "Express", "CSS"],
    },
    {
      title: "Server-Side API Weather Dashboard",
      description: "A weather display dashboard, search by city name and return a 5 day forecast using the Open Weather Map API. Data is saved in local storage. HTML + CSS + Javascript + deployed on GitHub.",
      image: "/weatherdashboard.jpg",
      link: "https://sifzerda.github.io/weather-dashboard/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Third Party API Work Day Scheduler",
      description: "This is a note taking app to help create, store, and display daily plans and activities. It was created using HTML, CSS, and Javascript. Data can be deleted or stored data through local storage for later retrieval. It is deployed on GitHub.",
      image: "/workdayscheduler.jpg",
      link: "https://sifzerda.github.io/workday-scheduler/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Web API Coding Quiz",
      description: "A timed multiple-choice coding-themed quiz. HTML + CSS + Javascript. Score data is saved in local storage. Deployed on GitHub.",
      image: "/codingquiz.jpg",
      link: "https://sifzerda.github.io/coding-quiz/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 pb-[120px]">
      <div className="border border-zinc-300 bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)] rounded-sm cursor-default w-full max-w-7xl">

        <div className="grid md:grid-cols-[1fr_280px]">
          {/* LEFT */}
          <div className="relative border-r border-zinc-300/60 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(70,140,255,0.15),_transparent_55%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-12">
              {/* HEADER */}
              <div>
                <div className="flex justify-between mb-6 uppercase text-[11px] tracking-[0.3em] text-zinc-100 font-semibold">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Vercel</span>
                </div>

                <h1 className="text-[#2cff66] uppercase font-black text-5xl sm:text-6xl md:text-7xl"
                  style={{ fontFamily: "Impact, sans-serif", textShadow: "0 0 12px rgba(44,255,102,0.35)" }}>
                  My Projects
                </h1>
              </div>

              {/* GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {apps.map((app, idx) => (
                  <div key={idx} className="bg-[#0b1522] rounded-md p-4 flex flex-col border hover:border-[#39ff63] hover:brightness-75 transition">

                    {/* ✅ SQUARE IMAGE */}
                    <div className="w-full aspect-square bg-black rounded-md mb-4 border border-zinc-300 p-[2px] flex items-center justify-center overflow-hidden">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-contain transition duration-200 hover:brightness-50"
                      />
                    </div>

                    <h3 className="text-[#39ff63] font-bold text-lg uppercase mb-2">
                      {app.title}
                    </h3>

                    <p className="text-zinc-200 text-sm mb-4">
                      {app.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {app.tech.map((tech, i) => (
                        <span key={i} className="text-[9px] uppercase text-zinc-400 border border-zinc-500 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs uppercase font-bold border border-[#39ff63] text-[#39ff63] py-2 text-center rounded hover:bg-[#39ff63] hover:text-black transition"
                    >
                      Launch
                    </a>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <aside className="border border-zinc-300/60 bg-gradient-to-b from-[#08131f] via-[#1a4bcf] to-[#06111b] p-6 flex flex-col justify-between text-zinc-100">

            <div className="flex flex-col gap-4">
              <div className="bg-[#0b1522] border border-zinc-500/30 px-3 py-2 text-[10px] uppercase">
                <div className="flex justify-between">
                  <span>Date</span>
                  <span className="text-[#39ff63]">{day}/{month}/{year}</span>
                </div>
                <div className="flex justify-between">
                  <span>Time</span>
                  <span className="text-[#39ff63]">{time}</span>
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase text-zinc-300 mb-2">Name:</p>
                <h2 className="text-[#39ff63] text-2xl font-black">Troy Damon</h2>
              </div>
            </div>

            <Link
              href="https://github.com/sifzerda"
              className="mt-12 border border-[#39ff63] text-[#39ff63] py-3 text-center uppercase text-xs font-bold hover:bg-[#39ff63] hover:text-black transition"
            >
              My GitHub
            </Link>

          </aside>
        </div>
      </div>
    </div>
  );
}