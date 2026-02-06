import { Typography } from "@mui/material";
import { TitleProps } from "./types";
import Link from "next/link";

export default function Title({ fontSize, clickHome }: TitleProps) {
  return (
    <Typography
      variant="handwriting"
      style={{
        color: "#7FFFD4",
        fontWeight: "bold",
        fontSize,
        textShadow: "#7FFFD4 1px 0 7px",
        textDecoration: "none",
      }}
      component={clickHome ? Link : "span"}
      href={clickHome ? "/" : undefined}
    >
      My Budget
    </Typography>
  );
}
