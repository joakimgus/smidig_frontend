import React, { useEffect, useState } from "react";
import "../style/Admin/AdminPackagesForApproval.css";
import moment from "moment";
import {
  RiSearchEyeLine,
  GrFormEdit,
  AiOutlineStop,
  AiOutlineCheckCircle,
} from "react-icons/all";
import { fetchData, postData } from "../../api/apiHandler";
import Loading from "../../components/Loading";

const AdminPackagesForApproval = () => {
  const [exhibitions, setExhibitions] = useState();

  const approvePackage = async (id, isActive) => {
    const res = await postData("/exhibitions/approve", { id, isActive });
    console.log(res);
  };

  useEffect(() => {
    fetchData("/exhibitions").then((res) => {
      setExhibitions(res);
    });
  }, [approvePackage]);

  if (!exhibitions) {
    return <Loading />;
  }

  return (
    <div className={"admin-packages-approval-container"}>
      <div className={"admin-packages-approval-top-text-container"}>
        <h1>Pakkeløsninger til godkjenning</h1>
        <p>
          Her vil du finne en oversikt over alle pakkeløsninger som venter på
          godkjenning. Pakkeløsningene vil ikke kunne bestilles før de har blitt
          gjennomgått og godkjent.
        </p>
      </div>
      <div className={"admin-packages-approval-table-specifications"}>
        <h5 className={"date-title-section package-section"}>Dato lagt til</h5>
        <h5 className={"id-title-section package-section"}>Artikkelnr.</h5>
        <h5 className={"package-name-title-section package-section"}>Navn</h5>
        <h5 className={"package-owner-title-section package-section"}>
          Museum
        </h5>
        <h5 className={"preview-title-section package-section"}>Forhåndsvis</h5>
        <h5 className={"edit-title-section package-section"}>Rediger</h5>
        <h5 className={"approve-decline-title-section"}>Y/N</h5>
        <hr />
      </div>
      {exhibitions.length > 0 ? (
        <>
          {exhibitions.map((o) => (
            <>
              {!o.isActive && (
                <div className="admin-packages-approval-wrap">
                  <div className="admin-packages-approval-date-column">
                    <p className="package-date-added">
                      {moment(o.orderDate).format("YYYY-MM-DD HH:mm")}
                    </p>
                  </div>
                  <div className="admin-package-approval-order-nr-column">
                    <p className={"order-nr"}>{o._id}</p>
                  </div>
                  <div className="admin-package-approval-name-column">
                    <p className={"product-item-name"}>{o.name}</p>
                  </div>
                  <div className="admin-package-approval-owner-column">
                    <p className={"product-owner-museum"}>{o.developer}</p>
                  </div>
                  <div className="admin-package-approval-preview-column">
                    <p className={"package-approve-show-btn button"}>
                      <RiSearchEyeLine />
                    </p>
                  </div>
                  <div className="admin-package-approval-edit-column">
                    <p className={"package-approve-edit-btn button"}>
                      <GrFormEdit />
                    </p>
                  </div>
                  <div className={"admin-package-approve-decline-column"}>
                    <p className={"package-approve-btn button"}>
                      <AiOutlineCheckCircle
                        onClick={() => approvePackage(o._id, true)}
                      />
                    </p>
                    <p className={"package-decline-btn button"}>
                      <AiOutlineStop
                        onClick={() => approvePackage(o._id, false)}
                      />
                    </p>
                  </div>
                </div>
              )}
            </>
          ))}
        </>
      ) : (
        <div>Ingen pakker å godkjenne</div>
      )}
    </div>
  );
};
export default AdminPackagesForApproval;
