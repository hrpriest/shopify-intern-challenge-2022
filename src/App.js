import React, { useState, useEffect, useCallback } from "react";
import dayjs from "dayjs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { PostShareContextProvider } from "./contexts/PostShareContext";
import Button from "./components/Button";
import Post from "./components/Post";
import Link from "./components/Link";
import Loading from "./components/Loading";
import appStyles from "./stylesheets/App.module.css";
import buttonStyles from "./stylesheets/Button.module.css";
import { fetchData } from "./nasaApi";

const today = dayjs().format("YYYY-MM-DD");

function nextStartDate(endDate) {
    return dayjs(endDate).subtract(14, "d").format("YYYY-MM-DD");
}

function minusOneDay(date) {
    return dayjs(date).subtract(1, "d").format("YYYY-MM-DD");
}

export default function App() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false);

    const fetchPosts = useCallback(
        (endDate) => {
            setLoading(true);
            fetchData(nextStartDate(endDate), endDate)
                .then((response) => {
                    setPosts((posts) => {
                        const copiedData = [...response.data];
                        return posts.concat(copiedData.reverse());
                    });
                    setLoading(false);
                    setErrorLoading(false);
                })
                .catch(() => {
                    console.log("catch triggered");
                    setErrorLoading(true);
                    setLoading(false);
                });
        },
        [setLoading, setErrorLoading, setPosts]
    );

    useEffect(() => {
        fetchPosts(today);
    }, [fetchPosts]);

    return (
        <main>
            <header className={appStyles.headerContainer}>
                <h1 className={appStyles.pageHeader}>Spacesight</h1>
                <h2 className={appStyles.subHeader}>Images courtesy of NASA</h2>
                <nav>
                    <Link
                        href="https://github.com/hrpriest/shopify-intern-challenge-2022"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        &nbsp; Check out the code
                    </Link>
                </nav>
            </header>
            <div>
                <PostShareContextProvider>
                    {posts.map((post) => (
                        <Post key={post.date} nasaData={post}></Post>
                    ))}
                </PostShareContextProvider>
            </div>
            <div className={buttonStyles.loadButtonContainer}>
                {loading || errorLoading ? null : (
                    <Button
                        onClick={() =>
                            fetchPosts(minusOneDay(posts.at(-1).date))
                        }
                        className={buttonStyles.loadButton}
                    >
                        Load More Posts
                    </Button>
                )}
            </div>
            {loading || errorLoading ? (
                <Loading errorLoading={errorLoading} />
            ) : null}
        </main>
    );
}
