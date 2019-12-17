import React from "react"
import logo from "../images/logo.svg"
import home from "../images/home-logo.svg"
import arbitrage from "../images/arbitrage-logo.svg"
import trading from "../images/line-chart-logo.svg"
import api from "../images/cloud-upload-logo.svg"
import data from "../images/data-logo.svg"


function NavigationBar() {

    return(
        <div className="NavBar" style={{ width: '20vw', height: '100vh', backgroundColor: 'black', boxShadow: '1px 0px 0px', borderRight: '1px solid #FFFFFF' }}>
            <div className="NavBarLogo" style={{ width: '100%', height: '25vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={logo} />
            </div>
            <div className="NavBarMenu" style={{ width: '100%', height: '75vh', display: 'flex', alignItems: 'center', flexDirection: 'column', color: '#FFFFFF', marginLeft: 25 }}>
{[{name: 'Home', logo: home}, {name: 'Arbitrage', logo: arbitrage}, {name: 'Trading', logo: trading}, {name: 'API', logo: api}, {name: 'Data', logo: data}].map(e => <p style={{ width: '100%', textAlign: 'left', fontWeight: 600, fontSize: '22px', lineHeight: '33px', letterSpacing: '0.03em', margin: 15 }}><img style={{ margin: '0px 10px' }} src={e.logo}/>{e.name}</p>)}
            </div>
        </div>
    )
}

export default NavigationBar