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
	color: ${props => props.theme.colors.primary};
	&:hover 
	{
		color: ${props => props.theme.colors.tertiary}
	}
}


`

export const Nav = styled.nav`
width: ${props => props.theme.screens.xxl};
height: 100%;
max-width: 100%;
padding: 0 1rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
.burger 
{
	display: none;
	font-size: 1.5rem;
	&:hover 
	{
		fill: ${props => props.theme.colors.tertiary};
	}
	@media screen and (max-width: ${props => props.theme.screens.sm})
{display: block;}

@media (orientation: landscape) and (max-width: ${props => props.theme.screens.md})
{display: block;}
}



`


export const NavLinks = styled.ul`
list-style: none;
display: flex;
max-width:90%;
justify-content: space-evenly;
height: auto;
flex-wrap: wrap;

@media screen and (max-width: ${props => props.theme.screens.sm})
{display: none;}

@media (orientation: landscape) and (max-width: ${props => props.theme.screens.md})
{display: none;}

@media (orientation: landscape) and (max-width: ${props => props.theme.screens.lg})
{display: none;}
`

export const NavItem = styled.li`
font-size: 1rem;
padding: 1rem;

.normal-link 
{
	color: ${props => props.theme.colors.tertiary};
	&:hover 
	{
		color: ${props => props.theme.colors.primary};
	}
}

.active 
{
	color: ${props => props.theme.colors.primary};
	&:hover 
	{color: ${props => props.theme.colors.tertiary};}
}

`

