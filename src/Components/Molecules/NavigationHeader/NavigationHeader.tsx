import { AppBar, Button, Grid, makeStyles } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";
import { paths } from "../../../Router/paths";
import { styled } from "@mui/styles";
import theme from "../../../Theme/theme";

const StyledNavLink = styled(NavLink)(() => ({
  "&.active": {
    backgroundColor: theme.palette.primary.light,
  },
  width: 180,
  color: theme.palette.primary.contrastText,
}));

const NavigationHeader = () => {
  const { main, views } = paths;

  return (
    <AppBar color="secondary">
      <Toolbar>
        <Grid container columnGap={20} justifyContent={"center"} xs>
          <Button
            component={StyledNavLink}
            to={main}
            variant="contained"
            size={"small"}
          >
            Main
          </Button>
          <Button component={StyledNavLink} to={views} variant="contained">
            Views
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
