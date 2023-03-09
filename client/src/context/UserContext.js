import React, { useState, useEffect, createContext } from 'react'
import { useHistory } from 'react-router-dom';

const UserContext = createContext()
const UserProvider = ({children}) => {
    
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const history = useHistory()
    
    useEffect(() => {
        fetch("/current_user")
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((user) => {
                    setUser(user);
                });
            }
        })
    }, []);
    
    
    function handleLogin(e, userLoginData) {
        e.preventDefault();
        // setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userLoginData),
        }).then((r) => {
            //   setIsLoading(false);
            if (r.status === 200) {
                alert("Logged in successfully")
                r.json().then((user) => setUser(user))
                .then(() => history.push("/"))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    function handleSignup(e, userSignupData) {
        e.preventDefault();
        // setIsLoading(true);
        fetch("/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userSignupData),
        }).then((r) => {
            //   setIsLoading(false);
            if (r.status === 201) {
                alert("Sign up is successful")
                r.json().then(userObj => setUser(userObj))
                .then(() => history.push("/"))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    function handleUpdate(e, userUpdateData) {
        e.preventDefault();
        // setIsLoading(true);
        fetch("/update-profile", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userUpdateData),
        }).then((r) => {
            //   setIsLoading(false);
            if (r.status === 202) {
                alert("Account update is successful")
                r.json().then(userUpdate => setUser(userUpdate))
                .then(() => history.push("/"))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    function handleDelete(e, userDeleteData) {
        e.preventDefault();
        // setIsLoading(true);
        fetch("/delete-profile", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDeleteData),
        }).then((r) => {
            //   setIsLoading(false);
            if (r.status === 204) {
                alert("Account deleted successfully")
                r.json().then(userDelete => setUser(userDelete))
                .then(() => history.push("/"))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
      function handleDeleteUser () {
        fetch(`/users/${user.id}`, {
          method: "DELETE",
        })
          .then((r) => {
            if (r.status === 204) {
              setUser(null)
              alert("You have Successfully been deleted")
              r.json().then(userUpdate => setUser(userUpdate))
            .then(() => history.push("/"))
            } else {
              r.json()
              .then(err => alert(err))
            }
          })
        }
    
    
    function handleLogout () {
        fetch("/logout", {
            method: "DELETE",
        })
        .then((r) => {
            if (r.status === 204) {
                setUser(null)
                alert("Successfully logged out!")
            } else {
                r.json()
                .then(err => alert(err))
            }
        })
    }
    
    return (
        <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, handleSignup, handleUpdate, handleDeleteUser}}>
        {children} 
        </UserContext.Provider>
        )
    }
    
    export { UserContext, UserProvider } 