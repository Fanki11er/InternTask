import {
  Card,
  Grid,
  Icon,
  ListItem,
  ListItemText,
  Typography,
  Box,
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
    <Card
      sx={{ padding: 5, rowGap: 2, display: "flex", flexDirection: "column" }}
    >
      <Box display={"grid"} gridTemplateColumns={"auto 1fr"} columnGap={1}>
        <AccountCircleIcon fontSize={"large"} />
        <ListItemText primary={user.firstName} />
      </Box>

      <ListItemText
        primary={
          <>
            <Box
              display={"grid"}
              gridTemplateColumns={"auto 1fr"}
              columnGap={1}
            >
              <Typography color={"text.secondary"}>
                {t("userCard:birth")}
              </Typography>
              {user.dateOfBirth}
            </Box>
            <Box
              display={"grid"}
              gridTemplateColumns={"auto auto 1fr"}
              columnGap={1}
            >
              <Typography color={"text.secondary"}>
                {t("userCard:age")}
              </Typography>
              {user.age}
              <Typography color={"text.secondary"}>
                {t("userCard:years", {
                  count: user.age,
                })}
              </Typography>
            </Box>
          </>
        }
      />

      <ListItemText
        primary={user.curriculumVitae}
        sx={{ bgcolor: "#424242", borderRadius: 2, padding: 2 }}
      />
    </Card>
  );
};

export default UserListItem;
