import { Shape } from "../shape";

export const shapeEn: Shape = {
  translation: {},
  form: {
    firstNameLabel: "First name",
    age: "Age",
    dateOfBirth: "Date of birth",
    curriculumVitae: "Curriculum Vitae",
    sendButton: "Send",
    resetButton: "Reset",
    editButton: "Edit",
    errors: {
      requiredName: "Name is required",
      requiredAge: "Age is required",
      requiredInteger: "Number must be an integer",
      requiredMoreThan: "Number must be more than 0",
      requiredLessThan: "Number must be less than 120",
      requiredDate: "Date of birth is required",
      incorrectDate: "Incorrect date",
      textTooLong: "Text must be shorter than 280 signs",
    },
  },
  navigation: {
    mainButton: "Main",
    viewButton: "View",
    selectLabel: "Language",
  },
  userCard: {
    years_one: "year old",
    years_few: "years old",
    years_many: "years old",
    years_other: "years old",
    birth: "Born in:",
    age: "Age: ",
    curriculumVitae: "Curriculum Vitae",
  },
  notFound: {
    notFound: "Sorry, page not found",
  },
  dataTable: {
    header: {
      name: "Name",
      age: "Age",
      dateOfBirth: "Date of birth",
      curriculumVitae: "Curriculum vitae",
      actions: "Actions",
      delete: "Delete",
      edit: "Edit",
    },
    toolbar: {
      delete: "Delete",
      selected: "selected",
    },
    pages: "Rows per page",
  },
};
