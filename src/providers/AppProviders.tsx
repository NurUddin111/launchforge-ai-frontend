"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "./QueryProviders";

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <TooltipProvider>
        {children}
        <Toaster richColors position="top-right" />
      </TooltipProvider>
    </QueryProvider>
  );
}
