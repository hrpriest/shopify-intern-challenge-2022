import React, { useState } from 'react'

function checkIfLiked(key) {
    return localStorage.getItem(key)
}

const LikeButton = ({ date }) => {
    const [liked, setLiked] = useState(checkIfLiked(date))

    function toggleLiked() {
        if (liked) {
            localStorage.removeItem(date)
            setLiked(false)
        } else {
            localStorage.setItem(date, 'true')
            setLiked(true)
        }
    }

    return (
        <button onClick={toggleLiked}>
            {liked ? 'unlike' : 'like'}
        </button>
    )

}

export default LikeButton