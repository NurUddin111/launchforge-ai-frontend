import Link from "next/link";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkHref: string;
}

export default function AuthHeader({ title, subtitle, linkText, linkHref }: AuthHeaderProps) {
  return (
    <div className="mb-8 space-y-2 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>

      <p className="text-muted-foreground">
        {subtitle}{" "}
        <Link href={linkHref} className="font-medium text-primary hover:underline">
          {linkText}
        </Link>
      </p>
    </div>
  );
}
