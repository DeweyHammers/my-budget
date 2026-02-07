import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { FormModelProps } from "./types";
import { useRouter } from "next/navigation";

export default function FormModel({
  resource,
  action,
  children,
}: FormModelProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const title =
    action === "create"
      ? `Create new ${resource.toLowerCase()}`
      : `Edit ${resource.toLowerCase()}`;

  return (
    <Dialog open onClose={handleClose} maxWidth="md" fullWidth>
      <Box>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  );
}
