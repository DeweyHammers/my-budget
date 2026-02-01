import { Playwrite_NZ } from "next/font/google";

const playwrite = Playwrite_NZ({
  weight: "400",
  display: "swap",
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    handwriting: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    handwriting?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    handwriting: true;
  }
}

const typographyTheme = {
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    handwriting: {
      fontFamily: playwrite.style.fontFamily,
      fontSize: "1.5rem",
    },
  },
};

export default typographyTheme;
