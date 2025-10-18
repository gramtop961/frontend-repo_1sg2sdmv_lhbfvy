export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t border-black/5 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {year} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#welcome" className="hover:text-slate-900">Back to top</a>
          <a href="mailto:hello@example.com" className="hover:text-slate-900">Email</a>
        </div>
      </div>
    </footer>
  );
}
