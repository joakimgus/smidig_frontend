import React, { useContext } from "react";
import "../style/Admin/AdminDashboard.css";
import UserInfo from "../../components/UserInfo";
import DashboardNavigation from "../../components/DashboardNavigation";
import { UserContext } from "../../context/context";

const AdminDashboard = () => {
  const { user } = useContext(UserContext);

  const adminLinks = [
    {
      name: "Produkter",
      link: "/admin/produkter",
    },
    {
      name: "Administrer pakkeløsninger",
      link: "/admin/pakker",
    },
    {
      name: "Pakkeløsninger til godkjenning",
      link: "/admin/pakker-til-godkjenning",
    },
    {
      name: "Administrer brukere",
      link: "/admin/brukere",
    },
  ];

  if (!user) {
    return "No permission";
  }

  return (
    <div id={"admin-dashboard-container"}>
      {user.type === "ADMIN" && (
        <>
          <UserInfo />
          <DashboardNavigation link={adminLinks} />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
