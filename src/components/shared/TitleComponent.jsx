import React from 'react';
import lineSvg from '../../assets/line.svg'

import './TitleComponent.css'
 
const TitleComponent = ({preTitle, title, text}) => {
    return <div className="TitleComponent">
        <div className='TitleComponent-preTitle'>{preTitle}</div>
        <img src={lineSvg} />
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
}

export default TitleComponent;