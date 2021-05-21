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
                        <th className={"table-header date-column"}>Dato</th>
                        <th className={"table-header ordernr-column"}>Ordrenummer</th>
                        <th className={"table-header museum-column"}>Museum</th>
                        <th className={"table-header package-column"}>Pakke</th>
                        <th className={"table-header price-column"}>Pris</th>
                    </tr>
                    {/* TODO insert map for orders */}
                    <tr className={"order-row"}>
                        <td className={"date-column"}>01.05.2021</td>
                        <td className={"ordernr-column"}>120398120</td>
                        <td className={"museum-column"}>Tidvis</td>
                        <td className={"package-column"}>Oslo 1324</td>
                        <td className={"price-column"}>0.-</td>
                    </tr>
                    <tr className={"order-row"}>
                        <td className={"date-column"}>20.03.2021</td>
                        <td className={"ordernr-column"}>461947294</td>
                        <td className={"museum-column"}>Vikingskiphuset</td>
                        <td className={"package-column"}>Tunberg</td>
                        <td className={"price-column"}>0.-</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default OrderHistory;