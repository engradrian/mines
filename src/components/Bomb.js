import React from "react"
import explosionGIF from "../images/explosion.gif"
import bombImg from "../images/bomb.webp"
import bombAudio from "../sounds/explosion.mp3"

function Bomb(props) {

    const [isExploding, setIsExploding] = React.useState(false)
    
    const audioRef = React.useRef();

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; 
        }
    }, []);

    React.useEffect(() => {
        if (props.isClicked) {
            setIsExploding(true)
            setTimeout(() => {
                setIsExploding(false)
                props.setRevealAll(true)
                props.setIsPlaying(false)
                props.setCanCashout(false)
                props.setCanSelect(true)
            }, 1000)
        }
    }, [props.isClicked])
    
    return (
        <div className="bomb">
            <img src={isExploding ? explosionGIF : bombImg}></img>
            {props.isClicked && 
                <audio autoPlay ref={audioRef} >
                    <source src={bombAudio} type="audio/mpeg" />
                </audio>
            }
            {props.isClicked && <div className="bombBackground"></div>}
        </div>
    )
}

export default Bomb;