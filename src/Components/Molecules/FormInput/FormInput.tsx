import { TextField } from "@mui/material";

interface Props {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
}

const FormInput = (props: Props) => {
  const { label, id, type, required, multiline } = props;
  return (
    <TextField
      variant="outlined"
      id={id}
      label={label}
      required={required}
      type={type ? type : "text"}
      multiline={multiline}
      maxRows={5}
      sx={{ width: "100%" }}
    />
  );
};
export default FormInput;
