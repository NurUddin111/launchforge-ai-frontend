"use client";

const steps = [
  {
    n: "01",
    title: "Describe your idea",
    description:
      "Type a single sentence about the problem you want to solve or the product you imagine.",
  },
  {
    n: "02",
    title: "AI generates a complete startup",
    description:
      "Business model, MVP features, tech stack, roadmap, and marketing — all in one pass.",
  },
  {
    n: "03",
    title: "Save and manage everything",
    description:
      "Iterate on the output, save versions, and manage all your ideas in one dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How it works</h2>
          <p className="mt-4 text-slate-400">
            From rough idea to investor-ready outline in three steps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 px-3 py-1 text-xs font-semibold text-white">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
