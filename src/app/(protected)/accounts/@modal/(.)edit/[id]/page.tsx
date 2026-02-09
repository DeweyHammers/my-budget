"use client";

import FormModel from "@app/(protected)/_components/form/form-model";
import AccountForm from "@app/(protected)/accounts/_components/form";
import { useParsed } from "@refinedev/core";

export default function AccountsEditPage() {
  const { id } = useParsed();

  return (
    <FormModel resource="Account" action="edit">
      <AccountForm action="edit" id={id} isModal />
    </FormModel>
  );
}
