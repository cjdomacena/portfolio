import React from 'react'

import { CustomButton } from './ButtonStyle'
const Button = ({ text, type }) => {


	
	return (

			<CustomButton type={type} >
				{text}
			</CustomButton>

	)
}

export default Button
