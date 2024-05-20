// resources/js/pages/HotelListPage.jsx

import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';

const HotelListPage = ({ hotels }) => {
  return (
    <GuestLayout>
    <div>
      <h1>Hotel List</h1>
      <ul>
        {hotels.data.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.name}</h2>
            <p>Address: {hotel.address}</p>
            <p>Price: {hotel.price}</p>
            <p>Description: {hotel.description}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>

      {/* Render pagination links */}
      {hotels.links.map((link, index) => (
        <span key={index}>
          {link.url ? (
            <a href={link.url}>{link.label}</a>
          ) : (
            <span>{link.label}</span>
          )}
        </span>
      ))}
    </div>
    </GuestLayout>
  );
};

export default HotelListPage;
