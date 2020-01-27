import React from 'react'

import Header from "./Header"
import ServicesFeatures from "./ServicesFeatures"
import Cta from "./Cta"

import cryptoToCoin from "../../../src/images/cryptoToCoin.png"

export default function Services(){
    return(
        <div style={{ width: '100%', backgroundColor: 'black', display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white', fontFamily: 'Titillium Web' }}>
            <Header />
            <div style={{ height: '30vh', width: '100%', background: 'linear-gradient(180deg, rgba(78, 185, 255, 0.3) 0%, rgba(79, 201, 229, 0.4) 100%), linear-gradient(96.72deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Services</h1>
            </div>
            <div style={{ height: '50vh', width: '80%', display: 'flex' }}>
                <div style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left', fontSize: '1.2em' }}>
                    <h2>Cryptolytic has what you need to succeed in volatile cryptocurrency markets! </h2>
                </div>
                <div style={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={cryptoToCoin} />
                </div>
            </div>
            <ServicesFeatures />
            <Cta />
        </div>
    )
}