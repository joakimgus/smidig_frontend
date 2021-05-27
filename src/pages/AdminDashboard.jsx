import "./AdminDashboard.css";
import {Link} from "react-router-dom";

const AdminDashboard = () => {
    return(
      <div id={"admin-dashboard-container"}>
          <div id={"admin-dashboard-personalia"}>
              <h3> Personalia </h3>
              <p>Navn</p>
              <p>E-post</p>
              <p>Passord</p>
          </div>
          <div id={"admin-dashboard-inventory"}>
              <h3> Inventory </h3>
              <Link to={"/admin/produkter"}><p>Produkter</p></Link>
              <Link to={"/admin/pakker"}><p>Pakker</p></Link>
              <Link to={"/admin/brukere"}><p>Administrer brukere</p></Link>
          </div>
      </div>
    );
}

export default AdminDashboard;