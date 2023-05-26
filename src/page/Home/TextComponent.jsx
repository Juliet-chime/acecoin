import React from 'react'
import { TextStyles } from './style'

const TextComponent = ({ head, text }) => {
    return (
        <TextStyles>
            <h2>{head}</h2>
            <p>{text}</p>
        </TextStyles>
    )
}

export default TextComponent