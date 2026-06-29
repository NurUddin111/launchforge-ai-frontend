/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  startup: any;
}

export default function GeneratedStartup({ startup }: Props) {
  if (!startup) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Generated Startup</CardTitle>
        </CardHeader>

        <CardContent className="flex h-60 items-center justify-center text-muted-foreground">
          Generate your first startup to see the AI result.
        </CardContent>
      </Card>
    );
  }

  const ai = startup.generatedContent;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl">{ai.title}</CardTitle>

        <p className="text-muted-foreground mt-2">{ai.summary}</p>
      </CardHeader>

      <CardContent className="space-y-8">
        <section>
          <h3 className="font-semibold mb-2">Problem</h3>
          <p>{ai.problem}</p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Solution</h3>
          <p>{ai.solution}</p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Business Model</h3>
          <p>{ai.businessModel}</p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Marketing Strategy</h3>
          <p>{ai.marketingStrategy}</p>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Estimated Budget</h3>

          <Badge>{ai.estimatedBudget}</Badge>
        </section>

        <section>
          <h3 className="font-semibold mb-2">MVP Features</h3>

          <div className="flex flex-wrap gap-2">
            {ai.mvpFeatures.map((item: string) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Tech Stack</h3>

          <div className="flex flex-wrap gap-2">
            {ai.techStack.map((item: string) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </section>

        <section>
          <h3 className="font-semibold mb-2">Roadmap</h3>

          <p>{ai.roadmap}</p>
        </section>
      </CardContent>
    </Card>
  );
}
