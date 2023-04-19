import UserListItem from "../../Components/Molecules/UserListItem/UserListItem";
import GenericDataList from "../../Components/Organisms/GenericDataList/GenericDataList";
import { Row } from "../../Types/TableTypes";

const renderUser = (user: Row) => {
  return <UserListItem user={user} />;
};

const testUsers: Row[] = [
  {
    id: "1111",
    firstName: "Krzysztof",
    age: 4,
    dateOfBirth: "10/17/1983",
    curriculumVitae:
      " Lorrem ipsy hcsjaCB SHAJ vvsvvAV CBSBCABJCA CBSHACBASC CBHSACA CBSAC",
  },
  {
    id: "2111",
    firstName: "KrzysztofER",
    age: 3,
    dateOfBirth: "10/17/1983",
    curriculumVitae:
      " Lorrem ipsy hcsjaCB SHAJ vvsvvAV CBSBCABJCA CBSHACBASC CBHSACA CBSAC",
  },
  {
    id: "2112",
    firstName: "KrzysztofERT",
    age: 22,
    dateOfBirth: "10/17/1983",
    curriculumVitae:
      " Lorrem ipsy hcsjaCB SHAJ vvsvvAV CBSBCABJCA CBSHACBASC CBHSACA CBSAC",
  },
  {
    id: "2114",
    firstName: "KrzysztofERT",
    age: 46,
    dateOfBirth: "10/17/1983",
    curriculumVitae:
      " Lorrem ipsy hcsjaCB SHAJ vvsvvAV CBSBCABJCA CBSHACBASC CBHSACA CBSAC",
  },
];

const Views = () => {
  return <GenericDataList items={testUsers} renderItem={renderUser} />;
};

export default Views;
