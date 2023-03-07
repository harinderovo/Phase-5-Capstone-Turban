import React, { useState } from 'react'
import EditBookingForm from './EditBookingForm'

function BookingControl({booking, setUser}) {

    const [showForm, setShowForm] = useState(false)

    const handleDelete = (bookingId) => {
        fetch(`/bookings/${bookingId}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.status === 204) {
                setUser(user => {
                    return {...user, bookings: user.bookings.filter(b => b.id !== bookingId)}
                });
            }
        })
    }

  return (
    <div>
         { showForm ? null : <button onClick={() => setShowForm(current => !current)}>Edit</button>}
          <button onClick={() => handleDelete(booking.id)}>Delete</button>
          { showForm ? <EditBookingForm {...booking} setShowForm={setShowForm}/> : null}
    </div>
  )
}

export default BookingControl