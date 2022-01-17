import React, { useState, useEffect } from 'react'
import Post from './components/Post'
import appStyles from './stylesheets/App.module.css'
import { fetchData } from './nasaApi'
import moment from 'moment'

const today = moment().format('YYYY-MM-DD')

const nextStartDate = (endDate) => (moment(endDate).subtract(6, 'd').format('YYYY-MM-DD'))

const App = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetchData(nextStartDate(today), today)
            .then(response => {
                setPosts(response.data.reverse())
            })
    }, [])

    return (
        <main>
            <header>
                <hgroup>
                    <h1 className={appStyles.pageHeader}>Spacesight</h1>
                    <h2 className={appStyles.subHeader}>Images courtesy of NASA</h2>
                </hgroup>
                <nav>
                    <a href="https://github.com/hrpriest/shopify-intern-challenge-2022" target="_blank" rel='noreferrer' >Github Repo</a>
                </nav>
            </header>
            <div className={appStyles.postContainer}>
                {posts.map(post => <Post key={post.date} nasaData={post}></Post>)}
            </div >
        </main>
    )
}

export default App;
