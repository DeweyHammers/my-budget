"use client";

import { Typography } from "@mui/material";
import { AccountFormProps } from "./types";
import { Create, Edit } from "@refinedev/mui";

export default function AccountForm({ action, isModal }: AccountFormProps) {
  const Wrapper = action === "create" ? Create : Edit;
  const title = action === "create" ? "Create new account" : "Edit account";

  return (
    <Wrapper
      title={isModal ? false : <Typography variant="h5">{title}</Typography>}
      breadcrumb={isModal ? null : undefined}
      goBack={isModal ? null : undefined}
    >
      This is the account form
    </Wrapper>
  );
}
