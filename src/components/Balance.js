import React from "react"

function Balance(props) {

    React.useEffect(() => {
        let currentBalance = parseFloat(props.balance)
        let formattedBalance = parseFloat(currentBalance.toFixed(2))
        props.setBalance(formattedBalance)
    }, [props.balance])

    return (
        <div className="balance">
            <div className="balanceDetails">Balance:<div className="balanceContainer">₱ {parseFloat(props.balance).toLocaleString()}</div></div>
            <div onClick={props.resetBalance} className="resetBalance">Reset Balance</div>
        </div>
    )
}

export default Balance