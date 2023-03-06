import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function HomePage({ user, setUser }) {
  const location = useLocation();
  const { id } = useParams();

  const handleEditBooking = (id) => {
    const newDateTime = window.prompt('Enter a new date/time for the booking:');
    const updatedBookings = user.bookings.map((booking) => {
      if (booking.id === id) {
        return Object.assign({}, booking, { datetime: newDateTime });
      } else {
        return booking;
      }
    });
    setUser(Object.assign({}, user, { bookings: updatedBookings }));
  };

  const handleDeleteBooking = (id) => {
    const updatedBookings = user.bookings.filter((booking) => booking.id !== id);
    setUser(Object.assign({}, user, { bookings: updatedBookings }));
  };

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <h3>Upcoming Bookings are Below</h3>
      {user.bookings.map((booking) => (
        <div key={booking.id}>
          <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
          <span className='card-detail'>Location: {booking.location} </span> <br />
          <span className='card-detail'>Price: {booking.price} </span> <br />
          <span className='card-detail'>Status: {booking.status} </span> <br />
          <button onClick={() => handleEditBooking(booking.id)}>Edit</button>
          <button onClick={() => handleDeleteBooking(booking.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default HomePage;