import { Star, Home, Settings } from "lucide-react";

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 inline-flex rounded-xl bg-slate-100 p-2 text-slate-700">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>
    </div>
  );
}

export default function InfoPanel() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Why this start feels good</h2>
        <p className="mt-2 text-slate-600">Simple structure, stylish details, and room to grow.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Feature
          icon={Home}
          title="Simple"
          description="Focused and friendly. Nothing extra to distract you from building."
        />
        <Feature
          icon={Star}
          title="Stylish"
          description="Soft gradients, crisp type, and subtle shadow for modern polish."
        />
        <Feature
          icon={Settings}
          title="Ready to extend"
          description="Add pages and features quickly—this layout scales with your ideas."
        />
      </div>
    </section>
  );
}
