import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import GuestLayout from '@/Layouts/GuestLayout';
import './AddHotelPage.css';

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
    <GuestLayout>
      <div className="container">
        <div className="card">
          <h2>Add Hotel</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="name" className="input-label">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="description" className="input-label">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="input-field"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Add more fields as needed */}
            
            <button type="submit" className="btn-submit">Add Hotel</button>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
};

export default AddHotelPage;
