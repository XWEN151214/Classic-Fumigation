import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    const Services = [{ id: 1, link: "bed-bug-treatment", title: "Bed-Bug Treatment" },
    // { id: 2, link: "carpet-cleaning-services", title: "Carpet Cleaning Service" },
    // { id: 3, link: "coakroaches-control-services", title: "Coackroaches Control Service" },
    { id: 4, link: "disinfection-services", title: "Disinfection Services" },
    { id: 5, link: "fumigation-services", title: "Fumigation Services" },
    { id: 6, link: "mosquito-spray-service", title: "Mosquito Spray Service" },
    { id: 7, link: "pest-control", title: "Pest Control" },
    { id: 8, link: "rodent-control", title: "Rodent Control" },
    // { id: 9, link: "sofa-cleaning-services", title: "Sofa Cleaning Services" },
    { id: 10, link: "termite-control", title: "Termite Control" }]


    return (
        <div className="ftr mt-4">
            <div className="ftr mt-4">
                <div className="box b-1">
                    <div><h3>A1 Fumigations</h3></div>
                    <p>We Are a Reputable Company with Effective Experience in Residential and Commercial Fumigation and Pest Control services in Islamabad, Rawalpindi, Karachi, and other cities. We Believe Our Treatments Are The Best Solution For Your Pest and Fumigation Problems.
                        Follow Us On:</p>
                    <div className="icons">
                        <a className="d-flex justify-content-center align-items-center" href=""><i className="fa fa-facebook"></i></a>
                        <a className="d-flex justify-content-center align-items-center" href=""><i className="fa fa-whatsapp"></i></a>
                        <a className="d-flex justify-content-center align-items-center" href=""><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="box b-2">
                    <div>
                        <h3>Services</h3>
                    </div>
                    <ul className="footer-links">
                        {Services.map((service) => (
                            <Link to={`/services/${service.link}`} key={service.id}>
                                <div className="item-b-2">
                                    <i className="ri-arrow-right-line"></i>
                                    <li>{service.title}</li>
                                </div>
                            </Link>
                        ))}
                    </ul>

                </div>
                <div className="box b-3">
                    <h3>Quick Links</h3>
                    {/* <ul className="footer-links">
                    <a href="#">
                        <div className="item-b-2">
                            <i className="ri-arrow-right-line"></i>
                            <li>Home</li>
                        </div>
                    </a><a href="#">
                        <div className="item-b-2">
                            <i className="ri-arrow-right-line"></i>
                            <li>ABOUT us</li>
                        </div>
                    </a><a href="#">
                        <div className="item-b-2">
                            <i className="ri-arrow-right-line"></i>
                            <li>our clients</li>
                        </div>

                    </a><a href="#">
                        <div className="item-b-2">
                            <i className="ri-arrow-right-line"></i>
                            <li>get a Quote</li>
                        </div>

                    </a><a href="#">
                        <div className="item-b-2">
                            <i className="ri-arrow-right-line"></i>
                            <li>contact us</li>
                        </div>
                    </a>
                </ul> */}
                    <ul className="footer-links">
                        <Link to="/">
                            <div className="item-b-2">
                                <i className="ri-arrow-right-line"></i>
                                <li>Home</li>
                            </div>
                        </Link>
                        <Link to="/about">
                            <div className="item-b-2">
                                <i className="ri-arrow-right-line"></i>
                                <li>ABOUT us</li>
                            </div>
                        </Link>
                        <a href="#clients">
                            <div className="item-b-2">
                                <i className="ri-arrow-right-line"></i>
                                <li>our clients</li>
                            </div>
                        </a>
                        <a href="#contact">
                            <div className="item-b-2">
                                <i className="ri-arrow-right-line"></i>
                                <li>contact us</li>
                            </div>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Footer;