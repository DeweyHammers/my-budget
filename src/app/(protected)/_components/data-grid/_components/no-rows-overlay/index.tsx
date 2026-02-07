import { Stack, Typography } from "@mui/material";
import { NoRowsOverlayProps } from "./types";

export default function NoRowsOverlay({ message }: NoRowsOverlayProps) {
  return (
    <Stack height="100%" alignItems="center" justifyContent="center">
      <Typography variant="body2" sx={{ maxWidth: 400, textAlign: "center" }}>
        {message}
      </Typography>
    </Stack>
  );
}
