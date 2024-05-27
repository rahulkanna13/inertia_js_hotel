import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './EditHotelPage.css'; // Import the CSS file
import { useForm } from '@inertiajs/react';

const EditHotelPage = ({ hotel }) => {
  const { data, setData, put, errors, reset } = useForm({
    name: hotel.name,
    description: hotel.description,
    image: null, // New state for the image
  });



  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    if (formData.image) {
      data.append('image', data.image);
    }

    put(route('update-hotel',hotel.id), formData, {
      onSuccess: () => {
        console.log('Hotel updated successfully');
        reset(); 
      },
      onError: (errors) => {
        console.error('Error updating hotel:', errors);
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
  };

  const handleInputChange = (event) => {
    setData('image', event.target.files[0]);
  };

  return (
    <div className="edit-hotel-container">
      <h2 className="edit-hotel-heading">Edit Hotel</h2>
      <form className="edit-hotel-form" onSubmit={handleFormSubmit}>
        <label className="edit-hotel-label" htmlFor="name">Name:</label>
        <input
          className="edit-hotel-input"
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />

        <label className="edit-hotel-label" htmlFor="description">Description:</label>
        <textarea
          className="edit-hotel-textarea"
          id="description"
          name="description"
          value={data.description}
          onChange={handleInputChange}
        ></textarea>

        <label className="edit-hotel-label" htmlFor="image">Image:</label>
        <input
          className="edit-hotel-input"
          type="file"
          id="image"
          name="image"
          onChange={handleInputChange}
        />

        <button className="edit-hotel-button" type="submit">
          <FontAwesomeIcon icon={faSave} /> Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditHotelPage;
