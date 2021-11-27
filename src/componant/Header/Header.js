import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import Slider from '../Home/Slider/Slider';
import './Header.css'

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <nav >
            <div className="header">

                {/* logo on the left  */}
                <Link to="/">
                    <img
                        className="header__logo" src="https://www.pikpng.com/pngl/b/60-605185_amazon-logo-png-amazon-logo-white-png-transparent.png" alt=""
                    />
                </Link>
                {/* Search bok   */}
                {/* 3 link add  */}
                <div className="header_nav">
                    <div class="nav-item">
                        <span className="text-white header-optionLineone"><img className="rounded-circle" width="40px" src={user.photoURL} alt="" /> {user.displayName}
                            <br />
                        </span>
                        {
                            user.email ?
                                <button className="header header-optionLineTwo btn border-rounded btn-danger" onClick={logout}> Log out</button>
                                :
                                <NavLink className=" header-optionLineTwo" to="/login">Login</NavLink>
                        }
                    </div>
                    <Link to="/login" className="header_link">
                        <div className="header_option">
                            <span className="header-optionLineone">Returns</span>
                            <span className="header-optionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    <Link to="/" className="header_link">
                        <div className="header_option">
                            <span className="header-optionLineone">Your</span>
                            <span className="header-optionLineTwo"> Prime</span>
                        </div>
                    </Link>
                    <Link to="/checkout" className="header_link">
                        <div className="header_optionBasket">
                            {/* <ShoppingBasketIcon /> */}
                            <span className="header-optionLineTwo">0</span>

                        </div>
                    </Link>
                </div>
            </div>

            <Slider></Slider>

        </nav>

        // <div >
        //     <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary p-4">
        //         <div class="container">
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li class="nav-item">
        //                         <NavLink className="header" to="/home">Home</NavLink>
        //                     </li>
        //                     <li class="nav-item">
        //                         <NavLink className="header" to="/services">Services</NavLink>
        //                     </li>
        //                     <li class="nav-item">
        //                         <NavLink className="header" to="/about">About</NavLink>
        //                     </li>
        //                     <li class="nav-item">
        //                         <NavLink className="header" to="/blog">Blogs</NavLink>
        //                     </li>


        //                 </ul>

        //                 <div class="nav-item">
        //                     <span className="text-white"><img className="rounded-circle" width="40px" src={user.photoURL} alt="" /> {user.displayName}
        //                         <br />
        //                         {user.email}
        //                     </span>
        //                     {
        //                         user.email ?
        //                             <button className="header btn border-rounded btn-danger" onClick={logout}> Log out</button>
        //                             :
        //                             <NavLink className="header" to="/login"><i class="fas fa-sign-in-alt"></i> Login</NavLink>
        //                     }
        //                 </div>
        //             </div>
        //         </div>
        //     </nav>
        //     <Slider></Slider>
        // </div>
    );
};

export default Header;
