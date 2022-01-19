import React from "react";

import linkStyles from "../stylesheets/Link.module.css";

export default function Link({ children, href = "", target, className = "" }) {
    return (
        <a
            href={href}
            className={`${linkStyles.link} ${className}`}
            target={target}
            rel="noreferrer"
        >
            {children}
        </a>
    );
}
