import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { ShoppingCart } from 'phosphor-react';

function NavBar() {

    const {handleLogout, user} = useContext(UserContext)
    console.log(user)
  return (
    <div className='navbar'>
        <div className="links">
            { !user ? ( 
                <>
              <div className="nav-wrapper"><Link to="/">Home</Link></div>
              <div className="nav-wrapper"><Link to="/gallery">Gallery</Link></div>
              <div className="nav-wrapper"><Link to="/About">About</Link></div>
              <div className="nav-wrapper"><Link to="/login">Login</Link></div>
              </> ) : (
                <>
                <div className="nav-wrapper"><Link to="/">Home</Link></div>
                <div className="nav-wrapper"><Link to="/bookings/new">Contact</Link></div>
                <div className="nav-wrapper"><Link to="/gallery">Gallery</Link></div>
                <div className="nav-wrapper"><Link to="/About">About</Link></div>
                <div className="nav-wrapper"><Link to="/update">Account Updates</Link></div>
                <div className="nav-wrapper"><Link to="/products">Shop</Link></div>
                <div className="nav-wrapper"><Link to="/cart"> <ShoppingCart size={32}/> </Link></div>
                {/* <div className="nav-wrapper"><Link to="/delete-profile">Delete Account</Link></div> */}
                {/* <div className="nav-wrapper"><Link to="/contact">Contact</Link></div> */}
                <button onClick={handleLogout}>Logout</button>
            </>)}
        </div>
    </div>
  )
}

export default NavBar;