import "./OrderHistory.css";

const OrderHistory = () => {
    return(
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
                        <th className={"table-header"}>Dato</th>
                        <th className={"table-header"}>Ordrenummer</th>
                        <th className={"table-header"}>Museum</th>
                        <th className={"table-header"}>Pakke</th>
                        <th className={"table-header"}>Pris</th>
                    </tr>
                    {/* TODO insert map for orders */}
                    <tr className={"order-row"}>
                        <td>01.05.2021</td>
                        <td>120398120</td>
                        <td>Tidvis</td>
                        <td>Oslo 1324</td>
                        <td>0.-</td>
                    </tr>
                    <tr className={"order-row"}>
                        <td>20.03.2021</td>
                        <td>461947294</td>
                        <td>Vikingskiphuset</td>
                        <td>Tunberg</td>
                        <td>0.-</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default OrderHistory;