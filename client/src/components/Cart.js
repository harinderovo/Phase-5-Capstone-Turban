import React, { useContext } from 'react'
import ProductsList from './ProductsList'
import {ShopContext} from '../context/ShopContext';
import {UserContext} from '../context/UserContext';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom';
import { StyledInputEndDecorator } from '@mui/joy/Input/Input';
import { User } from 'phosphor-react';
import { ErrorContext } from '../context/ErrorContext';


function Cart() {
    const { cart, setCart } = useContext(ShopContext)
    const {setUser} = useContext(UserContext)
    const {setErrors} = useContext(ErrorContext)
    
    const history = useHistory();
    
    const getTotalCartAmount = (prodArray) => {
       return prodArray.reduce((acc, product) => acc + product.quantity * product.price ,0)
    }
    const totalAmount = getTotalCartAmount(cart)
    console.log(totalAmount)

    const handleCheckout = () => {
        if (cart.length !== 0 ) {
            fetch("/purchases", {
                method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({cart}),
        }).then((r) => {
            //   setIsLoading(false);
            if (r.status === 201) {
                alert("Purchase Successful")
                r.json().then((userPurchases) => {
                    setUser(currentUser => ({...currentUser, purchases: userPurchases}))
                    setCart([])
                })
                .then(() => history.push("/"))
            } else {
                alert("Purchase Not Successful")
                r.json().then((err) => setErrors(err.errors));
            }
        });
        } else {

        }
    }

  return (
    <div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {cart.map((product) => {
                // if (cartItems[products.id] !== 0) {
                    return <CartItem data={product}/> 
                // }
            })}
        </div>
        {totalAmount > 0 ? 
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => history.push("/products")}>Continue Shopping</button>
            <button onClick={handleCheckout}>Checkout</button>
        </div>
        : <><h1>Your Cart is Empty</h1><button onClick={() => history.push("/products")}>Shop Products</button></>}
    </div>
  )
}

export default Cart