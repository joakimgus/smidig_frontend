import {Link} from "react-router-dom";
import "./AdminDashboardNavigation.css";

const AdminDashboardNavigation = () => {
    return(
        <div id={"admin-dashboard-navigation-container"}>
            <h1 id={"admin-dashboard-title"}>Inventory</h1>
            <div className="admin-dashboard-wrapper">
                <Link className={"admin-dashboard-links"} to={"/admin/produkter"}><p>Produkter</p></Link>
                <Link className={"admin-dashboard-links"} to={"/admin/pakker"}><p>Pakker</p></Link>
                <Link className={"admin-dashboard-links"} to={"/admin/brukere"}><p>Administrer brukere</p></Link>
            </div>
        </div>
    );
}

export default AdminDashboardNavigation;