"use client";

import { Sparkles, TrendingUp, Rocket, Layers } from "lucide-react";

export default function DashboardMock() {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute -inset-4 rounded-2xl bg-linear-to-br from-indigo-500/30 to-purple-600/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-xl">
        {/* window chrome */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs text-slate-500">launchforge.ai/dashboard</span>
          <span className="w-10" />
        </div>

        {/* body */}
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">Generated Startup</p>
              <p className="text-sm font-semibold text-white">NeuralBrew · AI Coffee Roastery</p>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Rocket, label: "MVP Score", value: "92" },
              { icon: TrendingUp, label: "Market Fit", value: "A+" },
              { icon: Layers, label: "Tech Stack", value: "8 tools" },
              { icon: Sparkles, label: "AI Confidence", value: "98%" },
            ].map((s, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
                <s.icon className="mb-2 h-4 w-4 text-indigo-400" />
                <p className="text-[11px] text-slate-400">{s.label}</p>
                <p className="text-base font-semibold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-linear-to-br from-indigo-500/10 to-purple-600/10 p-4">
            <p className="mb-2 text-xs text-slate-400">Roadmap Progress</p>
            <div className="space-y-2">
              {[80, 60, 35].map((w, i) => (
                <div key={i} className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-indigo-400 to-purple-500"
                    style={{ width: `${w}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
