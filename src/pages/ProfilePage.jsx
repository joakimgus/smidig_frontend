import React, { useContext } from "react";
import UserInfo from "../components/UserInfo";
import OrderHistory from "../components/OrderHistory";
import "./ProfilePage.css";

const ProfilePage = () => {

    return(
        <div className={"profile-page-container"}>
            <UserInfo />
            <OrderHistory />
        </div>
    );
}

export default ProfilePage;