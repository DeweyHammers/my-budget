"use client";

import { Box, Button, Typography } from "@mui/material";

export default function IndexPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(to bottom, #4169e1, #000000)",
      }}
    >
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
        <Typography
          variant="handwriting"
          sx={{
            color: "#7FFFD4",
            fontWeight: "bold",
            fontSize: "5rem",
            textShadow: "#7FFFD4 1px 0 7px",
          }}
        >
          My Budget
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Register</Button>
        </Box>
      </Box>
    </Box>
  );
}
