/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import GenerateStartupForm from "@/components/dashboard/GenerateStartupForm";
import GeneratedStartup from "@/components/dashboard/GeneratedStartup";
import RecentStartups from "@/components/dashboard/RecentStartups";

export default function DashboardPage() {
  const [startup, setStartup] = useState<any>(null);

  return (
    <div className="space-y-6">
      <DashboardHeader />

      <GenerateStartupForm onGenerated={setStartup} />

      <GeneratedStartup startup={startup} />

      <RecentStartups onSelect={setStartup} />
    </div>
  );
}
