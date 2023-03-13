import React, { useState, useEffect, useContext } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';
import {ShopContext} from '../context/ShopContext';


function Product({product}) {
    const {addToCart} = useContext(ShopContext)
    const location = useLocation(); 
    const {id} = useParams()
    const [prod, setProd] = useState(null)
    const [showImage, setShowImage] = useState(true)
    
    useEffect(() => {
        if (!product) {
            fetch(`http://localhost:3000/products/${id}`)
            .then(res => res.json())
            .then(prodObj => setProd(prodObj))
            .catch(err => alert(err))
        }
    }, [product, id])

    
    const finalProd = !prod ? product : prod 
    
    const handleAddToCart = () => {
            const newP = {...finalProd, quantity: 1}
            addToCart(newP)
        }

    if (!finalProd) {
        return <h3>Loading...</h3>
    }
    
    const conditionalClass = location.pathname === "/products" ? "Products list" : "Product individual"
    return (
        <div className={conditionalClass} id={finalProd.id}>
        <div>
        {location.pathname === "/products" ? (<>
            <Link to={`/products/${finalProd.id}`}><h4>{finalProd.product}</h4></Link>
            <img src= {finalProd.image} alt={finalProd.product} /> <br />
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>

            </>) : ( <>
                <img src={finalProd.image} alt={finalProd.product} /> <br />
                <span className='card-detail'>Image: {finalProd.image_url} </span> <br />
                <span className='card-detail'>Name: {finalProd.name} </span> <br />
                <span className='card-detail'>Price: {finalProd.price} </span> <br />
                <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>

                </>)}
                </div>
                </div>
                )
            }
            
            export default Product;