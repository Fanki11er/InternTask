import { Shape } from "../shape";

export const shapePl: Shape = {
  translation: {
    counter_one: "Test",
    counter_few: "Tests",
    counter_three: "Dupa",
  },
  form: {
    firstNameLabel: "Imię",
    age: "Wiek",
    dateOfBirth: "Data urodzenia",
    curriculumVitae: "Życiorys",
    sendButton: "Wyślij",
    resetButton: "Resetuj",
    editButton: "Edytuj",
    errors: {
      requiredName: "Imię jest wymagane",
      requiredAge: "Wiek jest wymagany",
      requiredInteger: "Wymagana liczba całkowita",
      requiredMoreThan: "Wymagana liczba większa od 0",
      requiredLessThan: "Wymagana liczba mniejsza od 120",
      requiredDate: "Data urodzenia jest wymagana",
      incorrectDate: "Nie prawidłowa data",
      textTooLong: "Tekst moze zawierac maksymalnie 280 znaków",
    },
  },
  navigation: {
    mainButton: "Główna",
    viewButton: "Widok",
    selectLabel: "Język",
  },
  userCard: {
    years_one: "rok",
    years_few: "lata",
    years_many: "lat",
    years_other: "lat",
    birth: "Urodzony:",
    age: "Wiek:",
    curriculumVitae: "Życiorys",
  },
  notFound: {
    notFound: "Strona nie znaleziona",
  },
  dataTable: {
    header: {
      name: "Imię",
      age: "Wiek",
      dateOfBirth: "Data urodzenia",
      curriculumVitae: "Życiorys",
      actions: "Akcje",
      delete: "Usuń",
      edit: "Edytuj",
    },

    toolbar: {
      delete: "Usuń",
      selected: "wybranych",
    },
    pages: "Wierszy na stronę",
  },
};
