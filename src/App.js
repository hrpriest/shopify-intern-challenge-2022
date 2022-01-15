import React, {useState} from 'react'
import Post from './components/Post'
import './App.css'
import axios from 'axios'
import { getData } from './nasaApi'
const App = () => {
    //const [ posts, setPosts ] = useState([])
    const [ test, setTest ] = useState("Get data")

    return (
        <div id='post-container'>
            <Post className='post'></Post>
            <button onClick={get_data}>{test}</button>
        </div>
    )
}

export default App;
