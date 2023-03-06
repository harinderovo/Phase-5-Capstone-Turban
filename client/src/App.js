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
import Gallery from './components/Gallery';
import About from './components/About';
import HomePage from './components/HomePage';
import UserUpdate from './components/UserUpdate';
import UserDelete from './components/UserDelete'
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


          <Route exact path="/bookings">
            {bookingsList}
          </Route>

          <Route exact path="/users">
            <Users />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/gallery">
            <Gallery />
          </Route>

          <Route exact path="/update">
            <UserUpdate />
          </Route>

          {/* <Route exact path="/delete">
            <UserDelete />
          </Route> */}

          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/*">
            <ErrorPage />
          </Route> </>
        ) : (
          <>
          <Route exact path="/login">
          {(toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup setToggleAuth={setToggleAuth}/>)}
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/gallery">
            <Gallery />
          </Route>

          <Route exact path="/*">
            <ErrorPage />
          </Route> </>
        )}
      </Switch>
    </div>
  );
}

export default App;
