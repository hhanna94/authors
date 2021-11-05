import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"
import AuthorList from '../components/AuthorList';

const Home = () => {
    const [authors, setAuthors] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="container w-25 mt-3">
            <Link to="/new"> Add an Author</Link>
            <AuthorList authors={authors}/>
        </div>
    );
};

export default Home;