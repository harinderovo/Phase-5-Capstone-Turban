import React, { useState, useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom';
import { ErrorContext } from '../context/ErrorContext';
import { UserContext } from '../context/UserContext';
import emailjs from 'emailjs-com'

function BookingsForm() {
    
    const REACT_APP_EMAILJS_USER_ID='4HAoX6sFoqqtZ7WTv'
    const REACT_APP_EMAILJS_SERVICE_ID='service_ji5ckjs'
    const REACT_APP_EMAILJS_TEMPLATE_ID='template_lkzl38g'
    
    const history = useHistory();
    const [formErrors, setFormErrors] = useState({})
    const {user, setUser} = useContext(UserContext)
    const {setErrors} = useContext(ErrorContext)
    
    const [newForm, setNewForm] = useState({
        name: "",
        phone_number: "",
        email: "",
        location: "",
        datetime: "",
        event_id: ''
        // user_id: ,
    })
    
    
    // function sendEmail(e) {
    //     emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
    //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    //     // e.target,
    //     process.env.REACT_APP_EMAILJS_USER_ID
    //   )
    //     .then((response) => console.log("Email sent!", response.status))
    //     .catch((error) => console.log("Error sending email:", error));
    // } 
    
    const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
            const newF = {...newForm, event_id: newForm.event_id}
            console.log(newF);
            fetch("/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newF)
            })
            .then(response => {
                if (response.status === 201) {
                    response.json().then (newBooking => {
                        setUser(currentUser => ({...currentUser, bookings: [...currentUser.bookings, newBooking]}))
                    }) .then(() => history.push("/"))
                } else {
                    response.json().then((err) => setErrors(err.errors));
                }
            })
            emailjs
        .sendForm(
            REACT_APP_EMAILJS_SERVICE_ID,
            REACT_APP_EMAILJS_TEMPLATE_ID,
            e.target,
            REACT_APP_EMAILJS_USER_ID
            )
            .then((response) => console.log("Email sent!", response.status))
            .catch((error) => console.log("Error sending email:", error));
        }
        
        return (
            <div className='ui segment'>
            <form onSubmit={handleSubmit} className='ui form' autoComplete="off">
            <div className='inline fields'>
            {/* <input value={newForm.name} onChange={handleChange} type="text" name="name" placeholder="Name" required/> <br />
            <input value={newForm.phone_number} onChange={handleChange} type="tel" name="phone_number" placeholder="Phone Number" pattern="^(?:\+?\d{1,3}\s*-?)?\(?(?:\d{3})?\)?[- ]?\d{3}[- ]?\d{4}$" required/> <br /> */}
            {/* <input value={newForm.price} onChange={handleChange} type="number" name="price" placeholder="Price" /> <br /> */}
            {/* <input value={newForm.email} onChange={handleChange} type="text" name="email" placeholder="Email" required/> <br /> */}
            <input value={newForm.event_id} onChange={handleChange} type="text" name="event_id" placeholder="Event Information" required/> <br />
            <input value={newForm.location} onChange={handleChange} type="text" name="location" placeholder="Location" required/> <br />
            <input value={newForm.datetime} onChange={handleChange} type="datetime-local" name="datetime" placeholder="Date/Time" required/> <br />
            {/* {eventList()} */}
            <input type="submit" value="Add Booking"/> <br />
            {/* <form>
            <label for="phone">Enter your phone number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
        </form> */}
        </div>
        </form>
        </div>
        )
    }
    
    export default BookingsForm;


    // TO SEND A DEFAULT EMAIL, MAKE DYNAMIC
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //     to: 'recipient@example.com',