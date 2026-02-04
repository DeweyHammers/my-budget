import { ResourceProps } from "@refinedev/core";

export const RESOURCES: ResourceProps[] = [
  {
    name: "Dashboard",
    list: "/",
    meta: { label: "Dashboard" },
  },
] as const;
