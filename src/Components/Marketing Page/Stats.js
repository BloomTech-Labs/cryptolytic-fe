import React from 'react'

import left from "../../../src/images/MachineLearningLeft.svg"
import middle from "../../../src/images/MachineLearningMiddle.svg"
import right from "../../../src/images/MachineLearningRight.svg"


export default function Stats(){
    return(
        <div style={{ width: '100%', height:'75vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', color: 'white' }}>
            <div style={{ position: 'absolute', fontSize: '2em', marginTop: '2em' }}>
                <h2>Powered by Machine Learning</h2>
            </div>
            <div style={{ background: 'linear-gradient(93.35deg, rgba(78, 185, 255, 0.2) 19.25%, rgba(83, 207, 215, 0.2) 45.13%, rgba(93, 220, 183, 0.2) 67.95%, rgba(98, 227, 171, 0.2) 82.93%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)', filter: 'blur(100px)', height: '20%', width: '25%', position: 'absolute', marginTop: '2em' }} ></div>
            <div style={{ display: 'flex', width: '100%', fontSize: '2.5em', marginTop: '4em' }}>
                <div style={{ width: '33%', height: 'auto', backgroundImage: `url("${left}")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'right', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
                    <div style={{ textAlign: 'left', marginBottom: '2em' }}>
                        <h3>18M+</h3>
                        <p style={{ fontSize: '.3em', marginTop: '-5em' }}>Data points analyzed</p>
                    </div>
                </div>
                <div style={{ width: '34%', height: 'auto', backgroundImage: `url("${middle}")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center', marginTop: '2.5em', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div>
                        <h3>30</h3>
                        <p style={{ fontSize: '.6em', marginTop: '-3em' }}>predictive models</p>
                    </div>
                </div>
                <div style={{ width: '33%', height: 'auto', backgroundImage: `url("${right}")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'left', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'left' }}>
                        <p style={{ fontSize: '.6em', marginBottom: '-2.8em' }}>trained on</p>
                        <h3>20K+</h3>
                        <p style={{ fontSize: '.4em', marginTop: '-4em' }}>historical arbitrages</p>
                    </div>
                </div>
            </div>
        </div>
    )
}