import React from 'react';
import './search.css'

const Search = ({ placeholder, value, onChange }) => {
    return <input type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        />
}

export default Search;