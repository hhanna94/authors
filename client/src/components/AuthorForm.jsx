import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom"
import axios from 'axios';

const AuthorForm = props => {
    const {defaultAuthorInfo, errors, onSubmitProp, isInvalid} = props
    const [formInfo, setFormInfo] = useState(defaultAuthorInfo)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmitProp(formInfo)
    }

    const handleChange = e => {
        setFormInfo({...formInfo, [e.target.name]: e.target.value})
    }

    return (
        <div className="mt-3 w-75 border p-3">
            {errors.map( (error, i) => {
                return (
                    <p key={i} className="text-danger">*{error}</p>
                )
            })}
            {isInvalid ? <Link to="/new">Create a New Author</Link> : 
                <form onSubmit={handleSubmit} className="d-flex flex-column my-3">
                    <label htmlFor="name">Name: </label>
                    <input onChange={handleChange} type="text" name="name" id="name" value={formInfo.name}/>
                    <div className="mt-3 d-flex justify-content-between">
                        <Link className="btn btn-secondary" to="/">Cancel</Link>
                        <input className="btn btn-success" type="submit" value="Submit" />
                    </div>
                </form>   
            }
        </div>
    );
};


export default AuthorForm;