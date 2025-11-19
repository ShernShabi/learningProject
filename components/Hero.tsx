"use client";

interface HeroProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function Hero({ query, onQueryChange }: HeroProps) {
  return (
    <section className="flex flex-1 items-center">
      <div className="mx-auto flex w-full max-w-xl flex-col gap-6 px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          I want to learn
        </h1>
        <div className="rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur">
          <input
            type="text"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Makeup, plumbing, art history..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
        </div>
      </div>
    </section>
  );
}

