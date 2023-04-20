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
      <Grid container sm={1} md={12} spacing={2} marginTop={10}>
        {items.map((item) => {
          return (
            <Grid item sm={1} md={4} lg={3}>
              <ListItem key={item.id}>{renderItem(item)}</ListItem>
            </Grid>
          );
        })}
      </Grid>
    </List>
  );
};

export default GenericDataList;
