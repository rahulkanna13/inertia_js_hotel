// FeaturedHotels.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FeaturedHotels.css';
import FeaturedHotelCard from './FeaturedHotelCard'; // Import the FeaturedHotelCard component
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const FeaturedHotels = () => {
  const [featuredHotels, setFeaturedHotels] = useState([]);

  useEffect(() => {
    const fetchFeaturedHotels = async () => {
      try {
        const response = await axios.get('/api/featured-hotels');
        setFeaturedHotels(response.data.featuredHotels);
      } catch (error) {
        console.error('Error fetching featured hotels:', error);
      }
    };

    fetchFeaturedHotels();
  }, []);

     // Slick carousel settings
     const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // Add more breakpoints if needed
        ],
    };

  return (
    <div className="featured-hotels">
      <h2>Featured Hotels</h2>
    
      <Slider {...carouselSettings}>
                {featuredHotels.map((hotel) => (
                    <div key={hotel.id}>
                        <FeaturedHotelCard hotel={hotel} />
                    </div>
                ))}
     </Slider>
    </div>
  );
};

export default FeaturedHotels;
