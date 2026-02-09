import { BaseKey } from "@refinedev/core";

export interface AccountFormProps {
  action: "create" | "edit";
  id?: BaseKey | undefined;
  isModal?: boolean;
}
