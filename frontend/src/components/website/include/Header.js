import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"; // Import useSelector hook

const Header = () => {
    // Access the authentication state from Redux
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div className="header-sidebar-menu" id="navbar-collapse-toggle">
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/" className="menu-section-link">
                            <i className="fal fa-home"/>
                            <span className="text">Home</span>
                        </Link>
                    </li>

                    {!isAuthenticated ? (
                        <>
                            <li>
                                <Link to="/login" className="menu-section-link">
                                    <i className="fa fa-sign-in"/>
                                    <span className="text">Login</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup" className="menu-section-link">
                                    <i className="fal fa-user"/>
                                    <span className="text">SignUp</span>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/catch-pokemon" className="menu-section-link">
                                    <i className="fal fa-search"/>
                                    <span className="text">Catch Pokemon</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/my-pokemon" className="menu-section-link">
                                    <i className="fal fa-list"/>
                                    <span className="text">My Pokemon</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/pokemon-battle" className="menu-section-link">
                                    <i className="fal fa-axe"/>
                                    <span className="text">Battle</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/logout" className="menu-section-link">
                                    <i className="fal fa-user"/>
                                    <span className="text">Logout</span>
                                </Link>
                            </li>
                        </>


                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
