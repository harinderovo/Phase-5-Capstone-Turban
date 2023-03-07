import React, { useState, useEffect } from 'react'

const API = 'http://localhost:4001/images'

function Gallery() {

    const [renderImages, setRenderImages] = useState([])
    
        useEffect(() => {
        fetch(API)
        .then(res => res.json())
        .then(data => setRenderImages(data))
    }, [])
    console.log(renderImages)
    
    return (
        <div>
            Gallery
            <ul>
                {renderImages && renderImages.map(image => (
                    <li key={image.id} style={{listStyle: "none"}}>
                        <img style={{width: "2em", height: "2em"}}src={image.url} alt={image.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
    }
    
    export default Gallery
    
    
    
    
    
    
    
    // import React from 'react';
    // import data from './db.json';
    
    // function Gallery() {
    //   return (
    //     <div>
    //       {data.images.map(image => (
    //         <img key={image.id} src={image.url} alt="" />
    //       ))}
    //     </div>
    //   );
    // }
    
    // export default Gallery;