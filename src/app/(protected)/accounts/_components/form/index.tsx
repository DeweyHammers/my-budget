"use client";

import { Box, Button, Typography } from "@mui/material";
import { AccountFormProps } from "./types";
import { Create, Edit, SaveButton } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountsCreateSchema } from "./schemas";
import {
  BaseRecord,
  HttpError,
  useCreate,
  useNotification,
} from "@refinedev/core";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  UseFormReturn,
} from "react-hook-form";
import defaultValues from "./default-values";
import { TextField } from "@app/(protected)/_components/form/form-components";
import { useRouter } from "next/navigation";
import { Account } from "@generated/prisma/client";

export default function AccountForm<
  TRecord extends BaseRecord = BaseRecord,
  TVariables extends FieldValues = FieldValues
>({ action, isModal }: AccountFormProps) {
  const { open } = useNotification();
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const form = useForm<TRecord, HttpError, TVariables>({
    refineCoreProps: {
      resource: "accounts",
      action,
      queryOptions: {
        enabled: false,
      },
    },
    resolver: zodResolver(accountsCreateSchema as any),
    defaultValues: defaultValues as DefaultValues<TVariables>,
    mode: "onChange",
  });

  const { mutateAsync: createAccount } = useCreate<Account>({
    successNotification: false,
    errorNotification: false,
  });

  const handleOnSubmit = async (values: TVariables) => {
    try {
      const accountsData = {
        updatedAt: new Date(),
      };

      if (action === "create") {
        await createAccount({
          resource: "accounts",
          values: { ...accountsData, name: values.name },
        });
      }

      open?.({
        type: "success",
        message: `Account ${
          action === "create" ? "created" : "updated"
        } successfully`,
        description: `${
          action === "create"
            ? "Account has been created"
            : "Account has been updated"
        }`,
      });

      handleClose();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      open?.({
        type: "error",
        message: "Submission failed",
        description: errorMessage,
      });
    }
  };

  const {
    refineCore: { formLoading },
    saveButtonProps,
    handleSubmit,
  } = form as UseFormReturn & typeof form;

  const Wrapper = action === "create" ? Create : Edit;
  const title = action === "create" ? "Create new account" : "Edit account";

  const footerButtons = (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="outlined" onClick={handleClose}>
        Cancel
      </Button>
      <SaveButton
        {...saveButtonProps}
        startIcon={null}
        onClick={handleSubmit(handleOnSubmit)}
      >
        {action === "create" ? "Create account" : "Save"}
      </SaveButton>
    </Box>
  );

  return (
    <FormProvider {...(form as unknown as UseFormReturn<TVariables>)}>
      <Wrapper
        title={isModal ? false : <Typography variant="h5">{title}</Typography>}
        breadcrumb={isModal ? null : undefined}
        goBack={isModal ? null : undefined}
        isLoading={formLoading}
        saveButtonProps={undefined as any}
        footerButtons={footerButtons}
      >
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit(handleOnSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField name="name" label="Name" required />
        </Box>
      </Wrapper>
    </FormProvider>
  );
}
