import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import buttonStyles from "../stylesheets/Button.module.css"

export default function Button({
    children,
    onClick = () => null,
    className = "",
    icon = null
}) {
    return (
        <button onClick={onClick} className={`${buttonStyles.btn} ${className}`}>
            <FontAwesomeIcon icon={icon} />
            {children}
        </button>
    )
}