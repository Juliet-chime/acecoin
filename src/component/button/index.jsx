import React from 'react';
import { Buttonstyles } from './style';

const Custombutton = ({ text, icon, iconProps, ...props }) => {
    const IconComponent = icon;
    return (
        <Buttonstyles {...props}>
            {icon && <IconComponent {...iconProps} />}
            {text}
        </Buttonstyles>
    );
};

export default Custombutton;