import "./style/OrderHistory.css";
import React, { useEffect, useState } from "react";
import { fetchData } from "../api/apiHandler";
import Loading from "./Loading";
import moment from "moment";

const OrderHistory = () => {
  const [orders, setOrders] = useState();
  const [allOrders, setAllOrders] = useState();
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    getOrderHistory();
  }, []);

  useEffect(() => {
    if (searchFilter.length === 0) {
      setOrders(allOrders);
    } else {
      let filteredItems = orders.filter((item) => {
        if (item.museums.length > 0) {
          const name = item.museums[0].name.toLowerCase();
          return name.includes(searchFilter);
        }
      });
      setOrders(filteredItems);
    }
  }, [searchFilter]);

  const getOrderHistory = async () => {
    const res = await fetchData("/orders");
    setOrders(res);
    setAllOrders(res);
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
        <div className={"search-sort-container"}>
          <div className={"search-sort-container"}>
            <input
              type="text"
              placeholder={"Søk etter utstillinger"}
              onChange={(e) => setSearchFilter(e.target.value)}
            />
          </div>
          <select name="sort" id="sort">
            <option value="true">Nyeste</option>
            <option value="false">Eldste</option>
          </select>
        </div>
        <table id={"order-history-table"}>
          <tr id={"header-row"}>
            <th className={"table-header date-column"}>Dato</th>
            <th className={"table-header ordernr-column"}>Ordrenr.</th>
            <th className={"table-header museum-column"}>Museum</th>
            <th className={"table-header package-column"}>Pakkeløsning</th>
          </tr>
          {orders.map((o) => (
            <tr className={"order-row"}>
              <td className={"date-column"}>
                {moment(o.orderDate).format("YYYY-MM-DD HH:mm")}
              </td>
              <td className={"ordernr-column"}>{o._id}</td>
              <td className={"museum-column"}>
                {o.museums.map((m) => (
                  <div>{m.name}</div>
                ))}
              </td>
              <td className={"package-column"}>
                {o.exhibitions.map((e) => (
                  <div>{e.name}</div>
                ))}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default OrderHistory;
