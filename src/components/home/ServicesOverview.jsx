import React from "react";
import bugs from "../../images/bugs.png";
import mosquito from "../../images/mosquito.png"
import disinfection from "../../images/disinfection.png"

const ServiceBox = () => {
    return (
        <div className="service-box py-4">
            <h3 className="text-center py-2">Our Services</h3>
            <div className="row justify-content-center align-items-center">
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-right" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={bugs} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Bed Bugs</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-up" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={bugs} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Pest Control</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-left" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={mosquito} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Mosquito Control</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center py-2">
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-right" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={bugs} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Termite Treatment</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-up" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={bugs} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Cockroach Control</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-left" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={disinfection} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Disinfection</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceBox;