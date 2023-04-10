import { AppBar, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { paths } from "../../../Router/paths";
import theme from "../../../Theme/theme";
import LinkButton from "../LinkButton/LinkButton";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

const LANGUAGE_OPTIONS = ["PL", "ENG"];

const NavigationHeader = () => {
  const { main, views } = paths;

  return (
    <AppBar color="secondary" sx={{ height: "fit-content", padding: "10px" }}>
      <Toolbar>
        <Grid
          container
          columnGap={5}
          justifyContent={"center"}
          alignItems={"center"}
          rowGap={2}
        >
          <Grid item>
            <LinkButton to={main} label={"Main"} />
          </Grid>
          <Grid item>
            <LinkButton to={views} label={"View"} />
          </Grid>
          <Grid>
            <LanguageSelect
              id="language"
              label="Język"
              labelId="lang"
              options={LANGUAGE_OPTIONS}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationHeader;
