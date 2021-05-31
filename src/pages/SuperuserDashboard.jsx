import UserInfo from "../components/UserInfo";
import DashboardNavigation from "../components/DashboardNavigation";
import "./style/SuperuserDashboard.css";

const SuperuserDashboard = () => {
    const superuserLinks = [
        {
            name: "Produkter",
            link: "/superbruker/produkter"
        },
        {
            name: "Pakkeløsninger",
            link: "/superbruker/pakker"
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