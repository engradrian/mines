import React from "react"
import gemAudio from "../sounds/gem.mp3"

import gemImg from "../images/gem.webp"

function Diamond(props) {
    const audioRef = React.useRef();

    React.useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2; 
        }
    }, []);

    return (
        <div className="diamond">
            <img src={gemImg}></img>
            {props.isClicked && 
                <audio autoPlay ref={audioRef}>
                    <source src={gemAudio} type="audio/mpeg" />
                </audio>
            }
            {props.isClicked && <div className="diamondBackground"></div>}
        </div>
    )
}

export default Diamond;