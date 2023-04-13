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
  Typography,
  Box,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState, useEffect } from "react";
import { CellOptions, HeadCell, Row } from "../../../Types/TableTypes";
import TableHeadRow from "../../Molecules/TableHeadRow/TableHeadRow";
import TableToolbar from "../../Molecules/TableToolbar/TableToolbar";

interface Props {
  rows: Row[];
  headCells: HeadCell[];
}

const DataTable = (props: Props) => {
  const { rows, headCells } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selected, setSelected] = useState<string[]>([]);
  const [visibleRows, setVisibleRows] = useState<Row[]>([]);

  useEffect(() => {
    const rowsSection =
      rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows;

    setVisibleRows(rowsSection);
  }, [page, rowsPerPage]);

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
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

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

  const renderCells = (row: Row, cellOptions: CellOptions[]) => {
    const values = Object.values(row).splice(1);
    return cellOptions.map((option, index) => {
      return index < values.length ? (
        <TableCell
          sx={{
            minWidth: option.minWidth,
            whiteSpace: "nowrap",
            maxWidth: 300,
          }}
          align={option.numeric ? "right" : "left"}
          key={`cell-${index}-${row.id}`}
        >
          {option.ellipsis ? (
            <Typography
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {values[index]}
            </Typography>
          ) : (
            values[index]
          )}
        </TableCell>
      ) : null;
    });
  };

  const mapRowOptions = (headCells: HeadCell[]) => {
    return headCells.map((cell) => {
      return {
        numeric: cell.numeric,
        minWidth: cell.minWidth!,
        ellipsis: cell.ellipsis,
      };
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="data table">
        <TableHeadRow
          numSelected={selected.length}
          onSelectAllClick={handleSelectAllClick}
          rowCount={visibleRows.length}
          headCells={headCells}
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

                {renderCells(row, mapRowOptions(headCells))}
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
              rowsPerPageOptions={[10, 20, 50, { label: "All", value: -1 }]}
              colSpan={6}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <TableToolbar numSelected={selected.length} />
    </TableContainer>
  );
};

export default DataTable;
