import React from 'react'

import { CustomButton } from './ButtonStyle'
/* 
* Wil take props text (content for the button), type (filled / outline), 
* isActive*(true/false)
*/
const Button = ({ text, type, isActive }) => {


	
	return (

			<CustomButton type={type} isActive={isActive}>
				{text}
			</CustomButton>

	)
}

export default Button
