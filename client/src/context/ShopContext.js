import React, { createContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';

const ShopContext = createContext(null);

function ShopContextProvider({children}) {
    const [products, setProducts] = useState([])
    
    
    const getDefaultCart = (products) => {
        let cart = {}
        for (let i = 1; i < products.length; i++) {
            // cart[1] = 0
            cart[products[i].id] = 0
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart(products))

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0 ) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price 
            }
        }
        return totalAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, products};
    
    return (
        <ShopContext.Provider value={{cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, products}}>{children}</ShopContext.Provider>
        )
    }
    
    export { ShopContext, ShopContextProvider } 








    // const {products, user} = useContext(ShopContext)