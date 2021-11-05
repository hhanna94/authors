import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const {authorID} = props;

    const deleteAuthor = (e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorID}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <button onClick={deleteAuthor} className="btn btn-danger">Delete</button>
        </div>
    );
};


export default DeleteButton;