import Bet from "./Bet";
import GameDetails from "./GameDetails";
import MinesCount from "./MinesCount";
import StartButton from "./StartButton";

function LeftPart(props) {
    return (
        <div className='leftPart'>
            <Bet 
                balance={props.balance}
                bet={props.bet}
                isPlaying={props.isPlaying}
                setBet={props.setBet}
            />
            <MinesCount 
                mines={props.mines}
                isPlaying={props.isPlaying}
                setMines={props.setMines}
            />
            <StartButton 
                startGame={props.startGame}
                isPlaying={props.isPlaying}
                cashWinning={props.cashWinning}
                cancel={props.cancel}
                canCancel={props.canCancel}
                setCanCancel={props.setCanCancel}
                cashout={props.cashout}
            />
            <GameDetails 
                gemLeft={props.gemLeft}
                openedTiles={props.openedTiles}
                minesRisk={props.minesRisk}
            />
        </div>
    )
}

export default LeftPart;