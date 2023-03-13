import React, { createContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';

const ShopContext = createContext(null);

function ShopContextProvider({children}) {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    
    
    const getDefaultCart = (products) => {
        let cart = {}
        for (let i = 1; i < products.length + 1; i++) {
            // cart[1] = 0
            cart[products[i].id] = 0
        }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart(products))

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cart) {
            if (cart[item] > 0 ) {
                let itemInfo = products.find((product) => product.id === Number(item));
                totalAmount += cart[item] * itemInfo.price 
            }
        }
        return totalAmount;
    }

    const addToCart = (item) => {
        setCart((prev) => {
            const itemFound = prev.find(cartItem => item.id === cartItem.id)
            if (itemFound) {
                return prev.map(cartItem => cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + item.quantity} : cartItem)
            } else {
                return [...prev, item]
            }
        })
    };

    // const subtractFromCart = (item) => {
    //     setCart((prev) => {...prev, [itemId]: prev[item] - 1})
    // };

    // const updateCartItemCount = (newAmount, item) => {
    //     setCart((prev) => ({...prev, [itemId]: newAmount}))
    // }

    const contextValue = {cart, addToCart, getTotalCartAmount, products};
    
    return (
        <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
        )
    }
    
    export { ShopContext, ShopContextProvider } 








    // const {products, user} = useContext(ShopContext)