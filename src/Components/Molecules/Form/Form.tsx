import { Button, Grid, TextField, styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import theme from "../../../Theme/theme";
import FormInput from "../FormInput/FormInput";

const StyledForm = styled("form")(() => ({
  backgroundColor: theme.palette.secondary.dark,
  padding: "50px  40px",
  borderRadius: 15,
  margin: "50px 0",
  alignSelf: "center",
}));

const YESTERDAY = dayjs().subtract(1, "day");

const Form = () => {
  return (
    <StyledForm noValidate autoCapitalize="off">
      <Grid container rowGap={3} direction={"column"} alignItems={"center"}>
        <FormInput id={"name"} label="Imię" required />
        <FormInput id="age" label="Wiek" required />
        <DatePicker
          label="Data urodzenia"
          maxDate={YESTERDAY}
          sx={{ width: "100%" }}
        />

        <FormInput id="curriculumVitae" label="Życiorys" multiline />

        <Button
          variant="contained"
          type="submit"
          sx={{ marginTop: "20px" }}
          size="large"
        >
          Submit
        </Button>
      </Grid>
    </StyledForm>
  );
};
export default Form;
