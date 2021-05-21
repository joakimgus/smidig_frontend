import {useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {UserContext} from "../context/context";
import "./UserInfo.css";
import Edit from "../images/edit.svg";
import {fetchData} from "../api/apiHandler";

const UserInfo = () => {
    const { user, setUser } = useContext(UserContext);

    const history = useHistory();

    const logout = async () => {
        const res = await fetchData("/auth/logout");
        console.log(res);
        if (res === "done") {
            setUser(undefined);
            history.push("/");
        }
    }

    console.log(user)

    return(
        <>
            <div className={"user-info-container"}>
                <div id={"user-info-text-container"}>
                    <h1 id={"user-info-title"}>Min side</h1>
                    <p>Du er logget inn som bruker: </p>
                </div>
                <table id={"user-info-table"}>
                    <tr className={"user-row"}>
                        <td className={"user-info-text"}>E-post: {user.email}</td>
                        <td><button className={"edit-btn"}><img src={Edit} /></button></td>
                    </tr>
                    <tr className={"user-row"}>
                        <td className={"user-info-text"}>Org. nr.: {user.orgNr}</td>
                        <td><button className={"edit-btn"}><img src={Edit} /></button></td>
                    </tr>
                    <tr className={"user-row"}>
                        <td className={"user-info-text"}>Password: ********</td>
                        <td className={"edit-btn-column"}><button className={"edit-btn"}><img src={Edit} /></button></td>
                    </tr>
                </table>
                <Link onClick={logout} id={"log-out-btn"}>
                    <button>
                        <p>Logg ut</p>
                    </button>
                </Link>
                <div id={"tidvis-logo"}>
                    <img src={require("../images/tidvis-rund.png").default} />
                </div>
            </div>
        </>
    );
}

export default UserInfo;