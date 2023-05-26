import React from 'react'
import { CardTextWrapper } from './style'

const CardText = ({ title, icon, product, img, color }) => {
    const IconComponent = icon
    return (
        <CardTextWrapper color={color}>
            <h4>{title}</h4>
            <div className='icon-text'>
                {img && <img src={img} alt='' />}
                {icon && <div className='iconwrap'><IconComponent /></div>}
                <h4 className='product'>{product}</h4>
            </div>
        </CardTextWrapper>
    )
}

export default CardText