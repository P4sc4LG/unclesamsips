import React from 'react';
import './title.css';

const Title = ({ content, color }) => {
    return <h1 style={{ color: color }}>{content}</h1>
}

export default Title;