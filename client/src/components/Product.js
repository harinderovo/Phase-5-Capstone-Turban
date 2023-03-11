import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext';


function Product({product}) {
    const location = useLocation(); 
    const {id} = useParams()
    const [prod, setProd] = useState(null)
    const [showImage, setShowImage] = useState(true)
    const { addToCart, cartItems } = useContext(ShopContext)

    
    useEffect(() => {
        if (!product) {
            fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(prodObj => setProd(prodObj))
            .catch(err => alert(err))
        }
    }, [product, id])
    
    const finalProd = !prod ? product : prod 
    
    if (!finalProd) {
        return <h3>Loading...</h3>
    }
    
    const conditionalClass = location.pathname === "/products" ? "Products list" : "Product individual"
    return (
        <div className={conditionalClass} id={finalProd.id}>
        <div>
        {location.pathname === "/products" ? (<>
            <Link to={`/products/${finalProd.id}`}><h4>{finalProd.name}</h4></Link>
            <img style={{width: "18em", height: "22em"}} src= {finalProd.image_url} alt={finalProd.name} /> <br />
            </>) : ( <>
                <img src={finalProd.image} alt={finalProd.product} /> <br />
                <span className='card-detail'>Image: {finalProd.image_url} </span> <br />
                <span className='card-detail'>Name: {finalProd.name} </span> <br />
                <span className='card-detail'>Price: {finalProd.price} </span> <br />
                <button className="add-to-cart-button" onClick={() => addToCart(product.id)}>Add To Cart {cartItems[product.id] > 0 && <> ({cartItems[product.id]})</>}</button>

                </>)}
                </div>
                </div>
                )
            }
            
            export default Product;