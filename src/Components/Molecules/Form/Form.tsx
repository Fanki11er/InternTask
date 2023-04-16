import { Button, Grid, styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import theme from "../../../Theme/theme";
import FormInput from "../FormInput/FormInput";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../../Hooks/useDispatch";
import { Row } from "../../../Types/TableTypes";
import { v4 as uuidv4 } from "uuid";
import {
  addRow,
  editRow,
  selectRowToEdit,
} from "../../../Features/Row/RowSlice";
import { useAppSelector } from "../../../Hooks/useSelector";
import { useEffect } from "react";
import "dayjs/locale/es";
import { useTranslation } from "react-i18next";

const FIRST_NAME_FIELD = "firstName";
const AGE_FIELD = "age";
const CURRICULUM_VITAE_FIELD = "curriculumVitae";
const DATE_OF_BIRTH = "dateOfBirth";

interface FormData {
  [FIRST_NAME_FIELD]: string;
  [AGE_FIELD]: number;
  [DATE_OF_BIRTH]: dayjs.Dayjs;
  [CURRICULUM_VITAE_FIELD]: string;
}

const convertToRow = (data: FormData, id: string = "") => {
  const row = {
    id: id || uuidv4(),
    firstName: data[FIRST_NAME_FIELD],
    age: data[AGE_FIELD],
    dateOfBirth: new Date(data[DATE_OF_BIRTH].toString()).toLocaleDateString(),
    curriculumVitae: data[CURRICULUM_VITAE_FIELD],
  } as Row;

  return row;
};

const StyledForm = styled("form")(() => ({
  backgroundColor: theme.palette.secondary.dark,
  padding: "50px  40px",
  borderRadius: 15,
  margin: "50px 0",
  alignSelf: "center",
}));

const YESTERDAY = dayjs().subtract(1, "day");

const schema = yup
  .object({
    [FIRST_NAME_FIELD]: yup.string().required("requiredName"),
    [AGE_FIELD]: yup
      .number()
      .typeError("requiredAge")
      .moreThan(0, "requiredMoreThan")
      .integer("requiredInteger")
      .required("requiredAge"),

    [DATE_OF_BIRTH]: yup
      .date()
      .max(YESTERDAY, "incorrectDate")
      .required("requiredDate:"),
    [CURRICULUM_VITAE_FIELD]: yup.string().max(280, "textTooLong").optional(),
  })
  .required();

const Form = () => {
  const dataIdToEdit = useAppSelector((state) => state.rows.selectedRow);

  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      [FIRST_NAME_FIELD]: "",
      [AGE_FIELD]: 0,
      [CURRICULUM_VITAE_FIELD]: "",
      [DATE_OF_BIRTH]: YESTERDAY,
    } as FormData,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    handleFillFieldsWithDataToEdit();
  }, [dataIdToEdit]);

  const dispatch = useAppDispatch();

  const handleFillFieldsWithDataToEdit = () => {
    if (dataIdToEdit) {
      setValue(FIRST_NAME_FIELD, dataIdToEdit.firstName);
      setValue(AGE_FIELD, dataIdToEdit.age);
      setValue(CURRICULUM_VITAE_FIELD, dataIdToEdit.curriculumVitae);
      setValue(
        DATE_OF_BIRTH,
        dayjs(dayjs(dataIdToEdit.dateOfBirth).format("MM/DD/YYYY"))
      );
    } else {
      reset();
    }
  };

  const submitAddRow = (data: FormData) => {
    const row = convertToRow(data);

    dispatch(addRow(row));
  };

  const submitEditRow = (data: FormData, id: string) => {
    const row = convertToRow(data, id);

    dispatch(editRow(row));
  };

  const onSubmit = (data: FormData) => {
    if (!dataIdToEdit) {
      submitAddRow(data);
    } else {
      submitEditRow(data, dataIdToEdit.id);
    }
    reset();
  };

  const handleFormReset = () => {
    dispatch(selectRowToEdit(""));
    reset();
  };

  return (
    <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container rowGap={3} direction={"column"} alignItems={"center"}>
        <Controller
          control={control}
          name={FIRST_NAME_FIELD}
          render={({ field }) => (
            <FormInput
              id={FIRST_NAME_FIELD}
              label={t("form:firstNameLabel")}
              required
              error={!!errors[FIRST_NAME_FIELD]}
              helperText={
                errors[FIRST_NAME_FIELD]
                  ? t(`form:errors.${errors[FIRST_NAME_FIELD].message}`)!
                  : ""
              }
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={AGE_FIELD}
          render={({ field }) => (
            <FormInput
              id={AGE_FIELD}
              label={t("form:age")}
              type={"number"}
              required
              {...field}
              error={!!errors[AGE_FIELD]}
              helperText={
                errors[AGE_FIELD]
                  ? t(`form:errors.${errors[AGE_FIELD].message}`)!
                  : ""
              }
            />
          )}
        />
        <Controller
          control={control}
          name={DATE_OF_BIRTH}
          render={({ field }) => (
            <DatePicker
              label={t("form:dateOfBirth")}
              maxDate={YESTERDAY}
              sx={{ width: "100%" }}
              slotProps={{
                textField: {
                  helperText: errors[DATE_OF_BIRTH]
                    ? t(`form:errors.${errors[DATE_OF_BIRTH]?.message}`)!
                    : "",
                },
              }}
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
              label={t("form:curriculumVitae")}
              multiline
              error={!!errors[CURRICULUM_VITAE_FIELD]}
              helperText={
                errors[CURRICULUM_VITAE_FIELD]
                  ? t(`form:errors.${errors[CURRICULUM_VITAE_FIELD].message}`)!
                  : ""
              }
              {...field}
            />
          )}
        />

        <Grid container justifyContent={"space-between"}>
          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "20px" }}
            size="large"
          >
            {t(dataIdToEdit ? "form:editButton" : "form:sendButton")}
          </Button>

          <Button
            variant="contained"
            type="submit"
            sx={{ marginTop: "20px" }}
            size="large"
            onClick={handleFormReset}
          >
            {t("form:resetButton")}
          </Button>
        </Grid>
      </Grid>
    </StyledForm>
  );
};
export default Form;
