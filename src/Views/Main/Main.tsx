import { Grid } from "@mui/material";
import Form from "../../Components/Molecules/Form/Form";
import DataTable from "../../Components/Organisms/Table/DataTable";
import { HeadCell, Row } from "../../Types/TableTypes";
import { v4 as uuidv4 } from "uuid";
import { useAppSelector } from "../../Hooks/useSelector";

const headCells: HeadCell[] = [
  {
    id: "name",
    label: "Imię",
    minWidth: 170,
  },
  {
    id: "age",
    numeric: true,
    label: "Wiek",
    minWidth: 50,
  },
  {
    id: "dateOfBirth",
    label: "Data urodzenia",
    minWidth: 170,
  },

  {
    id: "curriculumVitae",
    label: "Życiorys",
    //minWidth: 200,
    ellipsis: true,
  },
  {
    id: "actions",
    label: "Akcje",
    //minWidth: 200,
  },
];

/*const testData: Row[] = [
  {
    id: uuidv4(),
    name: "Krzysztof",
    age: 40,
    dateOfBirth: "17-10-1983",
    curriculumVitae: " sgxsvscsca cshacjaja sacavscvasc",
  },
  {
    id: uuidv4(),
    name: "Krzysztof",
    age: 40,
    dateOfBirth: "17-10-1983",
    curriculumVitae: " sgxsvscsca cshacjaja sacavscvasc",
  },

  {
    id: uuidv4(),
    name: "Krzysztof",
    age: 40,
    dateOfBirth: "17-10-1983",
    curriculumVitae: " sgxsvscsca cshacjaja sacavscvasc SGXSGX BYYXGSY",
  },
];*/

const Main = () => {
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Grid item xs={12} sm={6} md={4} minWidth={300} maxWidth={400}>
        <DataTable headCells={headCells} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} minWidth={300} maxWidth={400}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Main;
