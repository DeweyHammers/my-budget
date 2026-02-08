"use client";

import FormModel from "@app/(protected)/_components/form/form-model";
import AccountForm from "../../_components/form";

export default function AccountsCreatePage() {
  return (
    <FormModel resource="Account" action="create">
      <AccountForm action="create" isModal />
    </FormModel>
  );
}
