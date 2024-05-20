// resources/js/Pages/hotels/Show.vue

import React from 'react';

const Show = ({ hotel }) => {
  return (
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.address}</p>
      <p>Price: ${hotel.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Show;
