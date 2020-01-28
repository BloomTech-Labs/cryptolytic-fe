import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import left from "../../../src/images/MachineLearningLeft.svg"
import middle from "../../../src/images/MachineLearningMiddle.svg"
import right from "../../../src/images/MachineLearningRight.svg"

const useStyles = makeStyles({
    statsContainer: {
        width: '100%', 
        height:'75vh', 
        backgroundColor: 'black', 
        display: 'flex', 
        justifyContent: 'center', 
        color: 'white'
    },
    statsTitle: {
        position: 'absolute', 
        fontSize: '2em', 
        marginTop: '2em'
    },
    statsTitleBackground: {
        background: 'linear-gradient(93.35deg, rgba(78, 185, 255, 0.2) 19.25%, rgba(83, 207, 215, 0.2) 45.13%, rgba(93, 220, 183, 0.2) 67.95%, rgba(98, 227, 171, 0.2) 82.93%)', 
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', 
        filter: 'blur(100px)', 
        height: '20%',
        width: '25%', 
        position: 'absolute', 
        marginTop: '2em'
    },
    statsRowContainer: {
        display: 'flex', 
        width: '100%', 
        fontSize: '2.5em', 
        marginTop: '4em'
    },
    statsLeftContainer: {
        width: '33%', 
        height: 'auto', 
        backgroundImage: `url("${left}")`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100%', 
        backgroundPosition: 'right', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    statsLeftText: {
        textAlign: 'left', 
        marginBottom: '2em'
    },
    statsLeftSubtitle: {
        fontSize: '.3em', 
        marginTop: '-5em'
    },
    statsMiddleContainer: {
        width: '34%', 
        height: 'auto', 
        backgroundImage: `url("${middle}")`,
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100%', 
        backgroundPosition: 'center', 
        marginTop: '2.5em', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    statsMiddleSubtitle: {
        fontSize: '.6em', 
        marginTop: '-3em'
    },
    statsRightContainer: {
        width: '33%', 
        height: 'auto', 
        backgroundImage: `url("${right}")`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100%', 
        backgroundPosition: 'left', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    statsRightText: {
        textAlign: 'left'
    },
    statsRightTitle: {
        fontSize: '.6em', 
        marginBottom: '-2.8em'
    },
    statsRightSubtitle: {
        fontSize: '.4em', 
        marginTop: '-4em'
    }
});

export default function Stats(){
    const classes = useStyles();
    return(
        <div className={classes.statsContainer}>
            <div className={classes.statsTitle}>
                <h2>Powered by Machine Learning</h2>
            </div>
            <div className={classes.statsTitleBackground}></div>
            <div className={classes.statsRowContainer}>
                <div className={classes.statsLeftContainer}>
                    <div className={classes.statsLeftText}>
                        <h3>18M+</h3>
                        <p className={classes.statsLeftSubtitle}>Data points analyzed</p>
                    </div>
                </div>
                <div className={classes.statsMiddleContainer}>
                    <div>
                        <h3>30</h3>
                        <p className={classes.statsMiddleSubtitle}>predictive models</p>
                    </div>
                </div>
                <div className={classes.statsRightContainer}>
                    <div className={classes.statsRightText}>
                        <p className={classes.statsRightTitle}>trained on</p>
                        <h3>20K+</h3>
                        <p className={classes.statsRightSubtitle}>historical arbitrages</p>
                    </div>
                </div>
            </div>
        </div>
    )
}