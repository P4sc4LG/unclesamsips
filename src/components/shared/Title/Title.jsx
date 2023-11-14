import React from 'react';
import './Title.css';

const Title = ({ content, color }) => {
    return <h1 style={{ color: color }}>{content}</h1>
}

export default Title;