import PageIllustration from "@/components/home/page-illustration";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="grow">
      <PageIllustration />

      {children}
    </main>
  );
}
