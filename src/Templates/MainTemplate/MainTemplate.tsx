import { Outlet } from "react-router-dom";
import NavigationHeader from "../../Components/Molecules/NavigationHeader/NavigationHeader";
import { Box, Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const MainTemplate = () => {
  return (
    <Container
      fixed
      sx={{
        //minHeight: "100vh",
        margin: "80px 0 0px 0",
        minWidth: "100%",
        maxWidth: "100%",
      }}
    >
      <NavigationHeader />
      <Outlet />
    </Container>
  );
};

export default MainTemplate;

/*
<Grid
      container
      direction={"column"}
      rowGap={10}
      /*width={"100vw"}sx={{ bgcolor: "red" }}
      >
      <Grid item xs={12} md={12} lg={12}>
      

       </Grid>
      <Grid item xs={12}>
       </Grid>
    </Grid>
      */
