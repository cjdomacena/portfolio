import styled from "styled-components";

export const NavContainer = styled.header`
width: 100%;
height: 80px;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
left:0;

font-family: ${props => props.theme.fonts.marker};
.logo 
{
	font-size: 1.2rem;
}
a 
{
	text-decoration: none;
	color: ${props => props.theme.colors.primary};
	&:hover 
	{
		color: ${props => props.theme.colors.tertiary};
	}
}
`

export const Nav = styled.nav`
width: 1440px;
height: 100%;
max-width: 100%;
padding: 0 1rem;
display: flex;
align-items: center;
justify-content: space-between;
`


export const NavLinks = styled.ul`

list-style: none;
display: flex;
background-color: aqua;
max-width:80%;
justify-content: space-evenly;
height: auto;
`

export const NavLink = styled.li`
font-size: 1rem;
padding: 1rem;
margin: 0 1rem;
`