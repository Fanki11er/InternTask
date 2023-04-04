import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const YESTERDAY = dayjs().subtract(1, "day");

const Form = () => {
  return (
    <form noValidate autoCapitalize="off">
      <TextField variant="outlined" id="name" label="Imię" required />
      <TextField variant="outlined" id="age" label="Wiek" required />
      <DatePicker
        label="Data urodzenia"
        defaultValue={YESTERDAY}
        maxDate={YESTERDAY}
      />
      <TextField
        variant="outlined"
        id="curriculumVitae"
        label="Życiorys"
        multiline
      />
    </form>
  );
};
export default Form;
