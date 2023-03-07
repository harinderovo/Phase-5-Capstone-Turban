import React, {useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';
import { UserContext } from '../context/UserContext';

function EditBookingForm({id, name, phone_number, location, datetime, event_id, setShowForm}) {
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({})
    const {user, setUser} = useContext(UserContext)
    const {setErrors} = useContext(ErrorContext)

    const [editNewForm, setEditNewForm] = useState({
        name: name,
        phone_number: phone_number,
        location: location,
        datetime: datetime,
        event_id: event_id
        //change event^
    })

    const handleChange = (e) => {
        setEditNewForm({...editNewForm, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(newF);
        fetch(`/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editNewForm)
        })
        .then(response => {
            if (response.status === 202) {
                response.json().then (editedBooking => {
                    setUser(currentUser => ({...currentUser, bookings: currentUser.bookings.map(booking => booking.id === editedBooking.id ? editedBooking : booking)}))
                }) .then(() => setShowForm(false))
            } else {
                response.json().then((err) => setErrors(err.errors));
              }
          })
        }

  return (
    <div className='ui segment'>
        <form onSubmit={handleSubmit} className='ui form' autoComplete="off">
            <div className='inline fields'>
                <input value={editNewForm.event_id} onChange={handleChange} type="text" name="event_id" placeholder="Event Information" required/> <br />
                <input value={editNewForm.name} onChange={handleChange} type="text" name="name" placeholder="Name" required/> <br />
                <input value={editNewForm.phone_number} onChange={handleChange} type="text" name="phone_number" placeholder="Phone Number" required/> <br />
                <input value={editNewForm.location} onChange={handleChange} type="text" name="location" placeholder="Location" required/> <br />
                <input value={editNewForm.datetime} onChange={handleChange} type="datetime-local" name="datetime" placeholder="Date/Time" required/> <br />
                {/* {eventList()} */}
                <input type="submit" value="Update Booking"/> <br />
            </div>
        </form>
    </div>
  )
}

export default EditBookingForm