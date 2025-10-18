import { Star, Home, Settings } from "lucide-react";

const Feature = ({ icon: Icon, title, description }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
    <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-2 text-slate-700">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <p className="mt-1 text-sm text-slate-600">{description}</p>
  </div>
);

export default function InfoPanel() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Feature
          icon={Home}
          title="Simple"
          description="A gentle, welcoming hello with minimal clutter so you can focus on what matters."
        />
        <Feature
          icon={Star}
          title="Stylish"
          description="Tasteful typography, soft gradients, and subtle depth for a modern look."
        />
        <Feature
          icon={Settings}
          title="Ready to Extend"
          description="Add sections, pages, and features quickly—everything is set up and ready."
        />
      </div>
    </section>
  );
}
