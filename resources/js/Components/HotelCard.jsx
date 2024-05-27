// resources/js/components/HotelCard.jsx

import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import './HotelCard.css';

const HotelCard = ({ hotel, onDelete }) => {
  return (
    <div className="hotel-card">
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <p>Price: ${hotel.price}</p>
      <div className="hotel-actions">
        <InertiaLink href={`/edit-hotel/${hotel.id}`} className="btn-edit">Edit</InertiaLink>
        <button onClick={() => onDelete(hotel.id)} className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default HotelCard;
