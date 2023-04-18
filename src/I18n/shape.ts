export type Shape = {
  translation: {};
  form: {
    firstNameLabel: string;
    age: string;
    dateOfBirth: string;
    curriculumVitae: string;
    sendButton: string;
    resetButton: string;
    editButton: string;
    errors: {
      requiredName: string;
      requiredAge: string;
      requiredInteger: string;
      requiredMoreThan: string;
      requiredDate: string;
      incorrectDate: string;
      textTooLong: string;
    };
  };
  navigation: {
    mainButton: string;
    viewButton: string;
    selectLabel: string;
  };
};
