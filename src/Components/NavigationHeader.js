import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import cogWheel from "../images/cogwheel.svg"
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    navHeader: {
        backgroundColor: '#000000',
        width: '100%',
        height: '10vh',
        position: 'absolute',
        zIndex: -1,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        width: '20vw',
        height: '10vh',
        marginLeft: '20vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: 300, 
        fontSize: '30px', 
        lineHeight: '46px', 
        letterSpacing: '0.03em' 
    },
    cogWheel: {
        width: '10%', 
        height: '10vh', 
        display: 'flex', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    }
}))

function NavigationHeader() {
    const classes = useStyles();
    return(
        <div className={classes.navHeader}>
            <div className={classes.title}>
                Dashboard
            </div>
            <div className={classes.cogWheel}>
                <img src={cogWheel} />
                <Avatar />
            </div>
        </div>
    )
}

export default NavigationHeader