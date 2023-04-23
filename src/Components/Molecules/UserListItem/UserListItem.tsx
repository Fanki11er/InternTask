import { Card, ListItemText, Typography, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTranslation } from "react-i18next";
import { User } from "../../../Types/types";
import theme from "../../../Theme/theme";

interface UserListItemProps {
  user: User;
}

const UserListItem = (props: UserListItemProps) => {
  const { user } = props;

  const { t } = useTranslation();
  return (
    <Card
      sx={{ padding: 5, rowGap: 2, display: "flex", flexDirection: "column" }}
    >
      <Box display={"grid"} gridTemplateColumns={"auto 1fr"} columnGap={1}>
        <AccountCircleIcon fontSize={"large"} color="info" />
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
