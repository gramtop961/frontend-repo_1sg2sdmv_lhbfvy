import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 via-violet-500 to-pink-500 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="text-base font-semibold tracking-tight text-slate-800">
              Hello World
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#welcome" className="relative transition-colors hover:text-slate-900">Welcome</a>
            <a href="#about" className="relative transition-colors hover:text-slate-900">About</a>
            <a href="#contact" className="relative transition-colors hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
