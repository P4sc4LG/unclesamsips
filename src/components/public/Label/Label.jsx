import React from 'react';
import './Label.css'

const Label = ({content, color, onClick}) => {
    return <span className="Label" style={{color: color}} onClick={onClick}>{content}</span>
}

export default Label;