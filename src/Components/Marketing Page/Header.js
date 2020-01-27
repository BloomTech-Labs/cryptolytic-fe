import React from 'react'

import Link from '@material-ui/core/Link';

import logo from "../../../src/images/logo.svg"

const data = [
    {name: "Services", href: "/intro/services"},
    {name: "Team", href: "/intro/team"}
]

export default function Header(){
    return(
        <div style={{ width: '100%', height: '8vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Titillium Web', fontSize: '22px', lineHeight: '40px' }}>
            <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-start'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '50%', fontSize: '40px', lineHeight: '76px', marginLeft: '1em' }}>
                    <Link href="/intro" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>
                        <img src={logo} style={{ width: '1.2em' }}/>
                        <p>Cryptolytic</p>
                    </Link>
                </div>
            </div>
            <div style={{ width: '70%', display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
                    {data.map(e => 
                        <Link href={e.href} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>{e.name}</Link>
                        )}
                    <Link href="/home" style={{ backgroundColor: '#4EB9FF', borderRadius: '4px', padding: '2px 40px', textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'white' }}>Login</Link>
                </div>
            </div>
        </div>
    )
}