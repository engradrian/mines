import React from "react"
import Bomb from "./Bomb"
import Diamond from "./Diamond"

function MinesBoxes(props) {

    const [isClicked, setIsClicked] = React.useState(false)
    const [isBomb, setIsBomb] = React.useState(false)
    const [isDiamond, setIsDiamond] = React.useState(false)
    const [isBoxClicking, setIsBoxClicking] = React.useState(false)
    const [nextWinning, setNextWinning] = React.useState("")
    const [fomattedNextWinning, setFormattedNextWinning] = React.useState("")
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        if (nextWinning) {
            let formatted = nextWinning.toLocaleString()
            setFormattedNextWinning(formatted)
        }
    }, [nextWinning])

    React.useEffect(() => {
        if (props.isPlaying) {
            let nextWinning = parseFloat((props.multipliers[props.multiplierCount] * props.bet).toFixed(2))

            setNextWinning(nextWinning)
        } else {
            setNextWinning("")
        }
    }, [props.multipliers, props.multiplierCount, props.bet, props.isPlaying])

    React.useEffect(() => {
        if (props.reset) {
            setIsBomb(false)
            setIsDiamond(false)
            setIsBoxClicking(false)
            props.setRevealAll(false)
            setIsClicked(false)
        }
    }, [props.reset])

    React.useEffect(() => {
        if (props.revealAll) {
            const bomb = props.minesBoxes.filter(boxes => boxes === props.count)
            if (bomb.length > 0) {
                setIsBomb(true)
            } else {
                setIsDiamond(true)  
            }
        }
    }, [props.revealAll])

    function boxClicked() {
        if (props.isPlaying && props.canSelect && !isClicked) {
            props.setCanSelect(false)
            setIsBoxClicking(true)
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false) 
            }, 500)
            setTimeout(() => {
                checkBox()
            }, 750)
        }
    }

    function checkBox() {
        if (!isClicked) {
            const bomb = props.minesBoxes.filter(boxes => boxes === props.count)
            if (props.reset) {
                props.setReset(false)
            }
            if (bomb.length > 0) {
                setIsClicked(true)
                setIsBomb(true)
                props.setCanSelect(false)
            } else {
                setIsClicked(true)
                setIsDiamond(true)  
                props.increaseMultiplier()
                props.setCanCashout(true)
                props.setCanCancel(false)
                props.decreaseGemLeft()
                props.increaseOpenedTiles()
                props.setCanSelect(true)
            }
        }
    }

    return (
        <div 
            onClick={props.isPlaying ? boxClicked : null} 
            className={
                `mines ${isBoxClicking ? "minesClicking" : ""} 
                ${!isBomb && !isDiamond  ? "inactiveMines" : ""}
                ${!props.isPlaying ? "removePointer" : ""}`
            }
        >
        {isLoading && <span className="loader"></span>}
        
        {isBomb && 
            <Bomb 
                isClicked={isClicked} 
                setRevealAll={props.setRevealAll}
                setIsPlaying={props.setIsPlaying}
                setCanCashout={props.setCanCashout}
                setCanSelect={props.setCanSelect}
        />}
        {isDiamond && <Diamond isClicked={isClicked}/>}
        {/* {!isDiamond && !isBomb && props.isPlaying && !isLoading && !isClicked &&
            <div>
                {fomattedNextWinning}
            </div>
        } */}
        </div>
    )
}

export default MinesBoxes;