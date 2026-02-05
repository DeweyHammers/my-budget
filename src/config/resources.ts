import React from "react";
import { ResourceProps } from "@refinedev/core";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const RESOURCES: ResourceProps[] = [
  {
    name: "Categories",
    list: "/categories/list",
    meta: {
      label: "Categories",
      icon: React.createElement(MonetizationOnIcon),
    },
  },
  {
    name: "Accounts",
    list: "/accounts/list",
    meta: {
      label: "Accounts",
      icon: React.createElement(AccountBalanceIcon),
    },
  },
] as const;
