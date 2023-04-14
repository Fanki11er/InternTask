import React from "react";
import { TextField, TextFieldProps } from "@mui/material";

interface Props {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  error?: boolean;
  helperText?: string;
}

const FormInput = React.forwardRef((props: Props, ref) => {
  const { type, required, multiline } = props;
  return (
    <TextField
      variant="outlined"
      required={required}
      type={type ? type : "text"}
      multiline={multiline}
      maxRows={5}
      sx={{ width: "100%" }}
      {...props}
    />
  );
});
export default FormInput;
