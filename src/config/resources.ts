import React from "react";
import { ResourceProps } from "@refinedev/core";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const RESOURCES: ResourceProps[] = [
  {
    name: "plan",
    list: "/plan/list",
    meta: {
      label: "Plan",
      icon: React.createElement(TableRowsIcon),
    },
  },
  {
    name: "Accounts",
    list: "/accounts/list",
    create: "/accounts/create",
    edit: "/accounts/edit/:id",
    meta: {
      label: "Accounts",
      icon: React.createElement(AccountBalanceIcon),
    },
  },
] as const;
