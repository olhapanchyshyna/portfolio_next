import Image from 'next/image'
import React from 'react'

type TextWithCircleProps = {
	text: string
}

export default function TextWithCircle({text} : TextWithCircleProps) {
	return (
		<div className=''>
			<h3 className='subtitle'>{text}</h3>
		</div>
	)
}
