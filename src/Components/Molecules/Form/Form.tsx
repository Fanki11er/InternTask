import { Button, Grid, styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import theme from "../../../Theme/theme";
import FormInput from "../FormInput/FormInput";
import { useForm, Controller } from "react-hook-form";

const FIRST_NAME_FIELD = "firstName";
const AGE_FIELD = "age";
const CURRICULUM_VITAE_FIELD = "curriculumVitae";
const DATE_OF_BIRTH = "dateOfBirth";

interface FormData {
  [FIRST_NAME_FIELD]: string;
  [AGE_FIELD]: number;
  [CURRICULUM_VITAE_FIELD]: string;
  [DATE_OF_BIRTH]: dayjs.Dayjs;
}

const StyledForm = styled("form")(() => ({
  backgroundColor: theme.palette.secondary.dark,
  padding: "50px  40px",
  borderRadius: 15,
  margin: "50px 0",
  alignSelf: "center",
}));

const YESTERDAY = dayjs().subtract(1, "day");

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      [FIRST_NAME_FIELD]: "",
      [AGE_FIELD]: 0,
      [CURRICULUM_VITAE_FIELD]: "",
      [DATE_OF_BIRTH]: YESTERDAY,
    } as FormData,
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log("Sub");
    console.log(data[DATE_OF_BIRTH].format("DD/MM/YYYY"));
  };

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowGap={3} direction={"column"} alignItems={"center"}>
        <Controller
          control={control}
          name={FIRST_NAME_FIELD}
          render={({ field }) => (
            <FormInput id={FIRST_NAME_FIELD} label="Imię" required {...field} />
          )}
        />
        <Controller
          control={control}
          name={AGE_FIELD}
          render={({ field }) => (
            <FormInput id={AGE_FIELD} label="Wiek" required {...field} />
          )}
        />
        <Controller
          control={control}
          name={DATE_OF_BIRTH}
          render={({ field }) => (
            <DatePicker
              label="Data urodzenia"
              maxDate={YESTERDAY}
              sx={{ width: "100%" }}
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name={CURRICULUM_VITAE_FIELD}
          render={({ field }) => (
            <FormInput
              id={CURRICULUM_VITAE_FIELD}
              label="Życiorys"
              multiline
              {...field}
            />
          )}
        />

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
