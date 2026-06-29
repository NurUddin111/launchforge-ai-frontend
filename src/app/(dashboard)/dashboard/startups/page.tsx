import RecentStartups from "@/components/dashboard/RecentStartups";

export default function StartupsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Startups</h1>
        <p className="text-muted-foreground">Manage all your AI generated startups.</p>
      </div>

      <RecentStartups showViewButton={false} />
    </div>
  );
}
