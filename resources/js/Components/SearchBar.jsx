// resources/js/components/SearchBar.jsx

import React from 'react';
import './SearchBar.css';
const SearchBar = () => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search..."
                className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
        </div>
    );
};

export default SearchBar;