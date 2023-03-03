import Login from "./Login"
import Signup from "./Signup"
import HomePage from "./HomePage";
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';

const Account = () => {
  const [toggleAuth, setToggleAuth] = useState(false)
  const {user, setUser} = useContext(UserContext)
//   console.log(user)
//   if (!user) {
//     return (
//       toggleAuth && <Login setToggleAuth={setToggleAuth}/>) || (<Signup setToggleAuth={setToggleAuth}/>)
//   }
  return (
    <div>
        {/* <HomePage user={user} setUser={setUser}/> */}
    </div>
  )
}
export default Account;