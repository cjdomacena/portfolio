import React from 'react'
import { HeroContainer, HeroContent } from './HeroStyle'
import Button from './../Buttons/Button'

const Hero = () => {
	return (
		<HeroContainer>
			<HeroContent>
				<div>
					<h1>Passion, dedication, and a lot of coffee</h1>
					<p>Hello! I'm <span>Christian Domacena </span>, a <span>front-end developer</span>, currently a student at NJIT. I love creating websites that are both engaging and fun! Enjoy your visit! </p>
				</div>
				<div className="button-container">
					<Button text="Say Hello! " />
					<Button text="Download CV" type="outline"/>
				</div>
			</HeroContent>
		</HeroContainer>
	)
}

export default Hero
