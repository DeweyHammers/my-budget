"use client";

import { ThemedLayout } from "@refinedev/mui";
import { SidebarHeaderProps } from "./types";
import SavingsIcon from "@mui/icons-material/Savings";
import { Link, SvgIcon, Typography } from "@mui/material";

export default function SidebarHeader({ children }: SidebarHeaderProps) {
  return (
    <ThemedLayout
      Title={({ collapsed }) => (
        <Link
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <SvgIcon height="24px" width="24px" color="primary">
            <SavingsIcon />
          </SvgIcon>
          {!collapsed && (
            <Typography
              variant="h6"
              fontWeight={700}
              color="text.primary"
              fontSize="inherit"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              My Budget
            </Typography>
          )}
        </Link>
      )}
    >
      {children}
    </ThemedLayout>
  );
}
