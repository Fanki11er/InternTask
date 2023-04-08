import { Box, Grid } from "@mui/material";
import Form from "../../Components/Molecules/Form/Form";

const Main = () => {
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Grid item xs={12} sm={6} md={4} minWidth={300} maxWidth={400}>
        <Form />
      </Grid>
    </Grid>
  );
};

export default Main;
