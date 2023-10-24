import React from "react";
import { useState } from "react";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.jpg";
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item active">
                    <img src={slide1} alt="slide1"/>
                    <div class="carousel-caption">
                        <div className="content">
                            <h3>Welcome to Classic Fumigation, your premier choice for professional fumigation services.</h3>
                            <button className="btn">
                                <Link to="/about">Read More</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src={slide2} alt="slide2"/>
                    <div class="carousel-caption">
                        <div className="content">
                            <h3>With meticulous precision and cutting-edge methods, we ensure a thorough solution, delivering a bug-free haven for your home.</h3>
                            {/* <div className="col-lg-6 d-flex justify-content-center">
                                <button className="btn">
                                    <Link to="/about">Read More</Link>
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div class="item">
                    <img src={slide3} alt="slide3"/>
                    <div class="carousel-caption">
                        <div className="content">
                        <h3>Guarding Your Peaceful Nights: Our Fumigation Company is your trusted partner in effective bed bug treatment.</h3>
                            <button className="btn">
                                <Link to="/contact">Contact Us</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;