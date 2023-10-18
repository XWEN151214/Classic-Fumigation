import React from "react";
import star from "../../images/star.png";
import office from "../../images/office.png";
import flat from "../../images/flat.png";

const Packages = () =>
{
    return (
            <div className="packages">
                <h3 className="text-center py-2 mt-4">Packages</h3>
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div className="box d-flex justify-content-center py-4"  data-aos="fade-down" data-aos-duration="800"  id="package-row">
                        <div className="package-img d-flex justify-content-center m-0 p-0">
                            <i className="fa fa-briefcase"></i>
                        </div>
                        <div className="info w-100 mt-4">
                            <h5 className="text-center py-2">Office/Corporate</h5>
                            <h6 className="text-center py-2">Starting From</h6>
                            <h6 className="text-center py-2">RS 5000</h6>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                    <div className="box d-flex justify-content-center py-4" data-aos="fade-down" data-aos-duration="800" id="package-row">
                        <div className="package-img d-flex justify-content-center m-0 p-0">
                            <i className="fa fa-industry"></i>
                        </div>
                        <div className="info w-100 mt-4">
                            <h5 className="text-center py-2">Warehouse/Factory</h5>
                            <h6 className="text-center py-2">Starting From</h6>
                            <h6 className="text-center py-2">RS 7000</h6>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                    <div className="box d-flex justify-content-center py-4" data-aos="fade-down" data-aos-duration="800" id="package-row">
                        <div className="package-img d-flex justify-content-center m-0 p-0">
                            <i className="fa fa-building"></i>
                        </div>
                        <div className="info w-100 mt-4">
                            <h5 className="text-center py-2">Flat/House</h5>
                            <h6 className="text-center py-2">Starting From</h6>
                            <h6 className="text-center py-2">RS 3000</h6>
                        </div>
                        <div className="d-flex justify-content-center py-2">
                            <button className="btn">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
           );
}

export default Packages;