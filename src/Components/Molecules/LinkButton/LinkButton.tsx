import { Button, ButtonBaseProps, Theme } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props extends ButtonBaseProps {
  label: string;
  to: string;
  theme: Theme;
}

/*const StyledNavLink = styled(NavLink)((theme: any) => ({
  "&.active": {
    backgroundColor: theme.palette.primary.light,
  },
  //width: 180,
  color: theme.palette.primary.contrastText,
}));*/

const LinkButton = (props: Props) => {
  const { label, to, theme } = props;

  return (
    <Button
      component={NavLink}
      to={to}
      variant="contained"
      sx={{
        minWidth: "80px",
        "&active": {
          backgroundColor: theme.palette.primary.light,
        },
        color: theme.palette.primary.contrastText,
      }}
    >
      {label}
    </Button>
  );
};

export default LinkButton;
