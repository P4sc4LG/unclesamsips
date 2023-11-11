import React from 'react';
import './label.css'

const Label = ({ content, color }) => {
    return <span className="Label" style={{ color: color }}>{content}</span>
}

export default Label;