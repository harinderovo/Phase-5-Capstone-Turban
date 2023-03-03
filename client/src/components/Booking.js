import React, { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function Booking({API, booking, setBookings, name, phone_number, email, password, image, bookingId, user, setUser}) {
    const location = useLocation();
    const {id} = useParams();
    const [newBookings, setNewBookings] = useState("")
    const [showImage, setShowImage] = useState(true)
    const [updatedBooking, setUpdatedBooking] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(newBookings)
        try {
     
        const response = await fetch(`/bookings/${booking.id}`, {
          method: "PATCH",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: newBookings,
        }),
    })
  
        if (response.status === 202) {
            const updatedBooking = await response.json();
            setUser(currentUser => ({...currentUser, bookings: currentUser.bookings.map(singleBooking => singleBooking.id === updatedBooking.id ? updatedBooking : singleBooking)}));
            setNewBookings("")
        } else {
            throw new Error("Failed to update user");
        }
      } catch (error) {
        console.log(error);
      }
    };
            
            const handleDelete = () => {
                fetch(`/bookings/${booking.id}`, {
                    method: 'DELETE',
                })
                .then(response => {
                    if (response.ok) {
                        setUser(user => {
                            return {...user, bookings: user.bookings.filter(b => b.id !== booking.id)}
                        });
                    }
                })
            }
            console.log(booking)
            
            const conditionalClass = location.pathname === "/" ? "Booking list" : "Booking individual"
            return (
                <div id={id}>
        <div>
            
                <Link to ={`/bookings/${id}`}></Link>
                <img src = {image} alt = "booking" /> <br />
           

            {/* <h4>{booking}</h4> */}
            <img src={image} alt="Turban image" /> <br />
            <span className='card-detail'>Name: {user.name} </span> <br />
            <span className='card-detail'>PhoneNumber: {user.phone_number} </span> <br />
            <span className='card-detail'>Email: {booking.email} </span> <br />
            <span className='card-detail'>Event Information: {booking.event_id} </span> <br />
            <span className='card-detail'>Date/Time: {booking.datetime} </span> <br />
                <form onSubmit={handleSubmit} >
                <input className="edit-bookings-form" autocomplete="off" value={newBookings} onChange={(e) => setNewBookings(e.target.value)} type="text" name="new booking" placeholder="Enter New Booking" /> <br />
                <button className="edit-booking-button">Edit Booking</button>
                </form>
                <button onClick={handleDelete} className="delete-booking-button">Delete 🗑</button>
            
        </div>
    </div>
  )
}

export default Booking;