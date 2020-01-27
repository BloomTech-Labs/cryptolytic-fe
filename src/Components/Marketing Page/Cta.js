import React from 'react'

import Link from '@material-ui/core/Link';

export default function Cta(){
    return(
        <div style={{ width: '100%', height: '70vh', background: '-webkit-linear-gradient(132.4deg, #39B1FF 6.01%, #4EB9FF 19.6%, #43B6F3 39.33%, #3BA7C2 63.26%, #53CFD7 93.96%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', color: 'white', fontSize: '1.6em'  }}>
            <h2 style={{ fontSize: '2em' }}>Supercharge your trading with Cryptolytic</h2>
            <Link href="/home" style={{ width: '50%', height: '30%', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
                Sign Up for a free account
            </Link>
            <p style={{ fontSize: '.5em' }}>Cryptolytic does not offer financial advice. Trade at your own risk.</p>
        </div>
    )
}