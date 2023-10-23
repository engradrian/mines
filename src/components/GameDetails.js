import bombIcon from "../images/bomb_icon.webp"
import gemIcon from "../images/gem_icon.webp"
import tileIcon from "../images/tile_icon.webp"

function GameDetails(props) {    
    return(
        <div className="gameDetails">
            <div className="gameDetailsLabel">Game details</div>
            <div className="line"></div>
            <div>
                <div className="detailsContainer">
                    <div className="detailsIcon">
                        <img src={gemIcon}></img>
                        Gems left
                    </div>
                    <div className="detailsInfo">{props.gemLeft}</div>
                </div>
                <div className="detailsContainer">
                    <div className="detailsIcon">
                        <img src={bombIcon}></img>
                        Mine risk
                    </div>
                    <div className="detailsInfo">{props.minesRisk}%</div>
                </div>
                <div className="detailsContainer">
                    <div className="detailsIcon">
                        <img src={tileIcon}></img>
                        Opened tiles
                    </div>
                    <div className="detailsInfo">{props.openedTiles}/25</div>
                </div>
            </div>
        </div>
    )
}

export default GameDetails