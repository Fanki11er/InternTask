import { AppBar, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { paths } from "../../../Router/paths";
import theme from "../../../Theme/theme";
import LinkButton from "../LinkButton/LinkButton";

const NavigationHeader = () => {
  const { main, views } = paths;

  return (
    <AppBar color="secondary" sx={{ height: "fit-content", padding: "10px" }}>
      <Toolbar>
        <Grid container columnGap={5} justifyContent={"center"} rowGap={2}>
          <LinkButton to={main} label={"Main"} theme={theme} />
          <LinkButton to={views} label={"View"} theme={theme} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
