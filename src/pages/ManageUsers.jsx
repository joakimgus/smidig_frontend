import React, { useContext, useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "../components/Loading";
import { UserContext } from "../context/context";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const { user } = useContext(UserContext);
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
    <>
      {user && user.type === "ADMIN" ? (
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
      ) : (
        <Link to={"/login"}>Log in</Link>
      )}
    </>
  );
};

export default ManageUsers;
