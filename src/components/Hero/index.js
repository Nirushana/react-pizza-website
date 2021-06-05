import React from 'react'
import Navbar from '../Navbar/index'
import { HeroContainter, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './HeroElements'

function Hero() {
    return (
        <HeroContainter>
            <Navbar />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greates Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn>PlaceOrder</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainter>
    )
}

export default Hero
