import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { serviceID } = useParams();
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("/blog.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [services])

    console.log(services)
    const detail = services.find(service => service.id === serviceID)
    console.log(detail)
    // const { name, picture, company, about, } = detail;
    console.log(detail?.name)
    // const styles = { maxWidth: '100px' }
    return (
        <div>
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
                <Link to="/services" class="card-text "><small class="text-muted"><button>Go To Home Pge</button></small></Link>
            </div>
        </div >
    );
};

export default BlogDetail;
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { Link, useParams } from 'react-router-dom';

// const ServiceDetail = () => {
//     const { serviceID } = useParams();
//     console.log(serviceID)
//     const [users, settUsers] = useState([]);
//     // const [sigleUser, setSingleuser] = useState([]);

//     useEffect(() => {
//         fetch("healthcare.json")
//             .then(res => res.json())
//             .then(data => settUsers(data))
//     }, [])

//     console.log(users)
//     useEffect(() => {
//         const usersDetail = users.find(user => user.id === serviceID)


//     }, [users]);
//     // const { name, picture, discription, about } = usersDetail);


//     return (
//         <div>
//              {/* <div class="card mb-3" >
//                 <div class="row g-0">
//                     <div class="col-md-4">
//                         <img src={picture} class="img-fluid rounded-start" alt="..." />
//                     </div>
//                     <div class="col-md-8">
//                         <div class="card-body">
//                             <h5 class="card-title">{name}</h5>
//                             <p class="card-text">{company}</p>
//                             <p class="card-text">{about}</p>
//                             <Link to="/blog"><p class="card-text"><small class="text-muted"><button>Go To Home Pge</button></small></p></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     );
// };

// export default ServiceDetail;