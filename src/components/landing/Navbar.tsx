"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-semibold tracking-tight text-white">LaunchForge AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            How It Works
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-slate-300 transition-colors hover:text-white"
          >
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="ghost"
            className="text-slate-300 hover:bg-white/5 hover:text-white"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            className="bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:from-indigo-400 hover:to-purple-500"
          >
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
