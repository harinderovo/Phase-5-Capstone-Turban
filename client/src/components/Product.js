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
            
            
            
            
            
            // import React, { useState, useEffect } from 'react'
            // import { useLocation, useParams, Link } from 'react-router-dom';
            
            // function Character({singleCharacter}) {
            //     const location = useLocation(); 
            //     const {id} = useParams()
            //     const [char, setChar] = useState(null)
            //     const [showImage, setShowImage] = useState(true)
            
            //     useEffect(() => {
            //         if (!singleCharacter) {
            //             fetch(`http://localhost:3000/characters/${id}`)
            //             .then(res => res.json())
            //             .then(charObj => setChar(charObj))
            //             .catch(err => alert(err))
            //         }
            //     }, [singleCharacter, id])
            
            //     const finalChar = !char ? singleCharacter : char 
            
            //     if (!finalChar) {
            //         return <h3>Loading...</h3>
            //     }
            //     const conditionalClass = location.pathname === "/" ? "Character list" : "Character individual"
            //   return (
            //     <div className={conditionalClass} id={finalChar.id}> 
            //         <li>
            //             {location.pathname === "/" ? (<>
            //                 <Link to={`/characters/${finalChar.id}`}><h4>{finalChar.character}</h4></Link>
            //                 <img src= {finalChar.image} alt={finalChar.character} /> <br />
            //             </>) : ( <>
            
            //                 <h4>{finalChar.character}</h4>
            //                 <img src= {finalChar.image} alt={finalChar.character} /> <br />
            //                 <span className="card-detail">Nickname: {finalChar.nickname} </span> <br />
            //                 <span className="card-detail">HogwartsHouse: {finalChar.hogwartshouse} </span> <br />
            //                 <span className="card-detail">InterpretedBy: {finalChar.interpretedby} </span> <br />
            //                 <span className="card-detail">Spell: {finalChar.spell} </span> <br />
            //                 <span className="card-detail">Use: {finalChar.use} </span> <br />
            //                 <span className="card-detail">Child: {finalChar.child !== [] ? finalChar.child : "No Child"} </span> <br />
            //                 </>)}
            //         </li>
            //     </div>
            //   )
            // }
            
            // export default Character;