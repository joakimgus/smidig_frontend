import "./AdminDashboard.css";
import UserInfo from "../components/UserInfo";
import AdminDashboardNavigation from "../components/AdminDashboardNavigation";

const AdminDashboard = () => {
    return(
      <div id={"admin-dashboard-container"}>
          <UserInfo />
          <AdminDashboardNavigation />
      </div>
    );
}

export default AdminDashboard;