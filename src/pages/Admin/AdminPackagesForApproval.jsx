import React, { useEffect, useState } from "react";
import "../style/Admin/AdminPackagesForApproval.css";
import moment from "moment";
import { RiSearchEyeLine, GrFormEdit } from "react-icons/all";
import { fetchData } from "../../api/apiHandler";
import Loading from "../../components/Loading";

const AdminPackagesForApproval = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchData("/products").then((res) => {
      setProducts(res);
    });
  }, []);

  if (!products) {
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
        <hr />
      </div>
      {products.map((o) => (
        <>
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
          </div>
        </>
      ))}
    </div>
  );
};
export default AdminPackagesForApproval;
