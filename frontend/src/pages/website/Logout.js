import React, {useState} from 'react';
import Base from '../../components/website/Base';
import axiosInstance from '../../config/Axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../config/authSlice";

const Logout = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Clear the authentication token and user data from localStorage or sessionStorage
        localStorage.removeItem('access_token'); // or sessionStorage.removeItem('access_token')
        localStorage.removeItem('user'); // or sessionStorage.removeItem('user')

        // Optionally clear the Redux state
        dispatch(logout());

        // Redirect to the home page or login page
        navigate('/login');

        // Show a success message
        toast.success('Logout successful');
    };


    return (
        <>
            <Base/>
            <ToastContainer/>
            <div className="hero-5" id="hero">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img src={`${process.env.PUBLIC_URL}/website/img/pokemon-team.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-style5">
                                <h1
                                    className="hero-title custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.2s"
                                >
                                    Login

                                </h1>
                                <p>
                                    Are You sure Do you want to logout
                                </p>
                                <form onSubmit={(e) => { e.preventDefault(); handleLogout(); }}>
                                    <div
                                        className="btn-group custom-anim-left wow"
                                        data-wow-duration="1.2s"
                                        data-wow-delay="0.5s"
                                    >

                                        <button type="submit" className="th-btn style-border2">
                                            <span className="btn-border">
                                                Logout <i className="fa-solid fa-arrow-right ms-2"/>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logout;
