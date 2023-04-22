import { Button, ButtonBaseProps, Theme, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";
import { green } from "@mui/material/colors";

interface Props extends ButtonBaseProps {
  label: string;
  to: string;
}

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
        bgcolor: theme.palette.info.dark,
        "&.active": {
          backgroundColor: green[500],
        },
        color: theme.palette.primary.contrastText,
      }}
    >
      {label}
    </Button>
  );
};

export default LinkButton;
