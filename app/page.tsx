"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TopicBackground } from "@/components/TopicBackground";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <TopicBackground query={query} />

      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <Hero query={query} onQueryChange={setQuery} />
      </div>
    </main>
  );
}
