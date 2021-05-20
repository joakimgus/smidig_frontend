import {useContext} from "react";
import {UserContext} from "../context/context";
import "./UserInfo.css";

const UserInfo = () => {
    const { user } = useContext(UserContext);

    console.log(user)

    return(
        <>
            <div className={"user-info-container"}>
                <h1>Personalia</h1>
            </div>
        </>
    );
}

export default UserInfo;