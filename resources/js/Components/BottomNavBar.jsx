// resources/js/components/BottomNavBar.jsx

import React from 'react';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHotel, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import './BottomNavBar.css'; 
const BottomNavBar = () => {
    return (
        <div className="bottom-nav-bar">
            <Link href="/">
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </Link>
            <Link href="/hotels">
                <FontAwesomeIcon icon={faHotel} />
                <span>Hotels</span>
            </Link>
            <Link href="/bookings">
                <FontAwesomeIcon icon={faBook} />
                <span>Bookings</span>
            </Link>
            <Link href="/profile">
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
            </Link>
        </div>
    );
};

export default BottomNavBar;
