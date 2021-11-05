import React, {useState} from 'react';
import {Link} from "react-router-dom"
import axios from 'axios';

const AuthorForm = props => {
    const {defaultAuthorInfo} = props
    const [formInfo, setFormInfo] = useState(defaultAuthorInfo)
    const [errors, setErrors] = useState([])
    

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors', formInfo)
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
                const errorResponse = err.response.data.errors
                console.log(errorResponse)
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
        setFormInfo({name: ""})
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
            <form onSubmit={handleSubmit} className="d-flex flex-column">
                <label htmlFor="name">Name: </label>
                <input onChange={handleChange} type="text" name="name" id="name" value={formInfo.name}/>
                <div className="mt-3 d-flex justify-content-between">
                    <Link className="btn btn-secondary" to="/">Cancel</Link>
                    <input className="btn btn-success" type="submit" value="Submit" />
                </div>
            </form>   
        </div>
    );
};


export default AuthorForm;