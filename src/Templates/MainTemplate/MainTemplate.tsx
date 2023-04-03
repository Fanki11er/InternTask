import { Outlet } from "react-router-dom";
import NavigationHeader from "../../Components/Molecules/NavigationHeader/NavigationHeader";

const MainTemplate = () => {
  return (
    <>
      <NavigationHeader />
      <Outlet />
    </>
  );
};

export default MainTemplate;
