import Base from "../../components/website/Base";
import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const Home = () => {
    // Access the authentication state from Redux
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    return (
        <>
            <Base/>


            <div className=" th-hero-wrapper m-5 hero-5 " id="hero" data-bg-src="assets/img/hero/hero-4-bg.png">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="hero-thumb5-1">
                                <img src={`${process.env.PUBLIC_URL}/website/img/pokemon.png`} alt="img"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-style5">
                                <h1
                                    className="hero-title custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.2s"
                                >
                                    Welcome To<span className="text-theme"> Pokemon</span>
                                </h1>
                                <p
                                    className="hero-text custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.4s"
                                >
                                    Search and Catchup For pokemon.
                                    Collect Upto 5 Pokemon in your team, and Battle other teams
                                </p>
                                <div
                                    className="btn-group custom-anim-left wow"
                                    data-wow-duration="1.2s"
                                    data-wow-delay="0.5s"
                                >
                                    {!isAuthenticated ? (
                                        <>
                                            <Link to="/signup" className="th-btn style-border2">
                                              <span className="btn-border">
                                                Signup<i className="fa-solid fa-arrow-right ms-2"/>
                                              </span>
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link to="/pokemon-battle" className="th-btn style-border2">
                                              <span className="btn-border">
                                                    Battle <i className="fa-solid fa-axe ms-2"/>
                                                    </span>
                                                </Link>
                                            </li>
                                        </>
                                    )}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="scroll-down">*/}
                {/*    <a href="#about-sec" className="hero-5-scroll-wrap">*/}
                {/*        Scroll down*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>


        </>
    )
}
export default Home