import styled from "styled-components";
import { Link } from 'react-router-dom'

export const CustomButton = styled(Link)`
text-decoration: none;
color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.tertiary};
font-size: 1rem;
font-family: ${props => props.theme.fonts.marker};
&:hover 
{
	color: ${props => props.theme.colors.tertiary};
}
`