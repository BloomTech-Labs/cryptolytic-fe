import React from 'react'

import exchangeOne from "../../../src/images/bitfinex_logo 1.svg"
import exchangeTwo from "../../../src/images/coinbase_logo.svg"
import exchangeThree from "../../../src/images/hitbtc_logo.svg"
import exchangeFour from "../../../src/images/kraken_logo.svg"
import exchangeFive from "../../../src/images/gemini_logo.svg"

import coinOne from "../../../src/images/btc logo.png"
import coinTwo from "../../../src/images/ltc logo.png"
import coinThree from "../../../src/images/z logo.png"
import coinFour from "../../../src/images/dash logo.png"
// import coinFive from "../../../src/images/bitc logo.png"
import coinSix from "../../../src/images/usd logo.png"
import coinSeven from "../../../src/images/eos logo.png"
import coinEight from "../../../src/images/ripple logo.png"
import coinNine from "../../../src/images/eth logo.png"
import coinTen from "../../../src/images/ethc coin.png"
import coinEleven from "../../../src/images/sia coin.png"


export default function Partners(){
    return(
        <div style={{ width: '100%', height:'70vh', backgroundColor: 'black', display: 'flex', alignItems: 'center', flexDirection: 'column', color: 'white' }}>
            <h2 style={{ fontSize: '2.8em', marginTop: '2em' }}>Supported Exchanges</h2>
            <div style={{ width: '90%', display: 'flex', justifyContent: 'space-around' }}>
                <img src={exchangeOne} />
                <img src={exchangeTwo} />
                <img src={exchangeThree} />
                <img src={exchangeFour} />
                <img src={exchangeFive} />
            </div>
            <div style={{ width: '70%', height: '13%', display: 'flex', justifyContent: 'space-around' }}>
                <img src={coinOne} />
                <img src={coinTwo} />
                {/* <img src={coinThree} /> */}
                <img src={coinFour} />
                {/* <img src={coinFive} /> */}
                {/* <img src={coinSix} /> */}
                <img src={coinSeven} />
                <img src={coinEight} />
            </div>
        </div>
    )
}