import { AppBar, Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { paths } from "../../../Router/paths";
import LinkButton from "../LinkButton/LinkButton";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";

const LANGUAGE_OPTIONS = ["PL", "EN"];

const NavigationHeader = () => {
  const { main, views } = paths;

  const { t } = useTranslation();

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
            <LinkButton to={main} label={t("navigation:mainButton")} />
          </Grid>
          <Grid item>
            <LinkButton to={views} label={t("navigation:viewButton")} />
          </Grid>
          <Grid>
            <LanguageSelect
              id="language"
              label={t("navigation:selectLabel")}
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
