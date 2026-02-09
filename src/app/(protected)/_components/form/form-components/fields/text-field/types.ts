import { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

export interface TextFieldComponentProps
  extends Omit<MuiTextFieldProps, "name" | "defaultValue"> {
  name: string;
  label: string;
}
