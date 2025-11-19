export function Header() {
  return (
    <header className="w-full px-6 pt-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <span className="text-lg font-semibold tracking-tight">101</span>
        <button className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700 bg-white/80 backdrop-blur transition hover:bg-white">
          Sign in
        </button>
      </div>
    </header>
  );
}

