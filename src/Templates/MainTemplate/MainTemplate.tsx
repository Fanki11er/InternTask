import { Outlet } from "react-router-dom";
import NavigationHeader from "../../Components/Molecules/NavigationHeader/NavigationHeader";
import { CssBaseline, Grid } from "@mui/material";

const MainTemplate = () => {
  return (
    <>
      <NavigationHeader />
      <Outlet />
    </>
  );
};

export default MainTemplate;
