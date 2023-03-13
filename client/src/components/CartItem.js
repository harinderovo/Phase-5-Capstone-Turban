import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext';


function CartItem({data}) {
    // const { cartItems, addToCart, removeFromCart, updateCartItemCount, product } = useContext(ShopContext)

  return (
    <div className="cartItem">
        <img src={data.image_url}/> 
        <div className="description">
            <p>
                <b>{data.name}</b>
            </p>
            <p>${data.price}</p>
            {/* <div className="countHandler">
                <button onClick={() => removeFromCart(product.id)}> - </button>
                <input value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}/>
                <button onClick={() => addToCart(product.id)}> + </button>
            </div> */}
        </div>
    </div>
  )
}

export default CartItem