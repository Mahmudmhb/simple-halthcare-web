
import { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("./blog.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div className="m-5 p-5">
            <h1 className="text-danger p-3">Products By Trade Name</h1>
            <p>We manufacture and market a wide range of branded generic medicines covering almost all therapeutic classes such as antibiotics, anti-ulcerents, Cardiovascular, NSAIDs, anti-diabetics, antipsychotic, antiviral, vitamins and minerals etc. offering different dosage forms like Solid Tablets, Capsules, Small volume Parenteral (SVPs), Dry powder for Suspensions, Cream and Ointments, Metered-dose Inhalers (MDIs), Ophthalmic products, and Prefilled Syringe for Biogenerics etc</p>
            <div className="row row-cols-1 row-cols-md-1 g-4">

                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                    ></Blog>)

                }
            </div>
        </div>
    );
};

export default Blogs;