import React, { useContext } from "react";
import UserInfo from "../components/UserInfo";
import OrderHistory from "../components/OrderHistory";
import "./ProfilePage.css";
import { UserContext } from "../context/context";

const ProfilePage = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div className={"profile-page-container"}>
          <UserInfo />
          <OrderHistory />
        </div>
      ) : (
        <div>log in</div>
      )}
    </div>
  );
};

export default ProfilePage;
