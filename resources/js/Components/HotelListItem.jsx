// components/HotelListItem.jsx
import React from 'react';
import PropTypes from 'prop-types';

const HotelListItem = ({ hotel }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Display hotel image */}
      <img  src={`/images/${hotel.images.length > 0}` ? `/images/${hotel.images[0].image_path}` : 'placeholder_image_url'} alt={hotel.name} className="w-full h-40 object-cover mb-4" />
      
      <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
      <p className="text-gray-600 mb-2">Address: {hotel.address}</p>
      <p className="text-gray-600 mb-2">Price: {hotel.price}</p>
      <p className="text-gray-600 mb-4">Description: {hotel.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

HotelListItem.propTypes = {
  hotel: PropTypes.object.isRequired,
};

export default HotelListItem;
