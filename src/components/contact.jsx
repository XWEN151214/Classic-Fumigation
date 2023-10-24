import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="mb-0 text-bg-dark header">
                <div className="container-fluid header-cover">
                    <div className="col-md-6 px-0 d-flex align-items-center justify-content-center w-100 h-100 header-heading">
                        <h1 className="display-4 py-2 text-center">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="contact" id="contact-page">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="container-fluid d-flex justify-content-center align-items-center h-100">
                        <div className="contact-text container-flex w-100 py-3">
                            <h3 className='py-2 px-lg-5'>Get in Touch</h3>
                            <h4 className='py-2 px-lg-5'>Connect with Confidence:<br />Your Message, Our Commitment</h4>
                            <div className="col-lg-6 d-flex align-items-center py-2 mt-2" data-aos="fade-up" data-aos-duration="800">
                                <i className="fa fa-map-marker mx-3"></i>
                                <p>
                                    Suit No. 402, 4th Floor<br />Shahwar Trade Center <br /> Allama Iqbal Road PECHS-II,Karachi
                                </p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center py-2 mt-2" data-aos="fade-up" data-aos-duration="800">
                                <i className="fa fa-phone mx-3"></i>
                                <p>+92 21 34324100</p>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center py-2 mt-2" data-aos="fade-up" data-aos-duration="800">
                                <i className="fa fa-envelope-open mx-3"></i>
                                <p>info@classicfumigation.com</p>
                            </div>
                        </div>
                        <div className="form-container d-flex py-2" data-aos="fade-up" data-aos-duration="2000">
                            <h3 className='text-center py-2'>Send Your Queries</h3>
                            <form className='px-2' action="">
                                <div className="py-2">
                                    <input type="text" class="form-control" placeholder="First name" />
                                </div>
                                <div className="py-2">
                                    <input type="text" class="form-control" placeholder="Last name" />
                                </div>
                                <div className="py-2">
                                    <input type="email" class="form-control" placeholder="Email" />
                                </div>
                                <div className="py-2">
                                    <input type="tel" class="form-control" placeholder="Phone number" />
                                </div>
                                <div className="py-2">
                                    <select class="form-control" name="country">
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
                                <div className="py-2">
                                    <textarea rows="7" class="form-control " id="validationTextarea" placeholder="Message.." required></textarea>
                                </div>
                                <div className="">
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
        </>
    );
}

export default Contact