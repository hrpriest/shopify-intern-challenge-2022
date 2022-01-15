import React, {useState} from 'react'
import Post from './components/Post'
import './App.css'
import axios from 'axios'

const App = () => {
    //const [ posts, setPosts ] = useState([])
    const [ test, setTest ] = useState("Get data")

    const get_data = () => {
        axios.get("/.netlify/functions/fetch-nasa-data?name=Hello")
            .then((response) => {
                setTest(response.data.message)
            })
    }
    return (
        <div id='post-container'>
            <Post className='post'></Post>
            <button onClick={get_data}>{test}</button>
        </div>
    )
}

export default App;
