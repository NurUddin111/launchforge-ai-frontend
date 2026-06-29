import { Heart } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FavoritesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Favorite Startups</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center py-20 text-center">
        <Heart className="mb-6 h-16 w-16 text-muted-foreground" />

        <h2 className="text-2xl font-semibold">No favorites yet</h2>

        <p className="mt-2 max-w-md text-muted-foreground">
          Favorite startups will appear here. This feature will be available in the next version.
        </p>
      </CardContent>
    </Card>
  );
}
