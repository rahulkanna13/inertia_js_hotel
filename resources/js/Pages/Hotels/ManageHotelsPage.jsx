// resources/js/pages/ManageHotels/ManageHotelsPage.jsx

import React from 'react';
// import { Link } from '@inertiajs/react';
import { InertiaLink } from '@inertiajs/inertia-react';




const ManageHotelsPage = ({ hotels }) => {
    const handleDelete = async (hotelId) => {
        if (confirm('Are you sure you want to delete this hotel?')) {
          // You can customize the confirmation dialog as needed
          // Perform the deletion logic here
          // For example, make an Axios DELETE request to your backend
          // await axios.delete(`/delete-hotel/${hotelId}`);
          // After deletion, you might want to refresh the list of hotels
          // You can either re-fetch the data or use Inertia.reload()
          // Inertia.reload();
        }
      }


  return (
    <div>
      <h1>Manage Hotels</h1>
     
      <InertiaLink href={`/add-hotel`}>Add New Hotel</InertiaLink>

      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <h2>{hotel.id}</h2>
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <p>Price: ${hotel.price}</p>
            <div>
              <InertiaLink href={`/edit-hotel/${hotel.id}`}>Edit</InertiaLink>
              <InertiaLink
                href={route('delete-hotel', { id: hotel.id })}
                method="delete"
                as="button"
                onClick={() => handleDelete(hotel.id)}
              >
                Delete
              </InertiaLink>


            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageHotelsPage;
