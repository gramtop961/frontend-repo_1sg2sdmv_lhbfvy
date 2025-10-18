export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600">© {year} Hello World. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-600">
            <a href="#welcome" className="hover:text-slate-900">Back to top</a>
            <a href="mailto:hello@example.com" className="hover:text-slate-900">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
