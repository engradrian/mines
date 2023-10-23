import React from 'react';
import MinesBoxes from './MinesBoxes';

function Mines(props) {
    const minesArray = Array(25).fill(null);
    const [canSelect, setCanSelect] = React.useState(true)
    return (
        <div className="minesContainer">
            {minesArray.map((mine, index) => (
                <MinesBoxes 
                    key={index} 
                    count={index}
                    checkBox={props.checkBox}
                    minesBoxes={props.minesBoxes}
                    setRevealAll={props.setRevealAll}
                    revealAll={props.revealAll}
                    isPlaying={props.isPlaying}
                    setIsPlaying={props.setIsPlaying}
                    setReset={props.setReset}
                    reset={props.reset}
                    multiplierCount={props.multiplierCount}
                    increaseMultiplier={props.increaseMultiplier}
                    setCanCashout={props.setCanCashout}
                    setCanCancel={props.setCanCancel}
                    decreaseGemLeft={props.decreaseGemLeft}
                    increaseOpenedTiles={props.increaseOpenedTiles}
                    bet={props.bet}
                    multipliers={props.multipliers}
                    canSelect={canSelect}
                    setCanSelect={setCanSelect}
                />
            ))}
        </div>
    );
}

export default Mines;