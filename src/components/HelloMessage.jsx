import { Sparkles } from "lucide-react";

export default function HelloMessage() {
  return (
    <section id="welcome" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-pink-50" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs text-slate-600 shadow-sm">
          <Sparkles className="h-4 w-4 text-amber-500" />
          Fresh start
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-pink-600 bg-clip-text text-transparent">
            Hello, World!
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600">
          A crisp, modern greeting to kick off your project. Clean structure, great defaults, and an aesthetic starting point.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-800">Quick demo</p>
            <pre className="mt-3 overflow-auto rounded-lg bg-slate-900 p-4 text-[13px] leading-relaxed text-slate-100">
{`// Run this in your dev tools
console.log('Hello, World!')`}
            </pre>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-800">What’s inside</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Clear layout with a welcoming hero</li>
              <li>• Thoughtful typography and spacing</li>
              <li>• Small touches of color and depth</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
