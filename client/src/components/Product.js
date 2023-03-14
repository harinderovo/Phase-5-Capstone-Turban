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
        // if i dont have the product then fetch 
        if (!product) {
            fetch(`/products/${id}`)
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
            <Link to={`/products/${finalProd.id}`}><h4>{finalProd.name}</h4></Link>
            <img style={{width: "5em", height: "2em"}} src= {finalProd.image_url} alt={finalProd.name} /> <br />
            {/* <p> <b>{finalProd.name}</b> </p> <br /> */}
            {/* <p>{finalProd.price} </p> <br /> */}
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>

            </>) : ( <>
                <img src={finalProd.image_url} alt={finalProd.product} /> <br />
                <span className='card-detail'>{finalProd.name} </span> <br />
                <span className='card-detail'>Price: {finalProd.price} </span> <br />
                <button className="add-to-cart-button" onClick={handleAddToCart}>Add To Cart</button>

                </>)}
                </div>
                </div>
                )
            }
            
            export default Product;