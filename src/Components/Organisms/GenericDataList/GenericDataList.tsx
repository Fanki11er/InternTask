import { Grid, List, ListItem } from "@mui/material";
import { WithId } from "../../../Types/types";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

const GenericDataList = <T extends WithId>(props: ListProps<T>) => {
  const { items, renderItem } = props;
  return (
    <List>
      <Grid container columns={4} width={"100%"} columnGap={5}>
        {items.map((item) => {
          return (
            <ListItem key={item.id} sx={{ width: 400 }}>
              {renderItem(item)}
            </ListItem>
          );
        })}
      </Grid>
    </List>
  );
};

export default GenericDataList;
