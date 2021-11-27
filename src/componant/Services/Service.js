import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    // console.log(props.service);
    const { id, picture, name, about } = props.service;
    const detailId = `/service/${id}`;
    return (
        <div>
            <div class="col">
                <div class="card">
                    <img src={picture} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{about}</p>
                        <Link to={detailId}> <button className="bg-danger text-white px-4">learn more</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;