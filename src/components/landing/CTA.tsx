"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-indigo-600/20 via-purple-600/10 to-slate-900/50 p-10 text-center backdrop-blur-xl sm:p-16">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />

          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your next unicorn?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-slate-300">
            Stop staring at a blank page. Let AI draft your next startup tonight.
          </p>
          <div className="relative mt-8 flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-400 hover:to-purple-500"
            >
              <Link href="/login">
                Start Generating <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
