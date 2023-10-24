import React from "react";
import client1 from '../../images/client1.png';
import client2 from '../../images/client2.png';
import client3 from '../../images/client3.png';
import client4 from '../../images/client4.png';

const Clients = () =>
{
    return (
              <div className="clients mt-4" id="clients">
                <h3 className="text-center py-2">
                    <i className="fa fa-group mx-3"></i>
                    Our Clients
                </h3>
                <marquee scrollAmount="10">
                    <div className="client d-flex justify-content-center">
                        <img className="mx-3" src={client1} />
                        <img className="mx-3" src={client2} />
                        <img className="mx-3" src={client3} />
                        <img className="mx-3" src={client4} />
                    </div>
                </marquee>
              </div>
           );
}

export default Clients;