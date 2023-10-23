import Mines from "./Mines";
import Multiplier from "./Multiplier";

function RightPart(props) {
    return (
        <div className='rightPart'>
            <Multiplier 
                multipliers={props.multipliers}
                multiplierCount={props.multiplierCount}
            />
            <Mines 
                checkBox={props.checkBox}
                minesBoxes={props.minesBoxes}
                setRevealAll={props.setRevealAll}
                revealAll={props.revealAll}
                isPlaying={props.isPlaying}
                setIsPlaying={props.setIsPlaying}
                setReset={props.setReset}
                reset={props.reset}
                increaseMultiplier={props.increaseMultiplier}
                setCanCashout={props.setCanCashout}
                setCanCancel={props.setCanCancel}
                decreaseGemLeft={props.decreaseGemLeft}
                increaseOpenedTiles={props.increaseOpenedTiles}
                bet={props.bet}
                multipliers={props.multipliers}
                multiplierCount={props.multiplierCount}
            />
        </div>
    )
}

export default RightPart;