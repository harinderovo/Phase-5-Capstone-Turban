import React, { useContext } from 'react'
import ProductsList from './ProductsList'
import {ShopContext} from '../context/ShopContext';
import CartItem from './CartItem';
import { useHistory } from 'react-router-dom';


function Cart() {
    const { cartItems, getTotalCartAmount, products } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const history = useHistory();

  return (
    <div className="cart">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {products.map((product) => {
                if (cartItems[products.id] !== 0) {
                    return <CartItem data={product}/> 
                }
            })}
        </div>
        {totalAmount > 0 ? 
        <div className="checkout">
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => history("/products")}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        : <h1>Your Cart is Empty</h1>}
    </div>
  )
}

export default Cart