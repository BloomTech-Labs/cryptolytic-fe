import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Header from "./Header"
import ServicesFeatures from "./ServicesFeatures"
import Cta from "./Cta"

import cryptoToCoin from "../../../src/images/cryptoToCoin.png"

const useStyles = makeStyles({
    servicesContainer: {
        width: '100%', 
        backgroundColor: 'black', 
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column', 
        color: 'white', 
        fontFamily: 'Titillium Web'
    },
    servicesTitleContainer: {
        height: '30vh', 
        width: '100%', 
        background: 'linear-gradient(180deg, rgba(78, 185, 255, 0.3) 0%, rgba(79, 201, 229, 0.4) 100%), linear-gradient(96.72deg, #4EB9FF 19.25%, #53CFD7 45.13%, #5DDCB7 67.95%, #62E3AB 82.93%)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    servicesRow: {
        height: '50vh', 
        width: '80%', 
        display: 'flex'
    },
    servicesRowTitle: {
        width: '70%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'left', 
        fontSize: '1.2em'
    },
    servicesRowImage: {
        width: '30%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
  });

export default function Services(){
    const classes = useStyles();
    return(
        <div className={classes.servicesContainer}>
            <Header />
            <div className={classes.servicesTitleContainer}>
                <h1>Services</h1>
            </div>
            <div className={classes.servicesRow}>
                <div className={classes.servicesRowTitle}>
                    <h2>Cryptolytic has what you need to succeed in volatile cryptocurrency markets! </h2>
                </div>
                <div className={classes.servicesRowImage}>
                    <img src={cryptoToCoin} />
                </div>
            </div>
            <ServicesFeatures />
            <Cta />
        </div>
    )
}