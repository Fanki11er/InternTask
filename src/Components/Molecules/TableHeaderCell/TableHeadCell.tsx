import { TableCell, TableCellProps } from "@mui/material";

interface Props {
  label: string;
  numeric?: boolean;
}

const TableHeadCell = (props: Props & TableCellProps) => {
  const { label, numeric, ...otherProps } = props;
  return (
    <TableCell align={numeric ? "right" : "left"} {...otherProps}>
      {label}
    </TableCell>
  );
};

export default TableHeadCell;
