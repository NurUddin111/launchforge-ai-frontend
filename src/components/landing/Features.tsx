"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sparkles,
  Briefcase,
  Rocket,
  Cpu,
  Megaphone,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Sparkles,
    title: "AI Startup Generator",
    description: "Turn a single sentence into a fully fleshed-out startup concept in seconds.",
  },
  {
    icon: Briefcase,
    title: "Business Model",
    description: "Revenue streams, pricing tiers, and go-to-market — auto-generated and editable.",
  },
  {
    icon: Rocket,
    title: "MVP Planner",
    description: "Get a prioritized list of MVP features so you can ship the right thing first.",
  },
  {
    icon: Cpu,
    title: "Tech Stack Recommendation",
    description: "AI suggests the best stack for your idea, scale, and team's expertise.",
  },
  {
    icon: Megaphone,
    title: "Marketing Strategy",
    description: "Channels, positioning, and launch playbooks tailored to your audience.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Management",
    description: "Save, organize, and iterate on every startup idea in one beautiful dashboard.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to launch
          </h2>
          <p className="mt-4 text-slate-400">
            Six AI-powered modules that take you from blank page to ready-to-build.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card
              key={f.title}
              className="border-white/10 bg-white/5 backdrop-blur transition-colors hover:border-indigo-500/40 hover:bg-white/[0.07]"
            >
              <CardHeader>
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500/20 to-purple-600/20 ring-1 ring-inset ring-white/10">
                  <f.icon className="h-5 w-5 text-indigo-400" />
                </div>
                <CardTitle className="text-white">{f.title}</CardTitle>
                <CardDescription className="text-slate-400">{f.description}</CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
