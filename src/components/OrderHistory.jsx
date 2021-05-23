import "./OrderHistory.css";
import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "./Loading";
import moment from "moment";

const OrderHistory = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    getOrderHistory();
  }, []);

  const getOrderHistory = async () => {
    const res = await fetchData("/orders");
    setOrders(res);
    console.log(res);
  };

  if (!orders) {
    return <Loading />;
  }

  return (
    <>
      <div className={"order-history-container"}>
        <div id={"order-history-text-container"}>
          <h1>Ordrehistorikk</h1>
          <p>En oversikt over tidligere ordre du har gjennomført.</p>
        </div>
        <div>
          <div>Her kommer søk</div>
          <div>Her kommer sorter</div>
        </div>
        <table id={"order-history-table"}>
          <tr id={"header-row"}>
            <th className={"table-header date-column"}>Dato</th>
            <th className={"table-header ordernr-column"}>Ordrenummer</th>
            <th className={"table-header museum-column"}>Museum</th>
            <th className={"table-header package-column"}>Pakke</th>
            {/*<th className={"table-header price-column"}>Pris</th>*/}
          </tr>
          {/* TODO insert map for orders */}
          {orders.map((o) => (
            <tr className={"order-row"}>
              <td className={"date-column"}>
                {moment(o.orderDate).format("YYYY-MM-DD HH:mm")}
              </td>
              <td className={"ordernr-column"}>{o._id}</td>
              <td className={"museum-column"}>Museumnavn</td>
              <td className={"package-column"}>Pakkenavn</td>
              {/* <td className={"price-column"}>0.-</td>*/}
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
