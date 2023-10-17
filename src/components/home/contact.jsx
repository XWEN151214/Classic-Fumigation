import React from "react";
import email from "../../images/email.png";

const Contact = () =>
{
    return (
            <div className="contact" id="contact">
                <div className="row d-flex justify-content-center align-items-center py-2">
                    <div className="container-fluid d-flex justify-content-center align-items-center py-2">
                        <div className="contact-img col-lg-6">
                            <div className="contact-heading row d-flex justify-content-center align-items-center" data-aos="fade-right" data-aos-duration="1000">
                                <h3 className="text-center py-2">Contact Us</h3>
                                <img src={email} />
                            </div>
                        </div>
                        <div className="form-container col-lg-6 px-2" data-aos="fade-up" data-aos-duration="2000">
                            <form className="col-lg-12" action="">
                                <div className="col-lg-12 py-2">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div className="col-lg-12 py-2">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                                <div className="col-lg-12 py-2">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div className="col-lg-12 py-2">
                                    <input type="tel" class="form-control" placeholder="Phone number" />
                                </div>
                                <div className="col-lg-12 py-2">
                                    <select  class="form-control" name="country">
                                        <option value="Bed Bug treatment">Bed Bug treatment</option>
                                        <option value="Fumigation Services">Fumigation Services</option>
                                        <option value="Termite Control Services">Termite Control Services</option>
                                        <option value="Cockroaches Control Services">Cockroaches Control Services</option>
                                        <option value="Mosquito Spray Service">Mosquito Spray Service</option>
                                        <option value="Sofa Cleaning Services">Sofa Cleaning Services</option>
                                        <option value="Pest Control Srevices">Pest Control Srevices</option>
                                        <option value="Disinfection Services">Disinfection Services</option>
                                        <option value="Carpet Cleaning Services">Carpet Cleaning Services</option>
                                        <option value="Rodent Control Services">Rodent Control Services</option>
                                    </select>
                                </div>
                                <div className="col-lg-12 py-2">
                                    <textarea rows="3" class="form-control " id="validationTextarea" placeholder="Message.."  required></textarea>
                                </div>
                                <div className="col-lg-12 d-flex justify-content-center py-2">
                                    <buttton className="btn">Submit</buttton>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contact-info d-flex justify-content-center align-items-center col-lg-6 mt-4">
                        <div className="info box col-lg-8 py-2" data-aos="fade-up" data-aos-duration="800">
                            <i className="fa fa-map-marker"></i>
                            <h6 className="text-center py-4">plot 2 Block # 82380 St Kilda Road, Melbourne, Australia</h6>
                        </div>
                        <div className="info box col-lg-8 py-2" data-aos="fade-up" data-aos-duration="800">
                            <i className="fa fa-phone"></i>
                            <h6 className="text-center py-4">+92 300 9206830</h6>
                        </div>
                        <div className="info box col-lg-8 py-2" data-aos="fade-up" data-aos-duration="800">
                            <i className="fa fa-envelope-open"></i>
                            <h6 className="text-center py-4">help@bixolcleaning.com</h6>
                        </div>
                    </div>
                </div>
            </div>
           ); 
}

export default Contact