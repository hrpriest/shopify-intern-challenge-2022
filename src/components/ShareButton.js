import React, { useContext } from "react";

import { faShareSquare as shareFilled } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare as shareEmpty } from "@fortawesome/free-regular-svg-icons";

import { PostShareContext } from "../contexts/PostShareContext";
import Button from "./Button";

function capitalizeFirstLetter(word) {
    return word[0].toUpperCase() + word.slice(1);
}

export default function ShareButton({ url, mediaType, date }) {
    const { lastShared, setLastShared } = useContext(PostShareContext);

    return (
        <Button
            onClick={() => setLastShared(date)}
            icon={lastShared === date ? shareFilled : shareEmpty}
        >
            &nbsp;{" "}
            {lastShared === date
                ? "Link Copied To Clipboard"
                : `Share ${capitalizeFirstLetter(mediaType)}`}
        </Button>
    );
}
