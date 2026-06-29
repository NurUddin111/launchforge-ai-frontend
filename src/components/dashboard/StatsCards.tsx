import { Rocket, Heart, Sparkles, BarChart3 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Startups",
    value: 0,
    icon: Rocket,
  },
  {
    title: "Favorites",
    value: 0,
    icon: Heart,
  },
  {
    title: "AI Generations",
    value: 0,
    icon: Sparkles,
  },
  {
    title: "Success Rate",
    value: "100%",
    icon: BarChart3,
  },
];

export default function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">{item.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
              </div>

              <Icon className="h-8 w-8 text-primary" />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
