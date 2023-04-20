import {
  Card,
  Grid,
  Icon,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Row } from "../../../Types/TableTypes";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";

interface UserListItemProps {
  user: Row;
}

const UserListItem = (props: UserListItemProps) => {
  const { user } = props;

  const { t } = useTranslation();
  return (
    <Card sx={{ padding: 5 }}>
      <Grid container rowGap={1}>
        <Grid
          container
          item
          columns={2}
          columnGap={2}
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid item>
            <Icon
              sx={{
                width: 40,
                height: 35,
              }}
            >
              <AccountCircleIcon fontSize={"large"} />
            </Icon>
          </Grid>
          <Grid item>
            <ListItemText primary={user.firstName} />
          </Grid>
        </Grid>
        <ListItemText
          primary={
            <Grid columns={3} columnGap={1} container>
              <Typography color={"text.secondary"}>
                {t("userCard:birth")}
              </Typography>
              {user.dateOfBirth}

              {user.age}
              <Typography color={"text.secondary"}>
                {t("userCard:years", {
                  count: user.age,
                })}
              </Typography>
            </Grid>
          }
        />
        <Grid item>
          <ListItemText
            primary={user.curriculumVitae}
            sx={{ bgcolor: "#444", borderRadius: 2, padding: 2 }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserListItem;
