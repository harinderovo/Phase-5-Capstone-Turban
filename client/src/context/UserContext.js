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
                alert("logged in successfully")
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
    <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, handleSignup}}>
        {children} 
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider } 