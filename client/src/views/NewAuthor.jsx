import React from 'react';
import AuthorForm from '../components/AuthorForm';
// import axios from 'axios';
import {Link} from "react-router-dom"

const NewAuthor = () => {
    const defaultAuthorInfo = {name: ""}
    // const [errors, setErrors] = useState([])

    // const createAuthor = author => {
    //     axios.post('http://localhost:8000/api/authors', author)
    //         .then(res => console.log(res))
    //         .catch(err => {
    //             console.log(err)
    //             const errorResponse = err.response.data.errors
    //             const errorArr = []
    //             for (const key of Object.keys(errorResponse)) {
    //                 errorArr.push(errorResponse[key].message)
    //             }
    //             setErrors(errorArr)
    //         })
    // }

    return (
        <div className="container w-25 mt-3">
            <Link to="/">Home</Link>
            <h4 className="mt-3">Add a New Author:</h4>
            <AuthorForm defaultAuthorInfo={defaultAuthorInfo}/>
        </div>
    );
};


export default NewAuthor;