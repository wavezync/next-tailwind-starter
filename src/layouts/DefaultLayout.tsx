export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col antialiased">{children}</main>
  );
}
