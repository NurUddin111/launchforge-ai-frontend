import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GenerateStartupCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Generate a Startup</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground">Generate a complete startup idea powered by AI.</p>

        <Button>Generate Startup</Button>
      </CardContent>
    </Card>
  );
}
