import { FieldError } from "react-hook-form";

export const getFieldError = (
  errors: Record<string, unknown>,
  name: string
): FieldError | undefined => {
  const parts = name.split(".");
  let current: any = errors;

  for (const part of parts) {
    if (!current) return undefined;
    current = current[part];
  }

  return current as FieldError | undefined;
};
