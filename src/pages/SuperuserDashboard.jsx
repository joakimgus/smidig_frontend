import UserInfo from "../components/UserInfo";
import DashboardNavigation from "../components/DashboardNavigation";
import "./SuperuserDashboard.css";

const SuperuserDashboard = () => {
    const superuserLinks = [
        {
            name: "Produkter",
            link: "/superuser/produkter"
        },
        {
            name: "Pakker",
            link: "/superuser/pakker"
        }
    ];

    return(
        <div id={"superuser-dashboard-container"}>
            <UserInfo />
            <DashboardNavigation
                link={superuserLinks}
            />
        </div>
    );
}

export default SuperuserDashboard;