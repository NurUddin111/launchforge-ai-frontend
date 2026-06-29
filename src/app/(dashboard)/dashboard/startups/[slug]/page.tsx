import GeneratedStartup from "@/components/dashboard/GeneratedStartup";
import { startupService } from "@/services/startup.service";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StartupDetailsPage({ params }: Props) {
  const { slug } = await params;

  const res = await startupService.getBySlug(slug);

  return <GeneratedStartup startup={res.data.data} />;
}
