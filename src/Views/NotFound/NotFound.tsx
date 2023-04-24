import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import PageNotFoundImage from "../../assets/images/PageNotFound.svg";
import { useTranslation } from "react-i18next";

const StyledPageNotFoundImage = styled("img")({
  width: "100%",
  maxWidth: "500px",
});

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      rowGap={5}
      direction={"column"}
      sx={{ padding: "100px 0", height: "calc(100vh - 100px)" }}
    >
      <Grid item>
        <StyledPageNotFoundImage
          src={PageNotFoundImage}
          alt={"Page not found image"}
        />
      </Grid>
      <Grid>
        <Typography variant="h5">{t("notFound:notFound")}</Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
