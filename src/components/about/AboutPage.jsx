import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <section className="aboutPage mx-3">
            <div className="row text-center splash">
                <div className="col-sm-12">
                    <h2>I develop websites, create graphics, translate.</h2>
                    <h6>No fancy sliders, my resume is right below. However, please do visit my <Link to="/portfolio">Portfolio</Link> for details about projects I have shared - some of them with complete codebase available publicly.</h6>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-12 mt-4">
                    <h4>Skills</h4>
                    <h6>From creating brand logo to finished multi-language website, it doesn&#39;t get more full-stack than this.</h6>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 my-4">
                    <h5 className="text-center">
                        Back-end
                    </h5>
                    <ul className="dashed">
                        <li>
                            Node.js
                        </li>
                        <li>
                            RESTful APIs with Express.js
                        </li>
                        <li>
                            PostgreSQL + Sequelize ORM
                        </li>
                        {/* <li>
                            Deployment on AWS with docker
                        </li> */}
                        <li>
                            Apache, .htaccess
                        </li>
                        <li>
                            Buying, installing SSL certs, redirecting all traffic to HTTPS
                        </li>
                        <li>
                            WampServer as staging environment
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 my-4">
                    <h5 className="text-center">
                        Front-end
                    </h5>
                    <ul className="dashed">
                        <li>
                            HTML5 + CSS3
                        </li>
                        <li>
                            React.js + Redux + redux-thunk
                        </li>
                        <li>
                            jQuery
                        </li>
                        <li>
                            Bootstrap 2, 3 & 4
                        </li>
                        <li>
                            Minimalist & responsive design
                        </li>
                        <li>
                            Server-rendering with Express.js
                        </li>
                        <li>
                            Jade/Pug templating! I would love to use it everywhere ...but sometimes support is lacking (looking at you, VSCode .jsx + pug``)
                        </li>
                        <li>
                            Sass/Less, I used to work only with Less, but finally switched some time ago
                        </li>
                        <li>
                            Localization with i18next, both server-rendered and client-side
                        </li>
                        <li>
                            Wordpress
                        </li>
                        {/* <li>
                            D3.js, limited experience
                        </li>
                        <li>
                            Anuglar 4, limited experience
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 my-4">
                    <h5 className="text-center">
                        Graphics / Design
                    </h5>
                    <ul className="dashed">
                        <li>
                            Brand design: creating logos, choosing color schemes
                        </li>
                        <li>
                            Typography
                        </li>
                        <li>
                            Prepare photos for web display, i.e. downsize, fix contrast/brightness, resize/crop many photos at once
                        </li>
                        <li>
                            Adobe Illustrator
                        </li>
                        <li>
                            Adobe Photoshop + Lazy Nezumi Pro
                        </li>
                        <li>
                            Adobe InDesign, limited experience, unless it&#39;s a 10+ page booklet, I&#39;ll go with Illustrator every time
                        </li>
                        <li>
                            Google Sketchup + LayOut, rendering with V-Ray for SketchUp
                        </li>
                        {/* <li>
                            Autodesk Maya, limited experience
                        </li> */}
                    </ul>
                </div>
                <div className="col-sm-6 my-4">
                    <h5 className="text-center">
                        Tooling
                    </h5>
                    <ul className="dashed">
                        <li>
                            Testing with Jest
                        </li>
                        <li>
                            ES6 + Babel
                        </li>
                        <li>
                            Webpack + Sass/Less, Pug
                        </li>
                        <li>
                            Gulp.js + Sass/Less, Pug
                        </li>
                        <li>
                            Browsersync + hot-reloading with both gulp.js & Webpack
                        </li>
                        <li>
                            Proper staging environment: custom staging domain pointed at my PC with Wamp/API running and HTTP/API ports forwarded
                        </li>
                        <li>
                            ESlint nowadays, JSCS, JSLint in the past
                        </li>
                        <li>
                            VSCode, tons of extensions
                        </li>
                        <li>
                            Chrome DevTools + React Developer Tools, Redux DevTools, JSONView
                        </li>
                        <li>
                            Github
                        </li>
                        <li>
                            HeidiSQL
                        </li>
                        <li>
                            Postman
                        </li>
                        <li>
                            <a href="https://github.com/jcbvm/i18n-editor">i18n-editor</a> for dealing with translation files
                        </li>
                        <li>
                            PowerShell, local scripting, automating work environent setup: launching dev-servers, multiple VSC windows, HeidiSQL, opening folders etc. Also: &quot;Hey Cortana, launch Project Portfolio.&quot;
                        </li>
                        <li>
                            VeraCrypt 1.22 for responsible handling of sensitive data
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-12 mt-4">
                    <h4>Other Skills</h4>
                    <h6>Nice-to-haves, not necessarily related to programming.</h6>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-11 offset-sm-1 col-md-9 offset-md-1">
                    <ul className="dashed">
                        <li>
                            Translating websites as well as legal and technical documents, mostly Polish &lt;&gt; US English
                        </li>
                        <li>
                            Full professional proficiency in Russian, especially spoken; Polish native speaker
                        </li>
                        <li>
                            Google Sheets, advanced JS scripting in multi-sheet spreadsheets; creating future application mock-ups to establish desired functionality with the customer; writing scripts to be run in real-time for visual data simulation
                        </li>
                        <li>
                            Profesionally preparing long texts for print or web publication in PDF format using MS Word, including two-column multi-language documents with aligned paragraphs and translator comments
                        </li>
                        <li>
                            Google AdWords, Google Analytics
                        </li>
                        <li>
                            Python, a couple of read/write scripts for automation here and there, familiar with the language
                        </li>
                        <li>
                            Shooting regular films and time-lapses, uploading to YouTube after basic postprocessing
                        </li>
                        <li>
                            Decent hardware knowledge, ability to set up <a href="/static/images/GPUminer.jpg">crypto-currency mining rigs on custom-made racks</a> in no time!
                        </li>
                        <li>
                            B category (EU) driving license
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row text-center mt-5">
                <div className="col-sm-12">
                    <h4>Work Experience</h4>
                    <h6>Over 6 years of HTML, CSS, JavaScript & graphic design experience. Long history of successful product deliveries.</h6>
                    <hr />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-sm-11 offset-sm-1 col-md-9 offset-md-1">
                    <div className="row">
                        <div className="col-sm-6">
                            <h6>Full Stack Web Developer / Translator</h6>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                            <span>May 2016 - Present</span>
                        </div>
                    </div>
                    <span className="font-italic">Hadron Design Piotr Piech</span>
                    <ul className="dashed">
                        <li>
                            Deliver multi-language webpages and webapps for corporate clients
                        </li>
                        <li>
                            Create successful brands from the ground up
                        </li>
                        <li>
                            Design and oversee printing of typography products
                        </li>
                        <li>
                            Buy hosting, register domains for customers, create e-mail accounts
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-11 offset-sm-1 col-md-9 offset-md-1">
                    <div className="row">
                        <div className="col-sm-6">
                            <h6>Web Developer / Graphic Designer / Interpreter / Translator</h6>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                            <span>Oct 2014 - December 2017</span>
                        </div>
                    </div>
                    <span className="font-italic">Arbor Sp. z o. o.</span>
                    <ul className="dashed">
                        <li>
                            Developed and kept updated company website, both an old one and the current one; responsible for hosting administration
                        </li>
                        <li>
                            Designed and oversaw printing/installation of typography products, including, but not limited to: business cards, road signs, posters, leaflets, brochures, stamps, full-page magazine ads, car/truck brand graphics
                        </li>
                        <li>
                            Designed newly acquired sawmill&#39;s logo, together with color scheme and business cards
                        </li>
                        <li>
                            During business trips abroad and foreign customers&#39; visits interpreted talks to and from Russian, English, Polish
                        </li>
                        <li>
                            Technical translations of biomass/woodworking industry texts, mostly Polish &lt;&gt; US English and from Russian, shorter texts to Russian
                        </li>
                        <li>
                            Created detailed CCTV coverage visualization using SketchUp and Adobe Illustrator, oversaw installation of the CCTV system
                        </li>
                        <li>
                            Took photos and short films for marketing purposes, for use on websites and printed materials
                        </li>
                        <li>
                            Created and maintained 20+ employees&#39; email accounts on several domains; configured MS Office Outlook for each account
                        </li>
                        <li>
                            Provided occasional technical support for laptops and PCs as well as network hardware, restarting local Windows Server, router, switch
                        </li>
                        <li>
                            Chose and ordered new hardware for employees
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-sm-11 offset-sm-1 col-md-9 offset-md-1">
                    <div className="row">
                        <div className="col-sm-6">
                            <h6>Web Developer / Graphic Designer</h6>
                        </div>
                        <div className="col-sm-6 text-sm-right">
                            <span>Aug 2012 - May 2016</span>
                        </div>
                    </div>
                    <span className="font-italic">Freelance</span>
                    <ul className="dashed">
                        <li>
                            Delivered webpages, complete with brand graphic design
                        </li>
                        <li>
                            Designed and printed typography products
                        </li>
                        <li>
                            Wrote ad headlines, compiled tag lists and conducted Google AdWords campaigns for customers
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default AboutPage;