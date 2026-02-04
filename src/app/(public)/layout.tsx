import PublicLayoutContainer from "./_components/public-layout-container";

export default function PublicLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <PublicLayoutContainer>{children}</PublicLayoutContainer>;
}
