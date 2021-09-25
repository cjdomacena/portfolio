import React from 'react'
import Logo from './Logo'
import Button from '../Buttons/Button'
import { NavContainer, Nav } from './NavbarStyle'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from 'styled-components'


const Navbar = () => {
	return (

			<NavContainer>
				<Nav>
					<Link to="/"><Logo /></Link>
					<Button text="Hello" />
				</Nav>
			</NavContainer>
	)
}

export default Navbar
