import React, { useContext } from "react";
import UserInfo from "../components/UserInfo";
import OrderHistory from "../components/OrderHistory";
import "./style/ProfilePage.css";
import { UserContext } from "../context/context";
import LoginPage from "./LoginPage";

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
        <LoginPage />
      )}
    </div>
  );
};

export default ProfilePage;