/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { format } from "date-fns";
import { Eye } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useStartups } from "@/hooks/useStartUp";
import Link from "next/link";

interface Props {
  onSelect?: (startup: any) => void;
  showViewButton?: boolean;
}

export default function RecentStartups({ onSelect, showViewButton = true }: Props) {
  const { data, isLoading } = useStartups();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Startups</CardTitle>
        </CardHeader>

        <CardContent>Loading...</CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Startups ({data?.meta.total})</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {data?.data.map((startup: any) => (
          <div key={startup.id} className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-1">
              <h3 className="font-semibold">{startup.title}</h3>

              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">{startup.industry}</Badge>

                <Badge>{startup.status}</Badge>
              </div>

              <p className="text-xs text-muted-foreground">
                {format(new Date(startup.createdAt), "dd MMM yyyy")}
              </p>
            </div>

            {showViewButton && (
              <Link href={`/dashboard/startups/${startup.slug}`}>
                <Button variant="outline" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
