import React from 'react'
import { useState } from 'react'
import { TbGridDots } from 'react-icons/tb'
import { AiFillEye } from 'react-icons/ai'
import { CustomFieldStyle, ErrorComponent } from './style'

const CustomField = ({ label, labelStyle, type, error, img, icon, iconColor, children, ...props }) => {
    const ispasswordInput = type
    const IconComponent = icon

    const [showPassword, setShowPassword] = useState(false)

    const onShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <CustomFieldStyle>
                {!!label && (
                    <label className={labelStyle}>{label}</label>
                )}

                {type === 'select' ? (
                    <div className='inputWrapper'>
                        <input
                            type="select"
                            {...props}
                        >
                            {children}
                        </input>
                    </div>
                ) : (
                    <div className='inputWrapper'>
                        {!!img && <img src={img} alt='' className='img' />}
                        <input
                            type={
                                ispasswordInput === 'password'
                                    ? showPassword
                                        ? 'text'
                                        : 'password'
                                    : props.type
                            }
                            value={props.value}
                            {...props}
                        />
                        {!!icon && <IconComponent color={iconColor} />}
                        {ispasswordInput === 'password' && (
                            <div className='showPassword' onClick={onShowPassword}>
                                {showPassword ? (
                                    <AiFillEye fontSize={20} color='#CDCDCD' />
                                ) : (
                                    <TbGridDots fontSize={20} color='#CDCDCD' />
                                )}
                            </div>
                        )}
                    </div>
                )}
                {!!error && <ErrorComponent>{props.error}</ErrorComponent>}
            </CustomFieldStyle>
        </>
    )
}

export default CustomField
