import { IconButton, Toolbar, Tooltip, Typography, alpha } from "@mui/material";

interface TableToolbarProps {
  numSelected: number;
}

const TableToolbar = (props: TableToolbarProps) => {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Typography
        sx={{ flex: "1 1 100%" }}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {numSelected} wybranych
      </Typography>

      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton>{/*<DeleteIcon />*/}</IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};
export default TableToolbar;
