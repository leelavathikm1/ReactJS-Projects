import React from "react";
import { useSelector } from "react-redux";
import UsersTable from "./UsersTable";

const Users = () => {
  const usersDetails = useSelector((state) => state.usersInfo.usersArray);
  // const usersDetails = useSelector((state) => state.usersInfo);

  console.log(usersDetails);
  return (
    <div>
      <h2>Welcome To Users</h2>
      <UsersTable users={usersDetails} />
    </div>
  );
};
export default Users;
