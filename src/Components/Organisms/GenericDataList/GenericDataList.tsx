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
      <Grid container marginTop={10} justifyContent={"center"}>
        {items.map((item) => {
          return (
            <Grid item key={item.id}>
              <ListItem>{renderItem(item)}</ListItem>
            </Grid>
          );
        })}
      </Grid>
    </List>
  );
};

export default GenericDataList;
