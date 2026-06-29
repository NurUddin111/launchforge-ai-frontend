"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import DashboardMock from "@/components/landing/DashboardMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute top-20 right-0 h-112 w-md rounded-full bg-purple-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Sparkles className="h-3 w-3 text-indigo-400" />
            Powered by Gemini AI
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From Idea to{" "}
            <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-indigo-300 bg-clip-text text-transparent">
              Startup
            </span>{" "}
            in Minutes
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            Generate complete startup ideas using AI, including business model, MVP features, tech
            stack, roadmap, and marketing strategy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-400 hover:to-purple-500"
            >
              <Link href="/register">
                Generate Startup <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center"
        >
          <DashboardMock />
        </motion.div>
      </div>
    </section>
  );
}
