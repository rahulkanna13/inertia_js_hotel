import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const EditHotelPage = ({ hotel }) => {
  const [formData, setFormData] = useState({
    name: hotel.name,
    description: hotel.description,
    // Include other form fields
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    Inertia.put(`/update-hotel/${hotel.id}`, formData, {
      onSuccess: () => {
        // Handle success, e.g., show a success message or redirect
        console.log('Hotel updated successfully');
      },
      onError: (errors) => {
        // Handle error, e.g., display validation errors
        console.error('Error updating hotel:', errors);
      },
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Edit Hotel</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>

        {/* Add more fields as needed */}
        
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditHotelPage;
