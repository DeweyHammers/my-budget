"use client";

import { Box } from "@mui/material";
import { PublicLayoutContainerProps } from "./types";

export default function PublicLayoutContainer({
  children,
}: PublicLayoutContainerProps) {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to bottom, #4169e1, #000000)",
      }}
    >
      {children}
    </Box>
  );
}
