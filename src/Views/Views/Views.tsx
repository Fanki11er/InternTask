import { useCallback } from "react";
import UserListItem from "../../Components/Molecules/UserListItem/UserListItem";
import GenericDataList from "../../Components/Organisms/GenericDataList/GenericDataList";
import { useAppSelector } from "../../Hooks/useSelector";
import { User } from "../../Types/types";

const Views = () => {
  const users = useAppSelector((state) => state.rows.rows);

  const renderUser = useCallback((user: User) => {
    return <UserListItem user={user} />;
  }, []);

  return <GenericDataList items={users} renderItem={renderUser} />;
};

export default Views;
