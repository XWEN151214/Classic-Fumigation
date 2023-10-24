import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import logo from "../images/logo.jpg";

const showDropDown = (isDropped, setIsDropped) => {
    if (isDropped) {
        setIsDropped(false);
    }
    else {
        setIsDropped(true);
    }
}

const Services = [{ id: 1, link: "bed-bug-treatment", title: "Bed-Bug Treatment" },
{ id: 2, link: "cockroach-control", title: "Cockroach Control" },
{ id: 4, link: "ant-control", title: "Ant Control" },
{ id: 5, link: "lizard-control", title: "Lizard Control" },
{ id: 6, link: "tick-control", title: "Tick Control" },
{ id: 7, link: "silverfish-control", title: "Silverfish Control" },
{ id: 8, link: "termite-control", title: "Termite Control" },
{ id: 9, link: "moth-treatment", title: "Moth Treatment" },
{ id: 10, link: "crawling-insects", title: "Crawling Insects" },
{ id: 11, link: "disinfection-service", title: "Disinfection" },
]

const Navbar = () => {
    const [isDropped, setIsDropped] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className="navbar p-0 m-0">
            <div className="nav-info container-fluid d-flex align-items-center justify-content-center py-2">
                <div className="social-icons d-flex align-items-center col-lg-6">
                    <li className="social-link d-flex justify-content-center align-items-center mx-2 p-0 my-0">
                        <a href="#">
                            <i className="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li className="social-link d-flex justify-content-center align-items-center mx-2 p-0 my-0">
                        <Link to="https://instagram.com/classicfumigation?igshid=MzRlODBiNWFlZA==" target="_blank">
                            <i className="fa fa-instagram"></i>
                        </Link>
                    </li>
                    <li className="social-link d-flex justify-content-center align-items-center mx-2 p-0 my-0">
                        <i className="fa fa-linkedin"></i>
                    </li>
                </div>
                <div className="social-mail d-flex align-items-center col-lg-6">
                    <div className="d-flex align-items-center m-0 p-0">
                        <i className="fa fa-envelope m-0"></i>
                        <p className="p-0 m-0">info@classicfumigation.com</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-3">
                <div className="navbar-header">
                    <Link to="/">
                        <img className="logo" src={logo} />
                    </Link>
                </div>
                <ul className="nav">
                    <li className="mx-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown mx-2" onClick={() => showDropDown(isDropped, setIsDropped)}>
                        <a className="dropdown-toggle" href="#">
                            Services
                        </a>
                        {
                            isDropped ?
                                <ul className="dropmenu pb-2 px-0">
                                    {Services.map((service) => (
                                        <li className="px-4 py-1" key={service.id}>
                                            <Link to={`/services/${service.link}`}>{service.title}</Link>
                                        </li>
                                    ))}
                                </ul> :
                                <></>
                        }
                    </li>
                    <li className="mx-2">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="mx-2">
                        <Link to="/clients">Clients</Link>
                    </li>
                </ul>
                <div className="menu-btn">
                    <i className={navOpen ? "fa fa-window-close" : "fa fa-bars"} onClick={() => setNavOpen(!navOpen)}></i>
                </div>
            </div>
            {
                navOpen ?
                    <div className="mobile-navbar h-100">
                        <div className="mobile-nav py-2 px-2">
                            <div className="navbar-logo">
                                <Link to="/">
                                    <img className="logo" src={logo} />
                                </Link>
                            </div>
                            <li className="mx-3 mt-3">
                                <Link to="/" onClick={() => setNavOpen(!navOpen)}>Home</Link>
                            </li>
                            <li className="mx-3 mt-3">
                                <Link to="/about" onClick={() => setNavOpen(!navOpen)}>About Us</Link>
                            </li>
                            <li className="mx-3 mt-3" onClick={() => showDropDown(isDropped, setIsDropped)}>
                                <a className="dropdown-toggle" href="#">
                                    Services
                                </a>
                                {
                                    isDropped ?
                                        <div className="pb-2">
                                            {Services.map((service) => (
                                                <li className="px-3" key={service.id}>
                                                    <Link to={`/services/${service.link}`} onClick={() => setNavOpen(!navOpen)}>{service.title}</Link>
                                                </li>
                                            ))}
                                        </div>
                                        : <></>
                                }

                            </li>
                            <li className="mx-3 mt-3">
                                <Link to="/clients" onClick={() => setNavOpen(!navOpen)}>Clients</Link>
                            </li>
                            <li className="mx-3 mt-3">
                                <Link to="/contact" onClick={() => setNavOpen(!navOpen)}>Contact Us</Link>
                            </li>
                        </div>
                    </div>
                    : <></>
            }
        </nav>
    );
}

export default Navbar;