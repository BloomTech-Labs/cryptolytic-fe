import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    ctaContainer: {
        width: '100%', 
        height: '70vh', 
        background: '-webkit-linear-gradient(132.4deg, #39B1FF 6.01%, #4EB9FF 19.6%, #43B6F3 39.33%, #3BA7C2 63.26%, #53CFD7 93.96%)', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-around', 
        alignItems: 'center', 
        color: 'white', 
        fontSize: '1.6em',
    },
    ctaTitle: {
        fontSize: '2em'
    },
    ctaButton: {
        width: '50%', 
        height: '30%', 
        backgroundColor: 'black', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        textDecoration: 'none', 
        display: 'flex', 
        alignItems: 'center', 
        color: 'white',
        '&:hover': {
            background: 'white',
            color: 'black',
            textDecoration: 'none'
        }
    },
    ctaDisclaimer: {
        fontSize: '.5em'
    }
});

export default function Cta(){
    const classes = useStyles();
    return(
        <div className={classes.ctaContainer}>
            <h2 className={classes.ctaTitle}>Supercharge your trading with Cryptolytic</h2>
            <Link href="/signup" className={classes.ctaButton}>
                Sign Up for a free account
            </Link>
            <p className={classes.ctaDisclaimer}>Cryptolytic does not offer financial advice. Trade at your own risk.</p>
        </div>
    )
}