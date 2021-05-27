import {Link} from "react-router-dom";
import "./AdminDashboardNavigation.css";

const AdminDashboardNavigation = () => {
    return(
        <div id={"admin-dashboard-inventory"}>
            <h1> Inventory </h1>
            <Link to={"/admin/produkter"}><p>Produkter</p></Link>
            <Link to={"/admin/pakker"}><p>Pakker</p></Link>
            <Link to={"/admin/brukere"}><p>Administrer brukere</p></Link>
        </div>
    );
}

export default AdminDashboardNavigation;