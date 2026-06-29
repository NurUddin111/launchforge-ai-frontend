"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left Side */}
      <div className="hidden bg-linear-to-br from-indigo-600 via-violet-600 to-purple-700 text-white lg:flex lg:flex-col lg:justify-between p-12">
        <div>
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <Sparkles className="h-8 w-8" />
            LaunchForge AI
          </Link>
        </div>

        <div className="max-w-md">
          <h1 className="mb-6 text-5xl font-bold leading-tight">
            From Idea to Startup in Minutes.
          </h1>

          <p className="text-lg text-white/80">
            Generate startup ideas, branding, validation, and launch plans — powered by AI.
          </p>
        </div>

        <p className="text-sm text-white/70">© 2026 LaunchForge AI. All rights reserved.</p>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-background px-6 py-10">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
