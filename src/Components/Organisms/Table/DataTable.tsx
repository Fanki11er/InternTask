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
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import { useState, useEffect } from "react";
import { CellOptions, HeadCell, Row } from "../../../Types/TableTypes";
import TableHeadRow from "../../Molecules/TableHeadRow/TableHeadRow";

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
            textOverflow: option.ellipsis ? "ellipsis" : "ellipsis",
          }}
          align={option.numeric ? "right" : "left"}
          key={`cell-${index}-${row.id}`}
        >
          {values[index]}
        </TableCell>
      ) : null;
    });
  };

  const mapRowOptions = (headCells: HeadCell[]) => {
    return headCells.map((cell) => {
      return {
        numeric: cell.numeric,
        minWidth: cell.minWidth!,
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
    </TableContainer>
  );
};

export default DataTable;

/*

<TableCell
                  //component="th"
                  //scope="row"
                  sx={{ minWidth: headCells[0].minWidth }}
                >
                  {row.name}
                </TableCell>
                <TableCell
                  sx={{ minWidth: headCells[1].minWidth }}
                  align="right"
                >
                  {row.age}
                </TableCell>
                <TableCell
                  sx={{ minWidth: headCells[2].minWidth }}
                  align="right"
                >
                  {row.dateOfBirth}
                </TableCell>
                <TableCell
                  sx={{ minWidth: headCells[3].minWidth }}
                  align="right"
                >
                  {row.curriculumVitae}
                </TableCell>*/

/*
 <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </TableCell>
*/

/*
 interface TablePaginationActionsProps {
        count: number;
        page: number;
        rowsPerPage: number;
        onPageChange: (
          event: React.MouseEvent<HTMLButtonElement>,
          newPage: number,
        ) => void;
      }
      
      function TablePaginationActions(props: TablePaginationActionsProps) {
        const theme = useTheme();
        const { count, page, rowsPerPage, onPageChange } = props;
      
        const handleFirstPageButtonClick = (
          event: React.MouseEvent<HTMLButtonElement>,
        ) => {
          onPageChange(event, 0);
        };
      
        const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          onPageChange(event, page - 1);
        };
      
        const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          onPageChange(event, page + 1);
        };
      
        const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
          onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
        };
      
        return (
          <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
              onClick={handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="first page"
            >
              {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
              onClick={handleBackButtonClick}
              disabled={page === 0}
              aria-label="previous page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
              onClick={handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="next page"
            >
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
              onClick={handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="last page"
            >
              {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
          </Box>
        );
      }
*/

/*function createData(name: string, calories: number, fat: number) {
        return { name, calories, fat };
      }
      
      const rows = [
        createData('Cupcake', 305, 3.7),
        createData('Donut', 452, 25.0),
        createData('Eclair', 262, 16.0),
        createData('Frozen yoghurt', 159, 6.0),
        createData('Gingerbread', 356, 16.0),
        createData('Honeycomb', 408, 3.2),
        createData('Ice cream sandwich', 237, 9.0),
        createData('Jelly Bean', 375, 0.0),
        createData('KitKat', 518, 26.0),
        createData('Lollipop', 392, 0.2),
        createData('Marshmallow', 318, 0),
        createData('Nougat', 360, 19.0),
        createData('Oreo', 437, 18.0),
      ].sort((a, b) => (a.calories < b.calories ? -1 : 1));*/
