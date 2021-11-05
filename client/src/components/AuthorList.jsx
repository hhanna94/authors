import React from 'react';
import {Link} from "react-router-dom"
import DeleteButton from './DeleteButton';

const AuthorList = (props) => {
    const {authors} = props;

    return (
        <div>
            <table className="table table-striped mt-3">
                <thead className="bg-secondary fw-bold text-white">
                    <tr>
                        <td>Author Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {authors.map( (author, index) => {
                        return (
                            <tr key={index}>
                                <td>{author.name}</td>
                                <td className="d-flex gap-3">
                                    <Link className="btn btn-success" to={`/edit/${author._id}`}>Edit</Link>
                                    <DeleteButton className="btn btn-danger" authorID={author._id} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};


export default AuthorList;