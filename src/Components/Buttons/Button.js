import React from 'react'

import { CustomButton } from './ButtonStyle'
/* 
* Wil take props text (content for the button), type (filled / outline), 
* isActive*(true/false)
*/
const Button = ({ text, type, isActive, link }) => {


	
	return (

			<CustomButton type={type} isActive={isActive} to={link}>
				{text}
			</CustomButton>

	)
}

export default Button
