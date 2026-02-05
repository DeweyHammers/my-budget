import { AuthPage } from "@refinedev/mui";
import Title from "../_components/title";
import { authProviderServer } from "@providers/auth-provider/auth-provider.server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const { authenticated, redirectTo } = await authProviderServer.check();

  if (authenticated) {
    redirect(redirectTo || "/categories/list");
  }

  return <AuthPage type="login" title={<Title fontSize="3rem" clickHome />} />;
}
