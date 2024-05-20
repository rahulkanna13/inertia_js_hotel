// resources/js/components/Header.jsx

import React from 'react';
import { usePage } from '@inertiajs/react';
import './Header.css';

const Header = ({ user_name }) => {
    return (
        <div className="header">
            <div className="left">
                <i className="fas fa-user usericon"></i>
                <div className="user-info">
                    <span className="welcome-text">Welcome,</span>
                    <span className="user-name">{user_name}</span>
                </div>
            </div>
            <div className="right">
                <i className="fas fa-bell"></i>
            </div>
        </div>
    );
};

export default Header;
