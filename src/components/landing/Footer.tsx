"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-500 to-purple-600">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-semibold text-white">LaunchForge AI</span>
            </Link>
            <p className="mt-3 text-sm text-slate-400">
              AI-powered startup generator. From idea to launch — beautifully.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Product
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="#features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="hover:text-white">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="hover:text-white">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Built with
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Next.js</li>
                <li>Express.js</li>
                <li>Prisma</li>
                <li>PostgreSQL</li>
                <li>Gemini AI</li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Community
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} LaunchForge AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
