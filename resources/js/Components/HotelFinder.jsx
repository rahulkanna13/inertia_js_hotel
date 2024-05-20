// resources/js/components/HotelFinder.jsx

import React from 'react';
import CustomDatePicker from './CustomDatePicker'; // Adjust the path accordingly
import './HotelFinder.css';

const HotelFinder = () => {
    return (
        <div className="hotel-finder">
            <div className="section-title">Dates</div>
            <div className="date-pickers">
                <div className="date-picker">
                    <label>From Date:</label>
                    <CustomDatePicker />
                </div>
                <div className="date-picker">
                    <label>To Date:</label>
                    <CustomDatePicker />
                </div>
            </div>
            <div className="section-title">Persons</div>
            <div className="number-of-persons">
                <label>Number of Adults:</label>
                <input type="number" min="1" defaultValue="1" />
            </div>
            <div className="number-of-persons">
                <label>Number of Children:</label>
                <input type="number" min="0" defaultValue="0" />
            </div>
            <button className="search-button">Search</button>
        </div>
    );
};

export default HotelFinder;
