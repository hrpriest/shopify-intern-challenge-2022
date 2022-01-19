import React, { useState, useCallback } from 'react'

import { faShareSquare as shareFilled } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare as shareEmpty } from '@fortawesome/free-regular-svg-icons';

import Button from "./Button";

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1)
}
// const capitalizeFirstLetter = useCallback((word) => {
//     return word[0].toUppercase() + word.slice(1)
// })
export default function ShareButton({ url, mediaType }) {
    const [timerActive, setTimerActive] = useState(false)

    const timer = useCallback(() => {
        if (!timerActive) {
            navigator.clipboard.writeText(url)
            setTimerActive(true)
            setTimeout(() => setTimerActive(false), 3000)
        }
    }, [timerActive, setTimerActive, url])


    return (
        <Button onClick={timer} icon={timerActive ? shareFilled : shareEmpty}>
            &nbsp; {timerActive ? "Link Copied To Clipboard" : `Share ${capitalizeFirstLetter(mediaType)}`}
        </Button>
    )
}