import React, { useState, useEffect } from 'react'
import Product from './Product'

function ProductsList() {
    
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        fetch("/products")
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])
    // console.log(products)

    const addToCart = (product) => {
        setCart([...cart, product]);
    };
    
    const mappedProducts = products.map(product => (
        <div key={product.id}>
            <h2>{product.name}</h2>
            <h4>{product.price}</h4>
            <img style={{width: "18em", height: "22em"}}src={product.image_url} />
            <Product product={product} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    ));
    return (
        <div className="ProductsList">
        <ul className="Products">
        {mappedProducts} 
        </ul>
        </div>
        )
    }
    
    export default ProductsList