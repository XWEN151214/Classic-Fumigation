import React from "react";
import { useState, useEffect } from "react";
import test from "../../images/test.webp";

const next = (middleSlide, setMiddleSlide) => {
    middleSlide + 1 < content.length
        ? setMiddleSlide(middleSlide + 1)
        : setMiddleSlide(middleSlide);
}

const prev = (middleSlide, setMiddleSlide) => {
    middleSlide - 1 >= 0
        ? setMiddleSlide(middleSlide - 1)
        : setMiddleSlide(middleSlide);
}

const content = [
    {
        'p': 'This is not your average product; its a revolutionary experience. From the moment I started using it, I felt a positive shift in my mood and overall outlook.',
        'name': 'Lance Jarvis',
        'picture': test
    },
    {
        'p': 'Remember, testimonial texts can vary widely based on the context and the type of product or service being referred to.',
        'name': 'Lance Jarvis',
        'picture': test
    },
    {
        'p': 'Wow, I cant believe how much my life has changed since discovering this incredible product! Its like magic in a bottle.',
        'name': 'Lance Jarvis',
        'picture': test
    },
]

const Testimonials = () => {
    const [middleSlide, setMiddleSlide] = useState(0);
    return (
        <div className="testimonials mt-4">
            <h3 className="text-center py-2">Testimonials</h3>
            <div className="controllers container-fluid d-flex justify-content-center align-items-center">
                <span className="left">
                    <i className="fa fa-arrow-circle-left" onClick={() => prev(middleSlide, setMiddleSlide)}></i>
                </span>
                <span className="right">
                    <i className="fa fa-arrow-circle-right" onClick={() => next(middleSlide, setMiddleSlide)}></i>
                </span>
            </div>
            <div className="slider container-fluid d-flex justify-content-center px-4" data-aos="fade-right" data-aos-duration="1100">
                <div className="testimonial-box box d-flex justify-content-center align-items-center p-0 mx-3">
                    <div className="content d-flex justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="text py-2">
                                <p className="text-center py-2 px-3">
                                    &quot; {content[middleSlide].p}
                                </p>
                            </div>
                            <div className="social-links d-flex justify-content-center">
                                <li className="social-link d-flex justify-content-center align-items-center mx-3">
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="social-link d-flex justify-content-center align-items-center mx-3">
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="social-link d-flex justify-content-center align-items-center mx-3">
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image d-flex justify-content-center">
                                <img src={content[middleSlide].picture} />
                            </div>
                            <div className="details py-1">
                                <p className="text-center py-2">{content[middleSlide].name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;