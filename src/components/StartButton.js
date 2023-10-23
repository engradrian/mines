import React from "react"

function StartButton(props) {
    const [winning, setWinning] = React.useState(props.cashWinning)

    function startGameButton() {
        props.startGame()
        props.setCanCancel(true)
    }

    function cashOut() {
        props.cashout()
    }

    React.useEffect(() => {
        let winning = parseFloat(props.cashWinning)
        let winningCurrent = parseFloat(winning.toFixed(2))
        let formattedWinning = winningCurrent.toLocaleString()
        setWinning(formattedWinning)
    }, [props.cashWinning])


    return (
        <div onClick={props.isPlaying ? props.canCancel ? props.cancel : cashOut : startGameButton} className={`startButton ${props.isPlaying ? props.canCancel ? "cancelButton" : "cashoutButton" : ""}`}>
            <div className="startButtonText">
                <div className={`startGameText ${props.isPlaying ? props.canCancel ? "cancelText" : "cashoutText" : ""}`}>
                    {props.isPlaying ? props.canCancel ? "Cancel" : "Cash Out" : "Start Game"}
                </div>
                <div className={`multiplierText ${!props.canCancel && props.isPlaying ? "multiplierTextAppear" : ""} `}>
                    {!props.canCancel && props.isPlaying ? `₱ ${winning}` : ""}
                </div>
            </div>
            <div className={`startButtonIndicator ${props.isPlaying ? (props.canCancel ? "cancelButtonIndicator" : "cashoutButtonIndicator") : ""}`}></div>
        </div>
    )
}

export default StartButton;