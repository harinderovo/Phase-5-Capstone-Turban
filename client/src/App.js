import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Account from './components/Account';
import Booking from './components/Booking';
import BookingsForm from './components/BookingsForm';
import ErrorPage from './components/ErrorPage';
import Users from './components/Users';
import Signup from "./components/Signup"
import { UserContext } from './context/UserContext';

const App = () =>  {

  const API = "localhost:3000/bookings"

  const [bookings, setBookings] = useState([])
  const {user, setUser} = useContext(UserContext)
  const [toggleAuth, setToggleAuth] = useState(false)

  const bookingsList = user?.bookings.map(booking => 
    <Booking key={booking.id} booking={booking} bookingId={booking.id} API={API} setBookings={setBookings} user={user} setUser={setUser} />)

  return (
    <div className="App">
      <NavBar />
      <Switch>
        { user ? (
          <>
          <Route exact path="/bookings/new">
          <BookingsForm bookings={bookings} setBookings={setBookings} API={API} setUser={setUser} />
          </Route>

          <Route exact path="/">
            {bookingsList}
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/account">
            <Account />
          </Route>

          <Route path="/*">
            <ErrorPage />
          </Route> </>
        ) : (
          <>
          <Route exact path="/login">
          {(toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup setToggleAuth={setToggleAuth}/>)}
          </Route>

          <Route path="/*">
            <ErrorPage />
          </Route> </>
        )}
      </Switch>
    </div>
  );
}

export default App;
