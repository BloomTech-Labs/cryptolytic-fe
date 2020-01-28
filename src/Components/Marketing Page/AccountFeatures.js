import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

const features = [
    {name: "Arbitrage Dashboard", description: "User friendly display for tracking arbitrage trading opportunities across exchanges", color: "#4EB9FF"},
    {name: "Trade Recommender Dashboard", description: "Simple display to view predictions on market movement", color: "#4FC9E5"},
    {name: "API Access", description: "Arbitrage and trading APIs for up-to-date predictions in the market", color: "#57D5C7"},
    {name: "Open Source Dataset", description: "Access to current datasets for all supported exchanges", color: "#63E4A7"},
]

const useStyles = makeStyles({
    accountFeaturesContainer: {
        width: '100%', 
        height:'60vh', 
        backgroundColor: 'black', 
        flexDirection: 'column', 
        alignItems: 'center', 
        color: 'white', 
        display: 'flex', 
        justifyContent: 'space-around', 
        fontSize: '1.6em'
    },
    accountFeaturesRow: {
        display: 'flex', 
        justifyContent: 'space-around', 
        width: '90%', 
        fontSize: '.5em'
    },
    accountFeaturesCard: {
        width: '20em', 
        height: '17em', 
        backgroundColor: 'rgba(35, 32, 44, 0.8)', 
        borderRadius: '8px', 
        borderBottom: '1em solid #56C6E5', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'left'
    },
    accountFeaturesText: {
        margin: '2.5em 2em' 
    }
});

export default function AccountFeatures(){
    const classes = useStyles();
    return(
        <div className={classes.accountFeaturesContainer}>
            <h2>Account Features</h2>
            <div className={classes.accountFeaturesRow}>
                {features.map(e => 
                <div className={classes.accountFeaturesCard}>
                    <div className={classes.accountFeaturesText}>
                        <h3 style={{ color: e.color }}>{e.name}</h3>
                        <p>{e.description}</p>
                    </div>
                </div>
                )}
            </div>
        </div>
    )
}