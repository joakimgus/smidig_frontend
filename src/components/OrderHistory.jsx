import "./OrderHistory.css";

const OrderHistory = () => {
    return(
        <>
            <div className={"order-history-container"}>
                <h1>Ordrehistorikk</h1>
                <p>En oversikt over tidligere ordre du har gjennomført.</p>
                <table id={"order-history-table"}>
                    <tr>
                        <th>Dato</th>
                        <th>Ordrenummer</th>
                        <th>Musuem</th>
                        <th>Pakke</th>
                        <th>Pris</th>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default OrderHistory;