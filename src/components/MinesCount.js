function MinesCount(props) {
    function decreaseMinesCount() {
        if (props.mines > 1) {
            props.setMines(prevCount => parseInt(prevCount) - 1)
        }
    }

    function increaseMinesCount() {
        if (props.mines < 24) {
            props.setMines(prevCount => parseInt(prevCount) + 1)
        }
    }

    function setMinesThree() {
        props.setMines(3)
    }

    function setMinesFive() {
        props.setMines(5)
    }

    function setMinesTen() {
        props.setMines(10)
    }

    function setMinesTwenty() {
        props.setMines(20)
    }

    return (
        <div className="minesCount">
            <div className="flex">
                <div onClick={!props.isPlaying ? setMinesThree : null} className={`minesCountButton ${!props.isPlaying ? "minesCountButtonActive" : ""}`}>3</div>
                <div onClick={!props.isPlaying ? setMinesFive : null} className={`minesCountButton ${!props.isPlaying ? "minesCountButtonActive" : ""}`}>5</div>
                <div onClick={!props.isPlaying ? decreaseMinesCount : null} className={`minesCountButton2 ${!props.isPlaying ? "minesCountButton2Active" : ""}`}>-</div>
            </div>
            <div>
                <div className="minesCountText">
                    <div className="minesCountTextLabel">Mines</div>
                    {props.mines}
                </div>
            </div>
            <div className="flex">
                <div onClick={!props.isPlaying ? increaseMinesCount : null} className={`minesCountButton2 ${!props.isPlaying ? "minesCountButton2Active" : ""}`}>+</div>
                <div onClick={!props.isPlaying ? setMinesTen : null} className={`minesCountButton ${!props.isPlaying ? "minesCountButtonActive" : ""}`}>10</div>
                <div onClick={!props.isPlaying ? setMinesTwenty : null} className={`minesCountButton ${!props.isPlaying ? "minesCountButtonActive" : ""}`}>20</div>
            </div>
        </div>
    )
}

export default MinesCount;