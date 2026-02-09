import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { Box, Button, ButtonGroup, Menu, MenuItem } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ActionButtonsProps } from "./types";
import {
  useDelete,
  useGetIdentity,
  useInvalidate,
  useNotification,
} from "@refinedev/core";
import { Account, User } from "@generated/prisma/client";

export default function ActionButtons({ account }: ActionButtonsProps) {
  const invalidate = useInvalidate();
  const { data: identity } = useGetIdentity<User>();
  const { open: notify } = useNotification();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const anchorRef = useRef<HTMLDivElement>(null);
  const { mutateAsync: deleteAccounts } = useDelete<Account>();

  const handleDeleteAccounts = useCallback(() => {
    invalidate({ resource: "accounts", invalidates: ["all"] });
  }, [invalidate]);

  const handleDelete = useCallback(async () => {
    if (!account?.id || !identity?.id) return;
    deleteAccounts(
      {
        resource: "accounts",
        id: account.id,
        successNotification: false,
        errorNotification: false,
      },
      {
        onSuccess: () => {
          notify?.({
            type: "success",
            message: "Account deleted successfully",
            description: `The account has been deleted successfully.`,
          });
          handleDeleteAccounts();
        },
        onError: (error: any) => {
          notify?.({
            type: "error",
            message: "Failed to deleted account",
            description:
              error.message || "An error occurred while deleting the account.",
          });
        },
      }
    );
  }, [account.id, deleteAccounts, handleDeleteAccounts, identity?.id, notify]);

  const handleClick = () => {
    setAnchorEl(anchorRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonGroup sx={{ pt: 1 }} variant="contained" ref={anchorRef}>
        <Button
          component={Link}
          href={`/accounts/${account.id}/transactions/list`}
          color="inherit"
          startIcon={<AttachMoneyIcon />}
        >
          Transactions
        </Button>
        <Button
          size="small"
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <KeyboardArrowDownIcon />
        </Button>
      </ButtonGroup>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            width: anchorRef.current?.offsetWidth,
          },
        }}
      >
        <MenuItem
          component={Link}
          href={`/accounts/edit/${account.id}`}
          onClick={handleClose}
        >
          <EditIcon fontSize="small" />
          <Box sx={{ ml: 2 }}>Edit</Box>
        </MenuItem>
        <MenuItem sx={{ color: "error.main" }} onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          <Box sx={{ ml: 2 }}>Delete</Box>
        </MenuItem>
      </Menu>
    </>
  );
}
