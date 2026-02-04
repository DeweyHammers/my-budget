import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { ThemedLayout } from "@refinedev/mui";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { authenticated, redirectTo } = await authProviderServer.check();

  if (!authenticated) {
    redirect(redirectTo || "/login");
  }

  return <ThemedLayout>{children}</ThemedLayout>;
}
