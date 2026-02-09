"use client";

import { useParsed } from "@refinedev/core";
import AccountForm from "../../_components/form";

export default function AccountsEditPage() {
  const { id } = useParsed();

  return <AccountForm action="edit" id={id} />;
}
