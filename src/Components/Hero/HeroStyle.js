import styled from "styled-components";


export const HeroContainer = styled.div`

max-width: 100%;
min-height: 60vh;
background-color: ${props => props.theme.colors.secondary};
display: grid;
place-items: center;
@media screen and (max-width: ${props => props.theme.screens.sm})
{
	height: 100vh;
	width: 100%;
}

@media (orientation: landscape) and (max-width:  ${props => props.theme.screens.lg})
{
	max-width: 100vw;
	max-height: 100vh;
}
`

export const HeroContent = styled.div`
margin-top: 3rem;
@media screen and (max-width: ${props => props.theme.screens.sm})
{
	margin: 0;
	padding: 1rem;
	h1 
	{
		text-align: center;
		
	}
	p 
	{

		text-align: center;
	}
	.button-container 
	{
		display: flex;
		justify-content: center;
	}
	width: auto;



}
@media (orientation: landscape) and (max-width:  ${props => props.theme.screens.md})
{
		padding-top: 2rem;
}
height: auto;
width: 574px;
max-width: 100%;
h1 
{
	font-family: ${props => props.theme.fonts.marker};
	color: ${props => props.theme.colors.primary};
	font-size: 3rem;
}
p 
{
	font-family: ${props => props.theme.fonts.openSans};
	line-height: 25px;
	margin-top: 1rem;
}
span 
{
	font-weight: ${props => props.theme.fontWeights.bold};
	color: ${props => props.theme.colors.primary};
}

.button-container 
	{
		height: auto;
		width: 100%;
		margin-top:3rem;
		display: grid;
		grid-template-columns: repeat(2, max-content);
		gap: 1rem;
	}
`