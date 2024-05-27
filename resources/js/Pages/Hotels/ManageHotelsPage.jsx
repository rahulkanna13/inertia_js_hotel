// resources/js/pages/ManageHotels/ManageHotelsPage.jsx

import React from 'react';
import { InertiaLink, Inertia } from '@inertiajs/inertia-react';
import axios from 'axios';
import HotelCard from '../../components/HotelCard';
import './ManageHotelsPage.css';
import GuestLayout from '@/Layouts/GuestLayout';

const ManageHotelsPage = ({ hotels }) => {
  const handleDelete = async (hotelId) => {
    if (confirm('Are you sure you want to delete this hotel?')) {
      try {
        await axios.delete(`/delete-hotel/${hotelId}`);
        Inertia.reload();
      } catch (error) {
        console.error('Failed to delete the hotel:', error);
      }
    }
  };

  return (
    <GuestLayout>
    <div className="manage-hotels">
      <h1>Manage Hotels</h1>
      <InertiaLink href="/add-hotel" className="btn-add">Add New Hotel</InertiaLink>
      <div className="hotel-list">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onDelete={handleDelete} />
        ))}
      </div>
    </div>
    </GuestLayout>
  );
};

export default ManageHotelsPage;
