import React, { useState, useContext } from 'react'
import {ShopContext} from '../context/ShopContext';


function CartItem({data}) {
    const [quantity, setQuantity] = useState(1);
    const { cart, setCart } = useContext(ShopContext)
    // const { cartItems, addToCart, removeFromCart, updateCartItemCount, product } = useContext(ShopContext)

    const decrement = () => {
        if (data.quantity - quantity > 0) {
            setCart(cart.map(cartItem => cartItem.id === data.id ? {...cartItem, quantity: cartItem.quantity - quantity} : cartItem))
        } else {
            setCart(cart.filter(cartItem => cartItem.id !== data.id))
        }
        // setQuantity(quantity + 1);
      };
    
      const increment = () => {
        setCart(cart.map(cartItem => cartItem.id === data.id ? {...cartItem, quantity: cartItem.quantity + parseInt(quantity)} : cartItem))
      };

  return (
    <div className="cartItem">
        <img style={{width: "5em", height: "2em"}} src={data.image_url} alt={data.name} /> 
        <div className="description">
            <p>
                <b>{data.name}</b>
            </p>
            <p>${data.price}({data.quantity})</p>
            {/* <div className="countHandler">
                <button onClick={() => removeFromCart(product.id)}> - </button>
                <input value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}/>
                <button onClick={() => addToCart(product.id)}> + </button>
            </div> */}
            <div className="counter">
                <button onClick={decrement}> - </button>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} /> 
                <button onClick={increment}> + </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem