import { IconButton, Toolbar, Tooltip, Typography, alpha } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../Hooks/useDispatch";
import { removeManyRows } from "../../../Features/Row/RowSlice";

interface TableToolbarProps {
  numSelectedRows: number;
  selectedRows: string[];
  handleSelectedChange: () => void;
}

const TableToolbar = (props: TableToolbarProps) => {
  const { numSelectedRows, selectedRows, handleSelectedChange } = props;

  const dispatch = useAppDispatch();

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelectedRows > 0 && {
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
        {numSelectedRows} wybranych
      </Typography>

      {numSelectedRows > 0 && (
        <Tooltip title="Usuń" sx={{ width: 100 }}>
          {
            <IconButton
              sx={{ alignSelf: "center" }}
              onClick={() => {
                dispatch(removeManyRows(selectedRows));
                handleSelectedChange();
              }}
            >
              {<DeleteIcon color="error" />}
            </IconButton>
          }
        </Tooltip>
      )}
    </Toolbar>
  );
};
export default TableToolbar;
