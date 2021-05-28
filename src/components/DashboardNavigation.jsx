import {Link} from "react-router-dom";
import "./DashboardNavigation.css";

const DashboardNavigation = ({link}) => {
    return(
        <div id={"admin-dashboard-navigation-container"}>
            <h1 id={"admin-dashboard-title"}>Inventory</h1>
            <div className="admin-dashboard-wrapper">
                {link.map((l, i) => (
                    <Link className={"admin-dashboard-links"} to={l.link}><p>{l.name}</p></Link>
                ))}
            </div>
        </div>
    );
}

export default DashboardNavigation;