import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-sm">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight text-slate-800">Hello World</span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm text-slate-600">
          <a href="#welcome" className="hover:text-slate-900 transition-colors">Welcome</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
