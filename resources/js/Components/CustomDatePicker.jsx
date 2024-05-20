// resources/js/components/DatePicker.jsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            isClearable
            showYearDropdown
            scrollableYearDropdown
        />
    );
};

export default CustomDatePicker;
