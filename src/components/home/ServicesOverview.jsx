import React from "react";
import bugs from "../../images/bugs.png";
import mosquito from "../../images/mosquito.png"
import rat from "../../images/rat.png"
import ant from "../../images/ant.png"
import cockroach from "../../images/cockroach.png"

const ServiceBox = () => {
    return (
        <div className="service-box py-4">
            <h3 className="text-center py-2">
                <i className="fa fa-gears mx-3"></i>
                Our Services
            </h3>
            <div className="row justify-content-center align-items-center">
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-right" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={bugs} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Bed Bugs Removal</h5>
                        <p className="text-center py-2">
                        Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-up" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={ant} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Ant Control</h5>
                        <p className="text-center py-2">
                        Our ant control solutions are designed to target and eradicate ant infestations, providing you with a pest-free environment and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-left" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={mosquito} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Rodent Control</h5>
                        <p className="text-center py-2">
                            Our rodent control service employs state-of-the-art methods to swiftly and effectively eliminate unwanted rodents, ensuring your spaces remain pest-free and hygienic
                        </p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-right" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={rat} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Rat & Mouse</h5>
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
                        <h5 className="text-center py-2">Termite Control</h5>
                        <p className="text-center py-2">
                        Our ant control solutions are designed to target and eradicate ant infestations, providing you with a pest-free environment and peace of mind.
                        </p>
                    </div>
                </div>
                <div className="box d-flex justify-content-center py-2 px-2" data-aos="fade-left" data-aos-duration="800">
                    <div className="service-img d-flex justify-content-center py-2">
                        <img src={cockroach} />
                    </div>
                    <div className="service-text py-2">
                        <h5 className="text-center py-2">Cockroaches</h5>
                        <p className="text-center py-2">
                            Our rodent control service employs state-of-the-art methods to swiftly and effectively eliminate unwanted rodents, ensuring your spaces remain pest-free and hygienic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceBox;