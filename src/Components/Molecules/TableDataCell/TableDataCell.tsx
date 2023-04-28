import { TableCell, TableCellProps, Typography } from "@mui/material";

interface Props {
  ellipsis?: boolean;
  value: string | number;
}

const TableDataCell = (props: Props & TableCellProps) => {
  const { ellipsis, value, ...otherProps } = props;

  return (
    <TableCell
      sx={{
        whiteSpace: "nowrap",
        maxWidth: 300,
      }}
      {...otherProps}
    >
      {ellipsis ? (
        <Typography
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {value}
        </Typography>
      ) : (
        value
      )}
    </TableCell>
  );
};

export default TableDataCell;
