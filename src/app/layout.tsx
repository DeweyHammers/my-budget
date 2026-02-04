import { Suspense } from "react";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  RefineSnackbarProvider,
  useNotificationProvider,
} from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import { Metadata } from "next";
import { authProviderClient } from "@providers/auth-provider/auth-provider.client";
import { dataProvider } from "@providers/data-provider";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "@theme";
import { RESOURCES } from "@config/resources";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "My Budge",
  description: "A budging app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <RefineKbarProvider>
            <RefineSnackbarProvider>
              <Refine
                routerProvider={routerProvider}
                authProvider={authProviderClient}
                dataProvider={dataProvider}
                notificationProvider={useNotificationProvider}
                resources={RESOURCES}
                options={{
                  syncWithLocation: true,
                  warnWhenUnsavedChanges: true,
                  projectId: "UNyGpe-yROyt6-pe7VXU",
                }}
              >
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  {children}
                  <RefineKbar />
                </ThemeProvider>
              </Refine>
            </RefineSnackbarProvider>
          </RefineKbarProvider>
        </Suspense>
      </body>
    </html>
  );
}
