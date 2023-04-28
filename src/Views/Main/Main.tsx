import { Grid } from "@mui/material";
import Form from "../../Components/Molecules/Form/Form";
import DataTable from "../../Components/Organisms/Table/DataTable";
import { HeadCell } from "../../Types/TableTypes";

/*const headCells: HeadCell[] = [
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
    ellipsis: true,
  },
  {
    id: "actions",
    label: "Akcje",
  },
];*/

const Main = () => {
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Grid item xs={12} sm={6} md={4} minWidth={300} maxWidth={400}>
        <DataTable />
      </Grid>
      <Grid item xs={12} sm={6} md={4} minWidth={300} maxWidth={400}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Main;
