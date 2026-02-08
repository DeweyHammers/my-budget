import { useFormContext, Controller } from "react-hook-form";
import { getFieldError } from "../../utils/get-field-errors";
import { TextFieldComponentProps } from "./types";
import { TextField } from "@mui/material";

export default function TextFieldComponent({
  name,
  label,
  ...textFieldProps
}: TextFieldComponentProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = getFieldError(errors as any, name);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { onChange, value, ref, ...restField } = field;

        (value !== undefined && value !== null && value !== "") || undefined;

        return (
          <TextField
            {...textFieldProps}
            {...restField}
            onChange={onChange}
            inputRef={ref}
            name={name}
            label={label}
            fullWidth
            margin="normal"
            variant="outlined"
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
}
