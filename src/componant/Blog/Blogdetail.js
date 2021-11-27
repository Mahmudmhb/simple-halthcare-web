import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { blogID } = useParams();
    const [bolgs, setBolgs] = useState([]);
    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setBolgs(data))
    }, [bolgs])

    console.log(blogID)
    const detail = bolgs.find(blog => blog.id === blogID)
    // console.log(detail)
    // const { name, picture, company, about, } = detail;
    // console.log(detail.name)
    // const styles = { maxWidth: '100px' }
    return (
        <div >
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={detail?.picture} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{detail?.name}</h5>
                            <p class="card-text">{detail?.company}</p>
                            <p class="card-text">{detail?.about}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mb-5">
                <Link to="/blog" class="card-text "><small class="text-muted"><button>Go To Home Pge</button></small></Link>
            </div>
        </div >
    );
};

export default BlogDetail;