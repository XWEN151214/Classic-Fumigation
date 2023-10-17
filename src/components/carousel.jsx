import React from "react";
import {useState} from "react";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.jpg";

const startAni = (slideNumber) =>
{
    let slides = document.getElementsByClassName('slides');
    slides[slideNumber].style.animation = null;
    slides[slideNumber].offSetHeight;
    slides[slideNumber].style.animation = 'slide-in 1s 1';
    setSlideNumber(slideNumber);
}


const Carousel = () =>
{
    const [slideNumber, setSlideNumber] = useState(1);
    return (
                <div className="carousel">
                    <div className="container-fluid w-100 p-0">
                        {
                            slideNumber === 0?
                            <div className="slides">
                                <img src={slide1} />
                            </div>
                            :slideNumber === 1?
                            <div className="slides">
                                <img src={slide2} />
                            </div>
                            :slideNumber === 2?
                            <div className="slides">
                              <img src={slide3} />
                            </div>:
                            <></>
                        }
                    </div>
                    <div className="controllers d-flex align-items-center w-100 h-100">
                        <span className="left">
                            <div className="counter d-flex justify-content-center">
                                <div className="count" onClick={() => startAni(0)}>
                                    <h1 className="text-center py-2">1</h1>
                                </div>
                                <div className="count" onClick={() => startAni(1)}>
                                    <h1 className="text-center py-2">2</h1>
                                </div>
                                <div className="count" onClick={() => startAni(2)}>
                                    <h1 className="text-center py-2">3</h1>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
           );
}

export default Carousel;