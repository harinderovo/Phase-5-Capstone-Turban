import React, { useState, useEffect } from 'react'
import Product from './Product'

function ProductsList() {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch("/products")
        .then (res => res.json())
        .then (data => setProducts(data))
    }, [])
    // console.log(products)
    
    const mappedProducts = products.map(product => <Product product={product} key={product.id} />)
    return (
        <div className="ProductsList">
        <ul className="Products">
        {mappedProducts} 
        </ul>
        </div>
        )
    }
    
    export default ProductsList