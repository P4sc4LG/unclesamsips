import React from 'react';
import './search.css';

const Search = ({ placeholder, value, onChange }) => {
    return <input className='search-bar'
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        />
}

export default Search;