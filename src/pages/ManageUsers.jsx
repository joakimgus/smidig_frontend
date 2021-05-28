import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";

const ManageUsers = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchData("/auth/getUsers").then((res) => {
      setUsers(res);
    });
  }, []);

  const deleteUser = async (id) => {
    console.log(
      "Attempting to delete user with id " +
        id +
        ", but won't actually do it for now"
    );
  };

  if (!users) {
    return <Loading />;
  }

  return (
    <div id={"manage-users-container"}>
      <table>
        <tr id={"header-row"}>
          <th>Email</th>
        </tr>
        {users?.map((u) => (
          <tr>
            <td>{u.email}</td>
            <td>{u.type}</td>
            <td>{u.orgNr}</td>
            <td onClick={() => deleteUser(u._id)}>Slett bruker</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ManageUsers;
