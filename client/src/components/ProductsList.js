import React, { useState, useEffect, useContext } from 'react'
import Product from './Product'
import {ShopContext} from '../context/ShopContext';

function ProductsList() {
    
    const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([]);
    const { addToCart, cartItems } = useContext(ShopContext)
    // const cartItemAmount = cartItems[product.id]
    
    useEffect(() => {
        fetch("/products")
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])
    // console.log(products)

    // const addToCart = (product) => {
    //     setCart([...cart, product]);
    // };
    
    const mappedProducts = products.map(product => (
        <div className="products" 
            key={product.id}>
            <img style={{width: "18em", height: "22em"}}src={product.image_url} />
            <div className="description">
                <p>
                    <b>{product.name}</b>
                </p>
                <p>${product.price}</p>
            </div>
            <Product product={product} />
            <button className="add-to-cart-button" onClick={() => addToCart(product.id)}>Add To Cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}</button>
        </div>
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