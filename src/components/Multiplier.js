function Multiplier(props) {
    return (
        <div className="multiplier">
            {props.multipliers[props.multiplierCount] &&<div className="multiplierContainer">x{props.multipliers[props.multiplierCount].toLocaleString()}</div>}
            {props.multipliers[props.multiplierCount + 1] &&<div className="multiplierContainer">x{props.multipliers[props.multiplierCount + 1].toLocaleString()}</div>}
            {props.multipliers[props.multiplierCount + 2] &&<div className="multiplierContainer">x{props.multipliers[props.multiplierCount + 2].toLocaleString()}</div>}
            {props.multipliers[props.multiplierCount + 3] &&<div className="multiplierContainer">x{props.multipliers[props.multiplierCount + 3].toLocaleString()}</div>}
            {props.multipliers[props.multiplierCount + 4] &&<div className="multiplierContainer">x{props.multipliers[props.multiplierCount + 4].toLocaleString()}</div>}
            {props.multipliers[props.multiplierCount + 5] &&<div className="multiplierContainer">x{props.multipliers[props.multiplierCount + 5].toLocaleString()}</div>}
            {props.multipliers[props.multiplierCount + 6] && <div className="multiplierContainer">x{props.multipliers[props.multiplierCount + 6].toLocaleString()}</div>}
        </div>
    )
}

export default Multiplier;