import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import AuthorForm from '../components/AuthorForm';

const UpdateAuthor = () => {
    const {id} = useParams();
    const [errors, setErrors] = useState([]);
    const [author, setAuthor] = useState({name: ""})
    const [isInvalid, setIsInvalid] = useState(false)
    const history = useHistory();
    const [loaded, setLoaded] = useState(false)

    useEffect( () => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                if (res.data[0] !== undefined) {
                    setAuthor(res.data[0])
                    setLoaded(true)
                } else {
                    setIsInvalid(true)
                    setErrors([`This author doesn't exist -- would you like to create it?`])
                }})
            .catch(err => console.log(err))
    }, [])

    const editAuthor = author => {
        return axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => history.push("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr)
            })
    }

    return (
        <div className="container w-25 mt-3">
            <Link to="/">Home</Link>
            <h4 className="mt-3">Edit Author:</h4>
            {loaded &&
                <AuthorForm onSubmitProp={editAuthor} errors={errors} defaultAuthorInfo={author} isInvalid={isInvalid}/>
                }
        </div>
    );
};


export default UpdateAuthor;