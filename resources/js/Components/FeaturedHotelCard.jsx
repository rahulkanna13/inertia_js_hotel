// FeaturedHotelCard.jsx

import React from 'react';
import './FeaturedHotelCard.css'

const FeaturedHotelCard = ({ hotel }) => {
    return (
        <div className="featured-hotel-card">
            <div className="featured-hotel-image-container">
                {hotel.images.map((image) => (
                    <img key={image.id} src={`/images/${image.image_path}`} alt={hotel.name} className="featured-hotel-image" />
                ))}
            </div>
            <div className="featured-hotel-details">
                <h3 className="featured-hotel-name">{hotel.name}</h3>
                <p className="featured-hotel-price">${hotel.price} per day</p>
            </div>
        </div>
    );
};

export default FeaturedHotelCard;
