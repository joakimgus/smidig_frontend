import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../context/context";
import "./style/UserInfo.css";
import { fetchData } from "../api/apiHandler";
import { GrFormEdit } from "react-icons/all";

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
  };

  console.log(user);

  return (
    <>
      {user && (
        <div className={"user-info-container"}>
          <div id={"user-info-text-container"}>
            <h1 id={"user-info-title"}>Min side</h1>
            <div className="userinfo-wrapper">
              <p>
                Du er innlogget som <span>{user.email}</span>
              </p>
              <button className={"profile-edit-btn"}>
                <GrFormEdit />
              </button>
            </div>
          </div>
          <table id={"user-info-table"}>
            <tr className={"user-row"}>
              <td className={"user-info-text"}>E-post: {user.email}</td>
            </tr>
            <tr className={"user-row"}>
              <td className={"user-info-text"}>Org. nr.: {user.orgNr}</td>
            </tr>
            <tr className={"user-row"}>
              <td className={"user-info-text"}>Password: ********</td>
            </tr>
          </table>
          <Link onClick={logout} id={"log-out-btn"}>
            <button>Logg ut</button>
          </Link>
          <div className={"profile-img-logo"}>
            <img src={require("../images/hovedlogo-web.png").default} />
          </div>
        </div>
      )}
    </>
  );
};

export default UserInfo;
