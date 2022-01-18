import React, { useState } from 'react'
import LikeButton from './LikeButton'
import postStyles from '../stylesheets/Post.module.css'

const Post = ({ nasaData }) => {
    const { date, explanation, media_type, title, url, copyright } = nasaData
    const [descriptionVisible, setDescriptionVisible] = useState(false)

    return (
        <article className={postStyles.post}>
            <h3 className={postStyles.title}>{title}</h3>
            <h3 className={postStyles.date}>{date}</h3>
            {media_type === 'video' ?
                <iframe src={url} className={postStyles.video} title={title} /> :
                <img src={url} className={postStyles.image} alt={title}></img>
            }
            <div className={postStyles.buttonContainer}>
                <LikeButton date={date} className={postStyles.LikeButton} />
                <button className={postStyles.shareButton} onClick={() => navigator.clipboard.writeText(url)}>share</button>
                <button className={postStyles.descriptionButton} onClick={() => setDescriptionVisible(!descriptionVisible)}>
                    {descriptionVisible ? 'Hide Description' : 'Show Description'}
                </button>
            </div>
            <div>
                {copyright ? <p className={postStyles.copyright}>Copyright: {copyright}</p> : <></>}
                {descriptionVisible ? <p className={postStyles.description}>{explanation}</p> : <></>}
            </div>
        </article>
    )
}

export default Post
