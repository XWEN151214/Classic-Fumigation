import React from "react";
import "../../App.css";
import image from "../../images/bed-bug-treatment.jpeg"
import { Link } from "react-router-dom";

export default function BedBugTreatment() {
    return (
        <div>
            {/* black slide  */}
            <div className="p-4 p-md-5 mb-0 text-bg-dark header">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">Bed-Bug Treatment</h1>
                </div>
            </div>

            {/* content on the left of page  */}
            <div className="row g-5 m-5 ">
                <div className="col-md-8">
                    {/* <h3 className="pb-4 mb-4 fst-italic border-bottom">
                        From the Firehose
                    </h3> */}

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
                        <p>Most of these elements are styled by browsers with few modifications on our part.</p>
                        <h2>Heading</h2>
                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <h3>Sub-heading</h3>
                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <pre><code>Example code block</code></pre>
                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                    </article>

                    <article className="blog-post">
                        <h2 className="blog-post-title mb-1">Another blog post</h2>
                        <p className="blog-post-meta">December 23, 2020 by <a href="#">Jacob</a></p>

                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <blockquote>
                            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
                        </blockquote>
                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <h3>Example table</h3>
                        <p>And don't forget about tables in these posts:</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Upvotes</th>
                                    <th>Downvotes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Alice</td>
                                    <td>10</td>
                                    <td>11</td>
                                </tr>
                                <tr>
                                    <td>Bob</td>
                                    <td>4</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>Charlie</td>
                                    <td>7</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>Totals</td>
                                    <td>21</td>
                                    <td>23</td>
                                </tr>
                            </tfoot>
                        </table>

                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                    </article>

                    <article className="blog-post">
                        <h2 className="blog-post-title mb-1">New feature</h2>
                        <p className="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>

                        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
                        <ul>
                            <li>First list item</li>
                            <li>Second list item with a longer description</li>
                            <li>Third list item to close it out</li>
                        </ul>
                        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
                    </article>

                    <nav className="blog-pagination" aria-label="Pagination">
                        <a className="btn btn-outline-primary rounded-pill" href="#">Older</a>
                        <a className="btn btn-outline-secondary rounded-pill disabled">Newer</a>
                    </nav>

                </div>
                {/* content on the right of the page  */}
                <div className="col-md-4">
                    <div className="position-sticky" style={{ top: "2rem" }}>
                        <div>
                            <h3 className="taskbar-heading">Our Services</h3>
                            <ul className="taskbar-list">
                                <li className="taskbar-links"><Link>Bed-Bug Treatement</Link></li>
                                <li className="taskbar-links"><Link>Termite Control</Link></li>
                                <li className="taskbar-links"><Link>Mosquito Spray Service</Link></li>
                                <li className="taskbar-links"><Link>Pest Control</Link></li>
                                <li className="taskbar-links"><Link>Coakroaches Control Services</Link></li>
                                <li className="taskbar-links"><Link>Disinfection Services</Link></li>
                                <li className="taskbar-links"><Link>Fumigation Services</Link></li>
                                <li className="taskbar-links"><Link>Sofa Cleaning Services</Link></li>
                                <li className="taskbar-links"><Link>Carpet Cleaning Services</Link></li>
                                <li className="taskbar-links"><Link>Rodent Control</Link></li>
                            </ul>
                        </div>

                        <div className="p-4">
                            <h4 className="fst-italic">Archives</h4>
                            <ol className="list-unstyled mb-0">
                                <li><a href="#">March 2021</a></li>
                                <li><a href="#">February 2021</a></li>
                                <li><a href="#">January 2021</a></li>
                                <li><a href="#">December 2020</a></li>
                                <li><a href="#">November 2020</a></li>
                                <li><a href="#">October 2020</a></li>
                                <li><a href="#">September 2020</a></li>
                                <li><a href="#">August 2020</a></li>
                                <li><a href="#">July 2020</a></li>
                                <li><a href="#">June 2020</a></li>
                                <li><a href="#">May 2020</a></li>
                                <li><a href="#">April 2020</a></li>
                            </ol>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}