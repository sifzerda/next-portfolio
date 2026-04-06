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

  // Apps array
  const apps = [
    {
      title: 'Band Page',
      description: "Made for my band to arrange jams and suggest songs. A fullstack app built with React, node, express, MongoDB, and graphql. Rehearsal availability calendar, music player, youtube audio search.",
      image: "/bandpic.jpg",
      link: "https://bandpage.vercel.app/",
      tech: ["React", "API", "Tailwind"],
    },
    {
      title: "Game of Life",
      description: "Plays out simulations of Game of Life (Conway). A frontend app built with React, and node. Play/pause/reset timed simulation, alter group size and quantity.",
      image: "/gamePic.jpg",
      link: "https://game-of-life-49sl.vercel.app/",
      tech: ["React", "API", "Tailwind"],
    },
    {
      title: "Music Player",
      description: "A front end single page site with a music player. Made with React, Node, and React-player. Loaded with several songs that can be played, paused, and skipped. Volume adjustment and song progress bar.",
      image: "/musicPic.jpg",
      link: "https://slotmachine-five.vercel.app/",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
    },
    {
      title: "Eight Ball Pool",
      description: "My attempt to make a version of 8 ball billiards. A fullstack app, built with React, Express, Node js, MongoDB, graphql, and Matter.js physics engine. Users can sign up, submit and view their best scores on their profile.",
      image: "/poolPic.jpg",
      link: "https://nx-pool.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Asteroids",
      description: "My attempt to make the retro arcade game Asteroids. A fullstack app, built with React, Express, Node js, MongoDB, graphql, and Matter.js physics engine. Users can sign up, submit and view their best scores on their profile.",
      image: "/aster.jpg",
      link: "https://nx-asteroids.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Solitaire",
      description: "My attempt to make the game Solitaire. A fullstack app, built with React, Express, Node js, MongoDB and graphql. Users can sign up, submit and view their best times on their profile.",
      image: "/solPic.jpg",
      link: "https://nx-solitaire.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Minesweeper",
      description: "My attempt to make the game Minesweeper. A fullstack app, built with React, Express, Node js, MongoDB and graphql. Users can sign up, submit and view their high scores on the score board or their profile.",
      image: "/mine.jpg",
      link: "https://nx-minesweeper.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Horror Map",
      description: "This (unfinished) blog site provides a guide for horror fiction-writing. Formerly built in React using MongoDB and graphql and deployed on Heroku, then refactored into a serverless SPA Router App in Next.js using Prisma-Neon DB. Users can sign up and leave comments on each page.",
      image: "/horrormap.jpg",
      link: "https://next-horror.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Fiction Map",
      description: "This (unfinished) blog site provides a guide for fiction-writing. Formerly built in React using MongoDB and graphql and deployed on Heroku, then refactored into a serverless SPA Router App in Next.js using Prisma-Neon DB. Users can sign up and leave comments on each page.",
      image: "/fictionmap.jpg",
      link: "https://next-fiction.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "PWA Text Editor",
      description: "This is a Text Editor app built with Javascript, HTML and CSS, and runs on an Express Server. It utilizes PWA technologies, including Webpack, a Service Worker, and IndexedDB for use and storage offline. This app is deployed on Render.",
      image: "/jate.jpg",
      link: "https://jate-text-editor-10.onrender.com/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "MVC Tech Blog",
      description: "This is a tech-themed blog with user authentication. It uses Javascript and Handlebars and runs on an Express server, using Sequelize models and a MySQL database. This app is deployed on Heroku.",
      image: "/techblog.jpg",
      link: "https://tech-blog.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Express Note Taker",
      description: "This is a note-taking app which runs in node.js. The front end is created through HTML and CSS. It runs on an Express server, and note data is saved JSON and local storage for later retrieval. This app is deployed on Heroku.",
      image: "/notetaker.jpg",
      link: "https://note-taker.vercel.app/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Server-Side API Weather Dashboard",
      description: "This app has a weather display dashboard which searches by city name and returns a 5 day forecast using the Open Weather Map API. Data is saved in local storage for later retrieval. The app was created with HTML, CSS and Javascript, and is deployed on GitHub.",
      image: "/weatherdashboard.jpg",
      link: "https://sifzerda.github.io/weather-dashboard/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Third Party API Work Day Scheduler",
      description: "This is a note taking app to help create, store, and display daily plans and activities. It was created using HTML, CSS, and Javascript. Data can be deleted or stored data through local storage for later retrieval. It is deployed on GitHub.",
      image: "/workdayscheduler.jpg",
      link: "https://sifzerda.github.io/workday-scheduler/",
      tech: ["React", "Vercel", "Tailwind"],
    },
    {
      title: "Web API Coding Quiz",
      description: "This app launches a  coding-themed quiz. The UI was created in HTML, CSS, and Javascript. Users are presented multiple choice questions, and a wrong answer will deduct 10 seconds from the timer. Final score data is kept in local storage for later retrieval. This app was deployed in GitHub.",
      image: "/codingquiz.jpg",
      link: "https://sifzerda.github.io/coding-quiz/",
      tech: ["React", "Vercel", "Tailwind"],
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 pb-[120px]">
      <div className="border border-zinc-300 bg-[radial-gradient(circle_at_top_left,_rgba(26,75,207,1),_transparent_60%)] rounded-sm cursor-default w-full max-w-7xl">

        {/* Main Content */}
        <div className="grid md:grid-cols-[1fr_280px] min-h-[600px] md:min-h-0">
          {/* Left Section */}
          <div className="relative border-r border-zinc-300/60 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(70,140,255,0.15),_transparent_55%)] pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-12">

              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-6 uppercase text-[11px] tracking-[0.3em] text-zinc-100 font-semibold">
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Vercel</span>
                </div>

                <h1 className="text-[#2cff66] uppercase leading-[0.85] font-black text-5xl sm:text-6xl md:text-7xl max-w-3xl"
                  style={{ fontFamily: "Impact, Haettenschweiler, Arial Narrow Bold, sans-serif", textShadow: "0 0 12px rgba(44,255,102,0.35)" }}>
                  My Projects
                </h1>
              </div>

              {/* App Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
                {apps.map((app, idx) => (
                  <div key={idx} className="border-2 border-transparent bg-[#0b1522] rounded-md p-4 flex flex-col transition-all duration-200 hover:border-[#39ff63] hover:brightness-75">
                    <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded-md mb-4 border border-zinc-300 p-[2px] bg-black transition-all duration-200 hover:border-[#39ff63] hover:brightness-50" />
                    <h3 className="text-[#39ff63] font-bold text-lg uppercase mb-2 transition-all duration-200 hover:text-zinc-400">{app.title}</h3>
                    <p className="text-zinc-200 text-sm mb-4 transition-all duration-200 hover:text-zinc-500">{app.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">{app.tech.map((tech, i) => (<span key={i} className="text-[9px] uppercase text-zinc-400 border border-zinc-500 px-2 py-1 rounded transition-all duration-200 hover:text-zinc-500 hover:border-zinc-500/70">{tech}</span>))}</div>

                    <a href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto text-xs uppercase font-bold border border-[#39ff63] text-[#39ff63] py-2 text-center rounded hover:bg-[#39ff63] hover:text-black transition-all duration-200">
                      Launch
                    </a>

                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Aside */}
          <aside className="border border-zinc-300/60 bg-gradient-to-b from-[#08131f] via-[#1a4bcf] to-[#06111b] p-6 flex flex-col justify-between text-zinc-100 min-h-full">

            {/* Date & Time */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 bg-[#0b1522] border border-zinc-500/30 rounded-sm px-3 py-2 text-[10px] uppercase tracking-[0.25em] w-full">
                <div className="flex justify-between items-center w-full">
                  <span className="text-zinc-400">Date</span>
                  <span className="text-[#39ff63] font-bold">{day.toString().padStart(2, "0")} / {month.toString().padStart(2, "0")} / {year}</span>
                </div>
                <div className="flex justify-between items-center w-full">
                  <span className="text-zinc-400">Time</span>
                  <span className="text-[#39ff63] font-bold">{time}</span>
                </div>
                <div className="text-right text-white text-[8px] w-full break-words">
                  GMT {currentDateTime.getTimezoneOffset() <= 0 ? "+" : "-"}
                  {String(Math.floor(Math.abs(currentDateTime.getTimezoneOffset()) / 60)).padStart(2, "0")}:
                  {String(Math.abs(currentDateTime.getTimezoneOffset()) % 60).padStart(2, "0")} – {timezone}
                </div>
              </div>

              {/* Name Section */}
              <div>
                <p className="uppercase text-[10px] tracking-[0.25em] text-zinc-300 mb-3">Name:</p>
                <h2 className="text-[#39ff63] text-2xl uppercase font-black leading-none">Troy Damon</h2>
                <p className="text-[9px] uppercase tracking-[0.15em] text-zinc-300 mt-2 leading-relaxed">Fullstack Web Developer and Coder</p>
              </div>
            </div>

            <Link href="https://github.com/sifzerda" className="mt-12 border border-[#39ff63] text-[#39ff63] 
            hover:bg-[#39ff63] hover:text-black active:bg-[#2ecc58] active:text-black active:translate-y-[1px] 
            transition-all duration-150 uppercase tracking-[0.25em] text-xs py-3 font-bold inline-flex items-center 
            justify-center select-none">
              My GitHub
            </Link>
          </aside>

        </div>
      </div>
    </div>
  );
}