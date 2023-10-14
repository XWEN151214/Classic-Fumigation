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

const Services = [{ id: 1, link: "bed-bug-treatment", title: "Bed-Bug Treatment" },
{ id: 2, link: "carpet-cleaning-services", title: "Carpet Cleaning Service" },
{ id: 3, link: "coakroaches-control-services", title: "Coackroaches Control Service" },
{ id: 4, link: "disinfection-services", title: "Disinfection Services" },
{ id: 5, link: "fumigation-services", title: "Fumigation Services" },
{ id: 6, link: "mosquito-spray-service", title: "Mosquito Spray Service" },
{ id: 7, link: "pest-control", title: "Pest Control" },
{ id: 8, link: "rodent-control", title: "Rodent Control" },
{ id: 9, link: "sofa-cleaning-services", title: "Sofa Cleaning Services" },
{ id: 10, link: "termite-control", title: "Termite Control" }]

const Navbar = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropped(!isDropped);
    };
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
                    {/* <li className="mx-3" onClick={() => showDropDown(isDropped, setIsDropped)}>
                        <a className="dropdown-toggle" href="#">
                            Services
                            <span className="caret"></span>
                        </a>
                        {
                            isDropped ? <div className="dropmenu">
                                {Services.map((service) => {
                                    <li className="py-1 px-3" key={service.id}>
                                        <Link to={`/services/${service.link}`}>{service.title}</Link>
                                    </li>
                                })}
                            </div>
                                : <></>
                        }
                    </li> */}
                    <li className="mx-3" onClick={toggleDropdown}>
                        <a className="dropdown-toggle" href="#">
                            Services
                            <span className="caret"></span>
                        </a>
                        {isDropped && (
                            <ul className="dropmenu">
                                {Services.map((service) => (
                                    <li className="py-1 px-3" key={service.id}>
                                        <Link to={`/services/${service.link}`}>{service.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        )}
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
                            {/* <li className="mx-3 mt-3" onClick={() => showDropDown(isDropped, setIsDropped)}>
                                <a className="dropdown-toggle" href="#">
                                    Services
                                    <span className="caret"></span>
                                </a>
                                {
                                    isDropped ? <div className="dropmenu">
                                        {Services.map((service) => {
                                            <li className="py-1 px-3" key={service.id}>
                                                <Link to={`/services/${service.link}`}>{service.title}</Link>
                                            </li>
                                        })}
                                    </div>
                                        : <></>
                                }
                            </li> */}
                            <li className="mx-3" onClick={toggleDropdown}>
                                <a className="dropdown-toggle" href="#">
                                    Services
                                    <span className="caret"></span>
                                </a>
                                {isDropped && (
                                    <ul className="dropmenu">
                                        {Services.map((service) => (
                                            <li className="py-1 px-3" key={service.id}>
                                                <Link to={`/services/${service.link}`}>{service.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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