import React, { useState, useEffect } from 'react'

const LikeButton = () => {
    const [ liked, setLiked ] = useState(false) 
    const [ likeButtonColor, setLikeButtonColor ] = useState("unliked")
    
    useEffect(() => {
        setLikeButtonColor(liked ? "liked" : "unliked")
    }, [liked])


    return (
        <button onClick={() => setLiked(!liked)}>{likeButtonColor}</button>
    )

}

export default LikeButton