import React, { useContext } from "react";
import "./AdminDashboard.css";
import UserInfo from "../components/UserInfo";
import AdminDashboardNavigation from "../components/AdminDashboardNavigation";
import { UserContext } from "../context/context";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return "No permission";
  }

  return (
    <div id={"admin-dashboard-container"}>
      {user.type === "ADMIN" && (
        <>
          <UserInfo />
          <AdminDashboardNavigation />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
