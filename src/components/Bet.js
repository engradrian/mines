import React from "react"

function Bet(props) { 
    React.useEffect(() => {
        if (!props.isPlaying) {
            let bet = parseFloat(props.bet)
            let balance = parseFloat(props.balance)
            if (bet > balance)
            props.setBet(balance)
        }
    }, [props.isPlaying])   
   
    function changeBet(e) {
        let inputValue = parseFloat(e.target.value);
        let balance = parseFloat(props.balance);
    
        if (!isNaN(inputValue)) {
            inputValue = Math.round(inputValue * 100) / 100;
    
            if (inputValue < 0) {
                props.setBet(0);
            } else if (inputValue > balance) {
                props.setBet(balance);
            } else {
                const formattedInput = inputValue.toString();
                props.setBet(formattedInput);
            }
        } else {
            props.setBet(0);
        }
    }

    function halfBet() {
        let bet = parseFloat(props.bet)
        let halvedBet = parseFloat((bet * 0.5).toFixed(2))

        if (halvedBet > 1) {
            props.setBet(halvedBet)
        } else {
            props.setBet(1)
        }
    }

    function twiceBet() {
        let bet = parseFloat(props.bet)
        let twiceBet = parseFloat((bet * 2).toFixed(2))

        if (twiceBet < props.balance) {
            props.setBet(twiceBet)
        } else {
            props.setBet(props.balance)
        }
    }

    function minBet() {
        props.setBet(1)
    }

    function maxBet() {
        props.setBet(props.balance)
    }

    return (
        <div className="betContainer">
            <div className="bet">
                <div className="betLabel">Bet:</div>
                <div>
                ₱ 
                <input 
                    type="number" 
                    className={`inputBet ${props.isPlaying ? "inputBetActive" : ""}`} 
                    value={`${props.bet}`}
                    onChange={changeBet}
                ></input>
                </div>
            </div>
            <div className="betButtonsContainer">
                <div onClick={!props.isPlaying ? minBet : null} className={`betButton ${!props.isPlaying ? "betButtonActive" : ""}`}>min</div>
                <div onClick={!props.isPlaying ? halfBet : null} className={`betButton ${!props.isPlaying ? "betButtonActive" : ""}`}>1/2</div>
                <div onClick={!props.isPlaying ? twiceBet : null} className={`betButton ${!props.isPlaying ? "betButtonActive" : ""}`}>x2</div>
                <div onClick={!props.isPlaying ? maxBet : null} className={`betButton ${!props.isPlaying ? "betButtonActive" : ""}`}>max</div>
            </div>
        </div>
    )
}

export default Bet;