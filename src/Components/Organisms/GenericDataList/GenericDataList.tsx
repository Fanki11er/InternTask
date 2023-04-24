import { Grid, List, ListItem, Container } from "@mui/material";
import { WithId } from "../../../Types/types";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

const GenericDataList = <T extends WithId>(props: ListProps<T>) => {
  const { items, renderItem } = props;
  return (
    <Container>
      <List sx={{ maxWidth: 1500 }}>
        <Grid
          container
          marginTop={10}
          justifyContent={"center"}
          columns={4}
          spacing={1}
        >
          {items.map((item) => {
            return (
              <Grid item key={item.id} xl={1}>
                <ListItem>{renderItem(item)}</ListItem>
              </Grid>
            );
          })}
        </Grid>
      </List>
    </Container>
  );
};

export default GenericDataList;
