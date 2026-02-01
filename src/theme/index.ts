"use client";

import { createTheme } from "@mui/material/styles";
import typographyTheme from "./typography";

const theme = createTheme({
  ...typographyTheme,
});

export default theme;
