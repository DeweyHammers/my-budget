"use client";

import { Box, Button } from "@mui/material";
import Link from "next/link";
import Title from "./_components/title";

export default function IndexPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        gap: 5,
      }}
    >
      <Title fontSize="5rem" />
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button component={Link} href="/login" variant="contained">
          Login
        </Button>
        <Button component={Link} href="/register" variant="contained">
          Register
        </Button>
      </Box>
    </Box>
  );
}
