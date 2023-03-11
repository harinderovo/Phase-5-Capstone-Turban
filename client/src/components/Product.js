import React, { useState, useEffect } from 'react'
import { useLocation, useParams, Link } from 'react-router-dom';

function Product({product}) {
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
            </>) : ( <>
                <img src={finalProd.image} alt={finalProd.product} /> <br />
                <span className='card-detail'>Image: {finalProd.image_url} </span> <br />
                <span className='card-detail'>Name: {finalProd.name} </span> <br />
                <span className='card-detail'>Price: {finalProd.price} </span> <br />
                </>)}
                </div>
                </div>
                )
            }
            
            export default Product;