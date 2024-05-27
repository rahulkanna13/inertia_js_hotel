// pages/HotelListPage.jsx
import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import HotelListItem from '@/Components/HotelListItem';

const HotelListPage = ({ hotels }) => {
  return (
    <GuestLayout>
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Hotel List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.data.map((hotel) => (
            <HotelListItem key={hotel.id} hotel={hotel} />
          ))}
        </div>

        {/* Render pagination links */}
        <div className="mt-6">
          {hotels.links.map((link, index) => (
            <span key={index} className="mr-2">
              {link.url ? (
                <a href={link.url} className="text-blue-500 hover:underline">{link.label}</a>
              ) : (
                <span className="text-gray-500">{link.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </GuestLayout>
  );
};

export default HotelListPage;
