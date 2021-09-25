import React from 'react'
import Logo from './Logo'
import Button from '../Buttons/Button'
import { NavContainer, Nav, NavLinks, NavLink } from './NavbarStyle'
import { Link } from 'react-router-dom'


const Navbar = () => {
	return (

		<NavContainer>
			<Nav>
				<Link to="/" className="logo"><Logo className="logo" /></Link>
				<NavLinks>
					<NavLink>
						<Link>Home </Link>
					</NavLink>
					<NavLink>
						<Link>Projects</Link>
					</NavLink>
					<NavLink>
						<Button text="Say Hello!" />
					</NavLink>
				</NavLinks>
			</Nav>
		</NavContainer>
	)
}

export default Navbar
