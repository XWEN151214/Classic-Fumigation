import React from "react";

const Contact = () =>
{
    return (
            <div className="contact" id="contact">
                <div className="col-lg-12 py-2">
                    <h3 className="text-center py-2">
                        <i className="fa fa-phone mx-3"></i>
                        Contact Us
                    </h3>
                </div>
                <div className="row d-flex justify-content-center align-items-center py-2">
                    <div className="container-flex d-flex justify-content-center py-2">
                        <div className="col-lg-6">
                            <h3 className="text-center py-2">Send us a Message</h3>
                        </div>
                        <div className="form-container d-flex col-gl-6" data-aos="fade-up" data-aos-duration="2000">
                            <form action="">
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
                                    <textarea rows="7" class="form-control " id="validationTextarea" placeholder="Message.."  required></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <buttton className="btn d-flex justify-content-center align-items-center">
                                        <i className="fa fa-envelope mx-2"></i>
                                        Submit
                                    </buttton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           ); 
}

export default Contact