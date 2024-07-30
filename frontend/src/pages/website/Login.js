import React, {useState} from 'react';
import Base from '../../components/website/Base';
import axiosInstance from '../../config/Axios';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginSuccess} from "../../config/authSlice";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const validateInputs = () => {
        let inputErrors = {};
        if (!username) {
            inputErrors.username = 'Username is required';
        }
        if (!password) {
            inputErrors.password = 'Password is required';
        } else if (password.length < 6) {
            inputErrors.password = 'Password must be at least 6 characters long';
        }
        return inputErrors;
    };

    const userRegistration = async (e) => {
        e.preventDefault();
        const inputErrors = validateInputs();
        if (Object.keys(inputErrors).length > 0) {
            setErrors(inputErrors);
            return;
        }
        try {
            const data = {
                username,
                password
            };
            const result = await axiosInstance.post('/login', data);
            console.log(result);
            const token = result.data.access_token;

            dispatch(loginSuccess(token));

            navigate('/catch-pokemon');

            toast.success(result.data.message);

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Error registering user');
        }
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
                                <form onSubmit={userRegistration}>
                                    <div
                                        className="btn-group custom-anim-left wow"
                                        data-wow-duration="1.2s"
                                        data-wow-delay="0.5s"
                                    >

                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter User Name"
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username}
                                            name="username"
                                            required
                                        />
                                        {errors.username && <p className="error">{errors.username}</p>}

                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            name="password"
                                            required
                                        />
                                        {errors.password && <p className="error">{errors.password}</p>}

                                        <button type="submit" className="th-btn style-border2">
                                            <span className="btn-border">
                                                Login <i className="fa-solid fa-arrow-right ms-2"/>
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

export default Login;
