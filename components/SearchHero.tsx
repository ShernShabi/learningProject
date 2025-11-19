"use client";

import { ChangeEvent, FormEvent } from "react";

type SearchHeroProps = {
  query: string;
  onQueryChange: (value: string) => void;
};

export default function SearchHero({
  query,
  onQueryChange,
}: SearchHeroProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <section className="flex w-full max-w-3xl flex-col gap-10 text-center md:items-start md:text-left">
      <div className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary md:self-start">
          Bite-sized learning, big impact
        </div>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Learn any skill in 5 minutes.
        </h1>
        <p className="text-lg leading-8 text-textMuted md:text-xl">
          SkillSpark curates bright, focused micro-lessons across niche
          specialties so you can grow your toolkit during the spaces in your
          day.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-4 md:flex-row md:items-center"
      >
        <label htmlFor="lesson-search" className="sr-only">
          Search micro-lessons
        </label>
        <div className="relative flex w-full items-center">
          <span className="pointer-events-none absolute left-5 text-slate-400">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              focusable="false"
              className="h-5 w-5"
            >
              <path
                d="M15.5 15.5 20 20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle
                cx="10.5"
                cy="10.5"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </span>
          <input
            id="lesson-search"
            type="search"
            value={query}
            onChange={handleInputChange}
            placeholder="Search micro-lessons, e.g. latte art"
            className="w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-slate-700 shadow-card transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:shadow-lg hover:bg-primary/90 md:w-auto"
        >
          Get started
        </button>
      </form>

      <p className="text-sm text-textMuted">
        Join thousands of curious learners mastering new skills in minutes.
      </p>
    </section>
  );
}

