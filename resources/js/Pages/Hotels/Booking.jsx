// resources/js/Pages/hotels/Booking.vue

import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Booking = ({ hotel }) => {
  const [formData, setFormData] = useState({
    // Define form fields (e.g., name, email, check-in/out dates, etc.)
  });

  const handleBooking = async () => {
    await Inertia.post(`/hotels/${hotel.id}/book`, formData);
    // Handle success or error
  };

  return (
    <div>
      <h1>Book {hotel.name}</h1>
      {/* Create a form with input fields for booking information */}
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default Booking;
