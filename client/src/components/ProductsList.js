import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import Product from './Product'
import {ShopContext} from '../context/ShopContext';
import { ErrorContext } from '../context/ErrorContext';

function ProductsList() {
    
    const [products, setProducts] = useState([])
    const [user, setUser] = useState(null)
    const { addToCart, cartItems, cart } = useContext(ShopContext)
    // const cartItemAmount = cartItems[product.id]
    const history = useHistory();
    const {setErrors} = useContext(ErrorContext)
    const [newPurchase, setNewPurchase] = useState({
        name: "",
        price: "",
        quantity: "",
        product_id: ''
        // user_id: ,
    })
    
    useEffect(() => {
        fetch("/products")
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])


    // const addToCart = (product) => {
    //     setCart([...cart, product]);
    // };
    
    const mappedProducts = products.map(product => (
        // <div className="products" 
        //     key={product.id}>
        //     <img style={{width: "18em", height: "22em"}}src={product.image_url} />
        //     <div className="description">
        //         <p>
        //             <b>{product.name}</b>
        //         </p>
        //         <p>${product.price}</p>
        //     </div>
            <Product key={product.id} product={product} />
            /* <button className="add-to-cart-button" onClick={(e) => handleSubmit(e, product.id)}>Add To Cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}</button> */
        // </div>
    ));
    return (
        <div className="ProductsList">
            <div className="shopTitle">
                <h1>Turban Shop</h1>
            </div>
            <div className="Products">
                {mappedProducts} 
            </div>
        </div>
        )
    }
    
    export default ProductsList