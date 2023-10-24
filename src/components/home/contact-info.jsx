import React from "react";

const ContactInfo = () =>
{
    return (
            <div className="contact-info d-flex justify-content-center align-items-center">
                <div className="container-flex d-flex justify-content-center align-items-center">
                    <div className="info box d-flex justify-content-center align-items-center py-2" data-aos="fade-up" data-aos-duration="800">
                        <i className="fa fa-map-marker mx-2"></i>
                        <p className="text-center p-0 m-0">
                            Suit No. 402, 4th Floor Shahwar Trade Center Allama Iqbal Road PECHS-II, Karachi
                        </p>
                    </div>
                    <div className="info box d-flex justify-content-center align-items-center py-2" data-aos="fade-up" data-aos-duration="800">
                        <i className="fa fa-phone mx-2"></i>
                        <p className="text-center p-0 m-0">+92 21 34324100</p>
                    </div>
                    <div className="info box d-flex justify-content-center align-items-center py-2" data-aos="fade-up" data-aos-duration="800">
                        <i className="fa fa-envelope-open mx-2"></i>
                        <p className="text-center p-0 m-0">info@classicfumigation.com</p>
                    </div>
                </div>
            </div>
           );
}

export default ContactInfo;