import React from "react";
import { useState } from "react";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.jpg";
import { Link } from "react-router-dom";

const startAni = (slideNumber, setSlideNumber) =>
{
    let slides = document.getElementsByClassName('slides');
    slides.item(0).style.animation = null;
    slides.item(0).style.animation = 'slide-in 1s 1';
    console.log(slides.item(0).style.animation)
    setSlideNumber(slideNumber);
}

const Carousel = () => {
    const [slideNumber, setSlideNumber] = useState(0);
    return (
        <div className="carousel">
            <div className="controllers d-flex align-items-center h-100">
                <span className="left">
                    <div className="counter d-flex justify-content-center">
                        <div className="count" onClick={() => startAni(0, setSlideNumber)}>
                            <h1 className="text-center py-2">1</h1>
                        </div>
                        <div className="count" onClick={() => startAni(1, setSlideNumber)}>
                            <h1 className="text-center py-2">2</h1>
                        </div>
                        <div className="count" onClick={() => startAni(2, setSlideNumber)}>
                            <h1 className="text-center py-2">3</h1>
                        </div>
                    </div>
                </span>
            </div>
            <div className="container-fluid w-100 p-0">
                {
                    slideNumber === 0 ?
                        <div className="slides" style={{backgroundImage:`url(${slide1})`}}> 
                            <div className="container-fluid d-flex justify-content-center h-100 w-100">
                                <div className="header-content">
                                    <h3 class="py-2">Welcome To Classic Fumigation</h3>
                                    <h6 className="py-2">where your peace of mind is our priority</h6>
                                    <button className="btn"><Link to="/about">About</Link></button>
                                </div>
                            </div>
                        </div>
                    : slideNumber === 1 ?
                        <div className="slides" style={{backgroundImage:`url(${slide2})`}}>
                            <div className="container-fluid d-flex justify-content-center h-100 w-100">
                                <div className="header-content">
                                    <h4 class="py-2">As a leading force in professional fumigation services,<br /> we take pride in safeguarding homes and <br /> businesses with unmatched expertise, cutting-edge technology, <br />and a commitment to excellence.</h4>\
                                    <button className="btn"><Link to="/about">Contact Us</Link></button>
                                </div>
                            </div>
                        </div>
                    : slideNumber === 2 ?
                        <div className="slides" style={{backgroundImage:`url(${slide3})`}}>
                            <div className="container-fluid d-flex justify-content-center h-100 w-100">
                                <div className="header-content" style={{marginLeft:'10%'}}>
                                    <h4 class="py-2">We don't just eliminate pests;<br /> we create environments that foster health, comfort, and tranquility.<br /> Join us in the pursuit of pest-free living because your well-being matters.</h4>
                                </div>
                            </div>
                        </div> 
                    :<></>
                }
            </div>
        </div>
    );
}

export default Carousel;