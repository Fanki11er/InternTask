import { Outlet } from "react-router-dom";
import NavigationHeader from "../../Components/Molecules/NavigationHeader/NavigationHeader";
import { Container } from "@mui/material";

const MainTemplate = () => {
  return (
    <Container
      fixed
      sx={{
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
