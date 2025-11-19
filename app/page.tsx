"use client";

import { useState } from "react";
import SearchHero from "../components/SearchHero";
import SkillCloud from "../components/SkillCloud";
import { skills } from "../data/skills";

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accentPurple/40 blur-3xl" />
        <div className="absolute right-20 top-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute left-1/2 bottom-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accentOrange/50 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6">
        <header className="flex items-center justify-between py-8">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            SkillSpark
          </span>
          <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary">
            Sign in
          </button>
        </header>

        <main className="relative flex flex-1 flex-col items-center justify-center pb-24">
          <div className="relative z-20 flex w-full justify-center">
            <SearchHero query={query} onQueryChange={setQuery} />
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 px-4 hidden md:block">
            <SkillCloud skills={skills} query={query} />
          </div>

          <div className="relative z-30 mt-24 w-full max-w-5xl rounded-3xl border border-white/60 bg-white/90 p-8 shadow-card backdrop-blur-sm md:hidden">
            <SkillCloud skills={skills} query={query} />
          </div>
        </main>
      </div>
    </div>
  );
}
