import React from "react"
import cogWheel from "../images/cogwheel.svg"
import Avatar from '@material-ui/core/Avatar';

function NavigationHeader() {
    
    return(
        <div style={{ backgroundColor: '#000000', width: '100%', height: '10vh', position: 'absolute', zIndex: -1, display: 'flex', justifyContent: 'space-between' }}>
            <div className="title" style={{ width: '20vw', height: '10vh', marginLeft: '20vw', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#FFFFFF', fontWeight: 300, fontSize: '30px', lineHeight: '46px', letterSpacing: '0.03em'  }}>
                Dashboard
            </div>
            <div className="cogWheel" style={{ width: '10%', height: '10vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                <img src={cogWheel} />
                <Avatar />
            </div>
        </div>
    )
}

export default NavigationHeader