import React, { useState } from 'react'
import LikeButton from './LikeButton'
import '../stylesheets/Post.css'

const Post = () => {
    const [ descriptionVisible, setDescriptionVisible ] = useState(false)
    const imageSrc = "https://api.nasa.gov/assets/img/general/apod.jpg"
    const description = "hello there"


    return (
        <div className='post'>
            <h1 className='post-title'>Title</h1>
            <h2 className='post-date'>Date</h2>
            <img className='post-image' src={imageSrc} alt="Space"></img>
            <div>
                <LikeButton className='post-like-button'/>  
                <button className='post-share-button' onClick={() => navigator.clipboard.writeText(imageSrc)}>share</button>
                <button className='post-description-button' onClick={() => setDescriptionVisible(!descriptionVisible)}>Description</button>
            </div>
                {(descriptionVisible ? <p>{description}</p> : <p></p>)}
        </div>
    )
}


export default Post