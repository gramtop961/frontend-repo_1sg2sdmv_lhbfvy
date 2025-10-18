import { Sparkles } from "lucide-react";

export default function HelloMessage() {
  return (
    <section id="welcome" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-gradient-to-br from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600 shadow-sm">
          <Sparkles className="h-4 w-4 text-amber-500" />
          Fresh start
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Hello, World!
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
          You’re looking at a clean, modern starter with a friendly greeting and a polished UI. Build on this and make it your own.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-white shadow hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Get started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-700 hover:border-slate-400 hover:bg-slate-50"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
