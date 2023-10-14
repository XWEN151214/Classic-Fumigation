import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

const showDropDown = (isDropped, setIsDropped) => {
    if (isDropped) {
        setIsDropped(false);
    }
    else {
        setIsDropped(true);
    }
}

const dropDown = () => {
    return (
        <ul className="dropmenu">
            <li className="py-1 px-0">
                <a href="#">Page 1-1</a>
            </li>
            <li className="py-1">
                <a href="#">Page 1-2</a>
            </li>
            <li className="py-1">
                <a href="#">Page 1-3</a>
            </li>
        </ul>
    );
}

const Navbar = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="navbar p-0 m-0">
            <div className="nav-info container-fluid d-flex align-items-center justify-content-center py-4">
                <ul className="social-icons d-flex align-items-center p-0 m-0">
                    <li className="social-link d-flex justify-content-center align-items-center mx-3">
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li className="social-link d-flex justify-content-center align-items-center mx-3">
                        <i className="fa fa-instagram"></i>
                    </li>
                    <li className="social-link d-flex justify-content-center align-items-center mx-3">
                        <i className="fa fa-linkedin"></i>
                    </li>
                </ul>
            </div>
            <div className="container-fluid py-4">
                <div className="navbar-header">
                    <Link to="/">Classic Fumiga</Link>
                </div>
                <ul className="nav">
                    <li className="mx-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="mx-3" onClick={() => showDropDown(isDropped, setIsDropped)}>
                        <a className="dropdown-toggle" href="#">
                            Services
                            <span className="caret"></span>
                        </a>
                        {
                            isDropped ? <div className="dropmenu">
                                <li className="py-1 px-3">
                                    <Link to="/services/bed-bug-treatment">Bed Bug Treatment</Link>
                                </li>
                                <li className="py-1 px-3">
                                    <a href="#">Page 1-2</a>
                                </li>
                                <li className="py-1 px-3">
                                    <a href="#">Page 1-3</a>
                                </li>
                            </div>
                                : <></>
                        }
                    </li>
                    <li className="mx-3">
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
                <div className="menu-btn">
                    <i className="fa fa-bars" onClick={() => setNavOpen(!navOpen)}></i>
                </div>
            </div>
            {
                navOpen ?
                    <div className="mobile-navbar h-100">
                        <div className="mobile-nav py-2 px-2">
                            <li className="mx-3 mt-3">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="mx-3 mt-3">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="mx-3 mt-3" onClick={() => showDropDown(isDropped, setIsDropped)}>
                                <a className="dropdown-toggle" href="#">
                                    Services
                                    <span className="caret"></span>
                                </a>
                                {
                                    isDropped ? <div className="mobile-dropmenu py-2">
                                        <li className="py-1">
                                            <Link to="/services/bed-bug-treatment">Bed Bug Treatment</Link>
                                        </li>
                                        <li className="py-1">
                                            <a href="#">Page 1-2</a>
                                        </li>
                                        <li className="py-1">
                                            <a href="#">Page 1-3</a>
                                        </li>
                                    </div>
                                        : <></>
                                }
                            </li>
                            <li className="mx-3 mt-3">
                                <Link to="/clients">Clients</Link>
                            </li>
                            <li className="mx-3 mt-3">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </div>
                    </div>
                    : <></>
            }
        </nav>
    );
}

export default Navbar;