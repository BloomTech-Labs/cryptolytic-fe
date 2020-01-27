import React from 'react'

import Link from '@material-ui/core/Link';

import heroForex from "../../../src/images/Vector 2.png"

export default function Hero(){
    return(
        <div style={{ width: '100%', height:'90vh', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', color: 'white', backgroundImage: `url("${heroForex}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center bottom'}} >
            <div style={{ textAlign: 'left', width: '60%', padding: '5vw 0 0 15vh', fontFamily: 'Titillium Web', fontWeight: 600, fontSize: '24px', lineHeight: '42px' }}>
                <h1 style={{background: "-webkit-linear-gradient(92.5deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontSize: '90px', lineHeight: '112px'}}>Smarter trading</h1>
                <h2>Discover arbitrage opportunities in the cryptocurrency markets before they happen and make profitable trades</h2>
                <Link href="/home" style={{ background: 'linear-gradient(120.25deg, rgba(78, 185, 255, 0.9) 19.83%, rgba(83, 207, 215, 0.9) 70.73%, rgba(93, 220, 183, 0.9) 115.6%, rgba(98, 227, 171, 0.9) 145.07%)', width: '180px', textAlign: 'center', borderRadius: '4px', fontSize: '16px', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>Get Started</Link>
            </div>
            <div style={{ width: '50%', height: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
            </div>
        </div>
    )
}