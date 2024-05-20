// resources/js/Pages/hotels/Index.vue

import React from 'react';

const Index = ({ hotels }) => {
  return (
    <div>
      <h1>Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <a href={`/hotels/${hotel.id}`}>{hotel.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
