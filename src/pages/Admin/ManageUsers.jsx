import React, { useEffect, useState } from "react";
import { fetchData } from "../../api/apiHandler";
import Loading from "../../components/Loading";
import "../style/Admin/ManageUsers.css";
import { BiMailSend, TiDelete } from "react-icons/all";

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
    <div className={"manage-users-page-container"}>
      <div className={"manage-users-top-text-container"}>
        <h1>Administrer brukere</h1>
        <p>Her vil du finne en oversikt over registrerte brukere i systemet.</p>
      </div>
      <div className={"manage-users-table-specifications"}>
        <h5 className={"org-nr-title-section"}>Org.nr.</h5>
        <h5 className={"email-title-section"}>E-post</h5>
        <h5 className={"type-title-section"}>Type</h5>
        <h5 className={"pw-title-section"}>Passord</h5>
        <h5 className={"mu-delete-title-section"}>Slett</h5>
        <hr />
      </div>
      {users?.map((u) => (
        <>
          <div className="manage-users-container">
            <div className="manage-user-org-nr-column">
              <p>{u.orgNr}</p>
            </div>
            <div className="manage-users-email-column">
              <p>{u.email}</p>
            </div>
            <div className="manage-users-type-column">
              <p>{u.type}</p>
            </div>
            <div className="manage-users-reset-pw-column button">
              <BiMailSend />
            </div>
            <div className="manage-users-delete-column">
              <p className={"button"} onClick={() => deleteUser(u._id)}>
                <TiDelete />
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ManageUsers;
