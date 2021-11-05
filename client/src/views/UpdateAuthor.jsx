import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
// import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = () => {
    const history = useHistory();
    const {id} = useParams();
    const [errors, setErrors] = useState([]);
    const [formInfo, setFormInfo] = useState({name: ""})

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setFormInfo(res.data[0]))
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, formInfo)
            .then(res => history.push("/"))
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
        <div>
            <div className="container w-25 mt-3">
            <Link to="/">Home</Link>
            <h4 className="mt-3">Edit Author:</h4>
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
        </div>
        </div>
    );
};


export default UpdateAuthor;