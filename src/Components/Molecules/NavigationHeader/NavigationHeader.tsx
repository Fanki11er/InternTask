import { NavLink } from "react-router-dom";
import { paths } from "../../../Router/paths";

const NavigationHeader = () => {
  const { main, views } = paths;

  return (
    <nav>
      <NavLink to={main}>Main</NavLink>
      <br />
      <NavLink to={views}>Views</NavLink>
    </nav>
  );
};

export default NavigationHeader;
