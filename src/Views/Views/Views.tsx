import UserListItem from "../../Components/Molecules/UserListItem/UserListItem";
import GenericDataList from "../../Components/Organisms/GenericDataList/GenericDataList";
import { Row } from "../../Types/TableTypes";

const renderUser = (user: Row) => {
  return <UserListItem user={user} />;
};

const Views = () => {
  return <GenericDataList items={[]} renderItem={renderUser} />;
};

export default Views;
