import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import TableHeadCell from "../TableHeaderCell/TableHeadCell";
import { useTranslation } from "react-i18next";

interface TableHeadProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function TableHeadRow(props: TableHeadProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <TableCell sx={{ width: 50 }}>
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
        <TableHeadCell
          label={t("dataTable:header.name")}
          sx={{ minWidth: 170 }}
        />
        <TableHeadCell
          label={t("dataTable:header.age")}
          numeric
          sx={{ minWidth: 50 }}
        />
        <TableHeadCell
          label={t("dataTable:header.dateOfBirth")}
          sx={{ minWidth: 170 }}
        />
        <TableHeadCell label={t("dataTable:header.curriculumVitae")} />
        <TableHeadCell label={t("dataTable:header.actions")} />
      </TableRow>
    </TableHead>
  );
}

export default TableHeadRow;
