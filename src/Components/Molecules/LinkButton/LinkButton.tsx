import { Button, ButtonBaseProps, Theme, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { deepPurple } from "@mui/material/colors";

interface Props extends ButtonBaseProps {
  label: string;
  to: string;
}

/*const StyledNavLink = styled(NavLink)((theme: any) => ({
  "&.active": {
    backgroundColor: theme.palette.primary.light,
  },
  //width: 180,
  color: theme.palette.primary.contrastText,
}));*/

const LinkButton = (props: Props) => {
  const { label, to } = props;
  const theme = useTheme();

  return (
    <Button
      component={NavLink}
      to={to}
      variant="contained"
      sx={{
        minWidth: "80px",
        bgcolor: deepPurple[600],
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
