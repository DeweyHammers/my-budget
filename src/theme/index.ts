"use client";

import { createTheme } from "@mui/material/styles";
import typographyTheme from "./typography";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  ...typographyTheme,
});

export default theme;
