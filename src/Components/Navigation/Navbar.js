import React from 'react'
import Logo from './Logo/Logo'
import Button from '../Buttons/Button'
import { NavContainer, Nav, NavLinks, NavItem } from './NavbarStyle'
import { NavLink, Link } from 'react-router-dom'
import {GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

	return (
		<NavContainer>
			<Nav>
				<Link to="/" className="logo">
					<Logo className="logo" />
				</Link>
				<NavLinks>
					<NavItem   >
						<NavLink to="/about" className="normal-link" activeClassName="active">About</NavLink>
					</NavItem>
					<NavItem >
						<NavLink  to="/projects"  className="normal-link" activeClassName="active">Projects</NavLink>
					</NavItem>
					<NavItem>
						<Button text="Say Hello!"  link="/"/>
					</NavItem>
				</NavLinks>
				<GiHamburgerMenu className="burger"></GiHamburgerMenu>
			</Nav>
		</NavContainer>
	)
}

export default Navbar
