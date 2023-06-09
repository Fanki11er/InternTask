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
      requiredLessThan: string;
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
  userCard: {
    years_one: string;
    years_few: string;
    years_many: string;
    years_other: string;
    birth: string;
    age: string;
    curriculumVitae: string;
  };
  notFound: {
    notFound: string;
  };

  dataTable: {
    header: {
      name: string;
      age: string;
      dateOfBirth: string;
      curriculumVitae: string;
      actions: string;
      delete: string;
      edit: string;
    };
    toolbar: {
      delete: string;
      selected: string;
    };
    pages: string;
  };
};
