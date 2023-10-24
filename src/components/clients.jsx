import React from "react";
import client1 from '../images/client1.png';
import client2 from '../images/client2.png';
import client3 from '../images/client3.png';
import client4 from '../images/client4.png';

const Clients = () => {
    return (
        <>
            <div className="mb-0 text-bg-dark header">
                <div className="container-fluid header-cover">
                    <div className="col-md-6 px-0 d-flex align-items-center justify-content-center w-100 h-100 header-heading">
                        <h1 className="display-4 py-2 text-center">Our Clients</h1>
                    </div>
                </div>
            </div>
            <div className="clients-page mt-4">
                <h4 className="py-2 px-lg-5">Where Success Stories Meet Satisfied Clients</h4>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center col-lg-4">
                        <img src={client1} />
                    </div>
                    <div className="d-flex justify-content-center col-lg-4">
                        <img src={client2} />
                    </div>
                    <div className="d-flex justify-content-center col-lg-4">
                        <img src={client3} />
                    </div>
                    <div className="d-flex justify-content-center col-lg-4">
                        <img src={client4} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clients;