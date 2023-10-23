import React from "react"
import './App.css';
import LeftPart from './components/LeftPart';
import RightPart from './components/RightPart';
import multiplers from "./multiplier.json"
import Balance from "./components/Balance";

function App() {
  const [balance, setBalance] = React.useState(localStorage.getItem("balance") || 1000)
  const [bet, setBet] = React.useState(localStorage.getItem("bet") || 1)
  const [mines, setMines] = React.useState(localStorage.getItem("mines") || 3)
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [minesBoxes, setMinesBoxes] = React.useState([])
  const [revealAll, setRevealAll] = React.useState(false)
  const [reset, setReset] = React.useState(false)
  const [multipliers, setMultipliers] = React.useState([multiplers[mines]])
  const [multiplierCount, setMultiplierCount] = React.useState(0)
  const [canCashout, setCanCashout] = React.useState(false)
  const [cashWinning, setCashWinning] = React.useState("")
  const [canCancel, setCanCancel] = React.useState(false)
  const [gemLeft, setGemLeft] = React.useState(0)
  const [openedTiles, setOpenedTiles] = React.useState(0)
  const [minesRisk, setMineRisk] = React.useState(0)

  function resetBalance() {
    setBalance(1000)
  }

  React.useEffect(() => {
    localStorage.setItem("bet", bet)
  }, [bet])

  React.useEffect(() => {
    localStorage.setItem("mines", mines)
  }, [mines])

  React.useEffect(() => {
    localStorage.setItem("balance", (balance))
  }, [balance])

  function calculateMineRisk() {
    let tilesLeft = 25 - openedTiles
    let mineRisk = parseFloat(((mines / tilesLeft) * 100).toFixed(2))
    setMineRisk(mineRisk)
  }

  React.useEffect(() => {
    if (isPlaying) {
      calculateMineRisk()
    }
  }, [openedTiles, mines, isPlaying])


  React.useEffect(() => {
    if(multiplierCount === multipliers.length) {
      setIsPlaying(false)
      setCashWinning("")
      setRevealAll(true)
      setBalance(prevBalance => prevBalance + (parseFloat((bet * multipliers[multiplierCount - 1]).toFixed(2))))
    }
  }, [multiplierCount, multipliers])

  function decreaseGemLeft() {
    setGemLeft(prevCount => prevCount - 1)
  }

  function increaseOpenedTiles() {
    setOpenedTiles(prevCount => prevCount + 1)
  }

  function cashout() {
    setIsPlaying(false)
    setBalance(prevBalance => prevBalance + cashWinning)    
    setCashWinning("")
    setRevealAll(true)
  }

  function cancel() {
    if(canCancel) {
      setIsPlaying(false)
      setCashWinning("")
      setBalance(prevBalance => prevBalance + parseInt(bet))
    }
  }

  React.useEffect(() => {
    if (canCashout) {
      setCashWinning(parseFloat((bet * multipliers[multiplierCount - 1]).toFixed(2)))
    } else {
      setCashWinning("")
    }
  }, [canCashout, multipliers, multiplierCount, bet]) 

  React.useEffect(() => {
    setMultiplierCount(0)
    setMultipliers(multiplers[mines])
  }, [mines])

  function increaseMultiplier() {
    setMultiplierCount(prevCount => prevCount + 1)
  }

  function plantMines() {
    const availableNumbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    const minesNumbers = [];
  
    for (let i = 0; i < mines; i++) {
      const randomNumber = Math.floor(Math.random() * availableNumbers.length);
      const randomMine = availableNumbers[randomNumber];
  
      minesNumbers.push(randomMine);
  
      availableNumbers.splice(randomNumber, 1);
    }
  
    setMinesBoxes(minesNumbers);
  }

  function startGame() {
    if (bet > 0) {
      if (!isPlaying) {
        setReset(true)
        setIsPlaying(true)
        plantMines()
        setMultiplierCount(0)
        setBalance(prevBalance => prevBalance - bet)
        setGemLeft(25 - mines)
        setOpenedTiles(0)
        calculateMineRisk()
      }
    }
  }

  function checkBox(number) {
    const equal = minesBoxes.filter(boxes => boxes === number)
    if (equal.length > 0) {
      console.log("bomb");
    } else {
      console.log("diamond")
    }
  }

  return (
    <div>
      <Balance 
        balance={balance}
        setBalance={setBalance}
        resetBalance={resetBalance}
      />
      <div className="App">
        <LeftPart 
          balance={balance}
          bet={bet}
          setBet={setBet}
          mines={mines}
          setMines={setMines}
          startGame={startGame}
          isPlaying={isPlaying}
          cashWinning={cashWinning}
          cancel={cancel}
          canCancel={canCancel}
          setCanCancel={setCanCancel}
          cashout={cashout}
          gemLeft={gemLeft}
          openedTiles={openedTiles} 
          minesRisk={minesRisk}
        />
        <RightPart 
          checkBox={checkBox}
          minesBoxes={minesBoxes}
          setRevealAll={setRevealAll}
          revealAll={revealAll}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          setReset={setReset}
          reset={reset}
          multipliers={multipliers}
          multiplierCount={multiplierCount}
          increaseMultiplier={increaseMultiplier}
          setCanCashout={setCanCashout}
          setCanCancel={setCanCancel}
          decreaseGemLeft={decreaseGemLeft}
          increaseOpenedTiles={increaseOpenedTiles}
          bet={bet}
        />
      </div>
    </div>
    
  );
}

export default App;
