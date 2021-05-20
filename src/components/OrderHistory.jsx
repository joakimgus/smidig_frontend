import "./OrderHistory.css";

const OrderHistory = () => {
    return(
        <>
            <div className={"order-history-container"}>
                <h1>Ordrehistorikk</h1>
                <p>En oversikt over tidligere ordre du har gjennomført.</p>
                <table id={"order-history-table"}>
                    <tr>
                        <th className={"table-header"}>Dato</th>
                        <th className={"table-header"}>Ordrenummer</th>
                        <th className={"table-header"}>Museum</th>
                        <th className={"table-header"}>Pakke</th>
                        <th className={"table-header"}>Pris</th>
                    </tr>
                    <tr>
                        <td>01.05.2021</td>
                        <td>120398120</td>
                        <td>Tidvis</td>
                        <td>Oslo 1324</td>
                        <td>0.-</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default OrderHistory;