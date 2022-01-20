import React, { useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import ShareButton from "./ShareButton";
import LikeButton from "./LikeButton";
import buttonStyles from "../stylesheets/Button.module.css";
import postStyles from "../stylesheets/Post.module.css";
import Button from "./Button";

dayjs.extend(advancedFormat);

function humanFriendlyDate(date) {
    return dayjs(date).format("MMMM Do YYYY");
}

export default function Post({ nasaData }) {
    const { date, explanation, title, url, copyright } = nasaData;
    const mediaType = nasaData.media_type;
    const [descriptionVisible, setDescriptionVisible] = useState(false);

    return (
        <article className={postStyles.post}>
            <div className={postStyles.headerContainer}>
                <h3 className={postStyles.title}>{title}</h3>
                <h3 className={postStyles.date}>{humanFriendlyDate(date)}</h3>
            </div>
            {mediaType === "video" ? (
                <div className={postStyles.iframeContainer}>
                    <iframe
                        src={url}
                        className={postStyles.video}
                        allowFullScreen
                        title={title}
                    />
                </div>
            ) : (
                <img src={url} className={postStyles.image} alt={title} />
            )}
            <div className={postStyles.buttonContainer}>
                <LikeButton date={date} />
                <ShareButton mediaType={mediaType} url={url} date={date} />
                <Button
                    className={buttonStyles.descriptionButton}
                    onClick={() => setDescriptionVisible(!descriptionVisible)}
                    icon={descriptionVisible ? faEye : faEyeSlash}
                >
                    &nbsp;{" "}
                    {descriptionVisible
                        ? "Hide Description"
                        : "Show Description"}
                </Button>
            </div>
            <div>
                {copyright ? (
                    <p className={postStyles.copyright}>
                        Copyright: {copyright}
                    </p>
                ) : null}
                {descriptionVisible ? (
                    <p className={postStyles.description}>{explanation}</p>
                ) : null}
            </div>
        </article>
    );
}
