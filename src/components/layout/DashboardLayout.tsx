"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./SideBar";

interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
