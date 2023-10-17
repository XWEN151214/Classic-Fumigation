import React from "react";
import cover from "../images/cover4.png"
import mission from "../images/rocket.png"
import vission from "../images/telescope.png"
import values from "../images/diamond.png"
import { useState } from "react";


const About = () =>
{
    const [sectionNumber, setSectionNumber] = useState(1);
    return (
                <div className="about">
                    <div className="main-header">
                        <div className="container-fluid d-flex justify-content-center align-items-center w-100 h-100 py-4">
                            <div className="heading">
                                <h3 className="py-2">Find out more about classic fumigation</h3>
                            </div>
                        </div>
                    </div>
                    <div className="content row d-flex justify-content-center align-items-center mt-4 py-2 px-4">
                        <div className="d-flex justify-content-center col-lg-6 px-4">
                            <div className="col-lg-12">
                                <h3 className="py-2">
                                    Introduction
                                </h3>
                                <p className="py-2">
                                    Welcome to classic fumigation, your premier choice for professional fumigation services. At classic fumigation, we are dedicated to creating pest-free environments and ensuring the well-being of your home or business. With a team of highly skilled technicians and cutting-edge fumigation methods, we take pride in safeguarding your spaces from unwanted pests. Our commitment to excellence, attention to detail, and a customer-centric approach set us apart. Trust us for effective, reliable, and environmentally responsible pest control solutions. Your peace of mind is our priority.
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center col-lg-6">
                            <img src={cover} />
                        </div>
                    </div>
                    <div className="cores py-2 mt-4">
                        <div className="tabs d-flex justify-content-center align-items-center py-2">
                            <li className={sectionNumber == 1? "active mx-3" : "mx-3"} onClick={() => setSectionNumber(1)}>Mission</li>
                            <li className={sectionNumber == 2? "active mx-3" : "mx-3"} onClick={() => setSectionNumber(2)}>Values</li>
                            <li className={sectionNumber == 3? "active mx-3" : "mx-3"} onClick={() => setSectionNumber(3)}>Vision</li>
                        </div>
                        {
                            sectionNumber === 1?
                            <div className="core">
                                <div className="row d-flex justify-content-center align-items-center py-2">
                                    <div className="content col-lg-6" data-aos="fade-left" data-aos-duration="800">
                                        <h3 className="py-2" style={{color:'white'}}>Our Mission</h3>
                                        <p className="py-2" style={{color:'white'}}>
                                        At classic fumigation, our mission is to provide unparalleled fumigation services aimed at creating pest-free spaces for our clients. We are committed to safeguarding homes and businesses, prioritizing the health and well-being of our communities. Through cutting-edge techniques, environmentally responsible practices, and a dedicated team of experts, we strive to exceed expectations in delivering effective, safe, and reliable pest control solutions. Our mission is to ensure that every space we treat becomes a sanctuary, free from the nuisances of pests, contributing to a healthier and happier environment for all
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center col-lg-6" data-aos="fade-right" data-aos-duration="800">
                                        <img src={mission} />
                                    </div>
                                </div>
                            </div>:
                            sectionNumber === 2?
                            <div className="core">
                                <div className="row d-flex justify-content-center align-items-center py-2">
                                    <div className="content col-lg-6">
                                        <h3 className="py-2" style={{color:'white'}}>Our Values</h3>
                                        <p className="py-2" style={{color:'white'}}>
                                            At classic fumigation, our values define who we are and guide every aspect of our fumigation services:
                                        </p>
                                        <p style={{color:'white'}}>
                                            <strong>Excellence: </strong>
                                            We are committed to delivering the highest standards of service, consistently exceeding customer expectations through precision and professionalism.
                                        </p>
                                        <p style={{color:'white'}}>
                                            <strong>Integrity: </strong>
                                            We conduct our business with honesty, transparency, and accountability, building trust with our clients and stakeholders.
                                        </p>
                                        <p style={{color:'white'}}>
                                            <strong>Customer-Centric: </strong>
                                            Our clients are at the heart of everything we do. We listen, understand, and tailor our solutions to meet their unique needs, ensuring satisfaction and peace of mind.
                                        </p>
                                        <p style={{color:'white'}}>
                                            <strong>Environmental Responsibility: </strong>
                                            We prioritize eco-friendly practices, striving to minimize our ecological footprint and contribute to a healthier planet.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center col-lg-6">
                                        <img src={values} />
                                    </div>
                                </div>
                            </div>:
                            sectionNumber === 3?
                            <div className="core">
                                 <div className="row d-flex justify-content-center align-items-center py-2">
                                    <div className="content col-lg-6">
                                        <h3 className="py-2" style={{color:'white'}}>Our Vision</h3>
                                        <p className="py-2" style={{color:'white'}}>
                                        At classic fumigation, our vision is to be the leading force in innovative and sustainable pest control solutions. We aspire to set new industry standards by continually advancing our fumigation techniques, embracing eco-friendly practices, and promoting public awareness about the importance of pest management. We envision a future where every home and business enjoys a pest-free environment, fostering healthier, safer, and more comfortable living spaces. Through our unwavering commitment to excellence, technological advancement, and environmental stewardship, we aim to be the trusted partner in creating pest-free havens, enhancing the overall quality of life for our clients and communities.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center col-lg-6">
                                        <img src={vission} />
                                    </div>
                                </div>
                            </div>:
                            <></>
                        }
                    </div>
                </div>
           );
}

export default About;