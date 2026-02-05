import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";
import SidebarHeader from "./_components/app-themed-layout";

export default async function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { authenticated, redirectTo } = await authProviderServer.check();

  if (!authenticated) {
    redirect(redirectTo || "/login");
  }

  return <SidebarHeader>{children}</SidebarHeader>;
}
