import React from 'react';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    // console.log(props.blog)
    const { id, name, company, picture, about } = props.blog;
    // console.log(id)
    const blogId = `/blogDetail/${id}`;
    return (
        <div className="d-flex">
            <div>
                <img src={picture} alt="" width="300px" />
            </div>
            <div className="ps-3">
                <h1>{name}</h1>
                <span>{company}</span>
                <p>{about}</p>
                <Link to={blogId}> <button className="bg-danger text-white px-4">learn more</button></Link>
            </div>
        </div>
    );
};

export default Blog;