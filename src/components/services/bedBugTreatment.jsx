import { useEffect } from "react";
import React from "react";
import "../../App.css";
import "../../css/media.css"
import image from "../../images/bed-bug-treatment.jpeg"
import { Link } from "react-router-dom";
import Contact from "../home/contact";
import image1 from "../../images/bed-bug-1.jpeg"
import image2 from "../../images/bed-bug-2.jpeg"
import image3 from "../../images/bed-bug-3.jpeg"

export default function BedBugTreatment() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // }, []);


    const Services = [{ id: 1, link: "bed-bug-treatment", title: "Bed-Bug Treatment" },
    { id: 2, link: "carpet-cleaning-services", title: "Carpet Cleaning Service" },
    { id: 3, link: "coakroaches-control-services", title: "Coackroaches Control Service" },
    { id: 4, link: "disinfection-services", title: "Disinfection Services" },
    { id: 5, link: "fumigation-services", title: "Fumigation Services" },
    { id: 6, link: "mosquito-spray-service", title: "Mosquito Spray Service" },
    { id: 7, link: "pest-control", title: "Pest Control" },
    { id: 8, link: "rodent-control", title: "Rodent Control" },
    { id: 9, link: "sofa-cleaning-services", title: "Sofa Cleaning Services" },
    { id: 10, link: "termite-control", title: "Termite Control" }]


    return (
        <div>
            {/* black slide  */}
            <div className="mb-0 text-bg-dark header">
                <div className="container-fluid header-cover">
                    <div className="col-md-6 px-0 d-flex align-items-center justify-content-center w-100 h-100 header-heading">
                        <h1 className="display-4 py-2 text-center">Bed-Bug Treatment Services</h1>
                    </div>
                </div>
            </div>

            {/* content on the left of page  */}
            <div className="row g-5 mx-5 mt-3 mb-5">
                <div className="col-md-8 mb-5">

                    <article className="blog-post">
                        <h2 className="blog-post-title mb-1">BED BUG TREATMENT</h2>
                        
                        <img src={image} alt="" className="img-fluid mb-4 mt-4"/>
                        

                        <h2>Blockquotes</h2>
                        <p>This is an example blockquote in action:</p>
                        <blockquote className="blockquote">
                            <p>Quoted text goes here.</p>
                        </blockquote>
                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <h3>Example lists</h3>
                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>
                        <ul>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ul>
                        <p>And this is an ordered list:</p>
                        <ol>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ol>
                        <p>And this is a definition list:</p>
                        <dl>
                            <dt>HyperText Markup Language (HTML)</dt>
                            <dd>The language used to describe and define the content of a Web page</dd>
                            <dt>Cascading Style Sheets (CSS)</dt>
                            <dd>Used to describe the appearance of Web content</dd>
                            <dt>JavaScript (JS)</dt>
                            <dd>The programming language used to build advanced Web sites and applications</dd>
                        </dl>
                        <h2>Inline HTML elements</h2>
                        <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
                        <ul>
                            <li><strong>To bold text</strong>, use <code className="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
                            <li><em>To italicize text</em>, use <code className="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>
                            <li>Abbreviations, like <abbr title="HyperText Markup Language">HTML</abbr> should use <code className="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code className="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
                            <li>Citations, like <cite>— Mark Otto</cite>, should use <code className="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
                            <li><del>Deleted</del> text should use <code className="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code className="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
                            <li>Superscript <sup>text</sup> uses <code className="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code className="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>
                        </ul>


                        <h3>Service Quality</h3>
                        <p>Affordable bed bug treatment is available in Karachi from A1 Fumigations. To get rid of them, we spray for bed bugs. We cure you for bed bugs using the most up-to-date procedures and techniques. Bed bugs are nocturnal insects that resemble ants and cockroaches. When you are resting at night, they take your blood. They dwell in such secrecy that you cannot first find them.</p>
                        <p>Although bed bugs are small, they can pose serious issues for you and your things in your house. Before an infestation gets out of control and you have to toss away all of your furniture and start over with new items, it’s critical to act quickly if you believe bed bugs are in your house. Colors of bed bugs can vary.</p>
                        <p>They are level and round in form. Their bites can cause a variety of health problems, including skin rashes, allergies, and cognitive consequences. Finding the signs of a health issue is difficult and may take some time. At first, you’ll have fatigue and a fever, but you’ll quickly learn that you have the illness.</p>
                        <p>Bed bug removal is a multi-step process. People in contemporary society frequently try home treatments for it, but they are useless. It’s challenging to select fumigators and have faith in them. You only need to be aware of their background and personnel.</p>
                        <p>Booking a fumigator for your disinfection services is crucial when you have all the necessary information, since postponing the fumigation procedure is an issue. You don’t need to be concerned about your bed insect issue since A1 fumigation is here to help you with it. In Karachi, we provide bed bug treatment. We have a group of skilled workers that don’t utilize chemicals that are harmful to your health. With bed insects on a steady rise, it is becoming difficult for you to look for a good insects cleaning service provider. But with our best bed bug treatment services in Karachi, you don’t have to worry about such problems anymore. We are known as one of the leading providers of superior quality and affordable pest control solutions. The special thing about us is that we make sure that our customers get what they ask for.</p>
                        <p>Since A1 Fumigations has been offering fumigation services for over 10 years, they are well-known in the industry. We have hundreds of happy customers who have used them again for their fumigation services. We are professionals in a variety of services, including bed bugs, termites, and disinfection. For more than 10 years, A1 Fumigations has offered these services; we train our staff using the most recent tools and techniques. You will be delighted to work with them because of their ability. Your health is our first priority; therefore, we constantly develop fresh, simple, and cutting-edge concepts that priorities the health of your family and children.</p>
                        <p>Large infestations may be successfully treated with bed bug sprays or foggers, but only when combined with heat therapy. Bug bombs might undoubtedly be useful if you’re attempting to eradicate bed bugs on your own. These sprays’ active components, such as pyrethrin’s, will eliminate tiny insect populations. Your life might quickly become terrible if you have a bed insect infestation. Not only can the finest bed bug treatment get rid of them, but it may also aid in avoiding further infestations. Here are some suggestions for eliminating bed bugs and avoiding further issues. Identification of a condition is the first step in bed bug prevention. Finding these small bloodsuckers on their own is insufficient since they frequently coexist with other pests like cockroaches or fleas, making it challenging to distinguish between one pest species and another. Before beginning bed bug treatment services, it is crucial to have a full examination performed by a professional to determine what sort of insect issue you have.</p>
                        <h3>IS IT DIFFICULT TO GET RID OF BED BUGS?</h3>
                        <p>Getting rid of bed bugs is a whole process. Commonly, people of our societies do home remedies for that, but they are of no use. Choosing fumigators and trusting them is difficult. All you need to know is about their experience and their workers.</p>
                        <p>When you have all the information that is required when hiring a fumigator, then it is essential to book them for your disinfection  services as delaying the fumigation process is a problem. You do not have to worry about your bed bug problem, As A1 fumigation are here to assist you with this. We offer bed bug treatment in Karachi. We have a team of experienced and trained labors who use not dangerous chemicals for your health. Avail benefit from our knowledge and get freedom from bed bugs. We have our offices in Karachi, Islamabad, Faisalabad, and Quetta.</p>
                        <h3>Best Bed Bugs Treatment Services In Karachi:</h3>
                        <p>With bed insects on a steady rise, it is becoming difficult for you to look for a good insects cleaning service provider. But with our best bed bug treatment services in Karachi, you don’t have to worry about such problems anymore. We are known as one of the leading providers of superior quality and affordable pest control solutions.</p>
                        <p>The special thing about us is that we make sure that our customers get what they ask for.</p>
                        <h3>WHY A1 FUMIGATIONS?</h3>
                        <p>A1 fumigations have been providing fumigation services for more than ten years, and they have a known name in the market. We have hundreds of satisfied clients who chose them over and over again for their fumigation services. . We are experts in services like Bed bugs, termites, disinfection and many more. A1 fumigations have been providing these services for more than ten years; we train our workers according to the new technology and methods. They are so skilled that you will be glad to work with them. Your health is our priority; that is why we always come up with new, easy and modern ideas keeping your family and your children’s health superiority. <br /><br /> So you will be satisfied with our services and will not repent hiring us for your bugs treatment  services in Karach</p>
                        <h3>Best Bed Bug Sprays & Foggers:</h3>
                        <p>Using a bed bug spray or fogger can be effective against large infestations, but it should only be used in conjunction with heat treatment. If you’re trying to get rid of bed bugs on your own, bug bombs can definitely help.</p>
                        <p>The active ingredients in these sprays (like pyrethrins) will kill off small populations of bugs.</p>
                        <h3>Effective Bed Bug Control & Prevention:</h3>
                        <p>An infestation of bed bugs can rapidly take over your life and make you miserable. The best bed bug treatment can not only get rid of them but help prevent a future infestation. Here are some tips for getting rid of bed bugs and preventing future problems.</p>
                        <p>The first step in bed bug control is identifying an affliction. Finding these tiny blood-sucking insects alone isn’t enough; often, they will appear alongside other pests like cockroaches or fleas, meaning it may be difficult to discern between one type of pest and another. A thorough inspection by an expert is important to confirm what kind of insect problem you have before proceeding with bed bug treatment services.</p>

                        <div className="image-container">
                            <img src={image1} alt="" className="image-fluid"/>
                            <img src={image2} alt="" className="image-fluid"/>
                            <img src={image3} alt="" className="image-fluid"/>
                        </div>
                    </article>
                </div>


                {/* content on the right of the page  */}
                <div className="col-md-4 taskbar py-5">
                    <div className="position-sticky " style={{ top: "5rem", bottom: "20px" }}>
                        <div className="taskbar-link-list">
                            <h3 className="taskbar-heading">Our Services</h3>
                            <ul className="taskbar-list">
                                {Services.map((service) => (
                                    <li className={`taskbar-links${service.id === 1 ? "-active" : ""}`} key={service.id}><Link to={`/services/${service.link}`}>{service.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container-fluid px-5 py-2" id="contact-heading">
                <h4>SCHEDULE A FREE APPOINTMENT WITH US AND GET A FREE QUOTE AND ESTIMATE. FOR APPOINTMENT BOOKING, CALL OR EMAIL US!</h4>
            </div>
            <Contact />
        </div>
    );
}