import React from "react";
import { useState, useRef, useEffect } from "react";
import test from "../../images/test.webp";

const slide = (middleSlide, setMiddleSlide, activeSlide) =>
{
    activeSlide.current.style.animation = 'slide-out 1s 1';
    setTimeout
    (
        () =>
        {
            activeSlide.current.style.animation = 'slide-in 1s 1';
            setTimeout
            (
                ()=>
                {
                    setMiddleSlide(middleSlide);
                },
                995
            )
        },
        1000
    );
}

const content = [
                    {
                        'p': ' This is not your average product; its a revolutionary experience. From the moment I started using it, I felt a positive shift in my mood and overall outlook.',
                        'name': 'Arsalan',
                        'picture': test
                    },
                    {
                        'p': '  Remember, testimonial texts can vary widely based on the context and the type of product or service being referred to.',
                        'name': 'Mustafa',
                        'picture': test
                    },
                    {
                        'p': ' Wow, I cant believe how much my life has changed since discovering this incredible product! Its like magic in a bottle.',
                        'name': 'Lance Jarvis',
                        'picture': test
                    },
                ]

const Testimonials = () =>
{
    const [middleSlide, setMiddleSlide] = useState(0);
    const activeSlide = useRef(0);
    return(
            <div className="testimonials mt-2 py-2">
                <h3 className="text-center py-2">
                    <i className="fa fa-commenting mx-3"></i>
                    Testimonials
                </h3>
                <div className="container-fluid d-flex justify-content-center align-items-center mt-2 py-4 w-100">
                    <div className="col-lg-6 py-2 mt-2" data-aos="fade-right" data-aos-duration="800">
                        <h5 classname="py-2 px-lg-5">
                            Unlocking Success Stories:
                        </h5> 
                        <h4 className="py-2 px-lg-5">
                            Discover What Our Valued Clients Have to Say About Their Journey with Us!
                        </h4>
                    </div>
                    <div className="content d-flex justify-content-center align-items-center col-lg-6" data-aos="fade-left" data-aos-duration="800">
                        <div className="box justify-content-center align-items-center" ref={activeSlide} key={middleSlide}>
                            <div className="test-img d-flex justify-content-center col-lg-12 py-2 mx-3">
                                <img src={content[middleSlide].picture} />
                                <h4 className="text-center py-2">{content[middleSlide].name}</h4>
                            </div>
                            <div className="test-text col-lg-12">
                                <p className="text-center py-2">
                                    <i className="fa fa-quote-left"></i>
                                    {content[middleSlide].p}
                                </p>
                            </div>
                        </div>
                        <ol class="indicators d-flex justify-content-center mt-3">
                            <i class={middleSlide===0?"fa fa-circle mx-1":"fa fa-circle-o mx-1"} onClick={()=>slide(0, setMiddleSlide, activeSlide)}></i>
                            <i class={middleSlide===1?"fa fa-circle mx-1":"fa fa-circle-o mx-1"} onClick={()=>slide(1, setMiddleSlide, activeSlide)}></i>
                            <i class={middleSlide===2?"fa fa-circle mx-1":"fa fa-circle-o mx-1"} onClick={()=>slide(2, setMiddleSlide, activeSlide)}></i>
                        </ol>
                    </div>
                </div>
            </div>
          );
}

export default Testimonials;