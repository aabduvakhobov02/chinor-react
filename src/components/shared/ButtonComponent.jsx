import React from 'react';

import "./ButtonComponent.css";

const ButtonComponent = ({onClick, title}) => {
    return (
        <button className='ButtonComponent' onClick={onClick}>
            {title}
        </button>
    )
}

export default ButtonComponent
