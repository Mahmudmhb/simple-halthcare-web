import React, { useEffect, useState } from 'react';
import Service from './Service';
// import ServiceDetail from './ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("./healthcare.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="m-5 p-5">
            <h1 className="text-danger p-3">Products By Trade Name</h1>
            <p>We manufacture and market a wide range of branded generic medicines covering almost all therapeutic classes such as antibiotics, anti-ulcerents, Cardiovascular, NSAIDs, anti-diabetics, antipsychotic, antiviral, vitamins and minerals etc. offering different dosage forms like Solid Tablets, Capsules, Small volume Parenteral (SVPs), Dry powder for Suspensions, Cream and Ointments, Metered-dose Inhalers (MDIs), Ophthalmic products, and Prefilled Syringe for Biogenerics etc</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }
            </div>
        </div>
    );
};

export default Services;