import React, { useState, createContext } from "react";

export const PostShareContext = createContext({
    lastShared: false,
    setLastShared: () => null,
});

export function PostShareContextProvider({ children }) {
    const [lastShared, setLastShared] = useState("");

    return (
        <PostShareContext.Provider value={{ lastShared, setLastShared }}>
            {children}
        </PostShareContext.Provider>
    );
}
