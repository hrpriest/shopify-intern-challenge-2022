import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import loadingStyles from "../stylesheets/Loading.module.css";

export default function Loading({ errorLoading }) {
    const message = errorLoading
        ? "Something went wrong, try refreshing the page"
        : "Loading Posts";
    return (
        <div className={loadingStyles.spinnerContainer}>
            <FontAwesomeIcon
                className={
                    errorLoading
                        ? loadingStyles.spinnerFailed
                        : loadingStyles.spinner
                }
                pulse={!errorLoading}
                icon={faSpinner}
            />
            <p className={loadingStyles.message}>{message}</p>
        </div>
    );
}
