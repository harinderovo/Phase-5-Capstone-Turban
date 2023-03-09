import React, { useState, useEffect, useContext } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import BookingControl from './BookingControl';

function HomePage() {
  const location = useLocation();
  const { id } = useParams();
  const {handleUpdate, user, setUser} = useContext(UserContext)

//   const handleEditBooking = (id) => {
//     const newDateTime = window.prompt('Enter a new date/time for the booking:');
//     const updatedBookings = user.bookings.map((booking) => {
//       if (booking.id === id) {
//         return Object.assign({}, booking, { datetime: newDateTime });
//       } else {
//         return booking;
//       }
//     });
//     setUser(Object.assign({}, user, { bookings: updatedBookings }));
//   };

// function handleUpdate(e, userUpdateData) {
//     e.preventDefault();
//     // setIsLoading(true);
//     fetch("/update-profile", {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userUpdateData),
//     }).then((r) => {
//     //   setIsLoading(false);
//       if (r.status === 202) {
//         alert("Account update is successful")
//         r.json().then(userUpdate => setUser(userUpdate))
//         .then(() => history.push("/"))
//       } else {
//         r.json().then((err) => setErrors(err.errors));
//       }
//     });
//   }

//   const handleDelete = (bookingId) => {
//     fetch(`/bookings/${bookingId}`, {
//         method: 'DELETE',
//     })
//     .then(response => {
//         if (response.status === 204) {
//             setUser(user => {
//                 return {...user, bookings: user.bookings.filter(b => b.id !== bookingId)}
//             });
//         }
//     })
// }

return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <h3>Upcoming Bookings are Below</h3>
      {user.bookings && user.bookings.map((booking) => (
        <div key={booking.id}>
          <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
          <span className='card-detail'>Location: {booking.location} </span> <br />
          <span className='card-detail'>Price: {booking.price} </span> <br />
          <span className='card-detail'>Status: {booking.status} </span> <br />
          <BookingControl booking={booking} setUser={setUser}/>
          <hr />
        </div>
      ))}
      {user.bookings_requests && user.bookings_requests.map(booking => {
        return (
          <div key={booking.id}>
            <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
            <span className='card-detail'>Location: {booking.location} </span> <br />
            <span className='card-detail'>Price: {booking.price} </span> <br />
            <span className='card-detail'>Status: {booking.status} </span> <br />
          </div>
        );
      })}
    </div>
  );
}

//   return (
//     <div>
//       <h1>Welcome, {user.name}</h1>
//       <h3>Upcoming Bookings are Below</h3>
//       { !user.email[8] ? user.bookings.map((booking) => (
//         <div key={booking.id}>
//           <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
//           <span className='card-detail'>Location: {booking.location} </span> <br />
//           <span className='card-detail'>Price: {booking.price} </span> <br />
//           <span className='card-detail'>Status: {booking.status} </span> <br />
//           <BookingControl booking={booking} setUser={setUser}/>
//           {/* { showForm ? null : <button onClick={() => setShowForm(current => !current)}>Edit</button>}
//           <button onClick={() => handleDelete(booking.id)}>Delete</button>
//           { showForm ? <EditBookingForm {...booking} /> : null} */}
//           <hr />
//         </div>
//       )): user.bookings_requests.map(booking => {
//         <div key={booking.id}>
//           <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
//           <span className='card-detail'>Location: {booking.location} </span> <br />
//           <span className='card-detail'>Price: {booking.price} </span> <br />
//           <span className='card-detail'>Status: {booking.status} </span> <br />
//           </div>
//       })} 
//     </div>
//   );
// }

export default HomePage;