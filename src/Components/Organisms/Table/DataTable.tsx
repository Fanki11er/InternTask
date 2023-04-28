import {
  TableBody,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  Paper,
  Checkbox,
  Tooltip,
  IconButton,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState, useEffect, useCallback } from "react";
import TableHeadRow from "../../Molecules/TableHeadRow/TableHeadRow";
import TableToolbar from "../../Molecules/TableToolbar/TableToolbar";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useAppSelector } from "../../../Hooks/useSelector";
import { useAppDispatch } from "../../../Hooks/useDispatch";
import { removeRow, selectRowToEdit } from "../../../Features/Row/RowSlice";
import { User } from "../../../Types/types";
import TableDataCell from "../../Molecules/TableDataCell/TabledataCell";
import { useTranslation } from "react-i18next";

const DataTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [visibleRows, setVisibleRows] = useState<User[]>([]);

  const rows = useAppSelector((state) => state.rows.rows);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    const rowsSection =
      rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows;

    setVisibleRows(rowsSection);
  }, [page, rowsPerPage, rows]);

  useEffect(() => {
    if (visibleRows.length === 0 && page > 0) {
      setPage((page) => page - 1);
    }
  }, [visibleRows]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = visibleRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const updateSelections = () => {
    const actualSelected = rows
      .filter((row) => {
        return isSelected(row.id);
      })
      .map((item) => item.id);
    setSelected(actualSelected);
  };

  const handleResetAllSelections = useCallback(() => {
    setSelected([]);
  }, []);

  const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 10 }}>
      <Table sx={{ minWidth: 500 }} aria-label="data table">
        <TableHeadRow
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={visibleRows.length}
        />
        <TableBody>
          {visibleRows.map((row, index) => {
            const isItemSelected = isSelected(row.id);
            const labelId = `data-table-checkbox-${index}`;
            return (
              <TableRow
                hover
                onClick={(event) => handleClick(event, row.id)}
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={row.id}
                selected={isItemSelected}
                sx={{
                  cursor: "pointer",
                }}
              >
                <TableCell sx={{ width: 50 }}>
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </TableCell>

                <TableDataCell value={row.firstName} />
                <TableDataCell value={row.age} />
                <TableDataCell value={row.dateOfBirth} />
                <TableDataCell value={row.curriculumVitae} ellipsis />

                <TableCell sx={{ width: 100, padding: 1 }} align={"right"}>
                  <Tooltip title={t("dataTable:header.edit")}>
                    <IconButton
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(selectRowToEdit(row.id));
                      }}
                    >
                      {<EditNoteIcon color={"info"} />}
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={t("dataTable:header.delete")}>
                    <IconButton
                      onClick={(event) => {
                        event.stopPropagation();
                        dispatch(removeRow(row.id));
                        updateSelections();
                      }}
                    >
                      {<DeleteIcon color="error" />}
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": t("dataTable:pages")!,
                },
                native: true,
              }}
              labelRowsPerPage={t("dataTable:pages")}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <TableToolbar
        numSelectedRows={selected.length}
        selectedRows={selected}
        handleSelectedChange={handleResetAllSelections}
      />
    </TableContainer>
  );
};

export default DataTable;
