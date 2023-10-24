import React from "react";
import cover from "../images/cover4.png"
import { useState } from "react";


const About = () =>
{
    return (
            <>
                <div className="mb-0 text-bg-dark header">
                    <div className="container-fluid header-cover">
                        <div className="col-md-6 px-0 d-flex align-items-center justify-content-center w-100 h-100 header-heading">
                            <h1 className="display-4 py-2 text-center">About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="about p-0 m-0">
                    <div className="container-flex d-flex justify-content-center align-items-center">
                        <div className="content col-lg-6 py-3" data-aos="fade-left" data-aos-duration="800">
                            <h3 className="py-2 px-3">Discover Our Story, Embrace Our Commitment</h3>
                            <p className="py-2 px-3">
                                Welcome to Classic Fumigation, your premier choice for professional fumigation services. At Classic-fumigation, we are dedicated to creating pest-free environments and ensuring the well-being of your home or business. With a team of highly skilled technicians and cutting-edge fumigation methods, we take pride in safeguarding your spaces from unwanted pests.
                            </p>
                        </div>
                        <div className="about-img d-flex justify-content-center w-50" data-aos="fade-right" data-aos-duration="800">
                            <img src={cover} />
                        </div>
                    </div>
                    <div className="container-flex d-flex justify-content-center align-items-center">
                        <div className="box d-flex justify-content-center align-items-center pb-2 pt-5 px-4" data-aos="fade-up" data-aos-duration="800">
                            <div className="inner-content d-flex justify-content-center align-items-center">
                                <i className="fa fa-rocket"></i>
                                <p className="text-center py-2">
                                    We are committed to safeguarding homes and businesses, prioritizing the health and well-being of our communities. 
                                </p>
                            </div>
                        </div>
                        <div className="box d-flex justify-content-center align-items-center pb-2 pt-5 px-4" data-aos="fade-down" data-aos-duration="800">
                            <div className="inner-content d-flex justify-content-center align-items-center">
                                <i className="fa fa-diamond"></i>
                                <p className="text-center py-2">
                                    Excellence, Integrity, Environmental Responsibility, our values define who we are and guide every aspect of our fumigation services
                                </p>
                            </div>
                        </div>
                        <div className="box d-flex justify-content-center align-items-center pb-2 pt-5 px-4" data-aos="fade-up" data-aos-duration="800">
                            <div className="inner-content d-flex justify-content-center align-items-center">
                                <i className="fa fa-binoculars"></i>
                                <p className="text-center py-2">
                                    our vision is to be the leading force in innovative and sustainable pest control solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
           );
}

export default About;