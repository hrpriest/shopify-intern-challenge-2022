import React, { useState } from 'react'
import LikeButton from './LikeButton'
import '../stylesheets/Post.css'

const Post = ({ nasaData }) => {
    const { date, explanation, media_type, title, url, copyright } = nasaData
    const [descriptionVisible, setDescriptionVisible] = useState(false)

    return (
        <article className='post'>
            <h1 className='post-title'>{title}</h1>
            <h2 className='post-date'>{date}</h2>
            {media_type === 'video' ?
                <iframe src={url} className='post-video' title={title} /> :
                <img src={url} className='post-image' alt={title}></img>
            }
            <div>
                <LikeButton className='post-like-button' />
                <button className='post-share-button' onClick={() => navigator.clipboard.writeText(url)}>share</button>
                <button className='post-description-button' onClick={() => setDescriptionVisible(!descriptionVisible)}>Description</button>
            </div>
            <div>
                {copyright ? <p>Copyright: {copyright}</p> : <></>}
                {descriptionVisible ? <p>{explanation}</p> : <></>}
            </div>
        </article>
    )
}

export default Post
