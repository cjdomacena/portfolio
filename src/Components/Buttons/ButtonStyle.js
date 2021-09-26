import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CustomButton = styled(Link)`
text-decoration: none;
color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.white};
font-size: 1rem;
font-family: ${props => props.theme.fonts.marker};


/* Default type of button */
&:hover
{
	color: ${props => props.theme.colors.primary};
	background-color: ${props => props.theme.colors.secondary};
	box-shadow: 0 0 5px  ${props => props.theme.colors.primary};
}

background-color: ${props => props.theme.colors.primary};
padding:.8rem 3rem;
border-radius: 2rem;
width: auto;
height: auto;
/* When type of button is outline */
${(props) =>  props.type === "outline" && `

		color: ${props.theme.colors.primary};
		background-color: ${props.theme.colors.secondary};
		box-shadow: 0 0 2px ${props.theme.colors.primary};
		
	&:hover 
	{
	background-color: ${props.theme.colors.primary};
	color: ${props.theme.colors.secondary};
	padding:.8rem 3rem;
	border-radius: 2rem;
	width: auto;
	height: auto;
}
` }


`