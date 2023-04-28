import { IconButton, Toolbar, Tooltip, Typography, alpha } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../Hooks/useDispatch";
import { removeManyRows } from "../../../Features/Row/RowSlice";
import { useTranslation } from "react-i18next";

interface TableToolbarProps {
  numSelectedRows: number;
  selectedRows: string[];
  handleSelectedChange: () => void;
}

const TableToolbar = (props: TableToolbarProps) => {
  const { numSelectedRows, selectedRows, handleSelectedChange } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation();

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
        {`${numSelectedRows} ${t("dataTable:toolbar.selected")}`}
      </Typography>

      {numSelectedRows > 0 && (
        <Tooltip title={t("dataTable:toolbar.delete")} sx={{ width: 100 }}>
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
