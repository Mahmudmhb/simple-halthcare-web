import React from 'react';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="text-center">
            <Services></Services>
            {/* <Service product={product}></Service> */}
            <div className="row ">
                <div className="col-12 col-lg-4">
                    <img src="https://halcyonrehab.net/wp-content/uploads/2020/11/patients.png" width="200px" alt="" />
                    <h3>PATIENTS</h3>
                    <p>Learn about our trusted care.</p>
                    <button className=" btn btn-primary P-5 m-3"> LEARN MORE</button>

                </div>
                <div className="col-12 col-lg-4">
                    <img src="https://halcyonrehab.net/wp-content/uploads/2020/11/clinicians.png" width="200px" alt="" />
                    <h3>CLINICIANS</h3>
                    <p>Grow with us as an employee.</p>
                    <button className=" btn btn-primary P-5 m-3"> LEARN MORE</button>

                </div>
                <div className="col-12 col-lg-4">
                    <img src="https://halcyonrehab.net/wp-content/uploads/2020/11/partners.png" width="200px" alt="" />
                    <h3>PARTNERS</h3>
                    <p>Work with us for better patient care.</p>
                    <button className=" btn btn-primary P-5 m-3"> LEARN MORE</button>

                </div>
            </div>
            <div class="row   bg-secondary mt-4 mb-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZG3btQg08TjIwV2OFoQML3IPC8zRBUS1f9Q&usqp=CAU" class="card-img-top img-fluid" width="250px" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Managing Director</h5>
                            <p class="card-text">Mr. Alauddin Ahmed is the founder of Healthcare Pharmaceuticals Limited. In Person, he is Chartered Accountant. Mr. Alauddin Ahmed is well-known for his generous social work for the urban villagers and deprived peoples. He has donated for establishing Schools, Colleges, Madrashas, Masques, Orphanages, Hospitals, Education Scholarship</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-2">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJ7JWMDEjPNgbtBE4Pv-24q9in3JBJhRlAA&usqp=CAU" class="card-img-top img-fluid" width="250px" height="350px" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Muhammad Halimuzzaman</h5>
                            <p>DMD & Chief Executive Officer</p>
                            <p class="card-text">Md.Halimuzzaman is a Pharmacy Graduate from University of Dhaka.Subsequently, He obtained master of administration degree (MBA) in finance.Mr.Halimuzzaman has a long professional experience in different sectors of Pharmaceutical industry.Md.Halimuzzaman is one of the potential members of Executive Committee, Bangladesh Association of Pharmaceuticals Industries (BAPI)</p>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Hw1w86Shrq1ifEvAZQxzgzj9g1PT2H2Upg&usqp=CAU" class="card-img-top img-fluid" width="250px" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Mokarrom Hossain</h5>
                            <span>Member, Board of Directors</span>
                            <p class="card-text">Mr.Mokarrom Hossain Obtained Master of Business Administration (MBA) in Finance from Darul Ihsan University, Dhaka.Mr.Hossain is experienced in various areas of financial markets including fund administration, fund accounting, company research activities, trading financial management, private equity operations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;