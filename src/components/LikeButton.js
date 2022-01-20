import React, { useState, useCallback } from "react";

import { faHeart as filledHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";

import Button from "./Button";
import buttonStyles from "../stylesheets/Button.module.css";

function checkIfLiked(key) {
    return localStorage.getItem(key);
}

export default function LikeButton({ date }) {
    const [liked, setLiked] = useState(checkIfLiked(date));

    const toggleLiked = useCallback(() => {
        if (liked) {
            localStorage.removeItem(date);
            setLiked(false);
        } else {
            localStorage.setItem(date, "true");
            setLiked(true);
        }
    }, [liked, setLiked, date]);

    return (
        <Button
            onClick={toggleLiked}
            className={buttonStyles.likeButton}
            icon={liked ? filledHeart : emptyHeart}
            iconStyle={liked ? { color: "#ef4444" } : null}
        >
            &nbsp; {liked ? "Unlike" : "Like"}
        </Button>
    );
}
