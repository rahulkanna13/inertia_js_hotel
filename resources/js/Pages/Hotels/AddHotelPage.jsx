import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const AddHotelPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    // Include other form fields
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    Inertia.post('/create-hotel', formData, {
      onSuccess: () => {
        // Handle success, e.g., show a success message or redirect
        console.log('Hotel added successfully');
      },
      onError: (errors) => {
        // Handle error, e.g., display validation errors
        console.error('Error adding hotel:', errors);
      },
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Add Hotel</h2>
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
        
        <button type="submit">Add Hotel</button>
      </form>
    </div>
  );
};

export default AddHotelPage;
