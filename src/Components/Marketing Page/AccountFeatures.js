import React from 'react'

const features = [
    {name: "Arbitrage Dashboard", description: "User friendly display for tracking arbitrage trading opportunities across exchanges", color: "#4EB9FF"},
    {name: "Trade Recommender Dashboard", description: "Simple display to view predictions on market movement", color: "#4FC9E5"},
    {name: "API Access", description: "Arbitrage and trading APIs for up-to-date predictions in the market", color: "#57D5C7"},
    {name: "Open Source Dataset", description: "Access to current datasets for all supported exchanges", color: "#63E4A7"},
]

export default function AccountFeatures(){
    return(
        <div style={{ width: '100%', height:'60vh', backgroundColor: 'black', flexDirection: 'column', alignItems: 'center', color: 'white', display: 'flex', justifyContent: 'space-around', fontSize: '1.6em' }}>
            <h2>Account Features</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '90%', fontSize: '.5em' }}>
                {features.map(e => 
                <div style={{ width: '20em', height: '17em', backgroundColor: 'rgba(35, 32, 44, 0.8)', borderRadius: '8px', borderBottom: '1em solid #56C6E5', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'left' }}>
                    <div style={{ margin: '2.5em 2em' }}>
                        <h3 style={{ color: e.color }}>{e.name}</h3>
                        <p>{e.description}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}