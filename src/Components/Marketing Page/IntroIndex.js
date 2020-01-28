import React from 'react'

import Header from "./Header"
import Hero from "./Hero"
import HomeFeatures from "./HomeFeatures"
import AccountFeatures from "./AccountFeatures"
import Stats from "./Stats"
import Partners from "./Partners"
import Cta from "./Cta"

export default function IntroIndex(){
    return(
        <div style={{ width: '100%', height:'100%', fontFamily: 'Titillium Web' }}>
            <Header />
            <Hero />
            <HomeFeatures />
            <AccountFeatures />
            <Stats />
            <Partners />
            <Cta />
        </div>
    )
}